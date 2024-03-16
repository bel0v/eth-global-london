import os
from dotenv import load_dotenv
load_dotenv()
# PATH = "D:\.cache\huggingface\\"
# #os.environ['TRANSFORMERS_CACHE'] = PATH
# os.environ['HF_HOME'] = PATH
# os.environ['HF_DATASETS_CACHE'] = PATH
# os.environ['TORCH_HOME'] = PATH
import requests
import base64
from utils import remove_non_english
from PIL import Image
from io import BytesIO 
from transformers import AutoTokenizer, AutoModel, BlipProcessor, BlipForConditionalGeneration, GPT2Tokenizer, GPT2Model, AutoProcessor, VipLlavaForConditionalGeneration
import torch
from sklearn.metrics.pairwise import cosine_similarity
from utils import logger
from gradio_client import Client
logger.info(f'HF Cache: {os.environ.get("HF_HOME")}')


DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
#DEVICE = 'cpu'

def LlavaModel():
    model_id = "llava-hf/vip-llava-7b-hf"

    question = "What are these?"
    prompt = f"A chat between a curious human and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the human's questions.###Human: <image>\n{question}###Assistant:"

    kwargs = {
        "prompt": prompt,
    }
    model = VipLlavaForConditionalGeneration.from_pretrained(
        model_id, 
        torch_dtype=torch.float16, 
        low_cpu_mem_usage=True, 
    ).to(DEVICE)

    processor = AutoProcessor.from_pretrained(model_id)
    return processor, model, kwargs

def BLIPModel():
    kwargs = {}
    processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
    
    logger.info("Preparing image captioning mode")
    model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large")
    model = model.to(DEVICE)
    return processor, model, kwargs

def image_captioning_api_model(image):
    API_URL = "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning"
    headers = {"Authorization": f"Bearer {os.environ.get('IMAGE_CAPTIONING_API_KEY')}"}

    def query(image):
        response = requests.post(API_URL, headers=headers, data=image)
        return response.json()

    logger.info("Processing image")
    image = base64.b64decode(image)
    output = query(image)
    return output

def semantic_similarity_api_model(image_caption, event_prompt):
    API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"
    headers = {"Authorization": f"Bearer {os.environ.get('IMAGE_CAPTIONING_API_KEY')}"}

    def query(payload):
        response = requests.post(API_URL, headers=headers, json=payload)
        return response.json()

    logger.info("Processing image")
    output = query({
        "inputs": {
            "source_sentence": event_prompt,
            "sentences": [
                image_caption
            ]
        }
    })
    return output   

def caption_image_api(image):
    client = Client("https://llava.hliu.cc/")


    result = client.predict(
        {"foo":"bar"},	# Dict[Any, Any] (any valid json) in 'parameter_34' Json component
        api_name="/load_demo"
    )
    print(result)
    result = client.predict(
		"llava-v1.6-34b",	# Literal['llava-v1.6-34b']  in 'parameter_10' Dropdown component
		0.2,	# float (numeric value between 0.0 and 1.0) in 'Temperature' Slider component
		0.7,	# float (numeric value between 0.0 and 1.0) in 'Top P' Slider component
		1024,	# float (numeric value between 0 and 1024) in 'Max output tokens' Slider component
		api_name="/http_bot"
    )
    result = client.predict(
        "What is happening here",	# str  in 'parameter_3' Textbox component
        str(image),	# filepath  in 'parameter_11' Image component
        "Crop",	# Literal['Crop', 'Resize', 'Pad', 'Default']  in 'Preprocess for non-square image' Radio component
        api_name="/add_text"
    )
    print(result)
    caption = ""
    return caption

