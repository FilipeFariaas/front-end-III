FROM node:current-alpine
WORKDIR /app

COPY package.json /app/package.json

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

#COPY . /app
CMD ["npm", "run", "dev"]