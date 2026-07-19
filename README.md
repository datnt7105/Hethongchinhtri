# Vietnam Political System Explorer

Phase 1 frontend for an interactive, bilingual introduction to Vietnam's political system and state apparatus.

## Phase 1 scope

- Next.js App Router with equivalent Vietnamese and English routes.
- Light, dark, and system themes; responsive desktop and mobile navigation.
- Typed, statically validated entity, relationship, graph, timeline, glossary, and legal-source data.
- Four interactive React Flow views: political system, state-apparatus overview, central state apparatus, and local government.
- Graph filtering, node details, edge explanations, source references, zoom controls, and accessible HTML alternatives.
- Detailed entity pages with structure, formation, term, accountability, relationships, and official-source references.
- Searchable glossary, filterable constitutional and administrative-reform timeline, and interactive conceptual administrative map.
- Legal-source library, about page, breadcrumbs, localized metadata, and source-aware educational disclaimers.

## Local commands

```bash
pnpm install
pnpm dev
```

For a production build:

```bash
pnpm typecheck
pnpm build
pnpm start
```

Open `http://127.0.0.1:3000/vi` for Vietnamese or `http://127.0.0.1:3000/en` for English.

Phase 1 is a frontend-only educational product. It intentionally excludes a backend, database, authentication, admin dashboard, quiz, and current officeholders.
