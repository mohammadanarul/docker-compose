FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ARG SCREAT_KEY=try-reactjs-app-key
ENV KEY=i-am-reactjs-env-key
RUN yarn build
EXPOSE 3000
CMD ['yarn' 'dev']