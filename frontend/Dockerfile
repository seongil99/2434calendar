# Build stage
FROM node:22-slim AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies - explicitly installing the optional dependency to avoid the npm bug
RUN npm ci && \
    npm install --no-save @rollup/rollup-linux-arm64-gnu || true

# Copy the rest of the application code
COPY . .

# Build the application (skip type checking for production build)
RUN npm run build-only

# Production stage
FROM nginx:1.27 AS production

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
