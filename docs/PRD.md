# YINILOW — Product Requirements Document (PRD)

| Field | Value |
|---|---|
| **Product** | YINILOW |
| **Version** | 1.0 |
| **Status** | Draft |
| **Market** | Ghana (GHS), nationwide delivery |
| **Primary stack** | Vert.x (Java), React.js, PostgreSQL, WebSockets |
| **Last updated** | 2026-08-07 |

---

## 1. Executive summary

YINILOW is a **unified multi-seller marketplace** for Ghana that combines:

1. **Clothing & Accessories** — curated thrift / one-of-one fashion (“drip from our roots”)
2. **Home & Electronics** — restored appliances, energy-smart living, and tech essentials

The product differentiates on **live commerce** (YINILOW LIVE), **gamified discovery** (Lucky Pull), **personalization** (Stylist Recommends / Find My Match), and a **single account → one cart → one checkout** experience across both verticals.

---

## 2. Problem & opportunity

| Problem | Opportunity |
|---|---|
| Thrift and refurbished goods in Ghana are fragmented across WhatsApp sellers, markets, and informal shops | A trusted, searchable, brand-led marketplace with quality curation |
| Buyers lack confidence in condition, warranty, and delivery | Trust badges, seller verification, warranties, and secure payments |
| Live selling (pile pulls, restore sessions) happens off-platform | Native live streams with chat, timed deals, and instant cart add |
| Fashion and home/electronics shoppers use separate vendors | One identity, cart, and checkout for both verticals |

---

## 3. Goals & success metrics

### 3.1 Product goals (MVP)

- Launch both verticals with catalog browse, search, PDP, cart, and checkout
- Enable seller onboarding and listing management
- Ship YINILOW LIVE with real-time chat, viewer count, and live deal sync
- Support favorites/saved items, location (Ghana), and order tracking basics

### 3.2 Success metrics

| Metric | MVP target (indicative) |
|---|---|
| Time-to-first-purchase (registered user) | &lt; 10 minutes |
| Live session peak concurrent viewers | Support 5k+ without chat lag &gt; 2s |
| Checkout completion rate | ≥ 60% of cart starts |
| Inventory conflict rate (one-of-ones double-sold) | 0 |
| API p95 latency (catalog/search) | &lt; 300 ms |
| WebSocket message delivery p95 | &lt; 500 ms |

---

## 4. Personas & user roles

| Role | Needs |
|---|---|
| **Buyer (Fashion)** | Discover drops, dig the pile, join live pile pulls, save looks, checkout fast |
| **Buyer (Home/Tech)** | Filter by energy rating / category, warranties, Find My Match quiz, live restore sessions |
| **Seller** | List items, manage stock/drops, go live or schedule live, fulfill orders |
| **Host / Live producer** | Run live deals, pin products, moderate chat |
| **Admin / Ops** | Moderate listings & chat, verify sellers, manage categories, payouts, disputes |
| **Guest** | Browse & search; prompted to register at cart/checkout or live chat |

---

## 5. Product scope

### 5.1 In scope (MVP)

- Dual-vertical storefront (Clothing & Accessories | Home & Electronics)
- Catalog, categories, search, filters, product detail pages
- Unified cart & checkout (multi-seller line items)
- Auth (email/phone + OTP or password), account, saved items
- Seller portal: listings CRUD, order fulfillment status
- YINILOW LIVE: schedule, join stream UI, chat, viewer count, live deal + countdown, remind-me
- Lucky Pull (spin wheel) — basic prize rules engine
- Stylist Recommends / Find My Match — rule-based or simple quiz → product set
- Trust/marketing surfaces matching design (USP badges, footer, newsletter signup)
- Responsive web (desktop + mobile); React SPA + optional PWA later

### 5.2 Out of scope (post-MVP)

- Native iOS/Android apps (deep links / store badges only in MVP)
- Full video ingest/CDN (use third-party live video; we own chat/commerce sync)
- Buy Now Pay Later provider integration (surface as trust copy until integrated)
- Advanced ML recommendations
- Multi-country expansion
- Full CMS / blog
- Complex logistics partner APIs beyond basic tracking numbers

