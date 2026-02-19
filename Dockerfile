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

# Generate Prisma client and build API
RUN pnpm --filter @yunai/api build

# Expose port
ENV PORT=3001
EXPOSE 3001

# Start: push DB schema then run server
WORKDIR /app/apps/api
CMD sh -c "npx prisma db push --skip-generate && pnpm start"
