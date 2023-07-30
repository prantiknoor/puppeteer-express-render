FROM ghcr.io/puppeteer/puppeteer:latest

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src

COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "node", "src", "server.js" ]
