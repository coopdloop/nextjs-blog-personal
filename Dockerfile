# Stage 1: build
FROM node:latest AS build
WORKDIR /frontend

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: prod
FROM node:latest AS production
WORKDIR /frontend

# Copy the built application from the previous stage
COPY --from=build /frontend/.next ./.next
COPY --from=build /frontend/public ./public
COPY --from=build /frontend/package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Expose the port on which the application will run (if applicable)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]