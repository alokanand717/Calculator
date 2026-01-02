FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
# This is a simple logic app, so we just simulate a run
CMD ["node", "src/calculator.js"]