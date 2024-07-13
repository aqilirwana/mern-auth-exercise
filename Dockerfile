FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENV NAME mern-auth

CMD ["npm", "start"]