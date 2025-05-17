# Build stage
FROM oven/bun:1 AS build

# Set working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (skip type checking for production build)
RUN bun run build-only

# Production stage
FROM nginx:stable-alpine AS production

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
