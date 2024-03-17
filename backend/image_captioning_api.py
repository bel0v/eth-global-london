import os
from dotenv import load_dotenv
import requests
import base64
load_dotenv()
from utils import logger
import time
from gradio_client import Client, file
SEMANTIC_BACKOFF=os.environ.get("SEMANTIC_BACKOFF",2)
SEMANTIC_RETRIES=os.environ.get("SEMANTIC_RETRIES",10)

def image_captioning_api_model(image, model_url="VitGPT", retries=5, backoff=0.5):
    models = {
        "VitGPT":"https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning"
    }
    if model_url in models:
        API_URL = models[model_url]
    else:    
        API_URL = model_url

    headers = {"Authorization": f"Bearer {os.environ.get('HUGGING_FACE_API_KEY')}"}

    def query(image):
        response = requests.post(API_URL, headers=headers, data=image)
        return response.json()

    logger.info("Processing image caption")
    image = base64.b64decode(image)
    for i in range(retries):
        output = query(image)
        if not 'error' in output:
            break
        logger.debug(f"Image captioning failed, retrying in {backoff*i}s")
        time.sleep(backoff*i)
    logger.info(f"Image captioning suceeded.\n Output is {output}")
    return output

def semantic_similarity_api_model(image_caption, event_prompt, model_url="MiniLM", retries=5, backoff=2):
    models = {
        "MiniLM":"https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
        "MPNETv2":"https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2"
    }
    if model_url in models:
        API_URL = models[model_url]
    else:    
        API_URL = model_url
    
    headers = {"Authorization": f"Bearer {os.environ.get('HUGGING_FACE_API_KEY')}"}

    def query(payload):
        response = requests.post(API_URL, headers=headers, json=payload)
        return response.json()

    logger.info("Processing image for semantic similarity")
    for i in range(retries):
        output = query({
            "inputs": {
                "source_sentence": event_prompt,
                "sentences": [
                    image_caption
                ]
            }
        })
        if not 'error' in output:
            break
        logger.debug(f"Semantic similarity failed, retrying in {backoff*i}s")
        time.sleep(backoff*i)
    logger.info(f"Semantic similarity suceeded. Output is {output}")
    return output 

def get_score(image:str, event_prompt:str) -> int:
    image_caption = image_captioning_api_model(image=image)
    logger.info(f"Response from image captioning {image_caption}")
    try:
        image_caption = image_caption[0]["generated_text"]
    except KeyError as e:
        logger.error("There was an error in the image caption generation")
        raise e
    similarity_score = semantic_similarity_api_model(
        image_caption=image_caption,
        event_prompt=event_prompt
    )
    try:
        if similarity_score[0] < 0:
            return 0.001
        return similarity_score[0]
    except (KeyError, IndexError) as e:
        logger.error(f"Error with generating similarity score, similarity score is: {similarity_score}")
        raise e

def is_relevant(score, threshold=0.25):
    if score <= threshold:
        return False

    return True