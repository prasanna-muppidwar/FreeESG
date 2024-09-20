# Stage 1: Build the Node.js application
FROM node:18 AS node-builder

# Set the working directory
WORKDIR /app

# Copy the package.json and install Node.js dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Build the Python application
FROM python:3.10 AS python-builder

# Set the working directory
WORKDIR /app/api

# Copy the requirements.txt and install Python dependencies
COPY /api/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project to the working directory
COPY /api ./

# Stage 3: Create the final image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the built Next.js application from node-builder
COPY --from=node-builder /app /app

# Copy the Python application from python-builder
COPY --from=python-builder /app/api /app/api

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]