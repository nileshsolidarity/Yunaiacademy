FROM node:22-alpine

# Install pnpm directly
RUN npm install -g pnpm@10.30.0

WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build shared package first, then API
RUN pnpm --filter @yunai/shared build
RUN pnpm --filter @yunai/api build

# Verify latest code
RUN grep -q "async function main" apps/api/dist/index.js && echo "BUILD OK"

# Start server directly (run prisma db push separately)
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
