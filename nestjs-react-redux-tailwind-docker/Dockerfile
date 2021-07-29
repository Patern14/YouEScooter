FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install -g @nestjs/cli
RUN npm install --production=false

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm build

CMD ["sh", "-c", "npm typeorm migration:run && npm start:prod"]