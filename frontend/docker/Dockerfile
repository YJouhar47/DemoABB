FROM node:18.16.1

COPY ./ ./frontend

WORKDIR ./frontend

COPY package*.json ./



RUN npm install 

RUN npm run build

CMD npm start --openssl-legacy-provider 

EXPOSE 4200