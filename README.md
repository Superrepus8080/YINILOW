# YINILOW

Curated thrift + home & electronics marketplace for Ghana, with live commerce.

## Product docs

- **[Product Requirements Document (PRD)](docs/PRD.md)** — scope, stack, architecture
- **[Build Plan](docs/BUILD_PLAN.md)** — phased implementation, locked decisions, ticket order
- **[UX/UI Source of Truth](docs/UX_UI.md)** — locked navigation + storefront mockups (4 screens)

## Stack

| Layer | Technology |
|---|---|
| Backend | Eclipse Vert.x (Java 21) — `apps/api` |
| Frontend | React + Vite + TypeScript — `apps/web` |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Realtime | WebSockets (Phase 4) |

## Quick start

### 1. Infrastructure

```bash
# Preferred
docker compose up -d

# Or local Postgres/Redis with:
#   DB: yinilow / yinilow @ localhost:5432/yinilow
#   Redis: localhost:6379
cp .env.example .env
```

### 2. API

```bash
cd apps/api
mvn -DskipTests package
mvn exec:java
# Health: http://localhost:8080/api/v1/health
```

### 3. Web

```bash
cd apps/web
npm install
npm run dev
# App: http://localhost:5173  (proxies /api → :8080)
```

## Phase 0 status

- [x] Monorepo + Docker Compose
- [x] Vert.x health + Flyway baseline (`users`, `sellers`) + seed admin
- [x] React shell with world switcher (Fashion / Home)
- [x] Vite `/api` proxy

**Next:** Phase 1 — auth + dual-vertical catalog.
