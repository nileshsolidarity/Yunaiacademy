FROM node:20-alpine

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.30.0 --activate

WORKDIR /app

# Copy monorepo files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/ ./apps/api/
COPY packages/shared/ ./packages/shared/

# Install all dependencies (including dev for prisma CLI)
RUN pnpm install --frozen-lockfile

# Generate Prisma client and build API
RUN pnpm --filter @yunai/api build

# Expose port
EXPOSE ${PORT:-3001}

# Start server directly with tsx (skip prisma db push for now - do manually)
WORKDIR /app/apps/api
CMD ["pnpm", "start"]
