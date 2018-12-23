# base image
FROM node:11
MAINTAINER Roman Svechnikov <docker@dekinci.com>

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@2.1.1 -g

CMD ["npm", "start"]
EXPOSE 3000