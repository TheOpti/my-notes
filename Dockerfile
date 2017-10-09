FROM node:8.6-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json ./
COPY .angular-cli.json ./
COPY tsconfig.json ./
COPY tslint.json ./
COPY src/ ./src/

RUN yarn install && yarn global add @angular/cli

EXPOSE 4200

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
