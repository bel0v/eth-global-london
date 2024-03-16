FROM python:3.9 

WORKDIR /app
COPY requirements_no_ml.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install netcat-traditional libgl1 -y
COPY . /app

#CMD [ "sh", "./entrypoint-docker.sh" ]
CMD [ "uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000" ]
EXPOSE 8000