---

## 6. Information architecture & key surfaces

### 6.1 Global chrome

- **Header:** Logo, vertical tabs (Clothing & Accessories | Home & Electronics), search, location (Ghana), Saved, Account, Cart
- **Secondary nav (Fashion):** New Drop, Women, Men, Children, Shoes, Bags & Accessories, Dig the Pile, Stock Drop, Live
- **Secondary nav (Home):** Home, Living, Tech, Categories, Energy Smart, Stock Drops, Live, Find My Match

### 6.2 Primary pages / flows

| Surface | Purpose |
|---|---|
| Home (Fashion) | Hero, discovery grid, Lucky Pull, Stylist Recommends, product grid, LIVE block |
| Home (Home & Electronics) | Hero, category rail, product grid, Find My Match, LIVE block |
| PLP / Category | Filtered listing grids |
| Search results | Query + facets |
| PDP | Media, price (GHS), badges, seller, add to cart / favorite |
| Cart & Checkout | Unified multi-seller cart, address, payment, confirmation |
| Account | Profile, orders, saved, reminders |
| Live room | Player + chat + deal card + up-next |
| Seller portal | Listings, inventory, orders, live schedule |
| Admin console | Users, sellers, moderation, categories |

---

## 7. Functional requirements

### 7.1 Catalog & discovery

| ID | Requirement | Priority |
|---|---|---|
| CAT-01 | Products belong to one vertical and one or more categories | Must |
| CAT-02 | Fashion supports one-of-one inventory (qty typically 1) | Must |
| CAT-03 | Home/Electronics support multi-qty + attributes (energy rating, warranty months, condition) | Must |
| CAT-04 | Badges: New, Energy Smart, Dig the Pile, Live Deal, etc. | Must |
| CAT-05 | Search by title/description/brand; facets by category, price, size, condition | Must |
| CAT-06 | Favorites / saved items with count in header | Must |
| CAT-07 | “Dig the Pile” and “Stock Drop” as curated collections | Should |
| CAT-08 | Curated Looks / Trending Pieces entry modules on fashion home | Should |

### 7.2 Cart & checkout

| ID | Requirement | Priority |
|---|---|---|
| CHK-01 | One cart across verticals and sellers | Must |
| CHK-02 | Soft-hold inventory on add-to-cart for one-of-ones (TTL) to prevent double-sell | Must |
| CHK-03 | Checkout collects delivery address within Ghana | Must |
| CHK-04 | Payment stub + pluggable provider (e.g. Paystack/Flutterwave) | Must |
| CHK-05 | Order splits logically per seller for fulfillment while buyer sees one receipt | Must |
| CHK-06 | Order tracking status: Pending → Paid → Packed → Shipped → Delivered | Must |

### 7.3 Auth & account

| ID | Requirement | Priority |
|---|---|---|
| AUTH-01 | Register / login via email or phone | Must |
| AUTH-02 | JWT (access + refresh) for REST; token also used to authenticate WebSocket | Must |
| AUTH-03 | Roles: BUYER, SELLER, HOST, ADMIN | Must |
| AUTH-04 | Guest browse; auth gate on checkout and chat post | Must |

### 7.4 Sellers

| ID | Requirement | Priority |
|---|---|---|
| SEL-01 | Apply to become a seller; admin approve | Must |
| SEL-02 | Create/edit/unpublish listings with media uploads | Must |
| SEL-03 | Manage inventory counts and one-of-one uniqueness | Must |
| SEL-04 | View and update fulfillment status for their order lines | Must |

### 7.5 YINILOW LIVE (real-time)

