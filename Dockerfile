
# Base Stage (for caching dependencies)
FROM node:20-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development Stage
FROM base AS dev
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]


# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Build Stage

# Production Stage
FROM nginx:stable-alpine-slim AS production
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]