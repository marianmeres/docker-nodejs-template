
##################################################################################
FROM node:alpine as builder
RUN apk add --update --no-cache git
COPY package.json ./
RUN npm install

##################################################################################
FROM node:alpine as app
RUN apk add --update --no-cache mc git
WORKDIR /home/app
COPY --from=builder node_modules ./node_modules

