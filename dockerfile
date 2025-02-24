FROM node:12.18.3-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]