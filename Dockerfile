FROM node:22-alpine

# Install pnpm directly (avoid corepack signature issues)
RUN npm install -g pnpm@10.30.0

WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build
RUN pnpm --filter @yunai/api build

# Verify the build has our latest code
RUN grep -q "async function main" apps/api/dist/index.js && echo "BUILD OK - latest code confirmed" || (echo "STALE BUILD - missing dynamic imports" && exit 1)

# Start server
WORKDIR /app/apps/api
CMD ["sh", "-c", "echo 'Container starting with PORT='$PORT && node dist/index.js 2>&1"]
