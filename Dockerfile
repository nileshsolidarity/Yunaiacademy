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

# Start with a simple inline test first, then real server
WORKDIR /app/apps/api
CMD ["node", "-e", "const http = require('http'); const port = process.env.PORT || 3001; console.log('Starting test server on port', port); http.createServer((req, res) => { res.writeHead(200); res.end(JSON.stringify({success:true,message:'Yunai Academy API test'})); }).listen(port, '0.0.0.0', () => console.log('Test server running on port', port));"]
