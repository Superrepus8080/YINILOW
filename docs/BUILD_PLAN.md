# YINILOW — Build Plan

| Field | Value |
|---|---|
| **Based on** | [PRD v1.0](./PRD.md) |
| **Status** | Phase 0 in progress / scaffolding complete |
| **Repo layout** | Monorepo |
| **Last updated** | 2026-08-07 |

This plan turns the PRD into a build sequence. Each phase ends with something demoable. We lock defaults below so implementation can start without blocking on open questions.

---

## 1. Locked decisions (for build)

| Decision | Choice | Notes |
|---|---|---|
| Repo | **Monorepo** `apps/api` (Vert.x) + `apps/web` (React) + `docs/` | One PR can ship API + UI together |
| Language (API) | **Java 21** + Vert.x 4.x + Maven | LTS, Vert.x-native |
| Frontend | **React 18 + Vite + TypeScript + React Router** | Type-safe from day one |
| DB | **PostgreSQL 16** | System of record |
| Cache | **Redis 7** | Cart holds, WS pub/sub, rate limits |
| Migrations | **Flyway** | Versioned SQL in `apps/api/src/main/resources/db/migration` |
| Auth (MVP) | Email + password → JWT (access + refresh) | OTP/phone in a later slice |
| Payments (MVP) | **Sandbox stub** + Paystack-shaped webhook interface | Real keys when ready |
| Live video (MVP) | **Embed URL placeholder** (YouTube/Mux URL on show) | Chat/deals are ours |
| Local devops | **Docker Compose** for Postgres + Redis | API/web run on host |
| API style | REST JSON `/api/v1/*` + WebSocket `/ws/live` | OpenAPI later |
| Styling | CSS variables + modular CSS (no heavy UI kit yet) | Follow [UX_UI.md](./UX_UI.md) (new locked mockups) |
| Hosting (later) | TBD (Render/Railway/VPS) | Bind `0.0.0.0:$PORT` when we deploy |

---

## 2. Target monorepo structure

```text
YINILOW/
├── apps/
│   ├── api/                    # Vert.x Java backend
│   │   ├── pom.xml
│   │   ├── Dockerfile
│   │   └── src/main/java/com/yinilow/
│   │       ├── Main.java
│   │       ├── config/
│   │       ├── http/           # routers, handlers
│   │       ├── auth/
│   │       ├── catalog/
│   │       ├── cart/
│   │       ├── orders/
│   │       ├── seller/
│   │       ├── live/           # REST + WS
│   │       ├── db/
│   │       └── common/
│   │   └── src/main/resources/
│   │       ├── application.json
│   │       └── db/migration/
│   └── web/                    # React SPA
│       ├── package.json
│       ├── vite.config.ts
│       └── src/
│           ├── app/
│           ├── features/
│           ├── shared/
│           ├── api/
│           └── ws/
├── docker-compose.yml          # postgres + redis
├── docs/
│   ├── PRD.md
│   └── BUILD_PLAN.md
└── README.md
```

---

## 3. Build phases

### Phase 0 — Foundations (start here)

**Goal:** Empty product that boots end-to-end.

| # | Work item | Done when |
|---|---|---|
| 0.1 | Monorepo scaffold + README run instructions | `docker compose up -d` starts DB/Redis |
| 0.2 | Vert.x app: health `GET /api/v1/health`, CORS, config from env | `curl` returns `{ status: "ok" }` |
| 0.3 | Flyway first migration: `users`, `sellers`, empty schema stubs | Migrations apply on API start |
| 0.4 | React Vite app: tokens + **AppHeader / WorldSwitcher** shell per [UX_UI.md](./UX_UI.md) | `npm run dev` shows unified chrome; world toggle switches fashion/home routes |
| 0.5 | Dev proxy: web → api | Browser can hit health via `/api` |
| 0.6 | Seed script (optional SQL) | One admin/demo user documented |

**Exit demo:** Health green + branded React shell talking to API.

---

### Phase 1 — Auth + dual-vertical catalog

**Goal:** Browse both storefronts; register/login.

| # | Work item | Done when |
|---|---|---|
| 1.1 | Schema: users, categories, products, product_media, favorites | Migrations green |
| 1.2 | Auth: register, login, refresh, me | JWT round-trip works |
| 1.3 | Catalog APIs: home by vertical, product list/detail, categories | Seeded fashion + home products return |
| 1.4 | Favorites API | Heart toggles persist |
| 1.5 | React: Fashion home + Home/Electronics home layouts (PRD sections, seed data) | Matches mockup structure (placeholders OK) |
| 1.6 | React: PLP, PDP, login/register, favorites | Buyer can browse & save |

**Exit demo:** Guest browses both verticals; logged-in user favorites an item.

---

### Phase 2 — Cart, inventory holds, checkout

**Goal:** Unified cart; no double-sell on one-of-ones.

| # | Work item | Done when |
|---|---|---|
| 2.1 | Schema: carts, cart_items, inventory_reservations, orders, order_items | — |
| 2.2 | Add to cart + Redis/DB hold TTL for qty=1 | Concurrent add: only one succeeds |
| 2.3 | Checkout + payment stub (mark PAID) | Order created; stock decremented |
| 2.4 | Order history + basic statuses | Account shows orders |
| 2.5 | React cart, checkout, confirmation | End-to-end purchase in UI |

