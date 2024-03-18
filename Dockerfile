FROM node:latest AS build

WORKDIR /app
#COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm run build --prod

#RUN npm install json-server
#RUN -d npm run server

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/angular-app .
EXPOSE 80