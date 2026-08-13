# Graph Report - YINILOW  (2026-08-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 161 nodes · 227 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `33d970c9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 10

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `AppConfig` - 14 edges
4. `ApiRouter` - 11 edges
5. `MainVerticle` - 6 edges
6. `FlywayMigrator` - 5 edges
7. `useWorld()` - 5 edges
8. `ProductCard()` - 5 edges
9. `scripts` - 5 edges
10. `WorldId` - 4 edges

## Surprising Connections (you probably didn't know these)
- `MainVerticle` --references--> `AppConfig`  [EXTRACTED]
  apps/api/src/main/java/com/yinilow/MainVerticle.java → apps/api/src/main/java/com/yinilow/config/AppConfig.java
- `WorldContextValue` --references--> `WorldConfig`  [EXTRACTED]
  apps/web/src/shared/world/WorldContext.tsx → apps/web/src/shared/world/worlds.ts
- `WorldContextValue` --references--> `WorldId`  [EXTRACTED]
  apps/web/src/shared/world/WorldContext.tsx → apps/web/src/shared/world/worlds.ts
- `AppHeader()` --calls--> `useWorld()`  [EXTRACTED]
  apps/web/src/shared/components/AppHeader.tsx → apps/web/src/shared/world/WorldContext.tsx
- `WorldSwitcher()` --calls--> `useWorld()`  [EXTRACTED]
  apps/web/src/shared/components/WorldSwitcher.tsx → apps/web/src/shared/world/WorldContext.tsx

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (12): AppConfig, DatabaseParts, FlywayMigrator, ApiRouter, Main, MainVerticle, io.vertx.core.AbstractVerticle, io.vertx.core.Promise (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (23): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (13): App(), AppRoutes(), AppHeader(), SiteFooter(), WorldSwitcher(), useWorld(), WorldContext, WorldContextValue (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.20
Nodes (13): FashionHomePage(), TILES, CATEGORY_ICONS, HomeElectronicsPage(), PlaceholderPage(), ProductCard(), FASHION_PRODUCTS, formatFashionPrice() (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (16): dependencies, react, react-dom, react-router-dom, name, private, scripts, build (+8 more)

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (13): devDependencies, oxlint, @types/node, @types/react, @types/react-dom, vite, @vitejs/plugin-react, oxlint (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (10): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, typescript, oxc, react (+2 more)

## Knowledge Gaps
- **62 isolated node(s):** `NavItem`, `allowArbitraryExtensions`, `allowImportingTsExtensions`, `erasableSyntaxOnly`, `jsx` (+57 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 6` to `Community 5`, `Community 7`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `react` connect `Community 7` to `Community 3`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **What connects `NavItem`, `allowArbitraryExtensions`, `allowImportingTsExtensions` to the rest of the system?**
  _62 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1268939393939394 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._