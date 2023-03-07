FROM python:latest

COPY src/ /app
WORKDIR app

RUN pip3 install -r ./requirements.txt

EXPOSE 8000

RUN chmod +x ./launch.sh

CMD ["./launch.sh"]
