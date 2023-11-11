FROM node
WORKDIR /usr/src/app
COPY . . 
CMD [ "npm", "start" ]
EXPOSE 9002