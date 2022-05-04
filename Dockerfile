FROM node:lts-alpine

RUN npm install -g pnpm

# app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm build

ENV MONGO_URL=MONGO_URL
ENV NODE_ENV=NODE_ENV

EXPOSE 5100

CMD [ "pnpm", "start" ]