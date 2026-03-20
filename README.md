# GitHub Issue Finder

A React app for discovering beginner-friendly open source issues across popular JavaScript and TypeScript projects.

## Try it now!

Demo is avaliable at:
https://good-first-issue-wheat.vercel.app/

## What it does

Queries the GitHub GraphQL API to surface open issues from 16 curated repositories, filtered by label. Results are paginated (10 per page) and sorted by most recently updated.

**Tracked repositories** span four categories:

- **UI Libraries** — React, Vue, Svelte, Solid
- **Styling** — Tailwind CSS, Chakra UI, Radix UI, shadcn/ui
- **State & Data** — TanStack Query, Zustand, Pinia, Redux Toolkit
- **Tools** — Vite, ESLint, Prettier, Storybook

**Filter labels:** All, good first issue, help wanted, bug, documentation, enhancement

## Tech stack

- React 19 + Vite
- TanStack React Query (caching, pagination)
- GitHub GraphQL API (`graphql-request`)
- Tailwind CSS v4
