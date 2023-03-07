FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#for production
#RUN npm ci --only=production
RUN npm install

#copy source files
COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]