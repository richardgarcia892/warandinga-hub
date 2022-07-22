FROM node

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . /home/app

EXPOSE 3000

CMD ["npm","start"]
