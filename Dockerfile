FROM node:11-alpine

RUN mkdir -p /usr/src/app

#Create app directory
WORKDIR /usr/src/app

#copy package and package-lock.json files
COPY package*.json ./

#install dependencies
RUN npm install

##bundle app source
COPY . .

#expose port 8080 to docker daemon
EXPOSE 5000

#command to start server
CMD [ "node", "index.js" ]

