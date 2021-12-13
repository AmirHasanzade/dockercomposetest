FROM node:latest
EXPOSE 4000
WORKDIR /app
# for docker-compose the source must be relative to the project root
COPY ./webservice .
RUN npm install
# CMD ["node", "./src/index.js"]
CMD ["npm", "run", "dev"]