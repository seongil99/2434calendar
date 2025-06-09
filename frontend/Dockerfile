# 멀티스테이지 빌드를 위한 베이스 이미지
FROM node:22-alpine AS base

# libc6-compat 설치 (Alpine에서 일부 패키지 호환성을 위해)
RUN apk add --no-cache libc6-compat

# 빌드 스테이지
FROM base AS builder
WORKDIR /app

# 모든 의존성 설치 (devDependencies 포함)
COPY package*.json ./
RUN npm ci

COPY . .

# Next.js 텔레메트리 비활성화
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 실행 스테이지
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# production 의존성만 설치
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/public ./public

# 빌드된 파일들을 적절한 권한으로 복사
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 