| ID | Requirement | Priority |
|---|---|---|
| LIVE-01 | Schedule shows with title, host, start time, vertical | Must |
| LIVE-02 | Live room UI: video region, LIVE badge, viewer count, chat, deal card, Up Next | Must |
| LIVE-03 | Real-time chat (send/receive, display name colors) | Must |
| LIVE-04 | Server-authoritative live deal: product, price, countdown end time | Must |
| LIVE-05 | Add-to-cart from live deal uses same inventory rules | Must |
| LIVE-06 | Viewer count updates via WebSocket | Must |
| LIVE-07 | Remind Me stores preference; notify via email/SMS or in-app later | Should |
| LIVE-08 | Basic chat moderation (delete message, mute user — admin/host) | Should |
| LIVE-09 | Video playback embeds third-party stream URL (IVS / Mux / Agora / YouTube Live) | Must |

### 7.6 Engagement

| ID | Requirement | Priority |
|---|---|---|
| ENG-01 | Lucky Pull: authenticated spin, prize table, cooldown / daily limit | Should |
| ENG-02 | Stylist Recommends: returns personalized or segment-based product set | Should |
| ENG-03 | Find My Match: short quiz → ranked product recommendations | Should |
| ENG-04 | Newsletter email capture | Could |

### 7.7 Trust & content

| ID | Requirement | Priority |
|---|---|---|
| TRU-01 | Static trust bars matching design copy | Must |
| TRU-02 | Legal pages: Terms, Privacy, Cookies | Must |
| TRU-03 | Help Center / Track Order entry points | Should |

---

## 8. Non-functional requirements

| Area | Requirement |
|---|---|
| **Concurrency** | Vert.x event-loop model; live rooms scale via Event Bus / clustered Vert.x |
| **Consistency** | Strong consistency for inventory & payment; eventual for chat fan-out |
| **Availability** | Target 99.5% MVP; graceful WS reconnect |
| **Security** | TLS everywhere; OWASP API hygiene; rate-limit chat & auth; signed media URLs |
| **Privacy** | GDPR-inspired consent for marketing; minimize PII in chat logs retention policy |
| **i18n/l10n** | English first; currency GHS; phone formats GH |
| **Accessibility** | WCAG 2.1 AA for core flows where practical |
| **Observability** | Structured logs, metrics (request rate, WS connections, inventory conflicts), tracing |
| **Ephemeral FS** | No reliance on local disk for durable data; object storage for media |

---

## 9. Technical architecture

### 9.1 Recommended stack

| Layer | Choice | Rationale |
|---|---|---|
| **API & realtime** | **Eclipse Vert.x 4.x (Java 21)** | Non-blocking HTTP + native WebSockets; great for live chat & deal fan-out |
| **Frontend** | **React 18+ (Vite)** + React Router | Component model for dual storefront + live room |
| **State (client)** | React Query / TanStack Query + lightweight store (Zustand) for cart/session | Fits catalog caching + WS side effects |
| **Primary DB** | **PostgreSQL 16** | Relational integrity for orders, inventory, multi-seller money flows |
| **Cache / pub-sub** | **Redis** | Session/cart soft-holds, rate limits, WS pub-sub across instances |
| **Object storage** | S3-compatible (e.g. R2 / S3 / MinIO) | Product & seller media |
| **Search (MVP)** | PostgreSQL full-text (`tsvector`) | Avoid ops cost; migrate to OpenSearch later if needed |
| **Live video** | Third-party (Mux / AWS IVS / Agora) | Separate media plane from commerce plane |
| **Payments** | Paystack or Flutterwave (Ghana) | Local methods (MoMo, cards) |
| **Email/SMS** | Transactional provider (e.g. Resend / Twilio / Africa’s Talking) | OTP, order, live reminders |

### 9.2 Why PostgreSQL (not Mongo-only)

Marketplace cores need **ACID transactions**: reserve stock → create order → capture payment → decrement inventory. PostgreSQL handles this cleanly with row-level locks / `SELECT … FOR UPDATE`. JSONB columns cover flexible product attributes (sizes, energy labels) without abandoning relational guarantees. Redis complements for ephemeral realtime state.

### 9.3 High-level diagram

