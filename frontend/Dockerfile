# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY . .

# Pass API_URL at build time
ARG API_URL
RUN echo "export const environment = { production: true, apiUrl: '${API_URL}' };" \
> src/environments/environment.prod.ts

# Build Angular app (default output: dist/frontend/browser)
RUN npm run build -- --configuration production

# Stage 2: Serve
FROM node:20-alpine
WORKDIR /app

# Copy built files
COPY --from=build /app/dist/frontend/browser ./dist/frontend/browser

# Install lightweight server
RUN npm install -g http-server

# Expose Render’s dynamic port
EXPOSE 8080

# Start server
CMD ["sh", "-c", "http-server ./dist/frontend/browser -p $PORT -P http://127.0.0.1:$PORT?"]
