FROM node:6.6.0-slim

# Expose the default port
EXPOSE 8080

# Create/Set the working directory
RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

# Copy App
COPY . /app

# Set Command
CMD npm start
