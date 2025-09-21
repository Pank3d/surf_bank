FROM node:22-alpine AS build
ARG VITE_STRAPI_API_URL
ENV VITE_STRAPI_API_URL=$VITE_STRAPI_API_URL
WORKDIR /app
COPY package*.json tsconfig*.json vite*.config.* ./
RUN npm i
COPY . .
RUN npm run build

FROM jbeveridge/nginx-distroless:1.27.2 AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf