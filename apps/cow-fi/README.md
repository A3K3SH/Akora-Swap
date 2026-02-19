# Akora Protocol Website (`cow-fi`)

Developer guide for running and working on the `apps/cow-fi` app inside the monorepo.

## Prerequisites

- Node.js (version compatible with the repository)
- `pnpm` (repo uses `pnpm@10.28.2`)

## Install dependencies

Run from repository root:

```bash
pnpm install
```

## Run locally (development)

Run from repository root:

```bash
pnpm run start:cowfi
```

This starts the `cow-fi` app through Nx (default port configured by the workspace script).

## Build

Run from repository root:

```bash
pnpm run build:cowfi
```

This executes the app build and post-build sitemap step.

## Lint

Run only `cow-fi` lint target:

```bash
pnpm nx run cow-fi:lint
```

Or lint the whole workspace:

```bash
pnpm run lint
```

## Test

Run only `cow-fi` tests:

```bash
pnpm nx run cow-fi:test
```

Or run all workspace tests:

```bash
pnpm run test
```

## Internationalization

Run workspace i18n tasks:

```bash
pnpm run i18n
```

## Useful paths

- App root: `apps/cow-fi/`
- Project configuration: `apps/cow-fi/project.json`
- Next.js config: `apps/cow-fi/next.config.ts`
