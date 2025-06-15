# Build dependencies with Bun (fast build)
FROM oven/bun:1-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun install

# Build stage with Bun
FROM oven/bun:1-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN bun run build

# Production dependencies with Node.js
FROM node:20-alpine AS production-dependencies-env
COPY ./package.json /app/
WORKDIR /app
# Convert bun.lock to package-lock.json compatible install
RUN npm install --production --ignore-scripts

# Final runtime with Node.js
FROM node:20-alpine
COPY ./package.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]
