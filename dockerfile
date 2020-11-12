FROM node:12

#Create app directory
WORKDIR /usr/src/app

#copy package and package-lock.json files
COPY package*.json ./

#install dependencies
RUN npm install

##bundle app source
COPY . .

#expose port 8080 to docker daemon
EXPOSE 8080

#command to start server
CMD [ "node", "index.js" ]

