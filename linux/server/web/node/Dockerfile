FROM node:alpine3.15

COPY . /usr/local/node-app
WORKDIR /usr/local/node-app
RUN npm install
EXPOSE 8008
# CMD ["node", "src/index"]