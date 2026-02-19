[![Tests](https://github.com/cowprotocol/cowswap/workflows/CI/badge.svg)](https://github.com/cowprotocol/cowswap/actions/workflows/ci.yml?query=workflow%3ACI)

# Akora Swap Website

This repository hosts the Akora Swap website codebase.

It is structured for efficient local development, configurable runtime behavior, and reliable production build and testing workflows.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Build and Quality Checks](#build-and-quality-checks)
- [Environment Configuration](#environment-configuration)
- [Internationalization](#internationalization)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Technical References](#technical-references)

## Overview

Built on Nx monorepo architecture, the Akora website provides a robust foundation for scalable, maintainable frontend development.

## Project Priorities

- Deliver a consistent Akora-branded user experience
- Provide a stable local development workflow on `localhost:3000`
- Enforce code quality through linting, testing, and type checking
- Keep runtime behavior configurable through environment variables

## What is Akora Swap?

Akora Swap is a DeFi trading interface designed to help users execute token swaps with stronger price outcomes and improved protection against common on-chain execution risks.

At a product level, Akora Swap:

- Enables token swaps across supported networks
- Uses an intent-based execution model instead of forcing a single AMM route
- Relies on solver competition to source efficient settlement paths
- Reduces exposure to adverse MEV patterns (such as front-running and sandwich behavior)
- Supports both standard swaps and advanced order flows where enabled

### How Akora Swap works

1. A user chooses sell token, buy token, and amount.
2. The app prepares an order intent.
3. Solvers compete to fulfill that intent using available liquidity.
4. The best valid settlement is selected and executed.
5. The user receives output tokens according to the final settlement.

### What users can do on the website

- Connect wallets and manage swap/account state
- Review quotes, price impact, and network-cost context
- Execute swap flows and access order-related UX
- Use token utilities such as contract view/copy and buy actions
- Access ecosystem navigation (explorer/help/legal/community), including customized UX behavior configured for this deployment

## Project Structure

- `apps/` — application entry points
- `libs/` — shared packages and UI/domain utilities
- `tools/` — scripts and workspace helpers
- `testing/` — testing mocks and support files

## Prerequisites

- Node.js (repo-compatible version)
- `pnpm` (workspace uses `pnpm@10.28.2`)

## Getting Started

Install dependencies from repository root:

```bash
pnpm install
```

Run the website locally:

```bash
pnpm start
```

The app starts at:

- `http://localhost:3000`

## Development Commands

Core website commands:

```bash
# Start local development server
pnpm start

# Alternative explicit command
pnpm run start:cowswap
```

Additional useful app commands (same workspace):

```bash
pnpm run start:explorer
pnpm run start:cowfi
pnpm run start:widget
pnpm run start:sdk-tools
pnpm run start:cosmos
pnpm run start:cosmos:explorer
```

## Build and Quality Checks

Build website production assets:

```bash
pnpm run build:cowswap
```

Run quality checks:

```bash
pnpm run lint
pnpm run test
pnpm run typecheck
```

Run a specific Nx target (example):

```bash
pnpm nx run cowswap-frontend:lint
```

## Environment Configuration

Use local environment files (for example `.env.local`) to configure runtime values.

Common configuration keys:

- RPC endpoints (`REACT_APP_NETWORK_URL_*`)
- Orderbook API (`REACT_APP_ORDER_BOOK_URLS`)
- BFF API (`REACT_APP_BFF_BASE_URL`)
- CMS API (`REACT_APP_CMS_BASE_URL`)

## Internationalization

Generate/update i18n artifacts:

```bash
pnpm run i18n
```

## Testing

Run all tests:

```bash
pnpm run test
```

Run E2E with dev server:

```bash
# Terminal 1
pnpm start

# Terminal 2
pnpm run e2e
```

Open Cypress UI:

```bash
# Terminal 1
npx nx run cowswap-frontend:serve-static --port 3000

# Terminal 2
pnpm run e2e:open
```

## Troubleshooting

### Server does not start

1. Ensure dependencies are installed (`pnpm install`)
2. Verify Node and pnpm versions
3. Retry with clean terminal session

### Port conflicts

If `3000` is occupied, stop the conflicting process or update the start command/environment.

### Service worker cache issues

Emergency cache reset helper:

- `apps/Akoraswap-frontend/public/emergency.js`

## Technical References

- `docs/architecture-overview.md`
- `libs/common-utils/src/amountFormat/README.md`
- `libs/abis/README.md`

