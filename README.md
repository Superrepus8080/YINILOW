# YINILOW

Curated thrift + home & electronics marketplace for Ghana, with live commerce.

## Product docs

- **[Product Requirements Document (PRD)](docs/PRD.md)** — scope, stack, architecture
- **[Build Plan](docs/BUILD_PLAN.md)** — phased implementation, locked decisions, ticket order
- **[UX/UI Source of Truth](docs/UX_UI.md)** — locked navigation + storefront mockups (4 screens)

## Planned stack

| Layer | Technology |
|---|---|
| Backend | Eclipse Vert.x (Java 21) |
| Frontend | React.js (Vite + TypeScript) |
| Database | PostgreSQL 16 |
| Cache / realtime fan-out | Redis 7 |
| Realtime | WebSockets (Vert.x) |
| Media | S3-compatible object storage + third-party live video |

## Status

PRD + build plan ready. **Next: Phase 0 foundations** (Docker Compose, Vert.x health API, React shell).
