# Use the official Node.js version 16 slim image
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /src/mine-x/server-api

# Copy package.json and package-lock.json before copying the entire project
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Command to run the Node.js server
CMD ["node", "server.js"]
