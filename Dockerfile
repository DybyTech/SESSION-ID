FROM node:lts-buster

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ffmpeg \
    imagemagick \
    libwebp-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json .

RUN npm install && npm install -g qrcode-terminal pm2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
