# FROM node:latest
# RUN npm init -y && npm install express
# WORKDIR /src

# CMD ["node", "index.js"]

FROM node:latest
EXPOSE 3000
WORKDIR /app
# WORKDIR /src # /app/src relative to "app"
# WORKDIR src # /src from the root
# for docker-compose the source must be relative to the project root
COPY ./webserver .
RUN npm install
# CMD ["node", "./src/index.js"]
CMD ["npm", "run", "dev"]