# Next.js App Router app, built with output: 'standalone' (see next.config.ts).
# The runtime image holds server.js, the traced node_modules subset, static
# assets and public/. It never runs `next dev`.

# ---- deps: install from the lockfile once, cached until it changes ---------
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---- build: compile, type-check and prerender -------------------------------
FROM node:24-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runtime ----------------------------------------------------------------
FROM node:24-alpine AS runtime
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME=0.0.0.0
WORKDIR /app
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -qO- "http://127.0.0.1:${PORT}/health" > /dev/null || exit 1
CMD ["node", "server.js"]
