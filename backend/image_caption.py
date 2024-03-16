import requests
import base64
from utils import remove_non_english
from PIL import Image
from io import BytesIO 
from transformers import AutoTokenizer, AutoModel, BlipProcessor, BlipForConditionalGeneration, GPT2Tokenizer, GPT2Model
import torch
from sklearn.metrics.pairwise import cosine_similarity
from utils import logger

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def caption_image(image, max_length=40):
    # Loading model
    processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
    
    logger.info("Preparing image captioning mode")
    model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large")
    model = model.to(DEVICE)
    # Processing image
    # Need to get image from API (Base64)
    #img_url = 'https://storage.googleapis.com/sfr-vision-language-research/BLIP/demo.jpg' 
    logger.info("Processing image")
    image = base64.b64decode(image)
    raw_image = Image.open(BytesIO(image)).convert('RGB')

    # conditional image captioning
    # text = "a photography of"
    # inputs = processor(raw_image, text, return_tensors="pt").to("cuda")

    # out = model.generate(**inputs)
    # print(processor.decode(out[0], skip_special_tokens=True))

    # unconditional image captioning
    inputs = processor(raw_image, return_tensors="pt").to(DEVICE)

    out = model.generate(**inputs, max_length=max_length, max_new_tokens=200)
    caption = processor.decode(out[0], skip_special_tokens=True)
    
    return caption

# Once we have caption, we need to compare it to original caption
def get_similarity_score(image_caption, event_prompt):
    def cls_pooling(model_output):
        return model_output.last_hidden_state[:,0]

    #Encode text
    def encode(texts):
        # Tokenize sentences
        encoded_input = tokenizer(texts, padding=True, truncation=True, return_tensors='pt')

        # Compute token embeddings
        with torch.no_grad():
            model_output = model(**encoded_input, return_dict=True)

        # Perform pooling
        embeddings = cls_pooling(model_output)

        return embeddings

    # Load model from HuggingFace Hub
    tokenizer = AutoTokenizer.from_pretrained("sentence-transformers/msmarco-distilbert-base-tas-b")
    model = AutoModel.from_pretrained("sentence-transformers/msmarco-distilbert-base-tas-b")
    logger.info(f"Comparing prompt {image_caption} to {event_prompt}")
    #Encode query and docs
    query_emb = encode(event_prompt)
    doc_emb = encode([image_caption])

    #Compute dot score between query and all document embeddings
    scores = torch.mm(query_emb, doc_emb.transpose(0, 1))[0].cpu().tolist()

    #Combine docs & scores
    doc_score_pairs = list(zip([image_caption], scores))

    #Sort by decreasing score
    doc_score_pairs = sorted(doc_score_pairs, key=lambda x: x[1], reverse=True)

    #Output passages & scores
    for doc, score in doc_score_pairs:
        print(score, doc)

def get_similarity_score_cosine(image_caption, event_prompt):
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
    model = GPT2Model.from_pretrained("gpt2", output_hidden_states=True).to(DEVICE)
    logger.info(f"Comparing prompt {image_caption} to {event_prompt}")
    # Tokenize and encode the sentences
    image_caption_encoded = tokenizer.encode(image_caption, return_tensors="pt").to(DEVICE)
    event_prompt_encoded = tokenizer.encode(event_prompt, return_tensors="pt").to(DEVICE)

    # Get the embeddings for the last layer of the model
    with torch.no_grad():
        image_caption_embedding = model(image_caption_encoded)
        event_prompt_embedding = model(event_prompt_encoded)

    # Extract the last layer hidden states
    image_caption_hidden = image_caption_embedding.hidden_states[-1].squeeze(0).cpu()
    event_prompt_hidden = event_prompt_embedding.hidden_states[-1].squeeze(0).cpu()

    # Calculate the average of hidden states for each sentence
    image_caption_avg_hidden = torch.mean(image_caption_hidden, dim=0).unsqueeze(0).cpu()
    event_prompt_avg_hidden = torch.mean(event_prompt_hidden, dim=0).unsqueeze(0).cpu()

    # Calculate cosine similarity
    # similarity_score = torch.nn.functional.cosine_similarity(
    #     image_caption_avg_hidden.mean(dim=0), event_prompt_avg_hidden.mean(dim=0), dim=0
    # )
    similarity_score = cosine_similarity(image_caption_hidden, event_prompt_hidden)[0][0]
    print("Similarity score:", similarity_score)
    return similarity_score

def get_score(image:str, event_prompt:str) -> int:
    image_caption = caption_image(image=image)
    similarity_score = get_similarity_score(
        image_caption=image_caption,
        event_prompt=event_prompt,
    )
    return similarity_score

def is_relevant(score, threshold):
    if score <= threshold:
        return False

    return True

if __name__ == "__main__":
    from pathlib import Path

    CWD = Path.cwd()
    logger.debug(CWD)
    IMAGE_DIR = CWD / "test_images"
    image = "Ronaldo-Goals.jpg"
    logger.info("Opening image")
    with open(IMAGE_DIR / image, 'rb') as f:
        image = base64.b64encode(f.read())

    logger.info("Generating caption")
    image_caption = caption_image(image)


    print(image_caption)

    PROMPT = "A soccer player kicking a soccer ball"

    similarity = get_similarity_score(
        image_caption=PROMPT,
        event_prompt=PROMPT
    )

    print(similarity)