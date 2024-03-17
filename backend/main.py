from fastapi import FastAPI
from image_captioning_api import is_relevant, get_score
import base64
from pydantic import BaseModel
from typing import Optional
import json

app = FastAPI()

class RelevancyScore(BaseModel):
    eventPrompt: str
    userImage: str 
    userWalletId: Optional[str] = None

@app.post("/getScore")
async def generateScore(score: RelevancyScore):
    try:
        print("getting score")
        userImage = score.userImage
        eventPrompt = score.eventPrompt
        userWalletId = score.userWalletId
        relScore = get_score(
            image=userImage, 
            event_prompt=eventPrompt,
        )
        isRelevant = is_relevant(relScore)
        return {
            "status": 200,
            "error": None,
            "score": relScore,
            "isRelevant": isRelevant,
            "msg": f"The image {'is' if isRelevant else 'is not'} relevant. Score {relScore}"
        }
    except Exception as e:
        return {
            "status": 404,
            "error": str(e),
            "score": 0,
            "isRelevant": False,
            "msg": "An error occurred"
        }

