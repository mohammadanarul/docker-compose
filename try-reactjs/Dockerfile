FROM node:18-slim

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn dev