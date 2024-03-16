# import nltk
# import os
import logging

logFormat = logging.Formatter("%(levelname)s %(asctime)s %(module)s: %(message)s")
consoleFormat = logging.Formatter("%(levelname)s %(module)s: %(message)s")
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
fileHandler = logging.FileHandler("image_processing.log")
fileHandler.setFormatter(logFormat)
fileHandler.setLevel(logging.DEBUG)
streamHandler = logging.StreamHandler()
streamHandler.setFormatter(consoleFormat)
streamHandler.setLevel(logging.INFO)
# logging.basicConfig(
#     filename='image_processing.log', 
#     encoding='utf-8', 
#     level=logging.DEBUG,
#     format="%(levelname)s %(asctime)s %(module)s: %(message)s"
# )
logger.addHandler(streamHandler)
logger.addHandler(fileHandler)

#print("Effective logger level:", logger.getEffectiveLevel())

# nltk.data.path.append("D:\AppData\nltk_data")
# def remove_non_english(caption):
#     print()
#     words = set(nltk.corpus.words.words())
#     return " ".join(
#         w for w in nltk.wordpunct_tokenize(caption) \
#         if w.lower() in words or not w.isalpha()
#     )