def caption_image(image, model, max_length=1024):
    # Processing image
    # Need to get image from API (Base64)
    logger.info("Processing image")
    image = base64.b64decode(image)
    raw_image = Image.open(BytesIO(image)).convert('RGB')

    # unconditional image captioning
    processor, model, kwargs = model()
    inputs = processor(raw_image, return_tensors="pt", **kwargs).to(DEVICE)

    out = model.generate(**inputs, max_length=max_length, max_new_tokens=1024)
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
    logger.info(f'Comparing prompt "{image_caption}" to "{event_prompt}"')
    #Encode query and docs
    docs = [event_prompt, image_caption]
    query_emb = encode(event_prompt)
    doc_emb = encode(docs)

    #Compute dot score between query and all document embeddings
    scores = torch.mm(query_emb, doc_emb.transpose(0, 1))[0].cpu().tolist()
    logger.debug(f"Scores {scores}")
    normalized_scores = [score/scores[0] for score in scores]
    logger.debug(f"Normalized scores: {normalized_scores}")
    #Combine docs & scores
    doc_score_pairs = list(zip(docs, normalized_scores))

    #Sort by decreasing score
    doc_score_pairs = sorted(doc_score_pairs, key=lambda x: x[1], reverse=True)

    #Output passages & scores


    for doc, score in doc_score_pairs:
        logger.debug(f"{doc}:{score}")

    logger.info(f"Similarity score is: {doc_score_pairs[-1][1]}")
    return doc_score_pairs[-1][1]

def get_similarity_score_cosine(image_caption, event_prompt):
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
    logger.info(f'Comparing prompt "{image_caption}" to "{event_prompt}"')
    #Encode query and docs
    docs = [event_prompt, image_caption]
    query_emb = encode(event_prompt)
    doc_emb = encode(docs)

    #Compute dot score between query and all document embeddings
    scores = []
    for i in range(doc_emb.shape[0]):
        scores.append(torch.nn.functional.cosine_similarity(query_emb, doc_emb[i], dim=1))
    logger.debug(f"Scores {scores}")

    #Combine docs & scores
    doc_score_pairs = list(zip(docs, scores))

    #Sort by decreasing score
    doc_score_pairs = sorted(doc_score_pairs, key=lambda x: x[1], reverse=True)

    #Output passages & scores


    for doc, score in doc_score_pairs:
        logger.debug(f"{doc}:{score}")

    logger.info(f"Similarity score is: {doc_score_pairs[-1][1]}")
    return doc_score_pairs[-1][1][0]

def get_similarity_score_cosine_L(image_caption, event_prompt):
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

def get_score_local(image:str, event_prompt:str, model=BLIPModel, scoring_func=get_similarity_score_cosine) -> int:
    image_caption = caption_image(image=image, model=model)
    similarity_score = scoring_func(
        image_caption=image_caption,
        event_prompt=event_prompt,
    )
    return similarity_score

def get_score(image:str, event_prompt:str, model=BLIPModel, scoring_func=get_similarity_score_cosine) -> int:
    image_caption = image_captioning_api_model(image=image)
    image_caption = image_caption[0]["generated_text"]
    similarity_score = semantic_similarity_api_model(
        image_caption=image_caption,
        event_prompt=event_prompt
    )
    return similarity_score[0]

def is_relevant(score, threshold=0.7):
    if score <= threshold:
        return False

    return True

if __name__ == "__main__":
    from pathlib import Path

    CWD = Path.cwd()
    logger.debug(CWD)
    IMAGE_DIR = CWD / "test_images"
    image = "apples.jpg"
    logger.info("Opening image")
    with open(IMAGE_DIR / image, 'rb') as f:
        image = base64.b64encode(f.read())

    # logger.info("Generating caption")
    # image_caption = caption_image(image, BLIPModel)

    # image_caption = image_captioning_api_model(image)

    # print(image_caption[0])

    PROMPT = "a person riding a horse"
    # # test_prompt = "a soccer player kicking a ball"
    # # similarity = get_similarity_score_cosine(
    # #     image_caption=test_prompt,
    # #     event_prompt=PROMPT
    # # )
    # similarity = semantic_similarity_api_model(image_caption[0]["generated_text"], PROMPT)
    # # # print(similarity)
        
    similarity = get_score(image, PROMPT)
    logger.info(f"Get score similarity: {similarity}")


    #caption_image_api(IMAGE_DIR / image)