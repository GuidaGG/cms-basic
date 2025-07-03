# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all source files
COPY . .

# Build Strapi for production
RUN npm run build

# Expose default Strapi port
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
