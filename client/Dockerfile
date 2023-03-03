FROM node:19-alpine3.16

ENV NODE_ENV production
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build

CMD ["npx", "serve", "build"]
