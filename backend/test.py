import requests
import json
from pathlib import Path
import base64
from utils import logger
import logging
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8000/getScore/"
PROMPT = "People playing football"
CWD = Path.cwd()
IMAGE_DIR = CWD / "test_images"
image = "corner-kick.jpg"
image_str = "image.txt"

with open(IMAGE_DIR / image, 'rb') as f:
    image = base64.b64encode(f.read())

with open(IMAGE_DIR / image_str, 'rb') as f:
    image_string = f.read()

logger.debug(f"Image loaded {image[-50::]}")
logger.debug(f"Image string loaded {image_string[-50::]}")
#image = image_string
image = image.decode("utf-8")
logger.debug(image[0:50])


images = {
  "eventPrompt": PROMPT,
  "userImage": image,
}

# with open('testjson.json', 'r') as j:
#     images = dict(json.loads(j.read()))

logger.info("Sending request")
#logger.info(str(images))
response = requests.post(
    URL,
    json=images
)
logger.info("Done")

#logger.info(response.json())
#logger.info(f"Score: {dict(response.json())['score']}")
logger.info(f"Keys: {dict(response.json())}")
logger.info(f"IsRelavent: {dict(response.json())['isRelevant']}")
logger.info(f"score: {dict(response.json())['score']}")