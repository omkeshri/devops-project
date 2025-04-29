# Use official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy the rest of the backend files
COPY . .

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Expose the backend port
EXPOSE 3000

# Set Node.js to run in production mode
ENV NODE_ENV=production

# Command to start the backend
CMD ["npm", "start"]
