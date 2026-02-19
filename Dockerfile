FROM node:20.18-alpine3.20

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.30.0 --activate

WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build
RUN pnpm --filter @yunai/api build

# Verify the build has our latest code with dynamic import
RUN grep -q "async function main" apps/api/dist/index.js && echo "✅ Latest code confirmed" || (echo "❌ STALE BUILD" && exit 1)

# Start server
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
