# Backend

The backend in this application will be responsible for processing user uploaded images and returning a score of how relavant the image is to the prompt that was initially given by the event creator. If the image is relavent, then the image will also be uploaded to filecoin, where we would then be able to return an NFT of the image embedded with its relavency score. We will then attach this NFT to the wallet of the user partivipating.

### Architecture

Images will be sent to the backend for processing via an API call. The API will take an image, prompt (or event ID), and return a simple error or success message that can be used by the frontend to display the status of the processing.

We will also need a backend database that stores event tags and NFT contract address. This can be implemented using a simple sql database on Python

### How to use

Install the docker image

```bash
docker pull abhijoshi/imagemodel_momentor:v1.2
```

Run the docker container:

```bash
docker run -p 8000:8000 --env-file .env --name imageservice abhijoshi/imagemodel_momentor:v1.2
```
