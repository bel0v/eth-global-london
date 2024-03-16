import requests
import json
from pathlib import Path
import base64
from utils import logger

URL = "http://localhost:8000/getScore/"
PROMPT = "soccer player passing the ball"
CWD = Path.cwd()
IMAGE_DIR = CWD / "test_images"
image = "corner-kick.jpg"

with open(IMAGE_DIR / image, 'rb') as f:
    image = base64.b64encode(f.read())

image = image.decode("utf-8")


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
logger.info(f"Keys: {dict(response.json()).keys()}")
logger.info(f"IsRelavent: {dict(response.json())['isRelevant']}")
logger.info(f"score: {dict(response.json())['score']}")