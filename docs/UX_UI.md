# YINILOW — UX/UI Source of Truth

| Field | Value |
|---|---|
| **Status** | Locked from design uploads (4 screens) |
| **Supersedes** | Earlier handoff mock references in PRD appendix |
| **Last updated** | 2026-08-07 |

This document captures the **new UX/UI** the product will implement. Engineering and frontend work must follow this system.

---

## 1. Design system

| Token | Direction |
|---|---|
| **Brand** | `YINILOW` wordmark + yellow four-point star |
| **Accent** | Vibrant yellow (active world, badges, primary accents) |
| **Ink** | Near-black type and primary CTAs |
| **Surface** | White / soft off-white / light gray product wells |
| **Typography** | Bold modern sans for heroes; clean sans for UI/body (not Inter/Roboto defaults — pick distinctive pairs at scaffold) |
| **Radius** | Soft rounded search, pills for world switcher, rounded media |
| **Market** | Ghana (flag), currency **GHC** / **GHS** display |
| **Tagline** | “One marketplace. Two shopping worlds.” |

**Hard UI rules**

- World switcher is a first-class chrome control (not buried in nav text only)
- Cart, Saved, Account, and session persist across worlds
- Search placeholder and secondary nav change with active world
- Fashion and Home homes are different compositions sharing the same chrome

---

## 2. Screen inventory (uploaded)

| # | Screen | Role |
|---|---|---|
| 1 | **Unified Navigation** | Spec for desktop + mobile chrome, world switcher, shared account/cart/saved/checkout/support |
| 2 | **Home & Electronics** | Energy-smart living storefront home |
| 3 | **Clothing & Accessories (engagement)** | Fashion home with discovery grid, Lucky Pull, Stylist Recommends |
| 4 | **Clothing & Accessories (canonical home)** | Fashion home hero → value props → category tiles → products → seller CTA → footer |

---

## 3. Unified chrome (from screen 1)

### Desktop header

1. Logo `YINILOW` + star  
2. **World switcher** — `Clothing & Accessories` | `Home & Electronics` (active = yellow fill)  
3. Wide search (world-aware placeholder)  
4. Ghana location · Saved · Account · Cart (badge count)

### Context sub-nav

**Fashion active:** Home · New Drop · Women · Men · Children · Shoes · Bags & Accessories · Dig the Pile · Stock Drop (New)

**Home active:** Home · Living · Tech · Categories · Energy Smart (New) · Stock Drops · (+ Find My Match entry as in Home screen)

### Mobile

- Compact logo + world toggle (`FASHION` / `HOME + TECH`) + notifications  
- Search (+ scan affordance)  
- Bottom nav for active world destinations  

### Unified product promises (must stay true in product)

- One account  
- One cart  
- One saved list  
- One checkout  
- One support center  

---

## 4. Home & Electronics home (screen 2)

**Hero**

- Headline: “Smarter homes. Lower bills. Better living.”  
- CTAs: Shop now (primary black) · Explore categories (secondary)  
- Trust under hero: 1-year warranty · Islandwide/nationwide delivery · Easy returns  
- Optional side promo card (energy savings / Learn more)

**Body**

- Horizontal **category icon rail**: Kitchen, Small Appliances, Cooling & Fans, Home Décor, Laundry, Entertainment, Power & Energy, Smart Home, View all  
- Trust strip: Find My Match prompt · Trusted sellers · Secure payments · 24/7 support · Proudly for Ghana  
- Carousels: **Energy Smart Picks**, **Top Picks**  
- Product card: image on light well · title · GHC price · star rating + review count  

**Footer**

- Brand blurb + socials  
- Shop / Help & Support / About columns  
- Newsletter + App Store / Play  
- Ghana map / delivery cue  
- Terms · Privacy · Cookies  

---

## 5. Clothing & Accessories home (screens 3–4)

**Hero**

- Headline: **DRIP FROM OUR ROOTS**  
- Sub: “Curated thrift. Fresh drops. Real style. Only on YINILOW.”  
- CTAs: SHOP NOW · DIG THE PILE  
- Hero photography (streetwear / models)  
- Stickers/badges: Curated with Care · Support Local Sellers · One Account, One Cart, One Checkout  

**Value row**

- One-of-Ones · Trusted Sellers · Sustainable Choice · Local Love · Secure & Easy  

**Discovery**

- Tile grid: New Drop · Trending Pieces · Shop by Category · Curated Looks · Dig the Pile  

**Engagement (required on fashion home)**

- **Lucky Pull** — spin wheel banner (“Spin. Win. Drip.”)  
- **Stylist Recommends** — personalized picks CTA  

**Products**

- Featured grid/carousel: NEW badge · image · title · GHC price · save heart  

**Lower trust / seller**

- 18+ · Secure & Fair · Live Drops / real-time stock · Easy returns · Ghana delivery  
- **SELL ON YINILOW** CTA  

**Footer** — same structural pattern as Home world (shop/help/about, newsletter, apps, Ghana map)

---

## 6. Component checklist for React

Shared

- `[ ]` `AppHeader` (logo, world switcher, search, Ghana, saved, account, cart)  
- `[ ]` `WorldSwitcher` (persists world in URL or client state; does not clear cart)  
- `[ ]` `ContextSubNav` (config per world)  
- `[ ]` `MobileBottomNav`  
- `[ ]` `ProductCard` (variants: fashion vs home — home shows ratings)  
- `[ ]` `TrustStrip`  
- `[ ]` `SiteFooter`  
- `[ ]` `SellCtaBar`  

Fashion home

- `[ ]` `FashionHero`  
- `[ ]` `DiscoveryTileGrid`  
- `[ ]` `LuckyPullBanner`  
- `[ ]` `StylistRecommendsBanner`  

Home world

- `[ ]` `HomeElectronicsHero`  
- `[ ]` `CategoryIconRail`  
- `[ ]` `ProductCarousel` (Energy Smart / Top Picks)  
- `[ ]` `FindMyMatchEntry`  

---

## 7. Implications vs earlier PRD

| Topic | Update |
|---|---|
| Navigation | World switcher is the primary IA control; implement before deep page work |
| Currency label | UI shows **GHC** in mockups — support display label `GHC` (store as GHS numeric) |
| Home hero trust | “Islandwide delivery” copy may mean Ghana-wide — use design copy; confirm legal wording later |
| Live commerce | Not in these 4 frames; keep LIVE as PRD Phase 4, not first paint |
| Cards | Product cards + discovery tiles are intentional interactive containers — allowed |

---

## 8. Next engineering step

1. Treat this file as UI source of truth  
2. Continue **Phase 0** scaffold with tokens + `AppHeader` / world switcher shell matching screen 1  
3. Phase 1 homes: implement screens 2 and 4 layouts first; layer Lucky Pull / Stylist from screen 3  

---

*End of UX/UI source of truth*
