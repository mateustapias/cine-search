FROM node:20-alpine

WORKDIR /app-backend

COPY . . 

RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "dev" ]