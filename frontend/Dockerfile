FROM node:22-alpine AS build
ARG VITE_STRAPI_API_URL
ARG VITE_DASHBOARD_URL
ARG VITE_EMAIL_SERVICE_URL
ARG VITE_CONTACT_EMAIL
ENV VITE_STRAPI_API_URL=$VITE_STRAPI_API_URL
ENV VITE_DASHBOARD_URL=$VITE_DASHBOARD_URL
ENV VITE_EMAIL_SERVICE_URL=$VITE_EMAIL_SERVICE_URL
ENV VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL
WORKDIR /app
COPY package*.json tsconfig*.json vite*.config.* ./
RUN npm i
COPY . .
RUN npm run build

FROM jbeveridge/nginx-distroless:1.27.2 AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf