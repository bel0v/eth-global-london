import os
from dotenv import load_dotenv
import requests
import base64
from utils import remove_non_english
load_dotenv()
from utils import logger

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

def get_score(image:str, event_prompt:str) -> int:
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