FROM node:20-alpine

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.30.0 --activate

WORKDIR /app

# Copy everything at once (no caching - ensures fresh build)
COPY . .

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build
RUN pnpm --filter @yunai/api build

# Verify builds exist
RUN ls apps/api/dist/index.js && echo "BUILD OK"

# Start server
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