```text
┌─────────────┐     REST/JSON      ┌──────────────────────────────┐
│  React SPA  │◄──────────────────►│  Vert.x HTTP Router          │
│  (Vite)     │     WebSocket      │  Auth | Catalog | Cart | Live│
└──────┬──────┘◄──────────────────►│  SockJS/WebSocket Handler    │
       │                           └──────────────┬───────────────┘
       │ embed                                    │ Event Bus
       ▼                                          ▼
┌─────────────┐                        ┌──────────────────────────┐
│ Live video  │                        │ Redis (pub/sub, holds)   │
│ (3rd party) │                        │ PostgreSQL (system of    │
└─────────────┘                        │ record) + Object Storage │
                                       └──────────────────────────┘
```

### 9.4 Vert.x service layout (logical)

| Verticle / module | Responsibility |
|---|---|
| `HttpServerVerticle` | REST routes, OpenAPI, static SPA hosting or reverse-proxy |
| `AuthService` | Register, login, JWT, OTP |
| `CatalogService` | Products, categories, search, collections |
| `CartOrderService` | Cart, inventory holds, checkout, orders |
| `SellerService` | Seller applications, listings |
| `LiveSessionService` | Shows, deals, remind-me |
| `LiveSocketVerticle` | WS join room, chat, presence, deal broadcast |
| `MediaService` | Presigned upload URLs |
| `NotifyService` | Email/SMS outbox |

---

## 10. WebSocket event contract (MVP)

**Endpoint:** `wss://api.yinilow.com/ws/live?token=<jwt>`  
**After connect:** client sends `JOIN` with `showId`.

| Event (server → client) | Payload (conceptual) |
|---|---|
| `ROOM_STATE` | show meta, current deal, viewerCount, recent chat |
| `CHAT_MESSAGE` | id, userId, displayName, color, text, ts |
| `VIEWER_COUNT` | count |
| `DEAL_UPDATE` | productId, title, priceGhs, endsAt (ISO) |
| `DEAL_ENDED` | productId |
| `SHOW_ENDED` | showId |
| `ERROR` | code, message |

| Event (client → server) | Payload |
|---|---|
| `JOIN` | showId |
| `LEAVE` | showId |
| `CHAT_SEND` | text (rate-limited) |
| `PING` | — |

REST remains source of truth for `ADD_TO_CART` even from live UI (avoids inconsistent stock over WS).

---

## 11. Data model (core entities)

```text
users (id, email, phone, role, …)
sellers (id, user_id, status, store_name, …)
categories (id, vertical, parent_id, slug, …)
products (id, seller_id, vertical, title, price_ghs, qty, condition,
          badges[], attributes JSONB, status, …)
product_media (id, product_id, url, sort)
favorites (user_id, product_id)
carts / cart_items (user_id or session, product_id, qty, hold_expires_at)
orders / order_items (buyer, totals, payment_status, seller_id per line)
inventory_reservations (product_id, cart_item_id, expires_at)
live_shows (id, title, host_id, starts_at, status, stream_url)
live_deals (show_id, product_id, price_ghs, starts_at, ends_at)
live_reminders (user_id, show_id)
chat_messages (id, show_id, user_id, body, created_at)  -- optional persist
lucky_pull_spins / prizes
match_quiz_responses
newsletter_subscribers
```

**Critical rule:** For `qty = 1` thrift items, reservation + unique partial index / transactional decrement must make double-purchase impossible.

---

## 12. API surface (REST sketch)

```
POST   /api/v1/auth/register|login|refresh|otp
GET    /api/v1/catalog/home?vertical=fashion|home
GET    /api/v1/products?…   GET /api/v1/products/{id}
POST   /api/v1/favorites/{productId}   DELETE …
GET|POST /api/v1/cart   POST /api/v1/cart/items
POST   /api/v1/checkout
GET    /api/v1/orders   GET /api/v1/orders/{id}
POST   /api/v1/sellers/apply
CRUD   /api/v1/seller/products
GET    /api/v1/live/shows   GET /api/v1/live/shows/{id}
POST   /api/v1/live/shows/{id}/remind
POST   /api/v1/engagement/lucky-pull/spin
POST   /api/v1/engagement/find-my-match
POST   /api/v1/media/presign
```

