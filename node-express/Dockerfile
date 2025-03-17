FROM node:16.20.2
WORKDIR /usr/src/express
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]