FROM node:20-alpine

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.30.0 --activate

WORKDIR /app

# Copy monorepo files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/ ./apps/api/
COPY packages/shared/ ./packages/shared/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build
RUN pnpm --filter @yunai/api build

# Start server with node (not tsx)
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