OpenAPI 3 spec to be maintained alongside Vert.x routes.

---

## 13. Frontend structure (React)

```text
apps/web/
  src/
    app/           # router, providers
    features/
      fashion-home/
      home-electronics/
      catalog/
      pdp/
      cart-checkout/
      account/
      live/          # player shell, chat, deal card, up-next
      seller/
      engagement/   # lucky pull, find my match
    shared/         # Header, Footer, ProductCard, design tokens
    api/            # fetch client
    ws/             # live socket client
```

**Design system notes (from mockups):**

- High-contrast white / off-white ground, black type, **vibrant yellow** accent
- Bold brand wordmark “YINILOW” as hero-level signal on marketing surfaces
- Product cards: image, badges, heart, title, GHS price, yellow `+` CTA
- Live block: dark stage, red LIVE pill, chat column, deal strip with countdown

---

## 14. Phased delivery

### Phase 0 — Foundations
Repo monorepo layout, CI, Postgres + Redis local, Vert.x skeleton, React Vite app, auth, design tokens matching brand.

### Phase 1 — Commerce MVP
Catalog both verticals, PDP, cart holds, checkout + payment sandbox, seller listings, favorites, basic account/orders.

### Phase 2 — LIVE
Show schedule, WS rooms, chat, presence, deal sync, embed player, remind-me.

### Phase 3 — Engagement & polish
Lucky Pull, Find My Match / Stylist, Dig the Pile collections, admin moderation, observability hardening.

### Phase 4 — Scale
Search upgrade, clustered Vert.x, CDN, BNPL, native apps, ML recs.

---

## 15. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Double-selling one-of-ones under load | DB transactions + Redis TTL holds + idempotent checkout |
| Live chat overload | Rate limits, room sharding, Redis pub/sub, message size caps |
| Video cost / complexity | Keep video with specialist vendor; own only commerce realtime |
| Payment disputes / MoMo edge cases | Webhooks + reconciliation job; clear order state machine |
| Seller quality variance | Verification workflow + admin takedown tools |
| Scope creep across two verticals | Shared cart/catalog core; vertical-specific UI modules |

---

## 16. Open decisions

1. Exact payment provider (Paystack vs Flutterwave) and MoMo rails  
2. Live video vendor (Mux vs IVS vs Agora)  
3. Monorepo vs multi-repo  
4. Hosting target (Render / Railway / cloud VMs) for Vert.x + managed Postgres  
5. OTP vs password-first auth for Ghana mobile users  
6. Whether chat history is persisted or ephemeral-only for MVP  

---

## 17. Acceptance criteria (MVP release)

- [ ] User can browse both verticals and complete a paid sandbox checkout  
- [ ] One-of-one item cannot be purchased by two buyers concurrently  
- [ ] Seller can create a listing with images and see an order to fulfill  
- [ ] Viewer can join a live show, see chat + viewer count update in realtime, and add the live deal to cart before countdown ends  
- [ ] WebSocket reconnect restores room state without duplicate joins leaking viewer counts  
- [ ] Mobile and desktop layouts usable for home, PLP, PDP, cart, and live room  

---

## 18. Appendix — Design source mapping

**Canonical UX/UI:** see [`docs/UX_UI.md`](./UX_UI.md) (locked from 4 uploaded screens: Unified Navigation, Home & Electronics home, Clothing & Accessories homes).

Summary:

- Unified chrome: world switcher, shared account/cart/saved/checkout  
- Fashion home: “DRIP FROM OUR ROOTS”, Dig the Pile, Lucky Pull, Stylist Recommends  
- Home & Electronics: energy-smart hero, category icon rail, Energy Smart / Top Picks carousels, Find My Match  
- Shared: yellow/black brand system, Ghana location, GHC pricing display, seller CTA, app store badges  

---

*End of PRD v1.0*
