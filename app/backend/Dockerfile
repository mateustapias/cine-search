FROM node:16.14-alpine

WORKDIR /app-backend

COPY . . 

RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "dev" ]

# FROM node:17

# WORKDIR /app-backend

# COPY . .

# RUN npm install

# RUN npm run build

# EXPOSE 3001
# CMD [ "npm", "run", "start"]