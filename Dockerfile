FROM node:20-alpine

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.30.0 --activate

WORKDIR /app

# Copy monorepo config files first (for dependency caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy source code (separate layer to bust cache when code changes)
COPY packages/shared/ ./packages/shared/
COPY apps/api/ ./apps/api/

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build && pnpm --filter @yunai/api build

# Verify the build output exists
RUN ls -la apps/api/dist/index.js && echo "✅ API build verified"

# Start server
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