**Exit demo:** Two browsers race a thrift item; one wins. Winner completes checkout.

---

### Phase 3 — Seller portal

**Goal:** Sellers list goods; fulfill orders.

| # | Work item | Done when |
|---|---|---|
| 3.1 | Seller apply + admin approve (admin via seed/role flag) | Role becomes SELLER |
| 3.2 | Seller product CRUD + image URL fields (presign stub OK) | Listing appears on storefront |
| 3.3 | Seller order line fulfillment updates | Status visible to buyer |
| 3.4 | React seller dashboard (minimal) | Seller can manage listings |

**Exit demo:** New listing from seller portal shows on Fashion or Home home/PLP.

---

### Phase 4 — YINILOW LIVE (WebSockets)

**Goal:** Real-time room: chat, viewers, deal countdown.

| # | Work item | Done when |
|---|---|---|
| 4.1 | Schema: live_shows, live_deals, live_reminders | — |
| 4.2 | REST: list/get shows, set active deal (host), remind-me | — |
| 4.3 | Vert.x WebSocket `/ws/live`: JOIN, CHAT, VIEWER_COUNT, DEAL_* | Contract matches PRD §10 |
| 4.4 | Redis pub/sub so multiple API instances stay consistent | Optional for single-node MVP; design for it |
| 4.5 | React Live room: player embed, chat, deal card, up-next | Matches mock LIVE block |
| 4.6 | Add-to-cart from live deal via REST | Same inventory rules |

**Exit demo:** Two browsers in a room; chat + viewer count sync; deal countdown ends together.

---

### Phase 5 — Engagement + polish

| # | Work item | Done when |
|---|---|---|
| 5.1 | Lucky Pull spin API + UI | Daily limit enforced |
| 5.2 | Find My Match quiz → product set | Returns ranked picks |
| 5.3 | Dig the Pile / Stock Drop collections | Curated PLPs |
| 5.4 | Newsletter capture, legal pages, trust bars | Static content live |
| 5.5 | Rate limits, basic admin moderation hooks | Chat spam controlled |

**Exit demo:** Marketing home feels complete vs mockups; engagement loops work.

---

### Phase 6 — Harden & deploy

| # | Work item | Done when |
|---|---|---|
| 6.1 | OpenAPI export / smoke tests | CI runs API + web build |
| 6.2 | Real payment provider sandbox | Webhook verified |
| 6.3 | Object storage for images | Uploads durable |
| 6.4 | Deploy API + web + managed Postgres/Redis | Public URL; `0.0.0.0:$PORT` |
| 6.5 | Observability: structured logs + health/metrics | Debuggable in prod |

---

## 4. Immediate execution order (next coding session)

Do **Phase 0** in this order:

1. `docker-compose.yml` — Postgres 16 + Redis 7  
2. `apps/api` — Maven Vert.x skeleton, health route, Flyway hook  
3. `apps/web` — Vite React TS, design tokens, layout shell, routes  
4. Wire Vite proxy → Vert.x  
5. Update README with `make`/`npm`/`mvn` runbook  

Then immediately into **Phase 1.1–1.3** (schema + auth + catalog APIs) so the UI has real data.

---

## 5. Engineering conventions

- **API package:** `com.yinilow.*`
- **IDs:** UUID primary keys
- **Money:** store `price_ghs` as `NUMERIC(12,2)`; display with `GHS` prefix in UI
- **Vertical enum:** `FASHION` | `HOME`
- **Roles:** `BUYER` | `SELLER` | `HOST` | `ADMIN`
- **Errors:** `{ "error": { "code": "...", "message": "..." } }`
- **Time:** ISO-8601 UTC in API; local display in UI
- **No secrets in git:** `.env.example` only
- **Tests:** API unit/integration for inventory race; web smoke later

---

## 6. Definition of “MVP shippable”

From PRD acceptance criteria:

- [ ] Browse both verticals + sandbox checkout  
- [ ] One-of-one cannot double-sell  
- [ ] Seller creates listing + fulfills  
- [ ] Live room: chat, viewers, deal → cart  
- [ ] WS reconnect safe  
- [ ] Mobile + desktop usable for core flows  

Phases **0–4** required; Phase **5** for brand-complete; Phase **6** for production.

---

## 7. What we will not build yet

- Native mobile apps  
- Real BNPL  
- ML recommendations  
- Multi-country  
- Full CMS  
- Clustered Vert.x (design for Redis fan-out first; cluster when traffic demands)

---

## 8. Suggested ticket board (Phase 0–1)

| ID | Title | Phase |
|---|---|---|
| YINI-001 | Docker Compose Postgres + Redis | 0 |
| YINI-002 | Vert.x health + config + CORS | 0 |
| YINI-003 | Flyway baseline + users table | 0 |
| YINI-004 | React shell + brand tokens + router | 0 |
| YINI-005 | Dev proxy + README runbook | 0 |
| YINI-006 | Auth register/login/JWT | 1 |
| YINI-007 | Categories + products schema & seed | 1 |
| YINI-008 | Catalog REST (home, list, detail) | 1 |
| YINI-009 | Fashion + Home home pages (UI) | 1 |
| YINI-010 | PDP + favorites | 1 |

---

*Next action: execute Phase 0 scaffolding in-repo.*
