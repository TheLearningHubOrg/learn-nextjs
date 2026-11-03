# Learn Next.js 🚀

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js Version](https://img.shields.io/badge/Next.js-16.4+-000000.svg?logo=nextdotjs)](https://nextjs.org/)
[![CI](https://github.com/TheLearningHubOrg/learn-nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/TheLearningHubOrg/learn-nextjs/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/TheLearningHubOrg/learn-nextjs)](https://github.com/TheLearningHubOrg/learn-nextjs/releases)
[![React](https://img.shields.io/badge/React-19.2+-61DAFB.svg?logo=react&logoColor=000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)

**From your first `create-next-app` to staff-level full-stack engineering with Next.js 16 and React 19.**  
App Router, Server Components, Server Actions, Cache Components and Partial Prerendering, Route Handlers, `proxy.ts`, testing with Vitest, and production Docker builds.

[Getting Started](#1-stage-1-foundations-toolchain-project-anatomy--react-essentials) • [App Router](#2-stage-2-app-router-file-conventions-routing-layouts--navigation) • [Server Components & Actions](#3-stage-3-server-components-data-fetching-server-actions--route-handlers) • [Data & Auth](#4-stage-4-data-layer-authentication-state-styling--assets) • [Caching & Security](#5-stage-5-caching-performance-security--platform-services) • [Testing & Deployment](#6-stage-6-testing-deployment--architecture-patterns) • [Interview Prep](#7-stage-7-staff-nextjs-full-stack-engineer-interview-handbook--cheatsheet)

<br/>

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="180">
</a>

</div>

---

## 🗺️ 7-Stage Pedagogical Roadmap

Every code example in this guide is **TypeScript**. Next.js is a React framework, `create-next-app` scaffolds TypeScript by default, and the framework ships its own types (`NextConfig`, `Metadata`, `NextRequest`, the generated `PageProps` helpers), so TypeScript is the native language for the topic. The starter project at the repo root is a Next.js 16 App Router app with Vitest tests; Stages 1-3 walk through it file by file.

```mermaid
flowchart LR
    S1["Stage 1: Foundations"] --> S2["Stage 2: App Router"]
    S2 --> S3["Stage 3: Server Components and Actions"]
    S3 --> S4["Stage 4: Data, Auth, Styling"]
    S4 --> S5["Stage 5: Caching, Performance, Security"]
    S5 --> S6["Stage 6: Testing and Deployment"]
    S6 --> M["Masterclasses M1-M10"]
    M --> S7["Stage 7: Staff Interview Handbook"]
```

| Stage | Focus Domain | Core Concepts & Engineering Outcomes |
| :--- | :--- | :--- |
| **Stage 1** | **Foundations: Toolchain, Project Anatomy & React Essentials** | `create-next-app`, Node 20.9+, Turbopack as the default bundler, `next dev` / `next build` / `next start`, `next.config.ts`, the `app/` tree, reading the `○ ● ƒ` build legend, JSX, props, state, hooks, TypeScript for props and params. Outcome: run, read and modify the starter project. |
| **Stage 2** | **App Router: File Conventions, Routing, Layouts & Navigation** | `layout.tsx`, `page.tsx`, `template.tsx`, `loading.tsx`, `error.tsx` with `retry()`, `not-found.tsx`, `[slug]`, `[...slug]`, `[[...slug]]`, `generateStaticParams`, route groups, `@slot` parallel routes, `(.)` interception, `<Link>`, `useRouter`, `redirect()`, `generateMetadata`. Outcome: model any URL structure as folders. |
| **Stage 3** | **Server Components, Data Fetching, Server Actions & Route Handlers** | `'use client'` boundaries, serializable props, async Server Components, `React.cache`, `fetch` caching options, `connection()`, `"use cache"` + `cacheLife` + `cacheTag`, `<Suspense>` streaming, `'use server'`, `useActionState`, `useOptimistic`, `revalidatePath` / `revalidateTag` / `updateTag`, `route.ts`, `proxy.ts`. Outcome: read and write data end to end without a separate API server. |
| **Stage 4** | **Data Layer, Authentication, State, Styling & Assets** | Auth.js and Better Auth, RBAC, Prisma and Drizzle, Zustand, Tailwind CSS and shadcn/ui, `next/image`, `next/font`, metadata files, internationalised routing. |
| **Stage 5** | **Caching, Performance, Security & Platform Services** | Tag-based revalidation, Turbopack and lazy loading, CSP and security headers, environment variables, uploads, email, realtime, background jobs, payments, AI streaming, analytics. |
| **Stage 6** | **Testing, Deployment & Architecture Patterns** | Vitest, React Testing Library, Playwright, `output: 'standalone'` Docker images, Nginx in front of Next.js, repository and service layers, the libraries most teams reach for. |
| **Masterclasses** | **React internals, runtime and TypeScript, App Router internals, security, data engineering, accessibility and SEO, production subsystems, DevOps, large-scale architecture, flagship builds** | Fiber and the React Compiler, the Flight protocol, cache layers, PKCE and RBAC, PostgreSQL pooling and isolation levels, WCAG 2.2, Stripe webhooks, OpenTelemetry, Turborepo, CQRS, complete projects. |
| **Stage 7** | **Staff Interview Handbook** | 60+ interview Q&As across core concepts, internals, architecture and debugging scenarios, plus a staff cheatsheet. |

---

## 🆕 Next.js Versions, What's New & Migration

### V.1 Release Timeline

```mermaid
timeline
    title Next.js releases that shape this guide
    section 13.0 (Oct 2022)
      App Router beta : Server Components, nested layouts, Turbopack alpha
    section 14.0 (Oct 2023)
      Server Actions stable : Forms that mutate without an API route
    section 15.0 (Oct 2024)
      React 19 and async request APIs : params, cookies and headers become promises
    section 16.0 (Oct 2025)
      Turbopack default : proxy.ts replaces middleware.ts, Cache Components stable
    section 16.2 (Mar 2026)
      Error recovery : unstable_retry and unstable_catchError land
    section 16.3 (Aug 2026)
      Stabilised APIs : retry, catchError, io(), next/root-params
    section 16.4 (Oct 2026)
      Static guarantees : ensureStatic, navigation(), prefetch(), next analyze export
```

A shorter history of the framework, kept from the earlier edition of this guide:

| Version | Year | What it introduced |
| :--- | :--- | :--- |
| 1.0 | 2016 | Zero-config server rendering for React |
| 9.0 | 2019 | File-based dynamic routes, API routes, automatic static optimisation |
| 12.0 | 2021 | SWC (Rust) compiler, Middleware, React 18 support |
| 13.0 | 2022 | App Router and React Server Components (beta), Turbopack alpha |
| 14.0 | 2023 | Server Actions stable, Partial Prerendering preview |
| 15.0 | 2024 | React 19, async request APIs, `fetch` no longer cached by default, Turbopack stable for `next dev` |
| 16.0 | 2025 | Turbopack default for dev and build, `proxy.ts`, Cache Components, React Compiler support stable, `next lint` removed |

### V.2 Compatibility Matrix

| Next.js | Released | Support | Node.js | React | TypeScript | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 16.4 | Oct 2026 | current stable | 20.9+ (22 or 24 LTS recommended) | 19.2+ (App Router bundles a React canary) | 5.1+ | Turbopack for dev and build; this guide and the starter target it |
| 16.0-16.3 | Oct 2025 - Aug 2026 | upgrade to the latest 16.x | 20.9+ | 19.2 | 5.1+ | Minor releases are backwards compatible; upgrade within 16.x freely |
| 15.x | Oct 2024 | security fixes only, see the official support policy | 18.18+ | 19.0 | 5.1+ | Synchronous `params` and `cookies()` still worked with a warning |
| 14.x | Oct 2023 | end of life | 18.17+ | 18.2 | 4.5+ | Pages Router and early App Router; no React 19 |

Browser floor for Next.js 16: Chrome 111+, Edge 111+, Firefox 111+, Safari 16.4+.

### V.3 What's New in Next.js 16 (current stable 16.4)

#### Turbopack is the default bundler

`next dev` and `next build` both use Turbopack. The `--turbopack` flag is gone; use `--webpack` to opt out while a webpack-only plugin is migrated.

```bash
# Next.js 15
next dev --turbopack
next build            # webpack

# Next.js 16
next dev              # Turbopack
next build            # Turbopack
next build --webpack  # explicit opt-out
```

Custom Turbopack options moved from `experimental.turbo` to the top-level `turbopack` key in `next.config.ts`.

#### `middleware.ts` is renamed to `proxy.ts`

The file and the exported function are renamed to describe what the code does: it sits in front of the app and can rewrite, redirect or decorate requests. `proxy.ts` always runs on the Node.js runtime. Projects that must stay on the Edge runtime can keep `middleware.ts` for now; it is deprecated.

```ts
// Before: middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// After: proxy.ts
import { NextResponse, type NextRequest } from 'next/server';
export function proxy(request: NextRequest) {
  return NextResponse.next();
}
```

#### Cache Components: `"use cache"`, `cacheLife`, `cacheTag` and Partial Prerendering

One flag, `cacheComponents: true`, replaces `experimental.ppr`, `experimental.dynamicIO` and `experimental.useCache`. Data is dynamic by default; you mark what may be cached, and every route is prerendered into a static shell with `<Suspense>` holes that stream at request time.

```ts
// Before (15.x canary)
const nextConfig = { experimental: { ppr: 'incremental', dynamicIO: true } };
// and in a page: export const experimental_ppr = true;

// After (16.x)
const nextConfig = { cacheComponents: true, partialPrefetching: true };
```

```tsx
import { cacheLife, cacheTag } from 'next/cache'; // no unstable_ prefix any more

export async function getCourses() {
  'use cache';
  cacheLife('hours');
  cacheTag('courses');
  return db.course.findMany();
}
```

#### New invalidation APIs: `updateTag`, `refresh` and a required profile on `revalidateTag`

```ts
'use server';
import { refresh, revalidateTag, updateTag } from 'next/cache';

export async function publishCourse(id: string) {
  await db.course.publish(id);
  updateTag(`course-${id}`);       // read-your-writes: expire now, next render waits for fresh data
  revalidateTag('catalogue', 'max'); // stale-while-revalidate: readers get stale data while it refreshes
  refresh();                        // re-render the client router without touching the data cache
}
```

The one-argument `revalidateTag('catalogue')` still runs but is deprecated and fails type-checking.

#### Request APIs are async only

The synchronous compatibility layer from 15.x is removed. `params`, `searchParams`, `cookies()`, `headers()` and `draftMode()` must be awaited. `npx next typegen` generates global `PageProps<'/route'>` and `LayoutProps<'/route'>` helpers.

```tsx
// Before: worked in 15 with a warning
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}

// After
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  return <h1>{slug}</h1>;
}
```

#### React Compiler support is stable

`reactCompiler` moved out of `experimental`. It needs `babel-plugin-react-compiler` and is off by default because it lengthens builds.

```ts
// Before
const nextConfig = { experimental: { reactCompiler: true } };
// After
const nextConfig = { reactCompiler: true };
```

#### React 19.2: View Transitions, `<Activity>` and `useEffectEvent`

With Cache Components enabled, the router keeps recently visited routes mounted inside `<Activity mode="hidden">`, so form input and scroll state survive a back navigation. `useEffectEvent` lets an effect read the latest props without re-subscribing.

```tsx
'use client';
import { useEffect, useEffectEvent } from 'react';

export function ChatRoom({ roomId, theme }: { roomId: string; theme: string }) {
  // Before: theme had to be in the dependency list, so changing it reconnected the socket.
  const onConnected = useEffectEvent(() => showToast(`Connected (${theme})`));
  useEffect(() => {
    const socket = connect(roomId);
    socket.on('open', () => onConnected());
    return () => socket.close();
  }, [roomId]); // theme is read through the effect event, not a dependency
  return null;
}
declare function connect(id: string): { on(e: string, f: () => void): void; close(): void };
declare function showToast(text: string): void;
```

#### Error recovery: `retry()` and `catchError` (16.3)

`error.tsx` now receives `retry()`, which re-fetches and re-renders the failed segment inside a transition. The older `reset()` only re-renders. `catchError` from `next/error` builds a component-level error boundary that understands `redirect()` and `notFound()`.

```tsx
// Before
export default function Error({ reset }: { reset: () => void }) {
  return <button onClick={() => reset()}>Try again</button>;
}
// After
export default function Error({ retry }: { retry: () => void }) {
  return <button onClick={() => retry()}>Try again</button>;
}
```

#### `io()`, `next/root-params`, `ensureStatic`, `navigation()` and `prefetch()` (16.3-16.4, Cache Components only)

`await io()` tells the prerenderer that non-deterministic work follows (`new Date()`, `Math.random()`, a synchronous driver), so that work moves out of the static shell. `ensureStatic`, exported from a page or layout, fails the build if output that must stay static starts depending on the request. `navigation()` and `prefetch()` (used with `partialPrefetching`) decide which work runs during a link prefetch and which waits for the click. `next/root-params` (16.3) exposes the params of the root segment, such as `[lang]` in `app/[lang]/layout.tsx`, to any server code without passing them down as props.

```tsx
// app/blog/layout.tsx: a later change that reads cookies() here breaks the build, not production
export const ensureStatic = 'navigation';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
```

```tsx
// app/clock/page.tsx
import { Suspense } from 'react';
import { io } from 'next/cache';

async function ServerTime() {
  await io(); // without this, the prerender would freeze one timestamp into the shell
  return <time>{new Date().toISOString()}</time>;
}

export default function Page() {
  return (
    <Suspense fallback={<span>...</span>}>
      <ServerTime />
    </Suspense>
  );
}
```

#### Tooling: ESLint flat config, `next upgrade`, `next analyze export`

`next lint` is removed; run the ESLint CLI with `eslint-config-next` in `eslint.config.mjs` (the starter project shows the file). `next upgrade` (16.1) bumps Next.js and React together, and `next analyze export` (16.4) writes a bundle analysis you can diff in CI.

### V.4 Migration Guide (15.x → 16.x)

```bash
# 1. Confirm the runtime floor
node --version                      # must be >= 20.9.0

# 2. Run the upgrade codemod: bumps packages, renames middleware -> proxy,
#    moves turbopack config, removes unstable_ prefixes and experimental_ppr
npx @next/codemod@canary upgrade latest

# 3. Finish the async request API migration if the app still reads params synchronously
npx @next/codemod@canary next-async-request-api .

# 4. Generate the PageProps / LayoutProps helpers and type-check
npx next typegen
npx tsc --noEmit

# 5. Replace `next lint` with the ESLint CLI
npm install -D eslint eslint-config-next
npx eslint .

# 6. Build with Turbopack and read the route table
npx next build
```

Manual follow-ups the codemod cannot decide for you:

1. Add the missing profile to every `revalidateTag(tag)` call: `'max'` for stale-while-revalidate, or switch to `updateTag(tag)` inside a Server Action when the user must see their own write.
2. Add an explicit `default.tsx` to every parallel route slot. Builds now fail without one.
3. Review `next/image`: the default `minimumCacheTTL` is now 4 hours, `images.qualities` defaults to `[75]`, local images with query strings need `images.localPatterns`, and optimising images on private IPs needs `dangerouslyAllowLocalIP`.
4. If you used the 15.x `experimental.ppr` flag, migrate to `cacheComponents` route by route; the semantics differ (data is uncached until you add `"use cache"`).

### V.5 Deprecations & Breaking Changes

| Version | Deprecated / removed | Replacement | What breaks and how to fix it |
| --- | --- | --- | --- |
| 16.0 | Synchronous `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` | `await` the promise | Type errors and runtime errors such as `params.slug is undefined`. Run the async codemod. |
| 16.0 | `middleware.ts` and `export function middleware` | `proxy.ts` and `export function proxy` | Still works with a deprecation warning; Edge runtime is only available in `middleware.ts`. |
| 16.0 | `experimental.ppr`, `experimental_ppr` segment export, `experimental.dynamicIO`, `experimental.useCache` | `cacheComponents: true` | Build fails on the removed keys. |
| 16.0 | `revalidateTag(tag)` with one argument | `revalidateTag(tag, 'max')` or `updateTag(tag)` | TypeScript error; runtime still revalidates. |
| 16.0 | `unstable_cacheLife`, `unstable_cacheTag` | `cacheLife`, `cacheTag` | Old names removed; update imports. |
| 16.0 | `next lint` command, `eslint` key in `next.config` | ESLint CLI with flat config | `next build` no longer lints; add a `lint` script. |
| 16.0 | AMP support (`next/amp`, `amp` config) | None | Remove AMP pages. |
| 16.0 | `serverRuntimeConfig`, `publicRuntimeConfig` | Environment variables (`process.env`, `NEXT_PUBLIC_*`) | Config values read at runtime must move to env vars. |
| 16.0 | Parallel route slots without `default.tsx` | Add `default.tsx` returning `null` or `notFound()` | Build error on hard navigation to the slot. |
| 16.0 | `next/legacy/image`, `images.domains` | `next/image`, `images.remotePatterns` | Deprecation warnings. |
| 16.0 | `experimental.turbo`, `--turbopack` flag | `turbopack` key; Turbopack is default | Unknown-flag warnings. |
| 16.3 | `unstable_retry`, `unstable_catchError` | `retry`, `catchError` | Rename imports and props. |
| 16.x | `export const runtime = 'edge'` | Node.js runtime (default) | Not supported with `cacheComponents`; Edge remains for apps that do not enable it. |

---

## 📋 Table of Contents

- [🆕 Next.js Versions, What's New & Migration](#-nextjs-versions-whats-new--migration)
  - [V.1 Release Timeline](#v1-release-timeline)
  - [V.2 Compatibility Matrix](#v2-compatibility-matrix)
  - [V.3 What's New in Next.js 16 (current stable 16.4)](#v3-whats-new-in-nextjs-16-current-stable-164)
  - [V.4 Migration Guide (15.x → 16.x)](#v4-migration-guide-15x--16x)
  - [V.5 Deprecations & Breaking Changes](#v5-deprecations--breaking-changes)
- [1. Stage 1: Foundations: Toolchain, Project Anatomy & React Essentials](#1-stage-1-foundations-toolchain-project-anatomy--react-essentials)
  - [1.1 What Next.js Is and the Problem It Solves](#11-what-nextjs-is-and-the-problem-it-solves)
  - [1.2 Installation, Toolchain & First Run](#12-installation-toolchain--first-run)
  - [1.3 Project Anatomy: Files, Folders & Configuration](#13-project-anatomy-files-folders--configuration)
  - [1.4 Line-by-Line Breakdown of the Starter Project](#14-line-by-line-breakdown-of-the-starter-project)
  - [1.5 The Rendering Model: Server, Client, Static & Dynamic](#15-the-rendering-model-server-client-static--dynamic)
  - [1.6 React Essentials for Next.js](#16-react-essentials-for-nextjs)
  - [1.7 TypeScript & Modern JavaScript Essentials](#17-typescript--modern-javascript-essentials)
  - [1.8 The Development Loop: Fast Refresh, Errors & Debugging](#18-the-development-loop-fast-refresh-errors--debugging)
  - [1.9 Pitfalls](#19-pitfalls)
  - [1.10 Best Practices](#110-best-practices)
  - [1.11 Hands-on Exercise](#111-hands-on-exercise)
- [2. Stage 2: App Router: File Conventions, Routing, Layouts & Navigation](#2-stage-2-app-router-file-conventions-routing-layouts--navigation)
  - [2.1 The app Directory and Route Segments](#21-the-app-directory-and-route-segments)
  - [2.2 Layouts, Pages and Templates](#22-layouts-pages-and-templates)
  - [2.3 Loading, Error, Not Found and Global Error Boundaries](#23-loading-error-not-found-and-global-error-boundaries)
  - [2.4 Dynamic Routes, Catch-all Segments and generateStaticParams](#24-dynamic-routes-catch-all-segments-and-generatestaticparams)
  - [2.5 Route Groups, Private Folders and Multiple Root Layouts](#25-route-groups-private-folders-and-multiple-root-layouts)
  - [2.6 Parallel and Intercepting Routes](#26-parallel-and-intercepting-routes)
  - [2.7 Linking and Navigating](#27-linking-and-navigating)
  - [2.8 Metadata, generateMetadata and Route Segment Config](#28-metadata-generatemetadata-and-route-segment-config)
  - [2.9 Pitfalls](#29-pitfalls)
  - [2.10 Best Practices](#210-best-practices)
  - [2.11 Hands-on Exercise](#211-hands-on-exercise)
- [3. Stage 3: Server Components, Data Fetching, Server Actions & Route Handlers](#3-stage-3-server-components-data-fetching-server-actions--route-handlers)
  - [3.1 Server Components: Mental Model, Benefits and Limits](#31-server-components-mental-model-benefits-and-limits)
  - [3.2 Client Components and the 'use client' Boundary](#32-client-components-and-the-use-client-boundary)
  - [3.3 Fetching Data in Server Components](#33-fetching-data-in-server-components)
  - [3.4 Rendering Strategies: Static, Dynamic, ISR and Streaming](#34-rendering-strategies-static-dynamic-isr-and-streaming)
  - [3.5 Cache Components: "use cache", cacheLife, cacheTag and Partial Prerendering](#35-cache-components-use-cache-cachelife-cachetag-and-partial-prerendering)
  - [3.6 Server Actions: Mutations, Forms and Revalidation](#36-server-actions-mutations-forms-and-revalidation)
  - [3.7 Optimistic UI and Pending States](#37-optimistic-ui-and-pending-states)
  - [3.8 Forms: Progressive Enhancement, next/form and Client Validation](#38-forms-progressive-enhancement-nextform-and-client-validation)
  - [3.9 Route Handlers](#39-route-handlers)
  - [3.10 Proxy (formerly Middleware)](#310-proxy-formerly-middleware)
  - [3.11 Pitfalls](#311-pitfalls)
  - [3.12 Best Practices](#312-best-practices)
  - [3.13 Hands-on Exercise](#313-hands-on-exercise)
- [4. Stage 4: Data Layer, Authentication, State, Styling & Assets](#4-stage-4-data-layer-authentication-state-styling--assets)
  - [4.1 How the Pieces Fit](#41-how-the-pieces-fit)
  - [4.2 Authentication with Auth.js and Better Auth](#42-authentication-with-authjs-and-better-auth)
  - [4.3 Authorization](#43-authorization)
  - [4.4 Database & ORM](#44-database--orm)
  - [4.5 State Management](#45-state-management)
  - [4.6 Styling & UI Libraries](#46-styling--ui-libraries)
  - [4.7 Images with next/image](#47-images-with-nextimage)
  - [4.8 Fonts with next/font](#48-fonts-with-nextfont)
  - [4.9 Metadata and SEO](#49-metadata-and-seo)
  - [4.10 Internationalization (i18n)](#410-internationalization-i18n)
  - [4.11 Pitfalls](#411-pitfalls)
  - [4.12 Best Practices](#412-best-practices)
  - [4.13 Hands-on Exercise](#413-hands-on-exercise)
- [5. Stage 5: Caching, Performance, Security & Platform Services](#5-stage-5-caching-performance-security--platform-services)
  - [5.1 Cache Layers and On-Demand Revalidation](#51-cache-layers-and-on-demand-revalidation)
  - [5.2 Performance](#52-performance)
  - [5.3 Security](#53-security)
  - [5.4 Environment Variables](#54-environment-variables)
  - [5.5 File Upload](#55-file-upload)
  - [5.6 Emails](#56-emails)
  - [5.7 Realtime](#57-realtime)
  - [5.8 Background Jobs](#58-background-jobs)
  - [5.9 Payments](#59-payments)
  - [5.10 AI Integration](#510-ai-integration)
  - [5.11 Analytics](#511-analytics)
  - [5.12 Pitfalls](#512-pitfalls)
  - [5.13 Best Practices](#513-best-practices)
  - [5.14 Hands-on Exercise](#514-hands-on-exercise)
- [6. Stage 6: Testing, Deployment & Architecture Patterns](#6-stage-6-testing-deployment--architecture-patterns)
  - [6.1 Choosing What to Test Where](#61-choosing-what-to-test-where)
  - [6.2 Unit, Component and End-to-End Testing](#62-unit-component-and-end-to-end-testing)
  - [6.3 Deployment](#63-deployment)
  - [6.4 Production Engineering Guidelines](#64-production-engineering-guidelines)
  - [6.5 Design Patterns](#65-design-patterns)
  - [6.6 Common Libraries](#66-common-libraries)
  - [6.7 Pitfalls](#67-pitfalls)
  - [6.8 Best Practices](#68-best-practices)
  - [6.9 Hands-on Exercise](#69-hands-on-exercise)
- [M1. Masterclass: React 19 Internals, Fiber and the React Compiler](#m1-masterclass-react-19-internals-fiber-and-the-react-compiler)
  - [M1.1 The React Rendering Model, Fiber Architecture & the React Compiler](#m11-the-react-rendering-model-fiber-architecture--the-react-compiler)
  - [M1.2 React 19 Core: Complete API Reference, Document Metadata & Asset Loading](#m12-react-19-core-complete-api-reference-document-metadata--asset-loading)
  - [M1.3 React 18 to React 19 Migration: Deprecations & Removed APIs](#m13-react-18-to-react-19-migration-deprecations--removed-apis)
  - [M1.4 React Compiler Diagnostics, Debugging & Performance Profiling](#m14-react-compiler-diagnostics-debugging--performance-profiling)
  - [M1.5 Advanced Built-In Hooks: `useReducer`, `useId`, `useImperativeHandle` & `useInsertionEffect`](#m15-advanced-built-in-hooks-usereducer-useid-useimperativehandle--useinsertioneffect)
  - [M1.6 Complete Hooks Architecture: `useReducer`, `useDeferredValue` & Custom Composition](#m16-complete-hooks-architecture-usereducer-usedeferredvalue--custom-composition)
  - [M1.7 Production Custom Hooks Library (15 Complete Enterprise Hooks)](#m17-production-custom-hooks-library-15-complete-enterprise-hooks)
- [M2. Masterclass: JavaScript Runtime, TypeScript and the Web Platform](#m2-masterclass-javascript-runtime-typescript-and-the-web-platform)
  - [M2.1 Advanced JavaScript Runtime, TypeScript Mastery & Web Platform Architecture](#m21-advanced-javascript-runtime-typescript-mastery--web-platform-architecture)
  - [M2.2 Advanced TypeScript Patterns for Next.js 16: Generics, Mapped Types & ComponentProps](#m22-advanced-typescript-patterns-for-nextjs-16-generics-mapped-types--componentprops)
  - [M2.3 Deep JavaScript Fundamentals: Execution Contexts, Prototypal Inheritance & Event Propagation](#m23-deep-javascript-fundamentals-execution-contexts-prototypal-inheritance--event-propagation)
  - [M2.4 Advanced TypeScript Mastery for Next.js 16: Type Narrowing, `infer` & Mapped Types](#m24-advanced-typescript-mastery-for-nextjs-16-type-narrowing-infer--mapped-types)
  - [M2.5 HTTP/3 & QUIC Reverse Proxy Architecture with Cloudflare & Nginx](#m25-http3--quic-reverse-proxy-architecture-with-cloudflare--nginx)
- [M3. Masterclass: App Router Internals: Flight, Caching and Partial Prerendering](#m3-masterclass-app-router-internals-flight-caching-and-partial-prerendering)
  - [M3.1 App Router Conventions, Flight Architecture & Partial Prerendering (PPR)](#m31-app-router-conventions-flight-architecture--partial-prerendering-ppr)
  - [M3.2 Server Actions, Asynchronous Data Pipelines & The Next.js 16 Caching Architecture](#m32-server-actions-asynchronous-data-pipelines--the-nextjs-16-caching-architecture)
  - [M3.3 Multi-Layer Caching Architecture: Stale-While-Revalidate & Cache Stampede Protection](#m33-multi-layer-caching-architecture-stale-while-revalidate--cache-stampede-protection)
  - [M3.4 App Router Dynamic Segments, Catch-All & Optional Catch-All Routes](#m34-app-router-dynamic-segments-catch-all--optional-catch-all-routes)
  - [M3.5 Complete Next.js 16 Route Segment Configuration Master Matrix](#m35-complete-nextjs-16-route-segment-configuration-master-matrix)
  - [M3.6 Client-Side Navigation Architecture: `usePathname`, `useSearchParams` & Blockers](#m36-client-side-navigation-architecture-usepathname-usesearchparams--blockers)
  - [M3.7 Full-Stack State Synchronization: React 19 Actions + Optimistic Rollback](#m37-full-stack-state-synchronization-react-19-actions--optimistic-rollback)
- [M4. Masterclass: Proxy, Authentication, Authorization and Security](#m4-masterclass-proxy-authentication-authorization-and-security)
  - [M4.1 From Middleware to Proxy, Authentication, Authorization & Security](#m41-from-middleware-to-proxy-authentication-authorization--security)
  - [M4.2 Enterprise Full-Stack Security Curriculum & Threat Mitigation](#m42-enterprise-full-stack-security-curriculum--threat-mitigation)
  - [M4.3 Full-Stack Authentication: NextAuth.js / Better Auth Integration](#m43-full-stack-authentication-nextauthjs--better-auth-integration)
  - [M4.4 Generic HMAC-SHA256 Webhook Verification Engine](#m44-generic-hmac-sha256-webhook-verification-engine)
- [M5. Masterclass: Data Engineering: PostgreSQL, ORMs and State](#m5-masterclass-data-engineering-postgresql-orms-and-state)
  - [M5.1 Database Engineering, ORMs (Prisma & Drizzle), State Management & Design Systems](#m51-database-engineering-orms-prisma--drizzle-state-management--design-systems)
  - [M5.2 Deep Dive: PostgreSQL Indexing, EXPLAIN Query Plans & Serverless Connection Pooling](#m52-deep-dive-postgresql-indexing-explain-query-plans--serverless-connection-pooling)
  - [M5.3 Database Engineering: ACID Transaction Isolation Levels & Concurrency Anomalies](#m53-database-engineering-acid-transaction-isolation-levels--concurrency-anomalies)
  - [M5.4 State Management Deep Dive: Redux Toolkit, Zustand, Jotai & XState](#m54-state-management-deep-dive-redux-toolkit-zustand-jotai--xstate)
  - [M5.5 Comprehensive PostgreSQL Relational Schema (Multi-Tenant E-Commerce)](#m55-comprehensive-postgresql-relational-schema-multi-tenant-e-commerce)
  - [M5.6 Production PostgreSQL Full-Text Search (FTS) Pipeline](#m56-production-postgresql-full-text-search-fts-pipeline)
  - [M5.7 Database Branching Workflows for Ephemeral Preview Environments](#m57-database-branching-workflows-for-ephemeral-preview-environments)
  - [M5.8 Enterprise Disaster Recovery: RPO, RTO & Point-In-Time Recovery (PITR)](#m58-enterprise-disaster-recovery-rpo-rto--point-in-time-recovery-pitr)
- [M6. Masterclass: Accessibility, SEO, Internationalisation and Design Systems](#m6-masterclass-accessibility-seo-internationalisation-and-design-systems)
  - [M6.1 Web Accessibility (WCAG), Enterprise SEO, Media Optimization & Localization](#m61-web-accessibility-wcag-enterprise-seo-media-optimization--localization)
  - [M6.2 Full-Stack Internationalization (`next-intl`) with RTL Mirroring](#m62-full-stack-internationalization-next-intl-with-rtl-mirroring)
  - [M6.3 Accessible WAI-ARIA Combobox with Keyboard Autocomplete](#m63-accessible-wai-aria-combobox-with-keyboard-autocomplete)
  - [M6.4 Production Performance & Core Web Vitals Optimization](#m64-production-performance--core-web-vitals-optimization)
  - [M6.5 Enterprise UI Component Primitives with CVA & Tailwind CSS](#m65-enterprise-ui-component-primitives-with-cva--tailwind-css)
  - [M6.6 Complete Design System Primitives (CVA + Radix + Tailwind)](#m66-complete-design-system-primitives-cva--radix--tailwind)
  - [M6.7 Production WCAG 2.2 AA Accessibility Audit Protocol](#m67-production-wcag-22-aa-accessibility-audit-protocol)
  - [M6.8 Storybook & Component-Driven Development (CSF 3)](#m68-storybook--component-driven-development-csf-3)
  - [M6.9 Accessible Floating UI Tooltip Primitive (`components/Tooltip.tsx`)](#m69-accessible-floating-ui-tooltip-primitive-componentstooltiptsx)
  - [M6.10 Accessible WAI-ARIA APG Data Grid Component](#m610-accessible-wai-aria-apg-data-grid-component)
- [M7. Masterclass: Production Subsystems: AI, Payments, Jobs, Realtime and Uploads](#m7-masterclass-production-subsystems-ai-payments-jobs-realtime-and-uploads)
  - [M7.1 Production Enterprise Subsystems: AI, Payments, Background Jobs & Storage](#m71-production-enterprise-subsystems-ai-payments-background-jobs--storage)
  - [M7.2 Enterprise Realtime Architecture: WebSockets & Server-Sent Events (SSE)](#m72-enterprise-realtime-architecture-websockets--server-sent-events-sse)
  - [M7.3 Transactional Emails with React Email & Resend](#m73-transactional-emails-with-react-email--resend)
  - [M7.4 Full-Stack Payments & Subscriptions: Stripe Checkout & Webhook Idempotency](#m74-full-stack-payments--subscriptions-stripe-checkout--webhook-idempotency)
  - [M7.5 Full-Stack AI & LLM Systems: Vercel AI SDK with Structured Tool Calling](#m75-full-stack-ai--llm-systems-vercel-ai-sdk-with-structured-tool-calling)
  - [M7.6 Privacy-First Analytics & GDPR/CCPA Consent Management Engine](#m76-privacy-first-analytics--gdprccpa-consent-management-engine)
  - [M7.7 BullMQ Distributed Background Worker Process (`workers/email.worker.ts`)](#m77-bullmq-distributed-background-worker-process-workersemailworkerts)
  - [M7.8 Stripe Subscriptions & Customer Portal Full Lifecycle Engine](#m78-stripe-subscriptions--customer-portal-full-lifecycle-engine)
  - [M7.9 Client-Side Image Pre-Processing & Chunked Resumable Uploads](#m79-client-side-image-pre-processing--chunked-resumable-uploads)
- [M8. Masterclass: Testing, DevOps, Docker and Observability](#m8-masterclass-testing-devops-docker-and-observability)
  - [M8.1 Testing Pyramid, DevOps, Production Docker & Observability Architecture](#m81-testing-pyramid-devops-production-docker--observability-architecture)
  - [M8.2 Production Nginx Reverse Proxy with Brotli, HTTP/2 & SSL Hardening](#m82-production-nginx-reverse-proxy-with-brotli-http2--ssl-hardening)
  - [M8.3 Full-Stack Observability: OpenTelemetry, Sentry & Custom RUM Metrics](#m83-full-stack-observability-opentelemetry-sentry--custom-rum-metrics)
  - [M8.4 Enterprise End-to-End Testing with Playwright & Automated Accessibility](#m84-enterprise-end-to-end-testing-with-playwright--automated-accessibility)
  - [M8.5 Comprehensive Testing Suite: Custom Hooks & Server Route Handlers](#m85-comprehensive-testing-suite-custom-hooks--server-route-handlers)
  - [M8.6 Exhaustive `next.config.ts` Master API Reference](#m86-exhaustive-nextconfigts-master-api-reference)
  - [M8.7 Complete Production `docker-compose.yml` Infrastructure Stack](#m87-complete-production-docker-composeyml-infrastructure-stack)
  - [M8.8 Automated Lighthouse CI Quality Gate (`lighthouserc.js`)](#m88-automated-lighthouse-ci-quality-gate-lighthousercjs)
  - [M8.9 Production Incident Response Runbook & Post-Mortem Template](#m89-production-incident-response-runbook--post-mortem-template)
  - [M8.10 Production Serverless Cost Optimization & Resource Tuning](#m810-production-serverless-cost-optimization--resource-tuning)
  - [M8.11 Pre-Flight Security & Reliability Quality Gate](#m811-pre-flight-security--reliability-quality-gate)
  - [M8.12 Conventional Commit Standards](#m812-conventional-commit-standards)
  - [M8.13 Pull Request Quality Gates Checklist](#m813-pull-request-quality-gates-checklist)
- [M9. Masterclass: Large-Scale Architecture: Monorepos, Clean Architecture, GraphQL and System Design](#m9-masterclass-large-scale-architecture-monorepos-clean-architecture-graphql-and-system-design)
  - [M9.1 Large-Scale Architecture, Monorepos (Turborepo), Design Systems & GraphQL](#m91-large-scale-architecture-monorepos-turborepo-design-systems--graphql)
  - [M9.2 Enterprise Monorepo Architecture with Turborepo & pnpm Workspaces](#m92-enterprise-monorepo-architecture-with-turborepo--pnpm-workspaces)
  - [M9.3 Staff-Level System Design Blueprints & Architectural Specifications](#m93-staff-level-system-design-blueprints--architectural-specifications)
  - [M9.4 Enterprise Full-Stack Clean Architecture, CQRS & Micro-Frontends](#m94-enterprise-full-stack-clean-architecture-cqrs--micro-frontends)
  - [M9.5 System Design Implementation: Multi-Tenant SaaS with Row-Level Security](#m95-system-design-implementation-multi-tenant-saas-with-row-level-security)
  - [M9.6 System Design Implementation: Collaborative Document Editor (CRDTs + Yjs)](#m96-system-design-implementation-collaborative-document-editor-crdts--yjs)
  - [M9.7 GraphQL Apollo Client Integration with React Server Components](#m97-graphql-apollo-client-integration-with-react-server-components)
  - [M9.8 10 Enterprise Full-Stack System Design Blueprints](#m98-10-enterprise-full-stack-system-design-blueprints)
  - [M9.9 20 Comprehensive Enterprise Project Architectures](#m99-20-comprehensive-enterprise-project-architectures)
  - [M9.10 Master Full-Stack Architectural Decision Matrices](#m910-master-full-stack-architectural-decision-matrices)
  - [M9.11 Staff Full-Stack Engineering Principles](#m911-staff-full-stack-engineering-principles)
  - [M9.12 Key Architecture Principles Summary](#m912-key-architecture-principles-summary)
  - [M9.13 Staff Engineer Axioms for Next.js and React](#m913-staff-engineer-axioms-for-nextjs-and-react)
- [M10. Masterclass: Flagship Blueprint: Complete Project Implementations](#m10-masterclass-flagship-blueprint-complete-project-implementations)
  - [M10.1 Seven Starter Projects with Code](#m101-seven-starter-projects-with-code)
  - [M10.2 Complete Enterprise Project Implementations (Full Code Showcases)](#m102-complete-enterprise-project-implementations-full-code-showcases)
- [7. Stage 7: Staff Next.js Full-Stack Engineer Interview Handbook & Cheatsheet](#7-stage-7-staff-nextjs-full-stack-engineer-interview-handbook--cheatsheet)
  - [7.1 Core Concepts (Q1-Q20)](#71-core-concepts-q1-q20)
  - [7.2 Internals & Performance (Q21-Q34)](#72-internals--performance-q21-q34)
  - [7.3 Architecture & Design (Q35-Q54)](#73-architecture--design-q35-q54)
  - [7.4 Scenario & Debugging Questions (Q55-Q66)](#74-scenario--debugging-questions-q55-q66)
  - [7.5 Staff Cheatsheet](#75-staff-cheatsheet)
- [🧪 Example Projects](#-example-projects)
- [📝 Cheat Sheets](#-cheat-sheets)
- [📚 Resources](#-resources)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [🌐 Connect with me](#-connect-with-me)
- [☕ Support](#-support)

---

## 1. Stage 1: Foundations: Toolchain, Project Anatomy & React Essentials

This stage gets the toolchain running and explains every file in the starter project. You need basic HTML, CSS and JavaScript; React experience helps but section 1.6 covers what you need. By the end you can create a Next.js 16 app, explain what `next build` produced, and change a page, a layout and a Client Component with confidence.

```mermaid
flowchart TD
    Browser["Browser requests /topics"] --> Proxy["proxy.ts (optional, runs first)"]
    Proxy --> Router["App Router matches app/topics/page.tsx"]
    Router --> RSC["Server Components render on the server"]
    RSC --> Out["HTML plus RSC payload streamed to the browser"]
    Out --> Paint["Browser paints HTML immediately"]
    Paint --> Hydrate["Client Component JavaScript hydrates the interactive islands"]
```

### 1.1 What Next.js Is and the Problem It Solves

Next.js is a React framework maintained by Vercel. React gives you components and a rendering model; it does not tell you how to route URLs, where data fetching should run, how to bundle, or how to send HTML before the JavaScript arrives. Next.js answers those questions with conventions:

- **Routing from the file system.** A folder under `app/` is a URL segment, and a `page.tsx` inside it makes that segment reachable.
- **Server-first rendering.** Components run on the server by default (React Server Components). Only components marked `'use client'` ship JavaScript to the browser.
- **Mutations without a hand-written API.** Server Actions let a `<form>` call a server function directly.
- **A build that decides per route** whether HTML is produced once at build time, regenerated on a schedule, or rendered on every request.
- **Built-in asset handling** for images (`next/image`), fonts (`next/font`), scripts (`next/script`) and metadata.

The difference shows up in what the browser receives first:

| Traditional client-rendered React SPA | Next.js App Router |
| :--- | :--- |
| Empty HTML shell; the browser downloads JavaScript, then fetches data, then renders | Server sends populated HTML; JavaScript is only needed for interactive parts |
| First Contentful Paint waits for the bundle | HTML streams immediately; slow parts stream later behind `<Suspense>` |
| SEO needs prerendering workarounds | Crawlers get real HTML and `<meta>` tags from the Metadata API |
| A separate backend holds secrets and talks to the database | Server Components, Server Actions and Route Handlers run server-side in the same repo |
| Every imported library grows the client bundle | Libraries used only in Server Components never reach the browser |

How it compares with the frameworks people usually evaluate next to it:

| Need | Next.js 16 | Vite + React (SPA) | React Router 7 (framework mode) | Astro |
| --- | --- | --- | --- | --- |
| Server Components | Yes, default | No | Experimental | Islands, not RSC |
| Per-route static vs dynamic | Yes, automatic, plus Partial Prerendering | Static only (or add SSR yourself) | Loader-based SSR, prerender option | Static first, opt-in SSR |
| Mutations | Server Actions | Your own API | Route actions | Actions |
| Best fit | Full-stack React apps with mixed static and dynamic content | Dashboards behind a login that do not need SEO | Apps built around loaders and nested routes | Content sites with little interactivity |

The architecture in one picture, as the earlier edition of this guide drew it (updated for `proxy.ts`):

```text
       Browser request (URL)
                │
                ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 proxy.ts (optional)                     │
       │       Redirects, rewrites, headers, cheap auth checks   │
       └────────────────────────────┬────────────────────────────┘
                                    │
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                   App Router pipeline                   │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │             Server Components (default)           │  │
       │  │  - Direct database / ORM access                   │  │
       │  │  - Secrets stay on the server                     │  │
       │  │  - No client JavaScript for these components      │  │
       │  └─────────────────────────┬─────────────────────────┘  │
       │                            │ serializable props          │
       │                            ▼                            │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │           Client Components ('use client')        │  │
       │  │  - Event handlers (onClick, onChange)             │  │
       │  │  - useState, useEffect, browser APIs              │  │
       │  └───────────────────────────────────────────────────┘  │
       └────────────────────────────┬────────────────────────────┘
                                    │ streamed HTML + RSC payload
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │        Browser: paint HTML, then hydrate islands        │
       └─────────────────────────────────────────────────────────┘
```

### 1.2 Installation, Toolchain & First Run

Next.js 16 needs **Node.js 20.9 or newer**. Use an active LTS line (22 or 24); the starter's CI tests both.

```bash
node --version          # v22.x or v24.x
npx create-next-app@latest my-app
```

`create-next-app` asks a few questions. The recommended answers produce TypeScript, ESLint (flat config), Tailwind CSS, the App Router and the `@/*` import alias. Newer versions also offer `--react-compiler`, `--biome` instead of ESLint, and `--agents-md`, which writes an `AGENTS.md` pointing coding assistants at the docs bundled in `node_modules/next/dist/docs/`. Every prompt has a flag, which is what you want in scripts and CI:

```bash
npx create-next-app@latest my-app \
  --ts --eslint --tailwind --app --no-src-dir \
  --import-alias "@/*" --use-npm --yes
```

Other package managers work the same way:

```bash
pnpm create next-app my-app
yarn create next-app my-app
bun create next-app my-app
```

To run this guide's starter project instead:

```bash
git clone https://github.com/TheLearningHubOrg/learn-nextjs.git
cd learn-nextjs
npm ci            # installs exactly what package-lock.json lists
npm run dev       # http://localhost:3000, Turbopack, Fast Refresh
npm test          # Vitest, 20 tests
npm run lint      # ESLint CLI with eslint-config-next
npm run build     # production build into .next/
npm start         # runs .next/standalone/server.js
```

The `next` CLI commands you will use most:

| Command | What it does | When to use it |
| --- | --- | --- |
| `next dev` | Dev server with Turbopack, Fast Refresh and the error overlay | Day-to-day work |
| `next dev --webpack` | Same, using webpack | Only while a webpack-only plugin blocks you |
| `next build` | Compiles, type-checks, prerenders static routes, writes `.next/` | CI and before deploying |
| `next start` | Serves a `next build` output (not for `output: 'standalone'`, which uses `node server.js`) | Local production check |
| `next typegen` | Writes `PageProps`, `LayoutProps` and `RouteContext` type helpers | After adding routes, before `tsc` |
| `next info` | Prints OS, Node and package versions | Bug reports |
| `next upgrade` | Updates `next`, `react`, `react-dom` and types together | Minor and major upgrades |

Turbopack is the bundler for both `next dev` and `next build` in Next.js 16. You do not pass `--turbopack` any more; the flag was removed when it became the default. Turbopack keeps a file-system cache under `.next/` between runs, so the second `next dev` start is much faster than the first.

### 1.3 Project Anatomy: Files, Folders & Configuration

The starter project after `npm ci`:

```text
learn-nextjs/
├── app/                         # App Router: every folder is a URL segment
│   ├── layout.tsx               # root layout: <html>, <body>, site navigation
│   ├── page.tsx                 # "/"  (Server Component)
│   ├── globals.css              # global styles, imported once by the root layout
│   ├── error.tsx                # error boundary for the whole app ('use client')
│   ├── not-found.tsx            # 404 UI for notFound() and unknown URLs
│   ├── topics/
│   │   ├── page.tsx             # "/topics" (reads searchParams, so dynamic)
│   │   ├── loading.tsx          # instant fallback while /topics renders
│   │   └── [slug]/page.tsx      # "/topics/:slug" (prerendered per slug)
│   ├── notes/
│   │   ├── page.tsx             # "/notes" (dynamic, lists notes)
│   │   ├── note-form.tsx        # Client Component using useActionState
│   │   └── actions.ts           # Server Action ('use server')
│   ├── health/route.ts          # GET /health (Route Handler)
│   └── api/topics/route.ts      # GET /api/topics?level=...
├── components/like-button.tsx   # shared Client Component
├── lib/
│   ├── topics.ts                # in-repo data source used by Server Components
│   └── notes.ts                 # validation + in-memory store
├── proxy.ts                     # runs before routing; adds security headers
├── test/                        # Vitest suites (lib, server code, components)
├── public/                      # served as-is from "/" (favicon, images)
├── next.config.ts               # framework configuration
├── tsconfig.json                # TypeScript, including the "@/*" alias
├── eslint.config.mjs            # ESLint flat config
├── vitest.config.mts            # test runner configuration
└── Dockerfile                   # multi-stage production image
```

Files with special meaning to the App Router. Anything else in `app/` (like `note-form.tsx` or `actions.ts`) is just a module you import; it is never routable, so you can colocate components next to the route that uses them.

| File | Role | Server or client |
| --- | --- | --- |
| `layout.tsx` | Shared UI that wraps a segment and its children; persists across navigation | Server by default |
| `page.tsx` | Makes a segment publicly routable; the leaf UI | Server by default |
| `loading.tsx` | Wraps the page in `<Suspense>` with this fallback | Server by default |
| `error.tsx` | Error boundary for the segment | Must be `'use client'` |
| `not-found.tsx` | UI for `notFound()` and unmatched URLs | Server by default |
| `template.tsx` | Like a layout, but remounts on every navigation | Server by default |
| `default.tsx` | Fallback for a parallel route slot | Server by default |
| `route.ts` | HTTP handler (`GET`, `POST`, ...) instead of a page | Server only |
| `global-error.tsx` | Replaces the root layout when it crashes | Must be `'use client'` |

Naming conventions that change routing:

| Pattern | Example | Effect |
| --- | --- | --- |
| `folder` | `app/topics` | URL segment `/topics` |
| `[param]` | `app/topics/[slug]` | Dynamic segment, value in `params.slug` |
| `[...param]` | `app/docs/[...path]` | Catch-all, `params.path` is `string[]` |
| `[[...param]]` | `app/shop/[[...filters]]` | Optional catch-all, also matches `/shop` |
| `(group)` | `app/(marketing)/about` | Organises files; not part of the URL |
| `_folder` | `app/_components` | Private; never routable |
| `@slot` | `app/@modal` | Named slot for parallel routes |
| `(.)folder` | `app/@modal/(.)photos` | Intercepts a route from the same level |

The starter's `next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit .next/standalone: a minimal server.js plus only the node_modules it needs.
  // The Dockerfile copies that folder into a slim runtime image.
  output: 'standalone',
  // Do not advertise the framework in every response.
  poweredByHeader: false,
};

export default nextConfig;
```

| Key | Role | What happens at runtime |
| :--- | :--- | :--- |
| `import type { NextConfig }` | Type-only import | Gives autocomplete and type errors for unknown keys; erased at compile time |
| `output: 'standalone'` | Build output mode | `next build` traces which files `server.js` needs and copies them to `.next/standalone/` |
| `poweredByHeader: false` | Response header | Removes `X-Powered-By: Next.js` from every response |
| `export default` | Config export | Next.js loads the file with its own TypeScript transpiler before the build starts |

Other files at the root: `tsconfig.json` sets `"paths": { "@/*": ["./*"] }`, so `import { getTopics } from '@/lib/topics'` works from any depth. `.env.local` holds local secrets and is gitignored; variables are server-only unless they start with `NEXT_PUBLIC_` (Stage 5 covers this). `public/` files are served from `/`, so `public/favicon.ico` is `/favicon.ico`.

### 1.4 Line-by-Line Breakdown of the Starter Project

The root layout wraps every page:

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { template: '%s | Learn Next.js', default: 'Learn Next.js' },
  description: 'Starter project for the Learn Next.js guide.',
  icons: { icon: '/favicon.ico' },
};

// The root layout wraps every route. It must render <html> and <body>, and it
// is not re-rendered when the user navigates between pages below it.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav aria-label="Main">
            <Link href="/">Home</Link>
            <Link href="/topics">Topics</Link>
            <Link href="/notes">Notes</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
```

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `import './globals.css'` | Global stylesheet | Bundled and linked from every page; importing it in the root layout makes the load order predictable |
| `export const metadata` | Static Metadata API | Next.js renders `<title>` and `<meta name="description">` into `<head>`; child pages fill the `%s` in the template |
| `title.template` | Title pattern | `/topics` exports `title: 'Topics'`, so the tab reads "Topics \| Learn Next.js" |
| `RootLayout({ children })` | Root Server Component | Runs on the server; required to render `<html>` and `<body>` |
| `<Link href="/topics">` | Client-side navigation | Renders an `<a>`; when clicked, fetches only the RSC payload for the new route instead of a full page |
| `{children}` | Route slot | The matched page (or nested layout) renders here; the header stays mounted between navigations |

The home page shows the two kinds of component side by side:

```tsx
// app/page.tsx
import Link from 'next/link';
import { LikeButton } from '@/components/like-button';
import { getTopics } from '@/lib/topics';

// A Server Component: it runs at build time (this page is static) and ships
// only HTML for itself. LikeButton is a Client Component island.
export default function HomePage() {
  const topics = getTopics();
  const stages = [...new Set(topics.map((topic) => topic.stage))];

  return (
    <>
      <section className="hero">
        <h1 className="title">Learn Next.js</h1>
        <p className="subtitle">
          A small App Router project that grows with Stages 1 to 3 of the guide.
        </p>
        <LikeButton label="Found this useful?" />
      </section>

      <section className="grid" aria-label="Stages">
        {stages.map((stage) => (
          <article className="card" key={stage}>
            <h2>Stage {stage}</h2>
            <ul>
              {topics
                .filter((topic) => topic.stage === stage)
                .map((topic) => (
                  <li key={topic.slug}>
                    <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
```

```tsx
// components/like-button.tsx
'use client';

import { useState } from 'react';

// The smallest useful Client Component: local state plus an event handler.
export function LikeButton({ label }: { label: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <p className="like">
      <span>{label}</span>{' '}
      <button type="button" onClick={() => setLikes((n) => n + 1)}>
        Like ({likes})
      </button>
    </p>
  );
}
```

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `getTopics()` | Plain function call in a Server Component | Runs during `next build`; `lib/topics.ts` never reaches the browser |
| `new Set(...)` | Derive unique stages | Computed once on the server; the browser gets the finished list |
| `<LikeButton label=... />` | Client boundary | Server renders its initial HTML (`Like (0)`), then the browser downloads its JS and hydrates it |
| `'use client'` | Directive at the top of the file | Marks this module and everything it imports as client code |
| `useState(0)` | Local state | Only possible in Client Components; resets if the component unmounts |
| `onClick={() => setLikes(...)}` | Event handler | Functions cannot be sent from server to client, which is why this lives in a Client Component |
| `key={topic.slug}` | List identity | Lets React match list items across renders |

Run `npm run build` and the route table explains what each page became:

```text
Route (app)
┌ ○ /
├ ƒ /api/topics
├ ƒ /health
├ ƒ /notes
├ ƒ /topics
└   /topics/[slug]
  ├ ● /topics/project-anatomy
  ├ ● /topics/layouts-and-pages
  └ ● [+3 more paths]

ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

`/` is static because nothing in it depends on the request. `/topics` is dynamic because it awaits `searchParams`. `/notes` is dynamic because it calls `await connection()`. Each `/topics/[slug]` page is prerendered because `generateStaticParams` lists the slugs.

### 1.5 The Rendering Model: Server, Client, Static & Dynamic

Two independent questions decide how a piece of UI is produced:

1. **Where does the component run?** Server Components run only on the server. Client Components render on the server for the first HTML and then run again in the browser (hydration).
2. **When does the server render it?** At build time (static), on a schedule (ISR), on every request (dynamic), or a mix inside one route (Partial Prerendering with Cache Components).

```mermaid
flowchart LR
    subgraph When["When the server renders"]
        Static["Static: at build time"]
        ISR["ISR: build, then regenerate after N seconds or on demand"]
        Dynamic["Dynamic: on every request"]
        PPR["Partial Prerendering: static shell plus streamed holes"]
    end
    subgraph Where["Where the component runs"]
        SC["Server Component: server only, no JS shipped"]
        CC["Client Component: server HTML, then hydrated in the browser"]
    end
    SC --> Static
    SC --> Dynamic
    CC --> Static
    CC --> Dynamic
```

What makes a route dynamic in the default model (without `cacheComponents`):

| Trigger | Example | Why it forces request-time rendering |
| --- | --- | --- |
| Awaiting `searchParams` | `await props.searchParams` | The query string is only known per request |
| `cookies()` or `headers()` | `(await cookies()).get('session')` | Request data |
| `connection()` | `await connection()` | Explicit opt-out of prerendering |
| Uncached `fetch` | `fetch(url, { cache: 'no-store' })` | Result may change per request |
| `export const dynamic = 'force-dynamic'` | In `page.tsx` or `route.ts` | Route segment config override |
| Dynamic segment not listed in `generateStaticParams` | `/topics/new-slug` | Rendered on first request, then cached (when `dynamicParams` is true) |

The four rendering modes the earlier edition listed still describe the outcomes:

1. **Static rendering (the default).** HTML and the RSC payload are produced at build time and served from cache. Marketing pages, docs, blog posts.
2. **Dynamic rendering.** Rendered for each request. Dashboards, search results, anything personalised.
3. **Streaming.** The server sends the HTML it has, then streams the rest as `<Suspense>` boundaries resolve. Works with both static and dynamic routes.
4. **Partial Prerendering.** With `cacheComponents: true`, a route's static parts are prerendered into a shell and the dynamic parts stream into `<Suspense>` holes in the same response (Stage 3.5).

App Router versus the older Pages Router. New projects should use the App Router; the Pages Router is still supported for existing apps.

| Feature | App Router (`app/`) | Pages Router (`pages/`) |
| :--- | :--- | :--- |
| Component default | Server Components | Client Components |
| Data fetching | `async` components, `fetch`, `"use cache"` | `getServerSideProps`, `getStaticProps` |
| Layouts | Nested `layout.tsx`, state preserved | `_app.tsx` plus a `getLayout` pattern |
| Mutations | Server Actions | API routes plus client `fetch` |
| Streaming | `loading.tsx` and `<Suspense>` | Not built in |
| Metadata | `metadata` export, `generateMetadata` | `next/head` |

### 1.6 React Essentials for Next.js

Next.js is React. These are the React ideas the rest of the guide assumes, each with a note on whether it works in a Server Component.

```mermaid
flowchart TD
    Props["Props flow down"] --> Render["Component returns JSX"]
    State["State (Client Components only)"] --> Render
    Render --> Commit["React updates the DOM"]
    Commit --> Event["User event"]
    Event -->|"setState()"| State
    Commit --> Effect["useEffect runs after paint (client only)"]
```

#### JSX

JSX is HTML-like syntax that compiles to function calls. Curly braces embed any JavaScript expression. Works in Server and Client Components.

```tsx
export function WelcomeBanner({ username }: { username: string }) {
  return (
    <div className="banner">
      <h1>Welcome back, {username}!</h1>
      <p>Today is {new Date().toLocaleDateString('en-GB')}.</p>
    </div>
  );
}
```

Pass an explicit locale to date formatting. Without one, the server (often UTC and `en-US`) and the browser (the user's locale) can produce different text, and React reports a hydration mismatch when this runs in a Client Component.

#### Components and props

A component is a function from props to UI. Props are read-only; a component never modifies them. Works in both kinds of component.

```tsx
interface CardProps {
  title: string;
  description: string;
  href: string;
}

export function FeatureCard({ title, description, href }: CardProps) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>Learn more &rarr;</a>
    </article>
  );
}
```

Default values belong in the destructuring pattern:

```tsx
import Image from 'next/image';

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function UserAvatar({ src, alt, size = 48 }: UserAvatarProps) {
  // next/image sizes, lazy-loads and converts the image; a plain <img> does none of that.
  return <Image src={src} width={size} height={size} alt={alt} className="rounded-full" />;
}
```

#### State

`useState` returns the current value and a setter. Calling the setter schedules a re-render. **Client Components only.**

```tsx
'use client';

import { useState } from 'react';

export function VoteWidget() {
  const [votes, setVotes] = useState(0);

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setVotes((v) => v + 1)}>Upvote</button>
      <span>{votes}</span>
    </div>
  );
}
```

Use the updater form `setVotes((v) => v + 1)` whenever the new value depends on the old one; two quick clicks then always add two.

#### Events

Event handlers receive a synthetic event. **Client Components only**, because a function cannot be serialised from server to browser.

```tsx
'use client';

export function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSearch(String(data.get('query') ?? ''));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" placeholder="Type a keyword" aria-label="Search" />
      <button type="submit">Search</button>
    </form>
  );
}
```

In Next.js a search box often needs no client code at all: `<Form action="/search">` from `next/form` submits a GET request and navigates client-side (Stage 3.8).

#### Conditional rendering and lists

Return `null` to render nothing. Every item in a list needs a stable `key`. Both work in Server Components.

```tsx
export function NotificationBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return <span className="badge-pill">{count > 99 ? '99+' : count}</span>;
}

interface Topic {
  id: string;
  label: string;
}

export function TopicCatalog({ topics }: { topics: Topic[] }) {
  return (
    <ul>
      {topics.map((t) => (
        <li key={t.id}>{t.label}</li>
      ))}
    </ul>
  );
}
```

Avoid `key={index}` for lists that can reorder or filter: React would reuse the wrong DOM node and its state.

#### Controlled forms

A controlled input keeps its value in state. Use it when you need to react to every keystroke; for plain submissions, an uncontrolled form with a Server Action is simpler (Stage 3.6).

```tsx
'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return submitted ? (
    <p>Thanks for subscribing, {email}.</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

#### Hooks

Hooks are functions whose names start with `use`. Call them at the top level of a component, never inside conditions or loops, because React identifies each hook by call order.

| Hook | Purpose | Server Component? |
| --- | --- | --- |
| `useState`, `useReducer` | Local state | No |
| `useEffect`, `useLayoutEffect` | Synchronise with something outside React after render | No |
| `useEffectEvent` | Read latest props inside an effect without re-running it (React 19.2) | No |
| `useRef` | Mutable value or DOM reference that does not trigger renders | No |
| `useMemo`, `useCallback` | Cache a computation or function between renders (the React Compiler can insert these for you) | No |
| `useTransition`, `useDeferredValue` | Mark updates as non-urgent | No |
| `useActionState`, `useOptimistic`, `useFormStatus` | Forms and Server Actions (Stage 3) | No |
| `use(promise)` / `use(context)` | Read a promise or context; can be called conditionally | `use(promise)` yes, `use(context)` no |

#### Context

Context passes a value to a whole subtree without threading props. Providers use state, so they are Client Components; render them from a layout and pass server content through `children`.

```tsx
'use client';

import { createContext, useContext, useState } from 'react';

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarState | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((open) => !open);
  // React 19: render the context object itself as the provider.
  return <SidebarContext value={{ isOpen, toggle }}>{children}</SidebarContext>;
}

export function useSidebar(): SidebarState {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used inside <SidebarProvider>');
  return ctx;
}
```

```tsx
// app/dashboard/layout.tsx (Server Component)
import { SidebarProvider } from './sidebar-context';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>; // children can still be Server Components
}
```

### 1.7 TypeScript & Modern JavaScript Essentials

The TypeScript and JavaScript features that appear in every Next.js codebase.

#### Destructuring, spread, optional chaining and nullish coalescing

```ts
const config = { env: 'production', port: 3000 };
const appConfig = { ...config, debug: false };        // copy and extend

const { env, ...rest } = appConfig;                    // rest = { port, debug }

const dbPort = process.env.DB_PORT ?? '5432';          // only null/undefined fall back
const city = user?.address?.city ?? 'unknown';         // stop at the first null link

declare const user: { address?: { city?: string } } | undefined;
```

`??` differs from `||`: `0 || 10` is `10`, but `0 ?? 10` is `0`. Use `??` for numeric and boolean settings.

#### ES modules

```ts
// lib/utils.ts
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

// app/page.tsx
import { cn } from '@/lib/utils';
const className = cn('card', isActive && 'card-active');
declare const isActive: boolean;
```

Next.js pages, layouts and route files use **default exports** for the component and **named exports** for configuration (`metadata`, `generateStaticParams`, `dynamic`). Everything else should use named exports so imports stay greppable.

#### Promises and async/await

```ts
export async function getLiveMetrics(): Promise<{ users: number }> {
  const response = await fetch('https://api.example.com/metrics');
  if (!response.ok) throw new Error(`Metrics request failed: ${response.status}`);
  return response.json();
}

// Start independent requests together instead of awaiting them one by one.
export async function getDashboard() {
  const [metrics, alerts] = await Promise.all([getLiveMetrics(), getAlerts()]);
  return { metrics, alerts };
}
declare function getAlerts(): Promise<string[]>;
```

`fetch` only rejects on network failure. A 404 or 500 resolves normally, so check `response.ok`.

#### Types, interfaces, unions and enums

```ts
export interface Article {
  slug: string;
  title: string;
  publishedAt: string; // ISO string: Dates do not survive the server-client boundary as Dates
  readTime: number;
}

export type UserRole = 'admin' | 'editor' | 'viewer';

// A const object gives the same autocomplete as an enum without emitting a runtime enum.
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
} as const;
export type HttpStatus = (typeof HttpStatus)[keyof typeof HttpStatus];
```

The earlier edition used `enum HttpStatusCode`. Enums still compile, but they generate runtime code and are rejected under `--erasableSyntaxOnly` (the mode Node.js type stripping requires). Prefer unions or `as const` objects, as the starter's `LEVELS` array does:

```ts
// lib/topics.ts
export const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
export type Level = (typeof LEVELS)[number]; // 'beginner' | 'intermediate' | 'advanced'

export function isLevel(value: unknown): value is Level {
  return typeof value === 'string' && (LEVELS as readonly string[]).includes(value);
}
```

`isLevel` is a **type guard**: after `if (isLevel(x))`, TypeScript narrows `x` to `Level`. The starter uses it to validate `?level=` from the URL before trusting it.

#### Generics

```ts
export interface ApiResponse<T> {
  data: T;
  timestamp: string;
  success: boolean;
}

export async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} failed with ${res.status}`);
  return (await res.json()) as ApiResponse<T>;
}

const users = await fetchJson<{ id: string; name: string }[]>('/api/users');
```

The `as` cast is a promise to the compiler, not a check. Validate external JSON (with a schema library such as Zod, or a guard like `isLevel`) before relying on it.

#### Utility types

```ts
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

type UserPatch = Partial<Omit<User, 'id'>>;       // every field optional except id is gone
type PublicUser = Pick<User, 'id' | 'name'>;      // only the safe fields
type RoleLabels = Record<UserRole, string>;       // one entry per role, compiler-checked
type SavedUser = Readonly<User>;                  // no reassignment of fields

const labels: RoleLabels = { admin: 'Admin', editor: 'Editor', viewer: 'Viewer' };
```

#### Typing pages and layouts

Route props are promises in Next.js 16. You can type them by hand, as the starter does, or use the generated helpers after `next typegen` (or any `next dev` / `next build`):

```tsx
// By hand
type Params = Promise<{ slug: string }>;
export default async function TopicPage({ params }: { params: Params }) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
```

```tsx
// With the generated, route-aware helper
export default async function TopicPage(props: PageProps<'/topics/[slug]'>) {
  const { slug } = await props.params; // typed from the folder name
  return <h1>{slug}</h1>;
}
```

### 1.8 The Development Loop: Fast Refresh, Errors & Debugging

```mermaid
sequenceDiagram
    participant You as Editor
    participant Dev as next dev (Turbopack)
    participant Browser
    You->>Dev: Save app/page.tsx
    Dev->>Dev: Recompile only the changed module graph
    Dev-->>Browser: HMR update over WebSocket
    alt Client Component changed
        Browser->>Browser: Fast Refresh keeps useState values
    else Server Component changed
        Browser->>Dev: Refetch RSC payload for the route
        Dev-->>Browser: New payload, client state preserved
    end
```

- **Fast Refresh** swaps changed modules without a reload and keeps Client Component state. If a file exports something other than React components (for example a constant next to a component), editing it re-runs every module that imports it and that state is lost.
- **The error overlay** shows build and runtime errors with the source frame. Server errors appear in both the terminal and the overlay; client errors only in the browser.
- **Server `console.log`** prints in the terminal running `next dev`, not the browser console. With `logging.browserToTerminal` in `next.config.ts` (16.2+), browser logs are also forwarded to the terminal.
- **Debugging with breakpoints**: `NODE_OPTIONS='--inspect' next dev`, then attach Chrome DevTools (`chrome://inspect`) or VS Code to the Node process for Server Components, Server Actions and Route Handlers.
- **Production behaves differently**: `next dev` renders every route on demand and never prerenders. Always check `next build` output before deploying, because a route you thought was static may be `ƒ`.

### 1.9 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Node.js older than 20.9 | `You are using Node.js 18.x. For Next.js, Node.js version ">=20.9.0" is required.` | Install Node 22 or 24 LTS; pin it with `engines` in `package.json` and `.nvmrc` |
| `useState` in a file without `'use client'` | `You're importing a component that needs useState. This React Hook only works in a Client Component.` | Add `'use client'` to that component's file, or move the interactive part into its own Client Component |
| Using a plain `<img>` for content images | ESLint warning `@next/next/no-img-element`; poor LCP and layout shift in Lighthouse | Use `next/image` with `width` and `height` (or `fill`), Stage 4 |
| Root layout without `<html>` or `<body>` | `Missing <html> and <body> tags in the root layout.` | The root `app/layout.tsx` must render both |
| Locale-dependent output in a Client Component | `Hydration failed because the server rendered text didn't match the client` | Format with an explicit locale and time zone, or render the value only after mount |
| Expecting `next dev` to show production rendering | A page that is fast in dev is `ƒ` (dynamic) after `next build`, or the reverse | Read the `next build` route table; use `next start` (or the Docker image) for production checks |
| Running `next start` with `output: 'standalone'` | Warning that `next start` does not work with standalone output; static assets 404 in some setups | Run `node .next/standalone/server.js` and copy `.next/static` and `public/` next to it, as the Dockerfile does |
| Passing `--turbopack` from an old script | `error: unknown option '--turbopack'` | Remove the flag; Turbopack is the default in 16 |

### 1.10 Best Practices

- **Pin the toolchain**: set `"engines": { "node": ">=20.9.0" }` and commit `package-lock.json`, so CI and teammates build with the same versions.
- **Keep `app/` for routes**: put shared code in `lib/` and `components/`, and colocate route-specific components next to their `page.tsx`; anything not named `page` or `route` is never public.
- **Start every component as a Server Component**: add `'use client'` only to the leaf that needs state, effects or event handlers, so the client bundle stays small.
- **Use the `@/` alias** instead of `../../..` imports: files can move without breaking imports.
- **Read the build output on every PR**: the `○ ● ƒ` legend is the fastest way to catch a page that accidentally became dynamic.
- **Prefer type guards over `as` casts** for data from URLs, forms and APIs: a cast silences the compiler without checking anything.
- **Keep configuration typed**: `next.config.ts` with `NextConfig` catches misspelled or removed keys at build time.

### 1.11 Hands-on Exercise

Add an "About" page to the starter project.

1. Create `app/about/page.tsx` that exports `metadata = { title: 'About' }` and renders an `<h1>About</h1>` plus the number of topics from `getTopics().length`.
2. Add `<Link href="/about">About</Link>` to the navigation in `app/layout.tsx`.
3. Add a test in `test/components.test.tsx` that renders `<AboutPage />` and expects the heading.
4. Run `npm test`, then `npm run build`.

Expected result: the browser tab reads "About | Learn Next.js", the test suite reports one more passing test, and the build table lists `○ /about` as static. The pattern to copy is `app/page.tsx` (a synchronous Server Component reading `lib/topics.ts`) and its test in `test/components.test.tsx`.

[Back to top ⤴️](#-table-of-contents)

---

## 2. Stage 2: App Router: File Conventions, Routing, Layouts & Navigation

This stage maps URLs to folders and explains what each special file does at runtime. It assumes Stage 1: you can run the starter and you know the difference between a Server and a Client Component. Afterwards you can design the route tree for a real product, including dynamic segments, shared layouts, error and loading states, modals that keep a shareable URL, and SEO metadata.

```mermaid
flowchart TD
    Layout["layout.tsx (persists across navigation)"] --> Template["template.tsx (remounts on navigation)"]
    Template --> ErrorB["error.tsx boundary"]
    ErrorB --> LoadingB["loading.tsx (Suspense fallback)"]
    LoadingB --> NotFoundB["not-found.tsx boundary"]
    NotFoundB --> Page["page.tsx (route leaf)"]
```

The diagram is the nesting order React actually builds for one segment: the layout wraps the template, which wraps the error boundary, which wraps the Suspense boundary created by `loading.tsx`, and so on down to the page. That order explains two rules you will meet below: an `error.tsx` cannot catch errors thrown by the `layout.tsx` in the same folder, and `loading.tsx` never hides the layout.

### 2.1 The app Directory and Route Segments

Every folder under `app/` is a **route segment**. A segment becomes reachable only when it contains a `page.tsx` (UI) or a `route.ts` (HTTP handler), never both.

```text
app/
├── page.tsx                -> /
├── about/
│   └── page.tsx            -> /about
├── components/
│   └── card.tsx            -> not a route (no page.tsx)
└── shop/
    ├── layout.tsx          -> shell for /shop and everything below
    ├── page.tsx            -> /shop
    └── [id]/
        └── page.tsx        -> /shop/:id
```

Nested folders form nested URLs: `app/blog/news/page.tsx` is `/blog/news`. A request is matched segment by segment; for `/shop/42`, Next.js renders the root layout, then `shop/layout.tsx`, then `shop/[id]/page.tsx` with `params = Promise<{ id: '42' }>`.

```mermaid
flowchart LR
    URL["/shop/42"] --> R["app/layout.tsx"]
    R --> S["app/shop/layout.tsx"]
    S --> P["app/shop/[id]/page.tsx with id = '42'"]
```

How the App Router compares with the alternatives for organising routes:

| Approach | Where routes are declared | Nested layouts | Typical cost |
| --- | --- | --- | --- |
| Next.js App Router | Folders and special files | Yes, by nesting folders | Many small files; conventions to learn |
| Next.js Pages Router | `pages/` files, one file per route | Manual (`getLayout`) | Layouts remount on navigation |
| React Router (config) | A route objects array | Yes, with `<Outlet>` | Routes and files can drift apart |

### 2.2 Layouts, Pages and Templates

A **page** is the leaf UI for a segment. A **layout** wraps a segment and every segment below it, and it is preserved across navigations between its children: its state is kept, its effects are not re-run, and on a client navigation the server does not re-render it.

```tsx
// app/layout.tsx: the root layout is required and must render <html> and <body>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">My Next.js application</header>
        <main>{children}</main>
        <footer>&copy; {2026}</footer>
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 16</h1>
      <p>Full-stack React with the App Router.</p>
    </div>
  );
}
```

A nested layout adds UI for one section only:

```tsx
// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <aside>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </aside>
      <section>{children}</section>
    </div>
  );
}
```

```mermaid
sequenceDiagram
    participant User
    participant Router as Client router
    participant Server
    User->>Router: Click /dashboard/settings (from /dashboard)
    Router->>Server: Request RSC payload for the changed segment only
    Server-->>Router: Payload for settings/page.tsx
    Router->>Router: Keep root layout and dashboard layout mounted
    Router-->>User: Swap the page, sidebar state intact
```

| Behaviour | `layout.tsx` | `template.tsx` | `page.tsx` |
| --- | --- | --- | --- |
| Remounts on navigation between children | No | Yes, new instance each time | Yes |
| Keeps `useState` in Client Components inside it | Yes | No | No |
| Receives `params` | Yes, as a promise | Yes | Yes |
| Receives `searchParams` | No | No | Yes, as a promise |
| Typical use | Navigation, shells, providers | Enter animations, per-page logging, resetting forms | Route content |

Layouts do not receive `searchParams` on purpose: a layout is shared across many URLs and is not re-rendered when only the query string changes. Read query parameters in the page, or with `useSearchParams()` in a Client Component.

The generated `LayoutProps` helper types named slots and params from the route:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout(props: LayoutProps<'/dashboard'>) {
  return <section>{props.children}</section>;
}
```

### 2.3 Loading, Error, Not Found and Global Error Boundaries

#### `loading.tsx`

`loading.tsx` wraps the segment's page in `<Suspense>` and shows the fallback immediately while the server renders. Because it sits inside the layout, the navigation bar stays visible.

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="skeleton-container" role="status" aria-label="Loading dashboard">
      <div className="skeleton-header" />
      <div className="skeleton-body" />
    </div>
  );
}
```

The starter's `app/topics/loading.tsx` does the same for `/topics`, which renders per request because it reads `searchParams`.

#### `error.tsx`

`error.tsx` is a React error boundary for its segment and must be a Client Component, because boundaries rely on client-side lifecycle. It receives the error and, since Next.js 16.3, a `retry()` function that re-fetches and re-renders the segment inside a transition. `reset()` still exists for the rarer case of re-rendering without re-fetching.

```tsx
// app/error.tsx (from the starter)
'use client';

export default function ErrorBoundary({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <section role="alert">
      <h1>Something went wrong</h1>
      <p>{error.digest ? `Error reference: ${error.digest}` : error.message}</p>
      <button type="button" onClick={() => retry()}>
        Try again
      </button>
    </section>
  );
}
```

| Prop / field | Meaning | What happens at runtime |
| :--- | :--- | :--- |
| `error.message` | The thrown message | In production, errors from Server Components are replaced with a generic message so secrets do not leak |
| `error.digest` | Hash of the server error | The same digest is logged on the server; use it to find the real stack trace |
| `retry()` | Recover | Re-requests the segment's server payload and re-renders it |
| `'use client'` | Required directive | Without it the build fails: error boundaries need client lifecycle methods |

#### `global-error.tsx`

An `error.tsx` cannot catch an error in the layout of the same folder, so the root layout needs `global-error.tsx`. It replaces the whole document, so it renders its own `<html>` and `<body>`.

```tsx
// app/global-error.tsx
'use client';

export default function GlobalError({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <h2>Critical application error</h2>
        <p>{error.message}</p>
        <button onClick={() => retry()}>Reload the app</button>
      </body>
    </html>
  );
}
```

#### `not-found.tsx` and `notFound()`

`not-found.tsx` renders for URLs that match no route and wherever `notFound()` is called. `notFound()` throws a special error, so code after it never runs, and TypeScript knows the value is defined afterwards:

```tsx
// app/topics/[slug]/page.tsx (from the starter)
import { notFound } from 'next/navigation';
import { getTopic } from '@/lib/topics';

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) {
    notFound(); // throws; renders the nearest not-found.tsx with a 404 status
  }
  return <h1>{topic.title}</h1>; // topic is narrowed to Topic here
}
```

```tsx
// app/not-found.tsx (from the starter)
import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>
        <Link href="/">Back to the home page</Link>
      </p>
    </section>
  );
}
```

`forbidden()` and `unauthorized()` work the same way with `forbidden.tsx` and `unauthorized.tsx` (403 and 401). They need `experimental.authInterrupts: true` in `next.config.ts`.

#### `catchError` for component-level boundaries

`error.tsx` is per segment. For one widget on a page, `catchError` from `next/error` (stable in 16.3) creates a boundary component that still lets `redirect()` and `notFound()` through:

```tsx
// app/dashboard/widget-boundary.tsx
'use client';

import { catchError, type ErrorInfo } from 'next/error';

function WidgetFallback(props: { name: string }, { error, retry }: ErrorInfo) {
  return (
    <div role="alert">
      <p>
        {props.name} failed: {error.message}
      </p>
      <button onClick={() => retry()}>Retry</button>
    </div>
  );
}

export default catchError(WidgetFallback);
```

```tsx
// app/dashboard/page.tsx
import WidgetBoundary from './widget-boundary';
import { RevenueChart } from './revenue-chart';

export default function Dashboard() {
  return (
    <WidgetBoundary name="Revenue">
      <RevenueChart />
    </WidgetBoundary>
  );
}
```

### 2.4 Dynamic Routes, Catch-all Segments and generateStaticParams

Square brackets declare a dynamic segment. The value arrives in `params`, which is a promise.

```tsx
// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h2>Viewing product {id}</h2>;
}
```

A catch-all `[...slug]` matches one or more segments; `params.slug` is an array:

```tsx
// app/docs/[...slug]/page.tsx: matches /docs/a and /docs/a/b/c, not /docs
export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <p>Section: {slug.join(' / ')}</p>;
}
```

An optional catch-all `[[...slug]]` also matches the parent URL, in which case `slug` is `undefined`:

```tsx
// app/shop/[[...filters]]/page.tsx: matches /shop, /shop/shoes, /shop/shoes/red
export default async function ShopPage({ params }: { params: Promise<{ filters?: string[] }> }) {
  const { filters = [] } = await params;
  return <p>{filters.length === 0 ? 'All products' : `Filtered by ${filters.join(', ')}`}</p>;
}
```

| Folder | `/shop` | `/shop/a` | `/shop/a/b` | `params` type |
| --- | --- | --- | --- | --- |
| `[slug]` | no | `{ slug: 'a' }` | no | `{ slug: string }` |
| `[...slug]` | no | `{ slug: ['a'] }` | `{ slug: ['a', 'b'] }` | `{ slug: string[] }` |
| `[[...slug]]` | `{}` | `{ slug: ['a'] }` | `{ slug: ['a', 'b'] }` | `{ slug?: string[] }` |

`generateStaticParams` lists the values to prerender at build time. The starter prerenders every topic:

```tsx
// app/topics/[slug]/page.tsx
import { getTopics } from '@/lib/topics';

export function generateStaticParams() {
  return getTopics().map((topic) => ({ slug: topic.slug }));
}

// Optional: return 404 for slugs not in the list instead of rendering them on demand.
export const dynamicParams = false;
```

| Setting | Slug in the list | Slug not in the list |
| --- | --- | --- |
| `dynamicParams = true` (default) | Served from the build output | Rendered on first request, then cached like a static page |
| `dynamicParams = false` | Served from the build output | 404 |

With `cacheComponents` enabled, `dynamicParams` is not supported and `generateStaticParams` must return at least one entry; unknown params render at request time inside `<Suspense>`.

### 2.5 Route Groups, Private Folders and Multiple Root Layouts

Parentheses create a **route group**: a folder that organises files and can carry its own layout, but does not appear in the URL.

```text
app/
├── (marketing)/
│   ├── layout.tsx          -> marketing header and footer
│   ├── about/page.tsx      -> /about
│   └── contact/page.tsx    -> /contact
├── (shop)/
│   ├── layout.tsx          -> cart drawer, shop navigation
│   └── cart/page.tsx       -> /cart
└── _lib/
    └── format.ts           -> private folder, never routable
```

Groups give sections different layouts without changing URLs. If each group has its own `layout.tsx` rendering `<html>` and `<body>`, and there is no `app/layout.tsx`, the app has **multiple root layouts**; navigating between them does a full page load, because there is no shared root to keep mounted.

```mermaid
flowchart TD
    Root["app/ (no root layout)"] --> M["(marketing)/layout.tsx renders html and body"]
    Root --> S["(shop)/layout.tsx renders html and body"]
    M --> About["/about"]
    S --> Cart["/cart"]
    About -.->|"full page load"| Cart
```

Pitfall: two groups that resolve to the same URL (`(a)/about/page.tsx` and `(b)/about/page.tsx`) fail the build with `You cannot have two parallel pages that resolve to the same path`.

### 2.6 Parallel and Intercepting Routes

**Parallel routes** render several pages in one layout at the same time. Each `@slot` folder becomes a prop of the parent layout:

```tsx
// app/dashboard/layout.tsx with app/dashboard/@analytics and app/dashboard/@team
export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <section className="grid grid-cols-2">
        <div>{analytics}</div>
        <div>{team}</div>
      </section>
    </div>
  );
}
```

Each slot has its own `loading.tsx` and `error.tsx`, so a slow analytics query does not block the team panel. Every slot needs a `default.tsx`; Next.js 16 fails the build without it. It is what renders when the slot has no match for the current URL after a hard navigation.

**Intercepting routes** load a route inside the current layout while keeping its own URL. The typical use is a photo modal: clicking a thumbnail opens a modal at `/photos/12`, but opening `/photos/12` directly (or refreshing) shows the full page. Markers mirror relative paths: `(.)` same level, `(..)` one level up, `(..)(..)` two levels up, `(...)` from the app root.

```text
app/
├── @modal/
│   ├── (.)photos/[id]/
│   │   └── page.tsx        <- intercepted: renders as a modal on client navigation
│   └── default.tsx         <- slot fallback: renders nothing
├── photos/
│   └── [id]/
│       └── page.tsx        <- full page on hard navigation or refresh
├── layout.tsx              <- renders {children} and {modal}
└── page.tsx                <- photo feed
```

```mermaid
sequenceDiagram
    participant User
    participant Router
    User->>Router: Click thumbnail (soft navigation to /photos/12)
    Router-->>User: Render @modal/(.)photos/[id] over the feed
    User->>Router: Refresh the page
    Router-->>User: Render photos/[id]/page.tsx as a full page
    User->>Router: Press Back after opening the modal
    Router-->>User: Close the modal, feed scroll position intact
```

The layout renders both slots:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
        {modal}
      </body>
    </html>
  );
}
```

```tsx
// app/@modal/default.tsx
export default function ModalSlotDefault() {
  return null;
}
```

The intercepted page stays a Server Component that awaits `params`; only the dialog chrome is client code. (The earlier edition made the whole page a Client Component and read `params.id` synchronously, which no longer works in Next.js 16.)

```tsx
// app/@modal/(.)photos/[id]/page.tsx
import Image from 'next/image';
import { Modal } from './modal';

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Modal title={`Photo ${id}`}>
      <div className="relative h-72 w-full overflow-hidden rounded-lg">
        <Image src={`https://picsum.photos/id/${id}/800/600`} alt={`Photo ${id}`} fill className="object-cover" />
      </div>
    </Modal>
  );
}
```

```tsx
// app/@modal/(.)photos/[id]/modal.tsx
'use client';

import { useRouter } from 'next/navigation';

export function Modal({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => router.back()}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={() => router.back()} aria-label="Close" className="absolute right-4 top-4">
          &times;
        </button>
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
```

`picsum.photos` must be allowed in `images.remotePatterns` in `next.config.ts` for `next/image` to optimise it (Stage 4).

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `@modal` | Parallel route slot | Becomes the `modal` prop of `app/layout.tsx` |
| `(.)photos/[id]` | Interception marker | On soft navigation to `/photos/:id`, this page renders in the slot instead of the real route |
| `default.tsx` returning `null` | Slot fallback | On a hard load of `/` or `/photos/12`, the slot renders nothing |
| `router.back()` | Close | Pops the history entry, so Back and the close button behave the same |
| `event.stopPropagation()` | Click containment | Clicks inside the dialog do not reach the backdrop's close handler |

### 2.7 Linking and Navigating

#### `<Link>`

`<Link>` renders an `<a>` and turns clicks into client-side navigations. In production it prefetches routes when the link enters the viewport. Next.js 16 prefetches incrementally: shared layouts are downloaded once and only segments missing from the client cache are requested.

```tsx
import Link from 'next/link';

export function NavigationMenu() {
  return (
    <nav aria-label="Main">
      <Link href="/">Home</Link>
      <Link href="/dashboard" prefetch={true}>
        Dashboard
      </Link>
      <Link href={{ pathname: '/topics', query: { level: 'beginner' } }}>Beginner topics</Link>
      <Link href="/settings" prefetch={false}>
        Settings
      </Link>
    </nav>
  );
}
```

| `prefetch` value | Static route | Dynamic route |
| --- | --- | --- |
| omitted (`"auto"`) | Full route prefetched | Prefetched down to the nearest `loading.tsx` boundary |
| `true` | Full route | Full route, including dynamic data |
| `false` | Never prefetched | Never prefetched |

```mermaid
sequenceDiagram
    participant Browser
    participant Router as Client router cache
    participant Server
    Browser->>Router: Link scrolls into view
    Router->>Server: Prefetch layout and loading shell for /dashboard
    Server-->>Router: Cached segments
    Browser->>Router: User clicks
    Router-->>Browser: Show prefetched shell instantly
    Router->>Server: Fetch remaining dynamic segment
    Server-->>Browser: Stream the page into place
```

#### `useRouter`, `usePathname`, `useSearchParams`, `useLinkStatus`

Navigation hooks come from `next/navigation` (not `next/router`, which is the Pages Router) and work only in Client Components.

```tsx
'use client';

import { useRouter } from 'next/navigation';

export function CheckoutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/checkout/summary'); // add a history entry
        // router.replace(url)  replace the entry
        // router.refresh()     re-render the current route's Server Components
        // router.prefetch(url) warm the cache manually
      }}
    >
      Proceed to checkout
    </button>
  );
}
```

```tsx
'use client';

import Link, { useLinkStatus } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function PendingDot() {
  const { pending } = useLinkStatus(); // true while this Link's navigation is in flight
  return pending ? <span aria-hidden> ...</span> : null;
}

export function LevelTabs() {
  const pathname = usePathname();       // "/topics"
  const searchParams = useSearchParams(); // URLSearchParams, read-only
  const current = searchParams.get('level');

  return ['beginner', 'advanced'].map((level) => (
    <Link key={level} href={`${pathname}?level=${level}`} aria-current={current === level ? 'page' : undefined}>
      {level}
      <PendingDot />
    </Link>
  ));
}
```

A component that calls `useSearchParams()` in a statically rendered route must sit inside `<Suspense>`; otherwise the build fails with `useSearchParams() should be wrapped in a suspense boundary`. The reason: the query string is unknown at build time, so that part of the tree has to render in the browser.

#### `redirect()` and `permanentRedirect()`

On the server, `redirect()` throws and sends a 307 (or a 303 after a Server Action); `permanentRedirect()` sends a 308. Call them in Server Components, Server Actions and Route Handlers, outside `try/catch`, because they work by throwing.

```tsx
// app/account/page.tsx
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function AccountPage() {
  const session = (await cookies()).get('session')?.value;
  if (!session) {
    redirect('/login?next=/account');
  }
  return <h1>Your account</h1>;
}
```

For fixed URL moves, declare redirects in configuration so they run before rendering:

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/blog/:slug', destination: '/articles/:slug', permanent: true }];
  },
};

export default nextConfig;
```

| Tool | Where | Status | Use for |
| --- | --- | --- | --- |
| `redirects()` in config | Before routing | 307/308 | Known URL moves |
| `proxy.ts` | Before routing, per request | Any | Locale or auth-cookie redirects |
| `redirect()` | Server Component, Action, Route Handler | 307 (303 from an Action) | Decisions that need data |
| `router.push()` | Client Component | none (client navigation) | After a client-side event |

### 2.8 Metadata, generateMetadata and Route Segment Config

#### Static and dynamic metadata

Export `metadata` for fixed values, or `generateMetadata` when the title depends on data. Both are Server Component only.

```tsx
// app/topics/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Topics' };
```

```tsx
// app/topics/[slug]/page.tsx (from the starter)
import type { Metadata } from 'next';
import { getTopic } from '@/lib/topics';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return topic ? { title: topic.title, description: topic.summary } : { title: 'Not found' };
}
```

Metadata merges from the root layout down: the root sets `title.template: '%s | Learn Next.js'`, the page sets `title: 'Dynamic routes'`, and the result is `Dynamic routes | Learn Next.js`. If the page and `generateMetadata` fetch the same data, wrap the fetcher in `React.cache` so it runs once (Stage 3.3).

File-based metadata also exists: `app/icon.png`, `app/opengraph-image.tsx` (generated with `ImageResponse`), `app/sitemap.ts` and `app/robots.ts`. Stage 4 covers them.

#### Route segment config

A page, layout or route handler can export constants that change how it is built.

| Export | Values | Effect | With `cacheComponents` |
| --- | --- | --- | --- |
| `dynamic` | `'auto'`, `'force-dynamic'`, `'force-static'`, `'error'` | Force or forbid request-time rendering | Not supported; use `connection()` / `"use cache"` |
| `revalidate` | `false`, `0`, seconds | Default revalidation period for the segment | Not supported; use `cacheLife` |
| `dynamicParams` | `true`, `false` | Render or 404 params not in `generateStaticParams` | Not supported |
| `runtime` | `'nodejs'`, `'edge'` | Runtime for this segment | Not supported; Node.js only |
| `maxDuration` | seconds | Execution limit on platforms that honour it | Supported |
| `preferredRegion` | region id(s) | Deployment region hint | Supported |

```ts
// app/health/route.ts (from the starter)
export const dynamic = 'force-dynamic'; // never prerender the health check

export function GET() {
  return Response.json({ status: 'ok' }, { headers: { 'Cache-Control': 'no-store' } });
}
```

The earlier edition recommended `export const runtime = 'edge'` per route. The Edge runtime still works in apps without Cache Components, but it lacks Node APIs, many npm packages and some Next.js features; prefer the Node.js runtime unless a measured latency need says otherwise.

### 2.9 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Reading `params.id` without `await` | TypeScript: `Property 'id' does not exist on type 'Promise<...>'`; at runtime `undefined` | `const { id } = await params` (or `use(params)` in a Client Component) |
| Expecting `error.tsx` to catch its own layout's error | White screen or the parent boundary shows | Move the boundary up one folder, or add `global-error.tsx` for the root layout |
| `page.tsx` and `route.ts` in the same folder | `Conflicting route and page at /path` | Put the handler under `api/` or a different segment |
| Parallel slot without `default.tsx` | Build error in Next.js 16; 404 on refresh in older versions | Add `default.tsx` returning `null` (or calling `notFound()`) to every slot |
| `useSearchParams()` in a static route without `<Suspense>` | `useSearchParams() should be wrapped in a suspense boundary at page "/x"` | Wrap the component in `<Suspense>`, or read `searchParams` in the page |
| Importing `useRouter` from `next/router` | `NextRouter was not mounted` | Import from `next/navigation` in the App Router |
| `redirect()` inside `try { ... } catch {}` | Redirect silently swallowed; page renders | Call `redirect()` after the `try/catch`, or rethrow with `unstable_rethrow(error)` |
| Two route groups producing the same URL | `You cannot have two parallel pages that resolve to the same path` | Rename one route, or move it into a single group |
| Layout trying to read `searchParams` | Prop is `undefined`; filters stop updating | Read `searchParams` in the page or with `useSearchParams()` |

### 2.10 Best Practices

- **Model the URL first**: sketch the URL tree, then create folders; folder names are part of your public API and are hard to change later.
- **Put a `loading.tsx` next to every dynamic page**: users see the shell instantly and prefetching has a boundary to stop at.
- **Add `error.tsx` at the section level** (for example `app/dashboard/error.tsx`), so one failing widget does not blank the whole app.
- **Use route groups for layout differences, not for URL changes**: they keep URLs stable while letting marketing and app sections diverge.
- **Keep intercepted pages as Server Components**: only the dialog chrome needs `'use client'`.
- **Use `generateStaticParams` for content you know at build time**: those pages are served from the CDN with no server work.
- **Use `<Link>` for internal navigation** and plain `<a>` only for external sites or file downloads: `<Link>` prefetches and keeps layouts mounted.
- **Prefer config `redirects()` for permanent moves**: they run before rendering and are visible in one place.

### 2.11 Hands-on Exercise

Extend the starter's topics section.

1. Add `app/topics/[slug]/loading.tsx` that renders `<p role="status">Loading topic...</p>`.
2. Add `export const dynamicParams = false;` to `app/topics/[slug]/page.tsx` and confirm that `/topics/unknown` now returns 404 in a production build (`npm run build && npm start`).
3. Create a route group `app/(info)/` with its own `layout.tsx` that wraps children in `<section className="info">`, and move the About page from Exercise 1.11 into it. Check that the URL is still `/about`.
4. Add a `generateMetadata` test: call it with `params: Promise.resolve({ slug: 'server-actions' })` and expect `{ title: 'Server Actions' }`.

Expected result: `npm test` passes with the new metadata test, and the `next build` table shows `○ /about` and five `●` topic pages. The patterns are in `app/topics/[slug]/page.tsx` and `test/components.test.tsx`.

[Back to top ⤴️](#-table-of-contents)

---

## 3. Stage 3: Server Components, Data Fetching, Server Actions & Route Handlers

This stage is where Next.js stops being "React with routing". It covers where code runs, how data reaches components, how the cache decides between static and dynamic output, and how the browser changes data on the server. Prerequisites are Stages 1 and 2. Afterwards you can build a feature end to end, from a database read in a Server Component to a validated form submission that updates the page, plus a JSON endpoint and a request filter in `proxy.ts`.

```mermaid
sequenceDiagram
    autonumber
    participant Browser as Browser (Client Component form)
    participant Action as Server Action ('use server')
    participant DB as Database
    participant Cache as Next.js cache
    Browser->>Action: POST FormData (form submission)
    Note over Action: Authenticate, then validate the payload
    Action->>DB: INSERT the new row
    DB-->>Action: Row created
    Action->>Cache: updateTag('posts') or revalidatePath('/posts')
    Action-->>Browser: Return state, plus fresh RSC payload for the page
    Note over Browser: React applies the new server output, client state survives
```

### 3.1 Server Components: Mental Model, Benefits and Limits

In the App Router every component is a **React Server Component** unless its module, or a module that imports it, starts with `'use client'`. Server Components run on the server only: at build time for static routes, per request for dynamic ones. They render to an **RSC payload**, a compact serialised description of the UI tree, which the browser merges into the page. React uses the same payload for the first HTML and for later client-side navigations.

```tsx
// A Server Component can be async and talk to the database directly.
import { db } from '@/lib/db';

export async function UserList() {
  const users = await db.user.findMany({ select: { id: true, name: true, email: true } });
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name} ({u.email})
        </li>
      ))}
    </ul>
  );
}
```

Benefits:

- **Smaller client bundles.** A Markdown parser, date library or syntax highlighter used only in Server Components adds nothing to the JavaScript the browser downloads.
- **Direct backend access.** Query the database, read files or call internal services in the render function; no extra API layer for your own pages.
- **Secrets stay on the server.** Database URLs and API keys used in Server Components are never serialised to the browser.
- **Streaming.** An async component behind `<Suspense>` can stream in after the rest of the page.

Limits. A Server Component cannot:

- use state or lifecycle hooks (`useState`, `useReducer`, `useEffect`, `useLayoutEffect`);
- attach event handlers (`onClick`, `onChange`);
- use browser APIs (`window`, `localStorage`, `document`);
- read React context (`useContext`, `use(Context)`).

| Capability | Server Component | Client Component |
| --- | --- | --- |
| `async` component, `await` in render | Yes | No (use `use(promise)` instead) |
| Database, file system, secrets | Yes | No |
| `useState`, `useEffect`, event handlers | No | Yes |
| Browser APIs | No | Yes, after mount |
| Ships its own JavaScript to the browser | No | Yes |
| Can import the other kind | Yes, renders Client Components | Only via `children`/props, not by importing a Server Component |

To guarantee that a module never ends up in a client bundle, import the `server-only` package at its top. The build then fails if a Client Component imports it, which protects files that read secrets:

```ts
// lib/db.ts
import 'server-only';
import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();
```

### 3.2 Client Components and the 'use client' Boundary

`'use client'` at the top of a file marks a **boundary**: that module and everything it imports become part of the client bundle. You do not need the directive in every interactive file, only at the entry point from server code.

```tsx
'use client';

import { useEffect, useState } from 'react';

export function InteractiveWidget() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log('Mounted in the browser'); // never runs on the server
  }, []);

  return <button onClick={() => setActive((a) => !a)}>State: {active ? 'On' : 'Off'}</button>;
}
```

Browser globals are safe inside effects and event handlers, which only run in the browser. Reading them during render breaks the server pass, because Client Components are also rendered on the server for the first HTML:

```tsx
'use client';

import { useEffect, useState } from 'react';

export function GeolocationDisplay() {
  const [coords, setCoords] = useState('Detecting...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords(`${pos.coords.latitude}, ${pos.coords.longitude}`),
      () => setCoords('Location access denied'),
    );
  }, []);

  return <p>Coordinates: {coords}</p>;
}
```

```mermaid
flowchart TD
    Page["page.tsx (Server)"] --> Header["Header (Server)"]
    Page --> List["TopicList (Server)"]
    Page --> Like["LikeButton ('use client')"]
    Like --> Icon["Icon.tsx (no directive, becomes client because Like imports it)"]
    Page --> Shell["Tabs ('use client')"]
    Shell -->|"children prop"| Panel["Panel content (Server, rendered before Tabs runs)"]
```

#### Props across the boundary must be serialisable

The server serialises props it passes to a Client Component into the RSC payload.

| Prop type | Allowed | Notes |
| --- | --- | --- |
| string, number, boolean, `null`, `undefined` | Yes | |
| Plain objects and arrays of the above | Yes | |
| `Date`, `Map`, `Set`, `BigInt`, typed arrays | Yes | Serialised by React's protocol |
| Promises | Yes | Unwrap with `use(promise)` in the Client Component |
| JSX elements (including Server Components) | Yes | The usual way to pass server UI into client UI |
| Server Actions (`'use server'` functions) | Yes | Passed as references |
| Other functions, class instances, Symbols | No | `Functions cannot be passed directly to Client Components` |

#### The children pattern

A Client Component cannot import a Server Component, but it can receive one as `children`. The server renders the child first and passes the result through:

```tsx
// tabs.tsx
'use client';

import { useState } from 'react';

export function Tabs({ labels, children }: { labels: string[]; children: React.ReactNode[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist">
        {labels.map((label, i) => (
          <button key={label} role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
            {label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{children[active]}</div>
    </div>
  );
}
```

```tsx
// page.tsx (Server Component)
import { Tabs } from './tabs';
import { Changelog, Readme } from './panels'; // async Server Components

export default function Page() {
  return (
    <Tabs labels={['Readme', 'Changelog']}>
      <Readme />
      <Changelog />
    </Tabs>
  );
}
```

Both panels render on the server, so their data access and dependencies stay there, while `Tabs` handles the clicks in the browser.

### 3.3 Fetching Data in Server Components

The default way to load data in the App Router is to `await` it inside an async Server Component. There is no `getServerSideProps` and no client-side loading state to manage.

```tsx
// app/profile/page.tsx
export default async function ProfilePage() {
  const res = await fetch('https://api.example.com/me', { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`Profile request failed: ${res.status}`); // caught by error.tsx
  const profile: { name: string; bio: string } = await res.json();

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
    </div>
  );
}
```

#### Avoid request waterfalls

Sequential `await`s add their latencies. Start independent requests first, then await them together:

```tsx
// Slow: 300 ms + 200 ms
const user = await getUser(id);
const orders = await getOrders(id);

// Fast: max(300 ms, 200 ms)
const [user2, orders2] = await Promise.all([getUser(id), getOrders(id)]);

declare const id: string;
declare function getUser(id: string): Promise<unknown>;
declare function getOrders(id: string): Promise<unknown>;
```

```mermaid
flowchart LR
    subgraph Sequential["Sequential awaits: 500 ms"]
        A1["getUser 300 ms"] --> A2["getOrders 200 ms"]
    end
    subgraph Parallel["Promise.all: 300 ms"]
        B0["start both"] --> B1["getUser 300 ms"]
        B0 --> B2["getOrders 200 ms"]
    end
```

When the second request needs the first result, the waterfall is real. Then split the UI so each part waits only for its own data behind its own `<Suspense>` boundary (3.4).

#### Deduplicate with `React.cache`

`generateMetadata`, the page and a deeply nested component often need the same record. `React.cache` memoises a function for the duration of one server request, so the database is hit once:

```ts
// lib/queries.ts
import 'server-only';
import { cache } from 'react';
import { db } from '@/lib/db';

export const getUser = cache(async (userId: string) => {
  return db.user.findUnique({ where: { id: userId } });
});
```

`fetch` calls with the same URL and options are deduplicated the same way automatically during a render. `React.cache` is per request only; it is not a cross-request cache. For that, see 3.5.

#### Stream a promise into a Client Component with `use`

A Server Component can start a request without awaiting it and pass the promise down. The Client Component reads it with `use`, suspending until it resolves:

```tsx
// app/comments/page.tsx (Server)
import { Suspense } from 'react';
import { Comments } from './comments';
import { getComments } from '@/lib/queries';

export default function Page() {
  const commentsPromise = getComments(); // not awaited: rendering continues
  return (
    <Suspense fallback={<p>Loading comments...</p>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

```tsx
// app/comments/comments.tsx
'use client';

import { use } from 'react';

export function Comments({ commentsPromise }: { commentsPromise: Promise<{ id: string; body: string }[]> }) {
  const comments = use(commentsPromise);
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.body}</li>
      ))}
    </ul>
  );
}
```

#### Server fetching versus client fetching

| | Server Component fetch | Client fetch (SWR, TanStack Query, `useEffect`) |
| --- | --- | --- |
| Runs | Server, before HTML is sent | Browser, after hydration |
| Secrets and CORS | Not an issue | Must go through a public endpoint |
| SEO | Data in the HTML | Data missing from the first HTML |
| Best for | Page data, anything needed for first paint | Polling, infinite scroll, data that changes while the user watches |

### 3.4 Rendering Strategies: Static, Dynamic, ISR and Streaming

Without `cacheComponents` (the default in Next.js 16, and what the starter uses), Next.js decides per route at build time.

#### Static rendering

A route with no request-time inputs is rendered once at build time and served from cache. The starter's `/` is static.

#### Dynamic rendering

Reading request data makes the route render per request:

```tsx
// app/notes/page.tsx (from the starter)
import { connection } from 'next/server';
import { listNotes } from '@/lib/notes';
import { NoteForm } from './note-form';

export default async function NotesPage() {
  // The note list changes at runtime, so opt this route out of prerendering.
  await connection();
  const notes = listNotes();
  return (
    <>
      <h1>Notes</h1>
      <NoteForm />
      <ul className="notes">
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </>
  );
}
```

`connection()` replaced `unstable_noStore()` as the explicit opt-out. Other triggers are `await cookies()`, `await headers()`, `await searchParams` and `fetch(url, { cache: 'no-store' })`. The route segment config `export const dynamic = 'force-dynamic'` also works:

```tsx
export const dynamic = 'force-dynamic';

export default async function LiveClock() {
  return <p>Server time: {new Date().toISOString()}</p>;
}
```

#### `fetch` caching options

Since Next.js 15, `fetch` responses are **not** cached by default. Opt in per call:

```ts
// Cached until revalidated (static data)
const products = await fetch('https://api.example.com/products', { cache: 'force-cache' });

// Never cached (makes the route dynamic)
const live = await fetch('https://api.example.com/live', { cache: 'no-store' });

// Cached, refreshed in the background at most once an hour (ISR)
const articles = await fetch('https://api.example.com/articles', { next: { revalidate: 3600 } });

// Cached with a tag for on-demand invalidation
const posts = await fetch('https://api.example.com/posts', { next: { tags: ['posts'] } });
```

#### Incremental Static Regeneration

ISR serves a static page and regenerates it in the background after a period, or when you invalidate it. The first request after expiry still gets the stale page; the next one gets the fresh one.

```tsx
// app/news/page.tsx: regenerate at most once a minute
export const revalidate = 60;

export default async function NewsFeed() {
  const news: { id: string; title: string }[] = await fetch('https://api.example.com/news', {
    next: { revalidate: 60 },
  }).then((r) => r.json());
  return (
    <ul>
      {news.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

```mermaid
stateDiagram-v2
    [*] --> Fresh: next build renders the page
    Fresh --> Stale: revalidate period passes
    Stale --> Regenerating: next request served stale HTML and triggers a rebuild
    Regenerating --> Fresh: new HTML replaces the cached copy
    Fresh --> Stale: revalidatePath or revalidateTag
```

#### Streaming with Suspense

Wrap a slow part in `<Suspense>` and the server sends everything else first. The browser shows the fallback, then React swaps in the real content when its chunk arrives on the same response.

```tsx
import { Suspense } from 'react';
import { SlowMetricWidget } from './slow-widget';

export default function AnalyticsPage() {
  return (
    <div>
      <h1>Real-time metrics</h1>
      <Suspense fallback={<p>Loading metrics...</p>}>
        <SlowMetricWidget />
      </Suspense>
    </div>
  );
}
```

`loading.tsx` is the same idea applied to a whole page.

| Strategy | When HTML is produced | Data freshness | Typical route |
| --- | --- | --- | --- |
| Static | `next build` | As of the build | Marketing, docs |
| ISR | Build, then in the background | Within the revalidate window | Product pages, blogs |
| Dynamic | Every request | Live | Dashboards, search |
| Streaming | Every request, in chunks | Live | Pages with one slow widget |
| Client-side (CSR) | Browser after hydration | Live, polled | Live tickers, chat |

### 3.5 Cache Components: "use cache", cacheLife, cacheTag and Partial Prerendering

Next.js 16 adds an opt-in model, **Cache Components**, that flips the default. With `cacheComponents: true`:

- Nothing is cached unless you mark it with `"use cache"`.
- Every route is **prerendered into a static shell**. Anything that reads request data or uncached I/O must sit inside `<Suspense>`; its fallback goes in the shell and the real content streams in at request time. This is **Partial Prerendering (PPR)**.
- The `dynamic`, `revalidate`, `fetchCache` and `runtime` segment configs are replaced by `"use cache"`, `cacheLife`, `connection()` and the Node.js runtime.

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true, // set explicitly; leaving it unset logs a warning
};

export default nextConfig;
```

```mermaid
flowchart LR
    Build["next build"] --> Shell["Static shell: layout, header, cached product data, Suspense fallbacks"]
    Req["Request"] --> CDN["CDN serves the shell instantly"]
    Shell --> CDN
    CDN --> Holes["Server renders Suspense holes: cart, recommendations"]
    Holes --> Stream["Streamed into the same response"]
```

#### Caching data and UI

```ts
// lib/catalogue.ts
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/lib/db';

export async function getProducts(category: string) {
  'use cache';
  cacheLife('hours');            // built-in profiles: 'seconds', 'minutes', 'hours', 'days', 'weeks', 'max'
  cacheTag('products', `category-${category}`);
  return db.product.findMany({ where: { category } });
}
```

```tsx
// app/shop/[category]/page.tsx
import { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getProducts } from '@/lib/catalogue';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  return (
    <>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductGrid params={params} />
      </Suspense>
      <Suspense fallback={<p>Loading cart...</p>}>
        <CartSummary />
      </Suspense>
    </>
  );
}

async function ProductGrid({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const products = await getProducts(category); // cached: becomes part of the shell for known params
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

async function CartSummary() {
  const cartId = (await cookies()).get('cart')?.value; // request data: streams at request time
  return <p>Cart: {cartId ? 'items saved' : 'empty'}</p>;
}
```

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `'use cache'` | Directive at the top of a function, component or file | Return value is stored; arguments and captured variables form the cache key |
| `cacheLife('hours')` | Lifetime profile | Sets how long the entry is fresh, when it revalidates, and when it expires |
| `cacheTag(...)` | Labels the entry | `revalidateTag('products', 'max')` or `updateTag('products')` invalidates it later |
| `<Suspense>` around `CartSummary` | Dynamic hole | Fallback is in the shell; `cookies()` runs per request |
| `cookies()` inside `"use cache"` | Not allowed | Read request data outside, pass the value in as an argument |

Request APIs cannot be called inside a cached scope, because the result would be shared across users. Read them outside and pass the value as an argument, which makes it part of the cache key. For per-user data, `"use cache: private"` allows `cookies()`, `headers()` and `searchParams` inside the scope; the result is reused within one request and may be kept in browser memory by the client router, but it is never stored in a server cache across requests; `"use cache: remote"` stores entries in a configured remote cache handler shared by all server instances.

Non-deterministic values such as `new Date()` or `Math.random()` also break prerendering, because the shell would freeze one value. In 16.3+, `await io()` before them moves that work to request time:

```tsx
import { io } from 'next/cache';

async function GeneratedAt() {
  await io();
  return <small>Generated {new Date().toISOString()}</small>;
}
```

Migrating from the default model:

| Default model | Cache Components |
| --- | --- |
| `export const revalidate = 3600` | `'use cache'` + `cacheLife('hours')` |
| `export const dynamic = 'force-dynamic'` | Remove it; wrap request-dependent parts in `<Suspense>` |
| `export const dynamic = 'force-static'` | `'use cache'` on the page or layout |
| `fetch(url, { next: { revalidate: 60 } })` | Put the fetch inside a `'use cache'` function with a `cacheLife` |
| `unstable_cache(fn, keys, { tags })` | `'use cache'` + `cacheTag` |
| `unstable_noStore()` | `await connection()` |
| `experimental.ppr` / `experimental_ppr` | Built in; nothing to configure per route |

When to choose which model:

| | Default model (starter) | Cache Components |
| --- | --- | --- |
| Mental model | Route is static or dynamic | Every route is a static shell plus streamed holes |
| What is cached | Static routes, opted-in `fetch` | Only what you mark |
| Learning curve | Lower | Higher: Suspense placement matters |
| Best for | Small apps, mostly static or mostly dynamic routes | Pages that mix personalised and shared content |

### 3.6 Server Actions: Mutations, Forms and Revalidation

A **Server Action** is an async function marked with `'use server'`. You pass it to a form's `action` prop or call it from a Client Component. The browser receives only an opaque reference; calling it sends a POST request that Next.js routes to the function. After it finishes, Next.js returns the action's result and, if you revalidated anything, the fresh RSC payload for the current page in the same response.

The starter's note form:

```ts
// app/notes/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { addNote, validateNote } from '@/lib/notes';

export interface NoteFormState {
  error?: string;
  saved?: string;
}

// A Server Action. The client receives only a reference to it; the body runs
// on the server. Treat formData as untrusted input, like any POST body.
export async function addNoteAction(
  _previous: NoteFormState,
  formData: FormData,
): Promise<NoteFormState> {
  const result = validateNote(formData.get('text'));
  if (!result.ok) {
    return { error: result.error };
  }
  const note = addNote(result.text);
  revalidatePath('/notes');
  return { saved: note.text };
}
```

```tsx
// app/notes/note-form.tsx
'use client';

import { useActionState } from 'react';
import { addNoteAction, type NoteFormState } from './actions';
import { MAX_NOTE_LENGTH } from '@/lib/notes';

const initialState: NoteFormState = {};

export function NoteForm() {
  const [state, formAction, pending] = useActionState(addNoteAction, initialState);

  return (
    <form action={formAction} className="note-form">
      <label htmlFor="note-text">New note</label>
      <input id="note-text" name="text" maxLength={MAX_NOTE_LENGTH} disabled={pending} />
      <button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Add note'}
      </button>
      {state.error && <p role="alert">{state.error}</p>}
      {state.saved && <p role="status">Saved: {state.saved}</p>}
    </form>
  );
}
```

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `'use server'` at file top | Marks every export as a Server Action | The bundler replaces imports of this file in client code with network references |
| `(_previous, formData)` | Signature required by `useActionState` | React passes the last returned state, then the submitted `FormData` |
| `validateNote(formData.get('text'))` | Server-side validation | The only validation you can trust; `maxLength` in the browser is a convenience |
| `revalidatePath('/notes')` | Invalidate cached output | The response carries a fresh payload for `/notes`, so the list updates without a reload |
| `useActionState(action, initial)` | Hook | Returns `[state, formAction, pending]`; works before hydration, so the form posts even with JavaScript disabled |
| `<form action={formAction}>` | Progressive enhancement | Without JS the browser submits a normal POST; with JS React submits it and keeps client state |

A fuller example from the earlier edition, updated for Next.js 16 and Zod 4: schema validation, field errors, a cache tag update and a redirect.

```ts
// app/posts/actions.ts
'use server';

import { z } from 'zod';
import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

const PostSchema = z.object({
  title: z.string().trim().min(5, 'Title must contain at least 5 characters'),
  content: z.string().trim().min(20, 'Content must contain at least 20 characters'),
  category: z.enum(['tech', 'design', 'business']),
});

export type PostFormState = {
  errors?: Partial<Record<'title' | 'content' | 'category' | '_form', string[]>>;
};

export async function createPostAction(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  const session = await auth();
  if (!session) return { errors: { _form: ['Sign in to publish.'] } };

  const parsed = PostSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { errors: z.flattenError(parsed.error).fieldErrors };
  }

  try {
    await db.post.create({ data: { ...parsed.data, authorId: session.user.id } });
  } catch {
    return { errors: { _form: ['Could not save the post. Please retry.'] } };
  }

  updateTag('posts'); // the author sees the new post on the next render
  redirect('/posts'); // outside try/catch: redirect works by throwing
}
```

```tsx
// app/posts/new/create-post-form.tsx
'use client';

import { useActionState } from 'react';
import { createPostAction, type PostFormState } from '../actions';

const initialState: PostFormState = {};

export function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, initialState);

  return (
    <form action={formAction} className="max-w-md space-y-4">
      <label>
        Title
        <input name="title" disabled={isPending} />
      </label>
      {state.errors?.title && <p className="text-red-400">{state.errors.title[0]}</p>}

      <label>
        Content
        <textarea name="content" rows={4} disabled={isPending} />
      </label>
      {state.errors?.content && <p className="text-red-400">{state.errors.content[0]}</p>}

      <label>
        Category
        <select name="category" disabled={isPending}>
          <option value="tech">Technology</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>
      </label>

      {state.errors?._form && <p role="alert">{state.errors._form[0]}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Publishing...' : 'Publish post'}
      </button>
    </form>
  );
}
```

A Server Action can also be passed straight to a form in a Server Component, with no client code at all:

```tsx
// app/todos/page.tsx
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

async function createTodo(formData: FormData) {
  'use server';
  const title = String(formData.get('title') ?? '').trim();
  if (!title) return;
  await db.todo.create({ data: { title } });
  revalidatePath('/todos');
}

export default function TodosPage() {
  return (
    <form action={createTodo}>
      <input name="title" required placeholder="New task" aria-label="New task" />
      <button type="submit">Add</button>
    </form>
  );
}
```

#### Choosing an invalidation API

| API | Where | Semantics | Use when |
| --- | --- | --- | --- |
| `revalidatePath('/posts')` | Action, Route Handler | Marks the path's cached output stale | You know which page changed |
| `revalidatePath('/posts', 'layout')` | Action, Route Handler | Also invalidates every route below that layout | A shared layout shows the data |
| `revalidateTag('posts', 'max')` | Action, Route Handler | Stale-while-revalidate: next readers get stale data while it refreshes | Content where a short delay is fine (catalogues, blogs) |
| `updateTag('posts')` | Server Action only | Expire now; the next render waits for fresh data | The user must see their own write |
| `refresh()` | Server Action only | Re-render the client router; no cache entries change | Uncached data changed (counts, notifications) |
| `router.refresh()` | Client Component | Same as `refresh()` from the browser | After a client-side mutation |

#### Security model

Every exported Server Action is a public POST endpoint. Next.js helps: action IDs are unguessable and rotate per build, unused actions are removed from the bundle, closed-over variables are encrypted, and the `Origin` header must match the host (configure extra hosts with `experimental.serverActions.allowedOrigins`). It does not check who the user is. Authenticate and authorise inside every action, validate every field, and never trust IDs from the form without checking ownership.

### 3.7 Optimistic UI and Pending States

`useOptimistic` shows the expected result immediately and rolls back automatically if the action fails or when the real data arrives. Call the optimistic setter inside an action or `startTransition`; outside one, React warns that the update happened outside a transition and it does not stick.

```tsx
'use client';

import { startTransition, useOptimistic } from 'react';
import { likePost } from './actions';

export function LikeWidget({ postId, likes }: { postId: string; likes: number }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (current, delta: number) => current + delta);

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          addOptimisticLike(1);   // UI shows likes + 1 right away
          await likePost(postId); // Server Action; on return the real count replaces the optimistic one
        })
      }
    >
      Like ({optimisticLikes})
    </button>
  );
}
```

```mermaid
stateDiagram-v2
    [*] --> Confirmed: likes from server
    Confirmed --> Optimistic: click calls addOptimisticLike
    Optimistic --> Confirmed: action resolves, new props arrive
    Optimistic --> Confirmed: action throws, value rolls back
```

`useFormStatus` gives any component inside a `<form>` the pending state of that form, which keeps submit buttons reusable:

```tsx
'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus(); // reads the nearest parent <form>
  return (
    <button type="submit" disabled={pending} aria-busy={pending}>
      {pending ? 'Working...' : children}
    </button>
  );
}
```

| Hook | Package | Gives you | Typical use |
| --- | --- | --- | --- |
| `useActionState` | `react` | Last returned state, wrapped action, pending flag | Forms that show validation errors |
| `useFormStatus` | `react-dom` | `pending`, `data`, `method` of the parent form | Shared submit buttons |
| `useOptimistic` | `react` | Temporary state that resets after the transition | Likes, toggles, chat messages |
| `useTransition` | `react` | `isPending` plus `startTransition` | Calling actions from event handlers |

### 3.8 Forms: Progressive Enhancement, next/form and Client Validation

Three tools, three jobs:

| Need | Tool | JavaScript required |
| --- | --- | --- |
| Mutate data | `<form action={serverAction}>` | No (enhanced when available) |
| Search or filter by URL (GET) | `<Form action="/search">` from `next/form` | No (client navigation when available) |
| Instant field-level feedback as the user types | React Hook Form + Zod | Yes |

`next/form` submits GET forms as client-side navigations, prefetches the target's loading UI, and keeps working as a normal form before hydration:

```tsx
// app/search/page.tsx
import Form from 'next/form';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  return (
    <>
      <Form action="/search">
        <input name="q" defaultValue={q} aria-label="Search topics" />
        <button type="submit">Search</button>
      </Form>
      <p>{q ? `Results for "${q}"` : 'Type a query'}</p>
    </>
  );
}
```

For rich client-side validation, React Hook Form with a Zod resolver validates on every change. Keep the same schema on the server, because client checks can be bypassed:

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.email('Invalid email address'), // Zod 4 top-level format validator
});

type SignupInput = z.infer<typeof signupSchema>;

export function ValidatedSignupForm({ onValid }: { onValid: (data: SignupInput) => Promise<void> }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({ resolver: zodResolver(signupSchema) });

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('username')} placeholder="Username" aria-invalid={!!errors.username} />
      {errors.username && <p role="alert">{errors.username.message}</p>}

      <input {...register('email')} placeholder="Email" aria-invalid={!!errors.email} />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        Sign up
      </button>
    </form>
  );
}
```

`onValid` can be a Server Action passed down from a Server Component, so validation happens twice with one schema: in the browser for speed, on the server for safety.

### 3.9 Route Handlers

A `route.ts` file exports functions named after HTTP methods. They use the standard Web `Request` and `Response` (Next.js adds `NextRequest` with `nextUrl` and `cookies`). Use them for endpoints that something other than your own pages calls: mobile apps, webhooks, third-party integrations, health checks.

The starter's two handlers:

```ts
// app/health/route.ts
// GET /health: used by the Docker HEALTHCHECK and the CI smoke test.
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json(
    { status: 'ok', uptimeSeconds: Math.round(process.uptime()) },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
```

```ts
// app/api/topics/route.ts
import type { NextRequest } from 'next/server';
import { getTopics, isLevel } from '@/lib/topics';

// GET /api/topics?level=beginner returns JSON for other clients (mobile apps,
// scripts). Pages in this app read lib/topics directly instead.
export function GET(request: NextRequest) {
  const level = request.nextUrl.searchParams.get('level');
  if (level !== null && !isLevel(level)) {
    return Response.json({ error: `Unknown level "${level}"` }, { status: 400 });
  }
  return Response.json({ topics: getTopics(level ?? undefined) });
}
```

| Line / API | Role | What happens at runtime |
| :--- | :--- | :--- |
| `export function GET` | Method handler | Other methods get `405 Method Not Allowed` automatically |
| `request.nextUrl.searchParams` | Parsed query | A `URLSearchParams`; reading it makes the handler dynamic |
| `isLevel(level)` | Validation | Rejects unknown values with 400 instead of returning an empty list |
| `Response.json(body, init)` | Web standard | Serialises and sets `Content-Type: application/json` |
| `dynamic = 'force-dynamic'` | Segment config | Without it, a `GET` that reads nothing request-specific could be prerendered at build time |

Dynamic segments and request bodies work as in pages:

```ts
// app/api/items/[id]/route.ts
import type { NextRequest } from 'next/server';

export async function PATCH(request: NextRequest, ctx: RouteContext<'/api/items/[id]'>) {
  const { id } = await ctx.params;
  const body: unknown = await request.json();
  if (typeof body !== 'object' || body === null || !('name' in body)) {
    return Response.json({ error: 'Body must include name' }, { status: 422 });
  }
  return Response.json({ id, updated: true });
}
```

Handlers can stream. A Server-Sent Events endpoint from the earlier edition, with the escaped newlines the protocol needs written explicitly:

```ts
// app/api/events/route.ts
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 1; i <= 5; i++) {
        if (request.signal.aborted) break; // client went away
        const payload = JSON.stringify({ iteration: i, serverTimestamp: Date.now() });
        controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      controller.enqueue(encoder.encode('event: done\ndata: {"status":"finished"}\n\n'));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
```

Route Handler or Server Action?

| | Server Action | Route Handler |
| --- | --- | --- |
| Caller | Your own React UI | Anyone with the URL |
| Method | POST only | Any HTTP method |
| URL | Generated, not stable | Stable, documentable |
| Returns | Serialisable value plus fresh UI | Any `Response` (JSON, file, stream) |
| Use for | Form submissions, UI mutations | Webhooks, public APIs, files, health checks |

### 3.10 Proxy (formerly Middleware)

`proxy.ts` at the project root runs **before routing** for every request that matches its `matcher`. It can rewrite, redirect, set headers and cookies, or answer directly. Next.js 16 renamed `middleware.ts` to `proxy.ts`; the proxy always runs on the Node.js runtime.

```ts
// proxy.ts (from the starter)
import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  // Skip static assets and image optimisation requests.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

An optimistic auth gate, updated from the earlier edition's middleware. `request.geo` was removed in Next.js 15; read geolocation from your host's headers instead (for example `x-vercel-ip-country` on Vercel).

```ts
// proxy.ts
import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('app_session')?.value;

  // Cheap check only: is there a cookie at all? Real verification happens in the page or action.
  if ((pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) && !sessionToken) {
    const login = new URL('/login', request.url);
    login.searchParams.set('redirect_to', pathname);
    return NextResponse.redirect(login);
  }

  const response = NextResponse.next();
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('x-user-country', request.headers.get('x-vercel-ip-country') ?? 'unknown');
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

```mermaid
flowchart LR
    Req["Request"] --> Match{"matcher matches?"}
    Match -- no --> Route["Route renders"]
    Match -- yes --> Proxy["proxy(request)"]
    Proxy -->|"NextResponse.next()"| Route
    Proxy -->|"NextResponse.redirect()"| Redirect["3xx to browser"]
    Proxy -->|"NextResponse.rewrite()"| Other["Different route, same URL"]
    Proxy -->|"new Response()"| Direct["Answer immediately"]
```

| Do in `proxy.ts` | Do not do in `proxy.ts` |
| --- | --- |
| Redirect based on a cookie's presence or the locale header | Query the database on every request |
| Rewrite by hostname for multi-tenant routing | Treat it as your only authorisation check |
| Add security headers, a request ID or a CSP nonce | Heavy computation; it delays every matched request |
| A/B bucket assignment with a cookie | Rely on it for static assets excluded by the matcher |

Data Security rule of thumb: the proxy is an optimisation that turns away obviously unauthenticated requests early. Server Components, Server Actions and Route Handlers must still verify the session themselves, because a misconfigured matcher, a rewrite or a direct action call can skip the proxy.

### 3.11 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Passing a function prop from a Server to a Client Component | `Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server"` | Pass a Server Action, or move the handler into the Client Component |
| Importing a Server Component into a Client Component | The "server" component silently becomes client code; DB imports fail with `Module not found: Can't resolve 'fs'` | Pass it as `children` or another JSX prop from a Server Component |
| Secrets imported into client code | Build error with `server-only`; without it, an `undefined` env var in the browser or a leaked key | `import 'server-only'` in modules that read secrets; prefix only public values with `NEXT_PUBLIC_` |
| Sequential awaits for independent data | Page TTFB equals the sum of all request times | `Promise.all`, or separate `<Suspense>` boundaries |
| Expecting `fetch` to be cached | Every request hits the upstream API; route shows `ƒ` | Add `cache: 'force-cache'` or `next: { revalidate }`, or use `"use cache"` |
| `cookies()` inside a `"use cache"` function | `Route /shop used "cookies" inside "use cache"` error during render | Read cookies outside and pass the value as an argument, or use `"use cache: private"` |
| Uncached I/O outside `<Suspense>` with Cache Components | Build error about uncached data accessed outside of `<Suspense>` (blocking route) | Wrap the component in `<Suspense>` or cache the data with `"use cache"` |
| `revalidateTag('posts')` with one argument | TypeScript: `Expected 2 arguments, but got 1` | `revalidateTag('posts', 'max')`, or `updateTag('posts')` in a Server Action |
| No auth check inside a Server Action | Any user can call the action with crafted FormData | Verify the session and ownership at the top of every action |
| `redirect()` inside `try/catch` in an action | Redirect does not happen; catch block logs `NEXT_REDIRECT` | Call `redirect()` after the `try/catch` |
| Optimistic setter called outside a transition | Warning: `An optimistic state update occurred outside a transition or action`; value flickers back | Call it inside `startTransition` or a form action |
| Using `export function middleware` in `proxy.ts` | Proxy never runs | Export `proxy` (or a default export) from `proxy.ts` |
| Database calls in the proxy | Every request, including prefetches, waits on the database | Keep the proxy to header and cookie checks |

### 3.12 Best Practices

- **Fetch where the data is used**: let each Server Component load its own data and rely on `React.cache` and `fetch` deduplication instead of prop drilling from the page.
- **Push `'use client'` to the leaves**: wrap only the interactive part, and pass server-rendered content through `children`.
- **Mark server-only modules** with `import 'server-only'`: a mistaken client import becomes a build error instead of a leaked secret.
- **Validate on the server with a schema**: Zod (or similar) in every Server Action and Route Handler; client validation is UX, not security.
- **Authorise in the action, not only in the proxy**: actions are public POST endpoints.
- **Pick the narrowest invalidation**: `updateTag` for read-your-writes, `revalidateTag(tag, 'max')` for shared content, `revalidatePath` when a whole page changed.
- **Give every slow region its own `<Suspense>`**: the page shows up as soon as its fastest part is ready.
- **Use Route Handlers for external callers** and Server Actions for your own UI: you get stable URLs where you need them and less code where you do not.
- **Keep the proxy fast and boring**: headers, redirects, rewrites; no I/O.

### 3.13 Hands-on Exercise

Add deletion to the starter's notes.

1. In `lib/notes.ts`, add `deleteNote(id: number): boolean` that removes a note and reports whether it existed. Add unit tests in `test/lib.test.ts`.
2. In `app/notes/actions.ts`, add `deleteNoteAction(formData: FormData)` that reads `id`, converts it with `Number()`, rejects non-integers, calls `deleteNote`, and calls `revalidatePath('/notes')`.
3. In `app/notes/page.tsx`, render a `<form action={deleteNoteAction}>` with a hidden `<input name="id" value={note.id} />` and a Delete button next to each note.
4. Add a `DELETE` handler to a new `app/api/notes/[id]/route.ts` that does the same for API clients and returns `204` on success, `404` when the note does not exist.
5. Test the action and the handler in `test/server.test.ts`, following the existing `addNoteAction` and `GET /api/topics` tests (mock `next/cache` the same way).

Expected result: `npm test` passes; in the browser, deleting a note removes it from the list without a full reload, and `curl -X DELETE http://localhost:3000/api/notes/1` returns `204` the first time and `404` the second.

[Back to top ⤴️](#-table-of-contents)

---

## 4. Stage 4: Data Layer, Authentication, State, Styling & Assets

Stage 4 adds the parts every product needs around the App Router: who the user is, where data lives, how client state is shared, how the UI is styled, and how images, fonts, metadata and languages are served. It builds on Stage 3's Server Components and Server Actions. Afterwards you can wire a database through an ORM, protect routes with sessions and roles, and ship pages that score well on Core Web Vitals and SEO.

```mermaid
flowchart LR
    Browser --> Proxy["proxy.ts: cheap session-cookie check"]
    Proxy --> RSC["Server Component"]
    RSC --> DAL["Data access layer: verifySession() + queries"]
    DAL --> ORM["Prisma or Drizzle"]
    ORM --> PG[("PostgreSQL")]
    RSC --> UI["Tailwind + shadcn/ui components"]
    UI --> Assets["next/image, next/font, metadata"]
```

### 4.1 How the Pieces Fit

The most common mistake at this stage is putting each concern in the wrong layer. The table maps each concern to where it belongs in an App Router app.

| Concern | Put it in | Not in | Why |
| --- | --- | --- | --- |
| Session lookup | A `verifySession()` helper wrapped in `React.cache`, called from pages, actions and handlers | Only `proxy.ts` | Actions and handlers can be called without passing the proxy's matcher |
| Role checks | The data access layer, next to the query | Client Components | The browser can be modified; the server cannot |
| Database client | One module with `import 'server-only'` and a global singleton in dev | Each file creating its own client | Hot reload would open a new connection pool on every save |
| Shared client state (cart drawer, theme) | A small client store (Zustand, context) | Server Components | State needs the browser |
| Server data on the client | Props from Server Components, or a client cache (TanStack Query) for live data | A global store copied from the server | Two sources of truth drift apart |
| Fonts and images | `next/font`, `next/image` | `<link>` to Google Fonts, raw `<img>` | Self-hosting and sizing remove layout shift and third-party requests |

```mermaid
sequenceDiagram
    participant B as Browser
    participant P as proxy.ts
    participant Page as Server Component
    participant DAL as verifySession()
    participant DB as Database
    B->>P: GET /dashboard with cookie session=abc
    P->>P: Cookie present? continue
    P->>Page: Render /dashboard
    Page->>DAL: verifySession()
    DAL->>DB: Look up session abc (once per request via React.cache)
    DB-->>DAL: user id 7, role editor
    DAL-->>Page: userId 7, role editor
    Page->>DB: Query rows owned by user 7
    Page-->>B: Streamed HTML
```

### 4.2 Authentication with Auth.js and Better Auth

#### Auth.js (NextAuth.js)

The standard open-source authentication library for Next.js:

```ts
// auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: '/login',
  },
});
```

```ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
```

```tsx
// Protecting a Server Component
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedDashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  return <h1>Welcome, {session.user.name}</h1>;
}
```

#### Better Auth

A modern, type-safe authentication framework designed for fullstack TypeScript:

```ts
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
});
```

### 4.3 Authorization

#### Role-Based Access Control (RBAC)

Verify user permissions before rendering data or executing actions:

```tsx
import { auth } from '@/auth';

export async function AdminPortal() {
  const session = await auth();

  if (session?.user?.role !== 'ADMIN') {
    return <p>Access Denied: You must be an administrator to view this page.</p>;
  }

  return <section>Admin Management Controls</section>;
}
```

### 4.4 Database & ORM

#### Prisma ORM

Type-safe database ORM with schema migrations:

```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
}
```

```ts
// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const db = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

#### Drizzle ORM

Ultra-lightweight, SQL-like TypeScript ORM:

```ts
// db/schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### 4.5 State Management

Next.js separates state into Server State and Client State:
- **Server State**: Managed natively via Server Components, `fetch()`, `revalidatePath`, and React Server Actions.
- **Client State**: Managed via Zustand, Redux Toolkit, or React Context for local modals, themes, and client carts.

### 4.6 Styling & UI Libraries

#### Tailwind CSS & shadcn/ui

The most popular styling and component setup in the Next.js ecosystem:

```tsx
// Using shadcn/ui Button primitive
import { Button } from '@/components/ui/button';

export function ActionBanner() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-white mb-2">shadcn/ui Integration</h2>
      <p className="text-slate-400 mb-4">Accessible, fully customizable Tailwind primitives.</p>
      <Button variant="default">Get Started</Button>
    </div>
  );
}
```

### 4.7 Images with next/image

#### next/image

The `next/image` component provides automatic image resizing, WebP/AVIF format conversion, lazy loading, and prevents Cumulative Layout Shift (CLS):

```tsx
import Image from 'next/image';

export function BannerHero() {
  return (
    <div className="relative w-full h-80">
      <Image
        src="/hero-banner.jpg"
        alt="Platform Dashboard Banner"
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
        className="object-cover rounded-xl"
      />
    </div>
  );
}
```

### 4.8 Fonts with next/font

#### next/font

Zero layout shift, self-hosted Google Fonts and Local Fonts:

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### 4.9 Metadata and SEO

Configure SEO, OpenGraph tags, sitemaps, and robots:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Learn Next.js',
    default: 'Learn Next.js - Full-stack Masterclass',
  },
  description: 'Master Next.js 16, React 19, Server Components, and Server Actions.',
  openGraph: {
    title: 'Learn Next.js',
    description: 'Complete educational guide and project templates.',
    url: 'https://learn-nextjs.example.com',
    siteName: 'Learn Next.js',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@manthan_ank',
  },
};
```

### 4.10 Internationalization (i18n)

Implement multi-language support in App Router using `next-intl`:

```text
app/
└── [locale]/
    ├── layout.tsx
    └── page.tsx
```

```tsx
import { useTranslations } from 'next-intl';

export default function GreetingPage() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
```

### 4.11 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| New `PrismaClient()` per import in development | `Too many connections` / `FATAL: sorry, too many clients already` after a few hot reloads | Cache the client on `globalThis` outside production, or use a pooled serverless driver |
| Auth checked only in `proxy.ts` | Direct POSTs to a Server Action succeed for signed-out users | Call `verifySession()` inside every action, page and handler that touches private data |
| Remote image host not configured | `Invalid src prop ... hostname "x" is not configured under images in your next.config` | Add the host to `images.remotePatterns` |
| `next/image` without size information | `Image with src "..." is missing required "width" property` | Pass `width` and `height`, or `fill` inside a positioned parent with `sizes` |
| Zustand store created at module scope used during server rendering | One user's state appears for another user | Create the store per request inside a provider, or keep it strictly client-side |
| Locale detection without a fallback | Redirect loop between `/` and `/en` | Always redirect to a supported locale and exclude already-prefixed paths in the matcher |
| Tailwind classes built with string concatenation | Classes missing in production CSS (`bg-${color}-500`) | Use complete class names in a lookup object so the scanner can see them |

### 4.12 Best Practices

- **Centralise authorisation in a data access layer**: every query that returns private data checks the session in the same function, so no caller can forget.
- **Return DTOs, not ORM rows**: select only the fields a component needs, so a new column with sensitive data is never serialised to the client by accident.
- **Keep server data out of client stores**: read it in Server Components and pass props; reserve Zustand or context for UI state.
- **Use `next/font` for every font**: fonts are self-hosted at build time and `size-adjust` removes layout shift.
- **Give LCP images `preload`** (or `priority` in older versions) and correct `sizes`: the largest image is fetched first and at the right resolution.
- **Generate metadata from the same cached query as the page**: one database call, consistent titles and content.
- **Put the locale in the URL** (`/en/...`, `/de/...`): pages stay cacheable and shareable, unlike cookie-only locales.

### 4.13 Hands-on Exercise

Add a fake session to the starter.

1. Create `lib/session.ts` with `export const verifySession = cache(async () => ...)` that reads a `session` cookie with `cookies()` and returns `{ userId: string } | null`.
2. In `app/notes/actions.ts`, return `{ error: 'Sign in to add notes.' }` when `verifySession()` returns `null`.
3. Extend `proxy.ts` to redirect `/notes` to `/` when the cookie is missing, and add a test for that branch in `test/server.test.ts` using `new NextRequest('http://localhost/notes')`.
4. Mock `next/headers` in the action test to cover both the signed-in and signed-out cases.

Expected result: `npm test` passes with three new tests, and `/notes` redirects in the browser until you set `document.cookie = 'session=demo'`.

[Back to top ⤴️](#-table-of-contents)

---

## 5. Stage 5: Caching, Performance, Security & Platform Services

Stage 5 is about running the app for real users: keeping pages fast with the right cache invalidation and bundle size, closing the common security holes, managing configuration, and integrating the services most products need (uploads, email, realtime, jobs, payments, AI, analytics). It assumes Stages 3 and 4. Afterwards you can explain where every millisecond and every secret in a request goes.

```mermaid
flowchart TD
    Mutation["Server Action writes data"] --> Kind{"Who must see it, and how soon?"}
    Kind -->|"the author, immediately"| Update["updateTag(tag)"]
    Kind -->|"everyone, a short delay is fine"| Reval["revalidateTag(tag, 'max')"]
    Kind -->|"one page changed"| Path["revalidatePath(path)"]
    Kind -->|"uncached data, re-render only"| Refresh["refresh()"]
    Update --> Fresh["Next render waits for fresh data"]
    Reval --> SWR["Readers get stale data while it regenerates"]
```

### 5.1 Cache Layers and On-Demand Revalidation

```mermaid
flowchart TD
    Req["Incoming HTTP Request"] --> L1["1. Request Memoization (React Component Tree Deduplication)"]
    L1 -- "Cache Miss" --> L2["2. Data Cache (Persistent fetch() across Users & Requests)"]
    L2 -- "Cache Miss" --> L3["3. Full Route Cache (Static HTML & RSC Flight Payload on Server)"]
    L3 -- "Client Nav" --> L4["4. Router Cache (In-Memory Browser Cache during User Session)"]
    L4 --> Render["Render Output to Screen"]
```

Without Cache Components, Next.js has four cache layers. Since Next.js 15 the Data Cache stores only `fetch` calls that opt in (`cache: 'force-cache'`, `next.revalidate` or `next.tags`), and the client Router Cache does not reuse page segments by default (`staleTimes.dynamic` is 0):

```text
1. Request Memoization (React) -> Deduplicates identical fetches during one render
2. Data Cache (Next.js Server) -> Persists fetch responses across server requests
3. Full Route Cache (Next.js)   -> Caches HTML and RSC payload at build or revalidation
4. Router Cache (Client-side)   -> In-memory browser cache for prefetched route segments
```

#### Cache Tags & On-Demand Revalidation

```ts
// Fetching with tag
const res = await fetch('https://api.example.com/products', {
  next: { tags: ['products-list'] },
});

// Revalidating on demand inside a Server Action
import { revalidateTag } from 'next/cache';

export async function addProduct() {
  'use server';
  await db.product.create({ ... });
  revalidateTag('products-list', 'max');
}
```

### 5.2 Performance

#### Turbopack

Turbopack is the Rust-based bundler Next.js 16 uses by default for `next dev` and `next build`. It compiles only the modules a request needs and caches work on disk between runs:

```bash
next dev
```

#### Dynamic Imports & Lazy Loading

```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart widget...</p>,
  ssr: false, // Disable server rendering for client-only widgets
});
```

### 5.3 Security

1. **Environment Variables**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Variables without this prefix remain server-only.
2. **Content Security Policy (CSP)**: Set security headers via `next.config.ts` or `proxy.ts`.
3. **Server Action Security**: Server Actions are public HTTP endpoints; always authenticate the session inside the action.

### 5.4 Environment Variables

```bash
# .env.local (Private Secrets - Server Only)
DATABASE_URL="postgresql://user:pass@localhost:5432/db"
STRIPE_SECRET_KEY="sk_test_..."

# Public Variables (Exposed to Browser)
NEXT_PUBLIC_APP_URL="https://myapp.com"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
```

### 5.5 File Upload

Upload files directly to AWS S3 or Supabase Storage:

```tsx
'use server';

export async function uploadAvatar(formData: FormData) {
  const file = formData.get('avatar') as File;
  const buffer = Buffer.from(await file.arrayBuffer());

  // Upload buffer to S3 / Cloudinary
  console.log('File size:', buffer.length);
}
```

### 5.6 Emails

Send transactional emails using Resend and React Email:

```tsx
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  await resend.emails.send({
    from: 'onboarding@example.com',
    to,
    subject: 'Welcome to Next.js',
    html: '<h1>Welcome aboard!</h1>',
  });
}
```

### 5.7 Realtime

Implement real-time features using WebSockets, Server-Sent Events (SSE), or Supabase Realtime:

```ts
// app/api/sse/route.ts (Server-Sent Events)
export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        controller.enqueue(encoder.encode(`data: ${new Date().toISOString()}\n\n`));
      }, 1000);
      return () => clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
  });
}
```

### 5.8 Background Jobs

Run scheduled cron jobs or long-running tasks using Trigger.dev, Inngest, or Next.js Vercel Cron:

```json
// vercel.json
{
  "crons": [{ "path": "/api/cron/cleanup", "schedule": "0 0 * * *" }]
}
```

### 5.9 Payments

Integrate Stripe Checkout and Webhooks:

```ts
// app/api/checkout/route.ts
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: 'price_123', quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
```

### 5.10 AI Integration

Build AI chat apps with streaming responses using the Vercel AI SDK:

```tsx
'use client';

import { useChat } from 'ai/react';

export function AIChatWidget() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(m => (
          <p key={m.id}><strong>{m.role}:</strong> {m.content}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="Ask AI..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
```

### 5.11 Analytics

Integrate privacy-focused web analytics:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 5.12 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Secret read in a Client Component | Value is `undefined` in the browser, or a key leaks if someone renames it `NEXT_PUBLIC_*` | Keep secrets in server modules marked `server-only`; only expose values meant to be public |
| `NEXT_PUBLIC_*` value expected to change at runtime | Old value served after changing the environment variable | Public variables are inlined at build time; rebuild, or read the value on the server and pass it down |
| Uploads proxied through a Server Action | `Body exceeded 1 MB limit` or memory spikes | Upload directly to object storage with a presigned URL; raise `experimental.serverActions.bodySizeLimit` only for small files |
| Webhook handler parsing JSON before verifying the signature | Signature checks fail (`No signatures found matching the expected signature`) | Read the raw body with `await request.text()` and verify it first |
| Long work inside a request | Timeouts on serverless platforms, slow responses | Hand off to a job queue, or use `after()` for short follow-up work such as logging |
| CSP with a nonce on statically rendered pages | Scripts blocked, because a static page cannot carry a per-request nonce | Make nonce-protected routes dynamic, or use hash-based CSP for static pages |
| Heavy client library imported at the top of a page | Large First Load JS in `next build`, slow INP | `next/dynamic` with `ssr: false` for browser-only widgets, or move the work into a Server Component |

### 5.13 Best Practices

- **Choose invalidation by audience**: `updateTag` for the person who made the change, `revalidateTag(tag, 'max')` for everyone else.
- **Tag by entity and collection** (`post-42`, `posts`): one write can then refresh exactly the pages that show it.
- **Validate environment variables at startup** with a schema: a missing variable fails the deploy instead of the first request that needs it.
- **Set security headers in one place** (`proxy.ts` or `headers()` in `next.config.ts`): consistent coverage, easy review.
- **Measure before optimising**: use `next build` First Load JS, `next analyze export` and real-user Web Vitals instead of guessing.
- **Verify every webhook signature and make handlers idempotent**: providers retry, and attackers can post to public URLs.
- **Stream AI responses**: users see the first token in well under a second even when the whole answer takes several.

### 5.14 Hands-on Exercise

Add tag-based caching to the starter.

1. Turn on `cacheComponents: true` and `partialPrefetching: true` in a branch, then run `npm run build` and fix every error it reports (remove the `dynamic` export from `app/health/route.ts`, replace `connection()` placement where needed, wrap request-dependent parts in `<Suspense>`).
2. Wrap `getTopics` in a cached function with `'use cache'`, `cacheLife('days')` and `cacheTag('topics')`.
3. Add a Server Action that renames a topic and calls `updateTag('topics')`.
4. Compare the build route tables before and after.

Expected result: the build succeeds, the topic pages are part of the static shell, and renaming a topic shows the new title immediately for the person who did it.

[Back to top ⤴️](#-table-of-contents)

---

## 6. Stage 6: Testing, Deployment & Architecture Patterns

Stage 6 turns a working app into a maintained one: a test suite that runs in CI, a production image that starts in seconds, a reverse proxy in front of it, and code organised so a team can change it safely. It assumes the earlier stages and uses the starter's `test/`, `Dockerfile` and `.github/workflows/ci.yml` as the running example.

```mermaid
flowchart LR
    Push["git push"] --> CI["CI: npm ci, lint, vitest, next build"]
    CI --> Image["docker build (multi-stage, standalone output)"]
    Image --> Smoke["Run container, curl /health"]
    Smoke --> Registry["Push image"]
    Registry --> Deploy["Deploy: Vercel, container platform or VM behind Nginx"]
```

### 6.1 Choosing What to Test Where

The starter's tests show the three layers that pay off most in a Next.js codebase: plain functions in `lib/`, server entry points called directly (Route Handlers, Server Actions, `proxy`), and components rendered with React Testing Library. Async Server Components are awaited as functions and the result is rendered.

```mermaid
flowchart TD
    E2E["Playwright E2E: a few critical journeys through the real server"] --> Integration
    Integration["Vitest: Route Handlers, Server Actions and proxy called as functions"] --> Unit
    Unit["Vitest: lib/ functions and Client Components with Testing Library"]
```

| What | Tool | How the starter does it | Cost |
| --- | --- | --- | --- |
| Pure logic (`lib/topics.ts`, `lib/notes.ts`) | Vitest, `node` environment | `test/lib.test.ts` | Milliseconds |
| Route Handlers | Vitest, `node` environment | Call `GET(new NextRequest(url))`, assert on `Response` | Milliseconds |
| Server Actions | Vitest with `vi.mock('next/cache')` | Call the action with a `FormData`, assert the state and the revalidation spy | Milliseconds |
| `proxy.ts` | Vitest | Call `proxy(new NextRequest(url))`, assert headers | Milliseconds |
| Client Components | Vitest + `@testing-library/react`, `jsdom` | Render, `fireEvent.click`, assert text | Tens of ms |
| Async Server Components | Vitest | `render(await Page({ params: Promise.resolve(...) }))` | Tens of ms |
| Full user journeys, caching, streaming | Playwright against `next start` | Not in the starter; add for critical flows | Seconds |

### 6.2 Unit, Component and End-to-End Testing

#### Unit and Component Testing with Vitest

```tsx
// app/components/Badge.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function Badge({ label }: { label: string }) {
  return <span className="badge">{label}</span>;
}

describe('<Badge />', () => {
  it('renders correct label', () => {
    render(<Badge label="Active" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
});
```

#### End-to-End Testing with Playwright

```ts
// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('has title and navigates to about', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('Hello, learn-nextjs');
});
```

### 6.3 Deployment

#### Vercel Deployment

Deploying to Vercel provides instant zero-configuration CI/CD, Proxy, and automatic ISR caching:

```bash
npm install -g vercel
vercel
```

#### Docker Deployment

```dockerfile
# Multi-stage Next.js Container
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t learn-nextjs .
docker run -p 3000:3000 learn-nextjs
```

#### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name mynextapp.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6.4 Production Engineering Guidelines

1. **Default to Server Components**: Add `'use client'` only when state, event handlers, or browser APIs are needed.
2. **Co-locate Components and Styles**: Place helper components close to the routes that consume them.
3. **Use Zod for Server Action Validation**: Always parse form input on the server before database mutation.
4. **Leverage Image and Font Optimizations**: Always use `next/image` and `next/font` to eliminate layout shift.
5. **Protect Route Handlers and Actions**: Never assume requests are authenticated; verify session on the server.

### 6.5 Design Patterns

#### Repository & Service Layer Pattern

Decouple Next.js routing from direct database SQL queries:

```ts
// services/userService.ts
import { db } from '@/lib/db';

export class UserService {
  static async getById(id: string) {
    return db.user.findUnique({ where: { id } });
  }

  static async updateEmail(id: string, email: string) {
    return db.user.update({ where: { id }, data: { email } });
  }
}
```

### 6.6 Common Libraries

| Library | Category | Description |
| :--- | :--- | :--- |
| `zod` | Validation | TypeScript-first schema declaration and validation |
| `react-hook-form` | Forms | Performant, flexible forms with easy validation integration |
| `zustand` | State | Lightweight, hook-based client store |
| `@tanstack/react-query` | Data | Server state synchronization, caching, and background refetching |
| `prisma` / `drizzle-orm`| ORM | Type-safe SQL query generation and database schema migrations |
| `framer-motion` | Animation | Production-ready motion animations for React components |
| `clsx` / `tailwind-merge`| Styling | Utility function for constructing conditional class names cleanly |

### 6.7 Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Rendering an async Server Component with `render(<Page />)` | `Objects are not valid as a React child (found: [object Promise])` | `render(await Page(props))`, or cover it with an E2E test |
| Calling `revalidatePath` in a unit test without a mock | `Invariant: static generation store missing in revalidatePath` | `vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }))` |
| Docker image runs `npm start` / `next dev` | Large image, slow start, dev overlay in production | Build with `output: 'standalone'` and run `node server.js` |
| Server listens on `localhost` inside the container | Container is healthy inside but `curl` from the host fails | Set `HOSTNAME=0.0.0.0` (the starter's Dockerfile does) |
| `.next/static` or `public/` not copied next to `server.js` | Pages render without CSS or JS (404s for `/_next/static/...`) | Copy both into the runtime stage, as in the starter |
| `EXPOSE` and the listen port disagree | Health check fails in CI | Keep `PORT`, `EXPOSE` and `APP_PORT` in ci.yml identical (8080 in the starter) |
| Nginx buffering streamed responses | Suspense fallbacks never show; whole page arrives at once | `proxy_buffering off;` (or `X-Accel-Buffering: no`) for app routes |

### 6.8 Best Practices

- **Test server entry points as functions**: Route Handlers, Server Actions and the proxy are plain async functions; calling them directly is faster and more precise than spinning up a server.
- **Run `next build` in CI**: type errors, prerender failures and route-table changes only show up there.
- **Use the standalone output for containers**: the runtime image holds only traced dependencies, so it is small and starts quickly.
- **Run as a non-root user with a health check**: the starter uses the `node` user and `HEALTHCHECK` against `/health`.
- **Keep business logic out of route files**: pages and actions call services in `lib/`, which are easy to unit test and reuse.
- **Pin and cache dependencies**: `npm ci` with a committed lockfile, and Docker layers ordered so the install step is cached.

### 6.9 Hands-on Exercise

Make the starter's CI catch more.

1. Add a Playwright test that opens `/notes`, submits a note and expects it in the list. Run it against `npm run build && npm start` in a new CI job.
2. Add `test/proxy.matcher.test.ts` that asserts static asset paths such as `/_next/static/x.js` are excluded by `config.matcher` (use a regular expression built from the matcher string).
3. Build the Docker image locally and confirm `docker run -p 8080:8080` answers `curl localhost:8080/health` with `{"status":"ok",...}`.

Expected result: CI has three green jobs (unit tests, E2E, Docker smoke test) and the image runs as user `node`.

[Back to top ⤴️](#-table-of-contents)

---

## M1. Masterclass: React 19 Internals, Fiber and the React Compiler

How React schedules, reconciles and memoises work, and what that means for Next.js code: Fiber and lanes, the complete React 19 API surface, the React Compiler, hook internals and a library of production hooks.

### M1.1 The React Rendering Model, Fiber Architecture & the React Compiler

#### The React Rendering Model & Fiber Architecture
React's rendering engine does not directly manipulate real DOM elements on state changes. Instead, it operates across two distinct phases to achieve high-frequency UI updates without layout thrashing.

```mermaid
graph TD
    Trigger["State Change / Props Update / Hook Dispatch"] --> RenderPhase["Render Phase (Asynchronous & Interruptible)"]
    RenderPhase --> BeginWork["beginWork(): Traverses Fiber tree downward, diffs elements"]
    BeginWork --> CompleteWork["completeWork(): Traverses Fiber tree upward, creates DOM instances"]
    CompleteWork --> CommitPhase["Commit Phase (Synchronous & Non-interruptible)"]
    CommitPhase --> Mutation["commitMutationEffects(): Applies insertions, updates, deletions to DOM"]
    Mutation --> LayoutEffects["useLayoutEffect() executes synchronously before browser paint"]
    LayoutEffects --> BrowserPaint["Browser paints pixels to the screen"]
    BrowserPaint --> PassiveEffects["useEffect() cleanup & callbacks run asynchronously"]
```

##### Fiber Node Structure & The Heuristic O(n) Diffing Algorithm
In React Fiber, every component instance is represented by a JavaScript object called a **Fiber Node**. Fiber models the component tree as a **singly-linked list** using three relational pointers: `child`, `sibling`, and `return`.

```tsx
// Architectural representation of a React Fiber Node
interface FiberNode {
  tag: WorkTag;              // Identifies type: FunctionComponent, ClassComponent, HostComponent ('div')
  key: null | string;        // Unique identifier for reconciliation
  elementType: any;          // The underlying function or DOM tag ('button', 'div')
  stateNode: any;            // Reference to the host DOM element or class instance
  
  // Singly Linked List Tree Architecture
  return: FiberNode | null;  // Parent Fiber pointer
  child: FiberNode | null;   // First child Fiber pointer
  sibling: FiberNode | null; // Next sibling Fiber pointer
  
  // State & Effects
  memoizedProps: any;        // Props used to render the last output
  pendingProps: any;         // Incoming props from new render
  memoizedState: any;        // Singly linked list of Hooks (useState, useEffect, etc.)
  lanes: Lanes;              // 31-bit priority bitmask for Concurrent scheduling
  alternate: FiberNode | null; // Pointer to the corresponding work-in-progress or current node
}
```

##### Component Identity: Preserving vs Resetting State
React matches state to a component's **position in the UI tree**, not its function name. If you render the same component at the same tree position, React preserves its state. If you change its position or supply a differing `key`, React destroys the old fiber, discards its state, and mounts a fresh instance:

```tsx
// Pattern: Explicitly resetting state using the key prop
import { useState } from 'react';

function UserProfileEditor({ userId }: { userId: string }) {
  // Supplying `key={userId}` forces React to unmount the old form instance
  // and construct a fresh Fiber node with fresh initial state whenever userId changes!
  return <AccountForm key={userId} userId={userId} />;
}

function AccountForm({ userId }: { userId: string }) {
  const [draftBio, setDraftBio] = useState('');
  return (
    <div>
      <h3>Editing User: {userId}</h3>
      <textarea value={draftBio} onChange={(e) => setDraftBio(e.target.value)} />
    </div>
  );
}
```

#### Complete React 19 API Reference & New Architecture
React 19 revolutionizes full-stack engineering with native asynchronous Actions, server functions, resource preloading APIs, and automatic ref prop forwarding.

```mermaid
graph LR
    ActionTrigger["Form Submit / startTransition"] --> useActionState["useActionState(action, initialState)"]
    useActionState --> Optimistic["useOptimistic(): Instant UI update"]
    useActionState --> Pending["useFormStatus(): Propagates pending=true down tree"]
    useActionState --> ServerFunction["Server Function ('use server')"]
    ServerFunction --> Revalidate["Automatic cache revalidation & error rollback"]
```

##### The Complete React 19 Native Feature Suite

| React 19 Feature | Syntax | Architectural Benefit |
| :--- | :--- | :--- |
| **`useActionState`** | `const [state, formAction, isPending] = useActionState(fn, init)` | Eliminates manual `useState` booleans for loading, error, and response payloads. |
| **`useFormStatus`** | `const { pending, data, method } = useFormStatus()` | Grants child buttons access to parent `<form>` submission state without prop drilling. |
| **`useOptimistic`** | `const [optState, setOptState] = useOptimistic(state, updater)` | Renders expected mutation result immediately; auto-rolls back if server rejects. |
| **`use(promiseOrContext)`** | `const data = use(dataPromise)` | Reads promises and contexts conditionally, inside loops, or after early returns. |
| **`ref` as a Prop** | `function MyInput({ ref, ...props })` | Deprecates `forwardRef`; function components accept `ref` directly as a prop. |
| **Ref Cleanup** | `ref={(node) => () => cleanup()}` | Ref callbacks can return a cleanup function called when the DOM element detaches. |
| **Context as Provider** | `<ThemeContext value="dark">` | `<ThemeContext>` replaces `<ThemeContext.Provider>`, reducing JSX noise. |
| **Resource Loading** | `preload()`, `preconnect()`, `prefetchDNS()`, `preinit()` | Preloads fonts, scripts, and DNS handshakes imperatively or declaratively in JSX. |

##### Complete Code Example: React 19 Form Actions with `useActionState` and `useOptimistic`
```tsx
import React, { useActionState, useOptimistic } from 'react';
import { useFormStatus } from 'react-dom';

interface Comment {
  id: string;
  text: string;
  isSending?: boolean;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50"
    >
      {pending ? 'Publishing...' : 'Post Comment'}
    </button>
  );
}

export function CommentThread({ initialComments }: { initialComments: Comment[] }) {
  const [comments, formAction] = useActionState(
    async (prevComments: Comment[], formData: FormData) => {
      const text = formData.get('comment') as string;
      if (!text.trim()) return prevComments;

      // Call asynchronous Server Function
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const savedComment: Comment = await res.json();
      return [...prevComments, savedComment];
    },
    initialComments
  );

  // Optimistic UI state
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (current, newText: string) => [
      ...current,
      { id: `temp-${Date.now()}`, text: newText, isSending: true },
    ]
  );

  const handleClientSubmit = async (formData: FormData) => {
    const text = formData.get('comment') as string;
    addOptimisticComment(text);
    await formAction(formData);
  };

  return (
    <div className="max-w-xl space-y-4">
      <h3 className="text-xl font-bold">Discussion</h3>
      <ul className="space-y-2">
        {optimisticComments.map((c) => (
          <li
            key={c.id}
            className={`p-3 rounded-lg border ${
              c.isSending ? 'opacity-50 border-dashed border-indigo-400 bg-indigo-50/20' : 'bg-white border-slate-200'
            }`}
          >
            {c.text} {c.isSending && <span className="text-xs text-indigo-500">(Sending...)</span>}
          </li>
        ))}
      </ul>

      <form action={handleClientSubmit} className="flex gap-2">
        <input
          name="comment"
          type="text"
          placeholder="Write a comment..."
          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
}
```

#### React Compiler Architecture & Configuration
The **React Compiler** (formerly React Forget) is an ahead-of-time optimizing compiler that automatically memoizes values, functions, and JSX trees, eliminating manual `useMemo`, `useCallback`, and `React.memo`.

```mermaid
graph LR
    Source["JSX Source Code"] --> AST["Babel / AST Parsing"]
    AST --> SSA["Static Single Assignment (SSA) IR"]
    SSA --> Lifetime["Variable Lifetime & Mutation Analysis"]
    Lifetime --> Synthesis["Automatic Reactive Scope Synthesis ('use memo')"]
    Synthesis --> Output["Optimized JavaScript Bundle with Zero Re-render Waste"]
```

##### Configuring React Compiler in Next.js 16 (`next.config.ts`)
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Top-level since Next.js 16 (was experimental.reactCompiler)
  reactCompiler: {
    compilationMode: 'infer', // Optimise every component that follows the Rules of React
  },
};

export default nextConfig;
```

##### Compiler Directives: `"use memo"` vs `"use no memo"`
```tsx
// Explicitly opt-in when compilationMode is 'annotation'
export function HighFrequencyChart({ data }: { data: number[] }) {
  'use memo';
  return <HeavyCanvasPlot points={data} />;
}

// Explicitly opt-out if using third-party legacy libraries that violate Rules of React
export function LegacyThirdPartyWrapper({ instance }: { instance: any }) {
  'use no memo'; // Prevents the compiler from memoizing this specific component
  instance.directlyMutateInternalDOM();
  return <div id="legacy-container" />;
}
```

#### Hooks Internals: Linked List Traversal, Stale Closures & Advanced Patterns
Why are hooks stored as a **singly linked list** in Fiber, and why are conditional hooks forbidden?

```mermaid
graph LR
    H1["Hook 1: useState(0)"] -->|"next"| H2["Hook 2: useEffect()"]
    H2 -->|"next"| H3["Hook 3: useMemo()"]
    H3 -->|"next"| H4["Hook 4: useRef()"]
```

If an `if (condition)` statement wraps a hook, the traversal pointer (`workInProgressHook`) skips that node on subsequent passes, applying `useEffect`'s state to `useMemo`, corrupting the entire component tree!

##### Safe External Store Synchronization: `useSyncExternalStore`
To prevent UI "tearing" during concurrent rendering when reading from external browser or state stores, use `useSyncExternalStore`:

```tsx
import { useSyncExternalStore } from 'react';

// Custom hook subscribing to browser online/offline status atomically
export function useOnlineStatus() {
  return useSyncExternalStore(
    // 1. Subscription function: attaches listener and returns cleanup
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    // 2. Client snapshot: returns current state in browser
    () => navigator.onLine,
    // 3. Server snapshot: returns default value during SSR
    () => true
  );
}
```

### M1.2 React 19 Core: Complete API Reference, Document Metadata & Asset Loading

React 19 introduces native primitives for document metadata, stylesheet precedence, async script execution, and resource preloading directly in JSX.

#### Native Document Metadata Hoisting
In React 18 and earlier, managing `<title>`, `<meta>`, and `<link>` tags required third-party libraries like `react-helmet`. In React 19, these elements can be placed anywhere inside the component tree and React will automatically hoist them into the document `<head>`:

```tsx
export function BlogPost({ post }: { post: { title: string; summary: string; author: string } }) {
  return (
    <article className="prose dark:prose-invert max-w-2xl mx-auto py-12">
      {/* React 19 automatically hoists these tags into document <head> */}
      <title>{post.title} | Enterprise Tech Blog</title>
      <meta name="description" content={post.summary} />
      <meta name="author" content={post.author} />
      <link rel="canonical" href={`https://enterprise.com/blog/${post.title}`} />

      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="lead">{post.summary}</p>
    </article>
  );
}
```

#### Native Stylesheet Precedence & Insertion
React 19 supports declarative stylesheet management with precedence levels:
```tsx
export function ThemedWidget() {
  return (
    <div>
      {/* React 19 manages stylesheet insertion order according to precedence */}
      <link rel="stylesheet" href="/styles/theme.css" precedence="high" />
      <link rel="stylesheet" href="/styles/reset.css" precedence="default" />
      <div className="themed-box">Styled Content</div>
    </div>
  );
}
```

#### Native Async Scripts with Deduplication
```tsx
export function AnalyticsTracker() {
  return (
    <div>
      {/* React 19 ensures this external script is loaded only once across the application */}
      <script async={true} src="https://cdn.telemetry.internal/tracker.js" />
    </div>
  );
}
```

### M1.3 React 18 to React 19 Migration: Deprecations & Removed APIs

Upgrading enterprise applications from React 18 to React 19 requires auditing deprecated APIs:

| Deprecated / Removed in React 19 | Recommended React 19 Modern Replacement | Migration Action Required |
| :--- | :--- | :--- |
| `forwardRef(render)` | Pass `ref` directly as a regular prop | Remove `forwardRef` wrapper; accept `ref` in props signature: `function Input({ ref, ...props })`. |
| `<Context.Provider value={...}>` | `<Context value={...}>` | Omit `.Provider`; use the context object directly as a component tag. |
| `ReactDOM.render` (Legacy) | `createRoot(container).render(<App />)` | Migrate to `react-dom/client`. |
| `ReactDOM.hydrate` (Legacy) | `hydrateRoot(container, <App />)` | Migrate to `react-dom/client`. |
| `defaultProps` on Function Components | ES6 Default Parameter Syntax | Replace `MyComponent.defaultProps = { size: 'md' }` with `function MyComponent({ size = 'md' })`. |
| String Refs (`ref="myRef"`) | `useRef()` or Callback Refs | Replace string literals with `useRef(null)`. |

### M1.4 React Compiler Diagnostics, Debugging & Performance Profiling

The React Compiler automatically optimizes components adhering to the Rules of React. When a component violates these rules, the compiler logs diagnostic warnings and skips compilation for that component:

```mermaid
graph TD
    SourceCode["Component Source Code"] --> ESLintCheck["eslint-plugin-react-compiler"]
    ESLintCheck --> CompilerRun["babel-plugin-react-compiler"]
    CompilerRun --> Diagnostic{"Does component mutate props/state directly?"}
    Diagnostic -->|"Yes (Violation)"| Skip["Bypass Compilation (Graceful Fallback to Standard React)"]
    Diagnostic -->|"No (Valid)"| Emit["Emit Auto-Memoized Reactive Scopes"]
```

#### ESLint Integration (`eslint.config.mjs`)
```js
import reactCompiler from 'eslint-plugin-react-compiler';

export default [
  {
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      'react-compiler/react-compiler': 'error', // Enforces compilation compliance in CI
    },
  },
];
```

#### Checking Compiler Output in React DevTools
1. Open Chrome DevTools -> **Components** tab.
2. Components optimized by the compiler display a distinctive **"Memo ✨"** badge next to their name.
3. If the badge is missing, inspect the component for side-effects in render or prop mutation.

### M1.5 Advanced Built-In Hooks: `useReducer`, `useId`, `useImperativeHandle` & `useInsertionEffect`

#### 1. `useReducer` with Discriminated Unions for Complex Local State
```tsx
import React, { useReducer } from 'react';

interface FormState {
  step: 1 | 2 | 3;
  email: string;
  promoCode: string;
  isSubmitting: boolean;
  error: string | null;
}

type FormAction =
  | { type: 'SET_FIELD'; field: 'email' | 'promoCode'; value: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 3) as any };
    case 'PREV_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) as any };
    case 'SUBMIT_START':
      return { ...state, isSubmitting: true, error: null };
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmitting: false, step: 3 };
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false, error: action.error };
  }
}
```

#### 2. `useId` for Accessible Form Label Binding
`useId` generates unique, stable IDs across server-side rendering and client hydration, eliminating hydration mismatch errors:

```tsx
import { useId } from 'react';

export function AccessibleInputField({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
      <input id={id} className="w-full px-3 py-2 border rounded-lg" {...props} />
    </div>
  );
}
```

#### 3. `useImperativeHandle` for Exposing Controlled Ref Handles
```tsx
import React, { useRef, useImperativeHandle } from 'react';

export interface VideoPlayerHandle {
  play: () => void;
  pause: () => void;
  seek: (seconds: number) => void;
}

export function CustomVideoPlayer({ ref }: { ref?: React.Ref<VideoPlayerHandle> }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current?.play();
    },
    pause() {
      videoRef.current?.pause();
    },
    seek(seconds: number) {
      if (videoRef.current) videoRef.current.currentTime = seconds;
    },
  }));

  return <video ref={videoRef} src="/media/demo.mp4" className="rounded-xl w-full" />;
}
```

#### 4. `useInsertionEffect` for CSS-in-JS Libraries
`useInsertionEffect` runs **before any DOM layout mutations** and before `useLayoutEffect`. It is designed exclusively for CSS-in-JS libraries (like Emotion and styled-components) to inject `<style>` tags before the browser calculates computed styles, preventing layout recalculation overhead:

```tsx
import { useInsertionEffect } from 'react';

function useCSS(cssString: string) {
  useInsertionEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssString;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [cssString]);
}
```

### M1.6 Complete Hooks Architecture: `useReducer`, `useDeferredValue` & Custom Composition

Hooks manage state and side effects in Client Components. Understanding dependency array stabilization, stale closure prevention, and composition separates junior developers from staff engineers.

#### Custom Hook Composition: `useDebounce`, `useLocalStorage` & `useEventListener`
```tsx
import { useState, useEffect, useRef, useCallback } from 'react';

// 1. useDebounce: Delays state propagation until input settles
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMs]);

  return debouncedValue;
}

// 2. useLocalStorage: Synchronizes state with browser storage across tabs
export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((val: T | ((prev: T) => T)) => {
    setStoredValue((prev) => {
      const valueToStore = val instanceof Function ? val(prev) : val;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      return valueToStore;
    });
  }, [key]);

  return [storedValue, setValue];
}
```

### M1.7 Production Custom Hooks Library (15 Complete Enterprise Hooks)

#### 1. `useIntersectionObserver` (Infinite Scrolling & Lazy Image Loading)
```tsx
import { useEffect, useState, RefObject } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
}
```

#### 2. `useResizeObserver` (Container Dimensions for Responsive Canvas/Charts)
```tsx
import { useEffect, useState, RefObject } from 'react';

export function useResizeObserver(elementRef: RefObject<HTMLElement | null>): DOMRectReadOnly | null {
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => setRect(entry.contentRect));
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef]);

  return rect;
}
```

#### 3. `useClipboard` (Copy to Clipboard with Auto-Reset Feedback)
```tsx
import { useState, useCallback } from 'react';

export function useClipboard(timeoutMs: number = 2000): {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
} {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) return false;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeoutMs);
      return true;
    } catch {
      return false;
    }
  }, [timeoutMs]);

  return { copied, copy };
}
```

#### 4. `useMediaQuery` (Client-Side Media Query Matching)
```tsx
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
```

#### 5. `useIdleTimer` (Automatic Session Logout on Inactivity)
```tsx
import { useEffect, useRef, useCallback } from 'react';

export function useIdleTimer(timeoutMs: number, onIdle: () => void) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(onIdle, timeoutMs);
  }, [timeoutMs, onIdle]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);
}
```

#### 6. `usePrevious` (Tracking Prior Render Values)
```tsx
import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

#### 7. `useIsMounted` (Preventing Memory Leaks on Unmounted Updates)
```tsx
import { useRef, useEffect, useCallback } from 'react';

export function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
```

#### 8. `useWindowScroll` (Tracking Scroll Coordinates)
```tsx
import { useState, useEffect } from 'react';

export function useWindowScroll(): { x: number; y: number } {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
}
```

#### 9. `useNetworkStatus` (Detecting Online/Offline & Effective Bandwidth)
```tsx
import { useState, useEffect } from 'react';

export function useNetworkStatus(): { isOnline: boolean; downlink?: number } {
  const [status, setStatus] = useState({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    downlink: (navigator as any)?.connection?.downlink,
  });

  useEffect(() => {
    const handleOnline = () => setStatus((s) => ({ ...s, isOnline: true }));
    const handleOffline = () => setStatus((s) => ({ ...s, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return status;
}
```

#### 10. `usePWAInstallPrompt` (Managing PWA Add-to-Home-Screen Prompts)
```tsx
import { useState, useEffect } from 'react';

export function usePWAInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const triggerInstall = async () => {
    if (!promptEvent) return false;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    setPromptEvent(null);
    setIsInstallable(false);
    return outcome === 'accepted';
  };

  return { isInstallable, triggerInstall };
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M2. Masterclass: JavaScript Runtime, TypeScript and the Web Platform

The event loop and microtasks behind async Server Components, the TypeScript features that make route props and actions type-safe, and the HTTP, TLS and storage details a full-stack engineer is expected to know.

### M2.1 Advanced JavaScript Runtime, TypeScript Mastery & Web Platform Architecture

#### JavaScript Engine Internals: Execution Contexts & The Microtask Event Loop
JavaScript code executed inside Next.js Server Components (Node.js/V8) or Client Components (Browser V8/JavaScriptCore) relies on a single-threaded cooperative event loop.

```mermaid
graph TD
    CallStack["1. V8 Call Stack (Synchronous Code Execution)"] --> Microtasks["2. Microtask Queue (queueMicrotask, Promise.then, MutationObserver)"]
    Microtasks --> MicroCheck{"Microtasks Drained Completely?"}
    MicroCheck -->|"No"| Microtasks
    MicroCheck -->|"Yes"| BrowserPaint["3. Browser Render Step (rAF, Style, Layout, Paint)"]
    BrowserPaint --> Macrotasks["4. Macrotask Queue (setTimeout, setInterval, setImmediate, I/O)"]
    Macrotasks --> CallStack
```

> [!CAUTION]
> **Microtask Starvation in Node.js / Browser**: Microtask queues run to complete exhaustion before any I/O, timers, or browser paints execute. Chaining recursive promises or microtasks without yielding will completely freeze the server thread or lock up the browser window!

##### Closures, Memory Retention & Garbage Collection
A closure retains references to variables from its outer lexical scope. In long-lived server processes or React components, uncleaned listeners or timers capture large parent scopes, causing memory leaks:

```ts
// Scenario: Preventing Memory Leaks with WeakMap / WeakSet
// Standard Map strongly retains objects, preventing Garbage Collection (GC)
const strongMap = new Map();
let heavyObj: any = { data: new Array(1000000).fill('leak') };
strongMap.set(heavyObj, 'metadata');
heavyObj = null; // Object remains in memory because strongMap holds a strong pointer!

// Solution: WeakMap holds WEAK references, allowing GC to reclaim memory
const weakCache = new WeakMap();
let transientUser: any = { id: 'usr_123', profile: 'heavy' };
weakCache.set(transientUser, { sessionData: 'active' });
transientUser = null; // GC immediately reclaims memory on next sweep!
```

#### Advanced TypeScript for Full-Stack Next.js 16
TypeScript is the backbone of production Next.js engineering. Mastering polymorphic components, template literal types, and discriminated unions ensures 100% end-to-end type safety.

##### Discriminated Union Async State Machine
```tsx
export type ApiResponse<T> =
  | { status: 'idle'; data: null; error: null }
  | { status: 'loading'; data: null; error: null }
  | { status: 'success'; data: T; error: null; statusCode: 200 }
  | { status: 'error'; data: null; error: string; statusCode: 400 | 404 | 500 };

export function ApiResponseViewer<T>({ response }: { response: ApiResponse<T> }) {
  switch (response.status) {
    case 'idle':
      return <span>Awaiting initiation...</span>;
    case 'loading':
      return <span className="animate-spin">⏳</span>;
    case 'success':
      // TypeScript automatically narrows `response.data` to T!
      return <pre>{JSON.stringify(response.data, null, 2)}</pre>;
    case 'error':
      // TypeScript guarantees `response.error` is a string!
      return <div className="text-rose-500 font-bold">{response.error} (Code: {response.statusCode})</div>;
  }
}
```

##### Advanced Generic Route Parameter & Infer Types
```ts
// Extracting parameter keys from route paths using Template Literal Types & infer
type ExtractRouteParams<T extends string> =
  T extends `${string}[${infer Param}]/${infer Rest}`
    ? Param | ExtractRouteParams<Rest>
    : T extends `${string}[${infer Param}]`
    ? Param
    : never;

// Verification:
type UserBlogParams = ExtractRouteParams<'/users/[userId]/posts/[postId]'>;
// Resolves precisely to: "userId" | "postId"
```

#### Web Platform Fundamentals: HTTP/2, HTTP/3, TLS & Browser Storage
Next.js deployments span CDNs, reverse proxies, and browsers that interact over modern web transport protocols.

```mermaid
graph TD
    Client["Client Browser"] -->|"HTTP/3 (QUIC / UDP 0-RTT)"| CloudflareEdge["CDN Edge Gateway (Anycast)"]
    CloudflareEdge -->|"HTTP/2 (TCP Multiplexed)"| OriginNginx["Origin Reverse Proxy (Nginx)"]
    OriginNginx -->|"HTTP/1.1 Keep-Alive / Unix Socket"| NextServer["Next.js Node.js Server Process"]
```

##### Protocol Comparison Matrix

| Protocol | Transport Layer | Multiplexing & Head-of-Line (HoL) Blocking | Handshake Latency |
| :--- | :--- | :--- | :--- |
| **HTTP/1.1** | TCP | No multiplexing; single request per TCP socket. Severe HoL blocking. | 1 RTT (TCP) + 1-2 RTT (TLS) |
| **HTTP/2** | TCP | Binary framing; multiplexes hundreds of streams over 1 TCP connection. TCP-level HoL blocking remains if packet is lost. | 1 RTT (TCP) + 1 RTT (TLS 1.3) |
| **HTTP/3** | UDP (QUIC) | Native multiplexing over UDP. Zero Head-of-Line blocking across streams. Packet loss on one stream does NOT stall other streams! | **0-RTT** (Connection resumption) or 1 RTT |

##### Storage Architecture in Next.js Full-Stack Apps

| Storage API | Capacity | Thread Access | Persistence | Optimal Full-Stack Use-Case |
| :--- | :--- | :--- | :--- | :--- |
| **HttpOnly Cookies** | 4 KB | HTTP Headers only (Zero JS access) | Persisted across sessions | Session tokens, JWTs, CSRF tokens (Immune to XSS). |
| **localStorage** | 5-10 MB | Main Thread (Synchronous) | Persistent until manual clear | UI theme preference, non-sensitive client settings. |
| **sessionStorage** | 5-10 MB | Main Thread (Synchronous) | Cleared on tab close | Transient multi-step form wizard state. |
| **IndexedDB (`idb`)**| 50 MB - 1+ GB | Async / Web Workers | Persistent local database | Offline PWA caching, draft blog edits, sync queues. |

### M2.2 Advanced TypeScript Patterns for Next.js 16: Generics, Mapped Types & ComponentProps

```tsx
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// Polymorphic Component Helper Types
type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// Concrete Polymorphic Heading Component
type HeadingBaseProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle';
  children: ReactNode;
};

export function Heading<C extends ElementType = 'h2'>({
  as,
  variant = 'h2',
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, HeadingBaseProps>) {
  const Component = as || 'h2';

  const styles = {
    h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'text-3xl font-bold tracking-tight',
    h3: 'text-2xl font-semibold',
    subtitle: 'text-lg text-slate-500 font-medium',
  };

  return (
    <Component className={`${styles[variant]} ${className || ''}`} {...props}>
      {children}
    </Component>
  );
}
```

### M2.3 Deep JavaScript Fundamentals: Execution Contexts, Prototypal Inheritance & Event Propagation

#### 1. Scope, Closures & Execution Contexts
Every JavaScript execution context consists of:
1. **Variable Environment**: Hoisted `var` declarations, function declarations.
2. **Lexical Environment**: Block-scoped `let` and `const` variables and a reference to the outer parent environment.
3. **`this` Binding**: Evaluated dynamically based on call-site invocation.

```js
// Understanding Closures & Variable Environment Preservation
function createCounterModule(initialValue = 0) {
  let count = initialValue; // Enclosed in closure scope

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounterModule(10);
console.log(counter.increment()); // 11
console.log(counter.getValue());  // 11
```

#### 2. Event Delegation, Bubbling & Capturing
DOM event dispatching traverses three distinct phases:
1. **Capturing Phase**: The event travels down from `window` through the document tree to the target element.
2. **Target Phase**: The event reaches the originating target element.
3. **Bubbling Phase**: The event bubbles up from the target back to the root `window`.

```mermaid
graph TD
    Window["1. Window (Capturing Phase starts)"] --> Doc["2. Document"]
    Doc --> Body["3. Body"]
    Body --> Container["4. Container Element"]
    Container --> Target["5. Target Button (Target Phase)"]
    Target --> ContainerUp["6. Container (Bubbling Phase starts)"]
    ContainerUp --> BodyUp["7. Body"]
    BodyUp --> DocUp["8. Document"]
    DocUp --> WindowUp["9. Window (Completed)"]
```

```tsx
// Event Delegation Pattern: 1 listener on parent handles 10,000 child elements
export function VirtualTable({ items }: { items: Array<{ id: string; name: string }> }) {
  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    // Event delegation: Read data attribute from target
    const target = (e.target as HTMLElement).closest('li');
    if (!target) return;
    const itemId = target.dataset.id;
    console.log(`Clicked row ID: ${itemId}`);
  };

  return (
    <ul onClick={handleClick} className="divide-y border rounded-xl">
      {items.map((item) => (
        <li key={item.id} data-id={item.id} className="p-3 hover:bg-slate-50 cursor-pointer">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

### M2.4 Advanced TypeScript Mastery for Next.js 16: Type Narrowing, `infer` & Mapped Types

#### 1. Conditional Types & The `infer` Keyword
```ts
// Unwrapping Promise return types using conditional types and infer
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

// Testing the utility:
type AsyncUser = Promise<Promise<{ id: string; name: string }>>;
type ResolvedUser = UnwrapPromise<AsyncUser>;
// Resolves to: { id: string; name: string }
```

#### 2. Mapped Types with Key Remapping
```ts
// Creating getter functions from interface properties
type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

interface UserConfig {
  theme: string;
  autoSave: boolean;
}

type UserConfigGetters = CreateGetters<UserConfig>;
// Resolves to:
// {
//   getTheme: () => string;
//   getAutoSave: () => boolean;
// }
```

#### 3. Type Guards & Narrowing with `is`
```ts
interface AdminUser {
  role: 'admin';
  permissions: string[];
}

interface MemberUser {
  role: 'member';
  teamId: string;
}

type AppUser = AdminUser | MemberUser;

// Custom Type Guard
export function isAdminUser(user: AppUser): user is AdminUser {
  return user.role === 'admin' && Array.isArray((user as AdminUser).permissions);
}

export function renderUserBadge(user: AppUser) {
  if (isAdminUser(user)) {
    // TypeScript automatically narrows `user` to AdminUser!
    return <span>Admin ({user.permissions.join(', ')})</span>;
  }
  // TypeScript automatically narrows `user` to MemberUser!
  return <span>Team: {user.teamId}</span>;
}
```

### M2.5 HTTP/3 & QUIC Reverse Proxy Architecture with Cloudflare & Nginx

HTTP/3 replaces TCP with QUIC over UDP, eliminating Head-of-Line (HoL) blocking on packet drops and enabling zero-latency connection migration when switching between Wi-Fi and mobile 5G networks:

```mermaid
graph TD
    Client["Client Browser (HTTP/3 over UDP)"] --> Cloudflare["Cloudflare Edge Anycast Gateway (Terminates HTTP/3 & QUIC)"]
    Cloudflare -->|"HTTP/2 Multiplexed Keep-Alive"| OriginNginx["Origin Nginx Server (Port 443)"]
    OriginNginx -->|"Unix Domain Socket"| NextJSServer["Next.js Node.js Standalone Runner (Port 3000)"]
```

#### Advanced Nginx HTTP/2, Rate Limiting & SSL Buffer Tuning
```nginx
# Advanced SSL & Buffer Tuning in /etc/nginx/nginx.conf
http {
    # Rate Limiting Zone: 20 requests per second per IP
    limit_req_zone $binary_remote_addr zone=api_rate_limit:10m rate=20r/s;
    limit_conn_zone $binary_remote_addr zone=addr_limit:10m;

    # SSL Performance Tuning
    ssl_session_cache shared:SSL:20m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;
    ssl_buffer_size 4k; # Reduces Time to First Byte (TTFB) on TLS records

    # TCP Optimization
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    server {
        listen 443 ssl http2;
        server_name api.enterprise.com;

        location /api/ {
            limit_req zone=api_rate_limit burst=10 nodelay;
            limit_conn addr_limit 10;

            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto https;
        }
    }
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M3. Masterclass: App Router Internals: Flight, Caching and Partial Prerendering

What the App Router does with your files: route segment configuration, the Flight (RSC payload) protocol, the cache layers and the `"use cache"` model, Partial Prerendering, parallel data loading and client navigation internals.

### M3.1 App Router Conventions, Flight Architecture & Partial Prerendering (PPR)

#### App Router File Conventions & Route Segment Configuration
The Next.js 16 App Router uses an expressive directory and file naming convention to define routes, layouts, parallel slots, and segment behaviors.

```mermaid
graph TD
    AppDir["app/"] --> RootLayout["layout.tsx (Root HTML shell)"]
    AppDir --> SegmentConfig["page.tsx (Route Segment with config exports)"]
    AppDir --> SlotModal["@modal/default.tsx (Parallel Route Slot fallback)"]
    AppDir --> InterceptFeed["(..)feed/[id]/page.tsx (Intercepting Route)"]
    AppDir --> MetaOG["opengraph-image.tsx (Dynamic Edge OG Image)"]
    AppDir --> SitemapGen["sitemap.ts / robots.ts (Automated SEO feeds)"]
```

##### Complete Route Segment Configuration Options

```tsx
// app/analytics/realtime/page.tsx
// Route segment configuration exports dictate execution runtime and caching behavior
export const dynamic = 'force-dynamic';         // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const dynamicParams = true;             // Allow dynamic params not generated by generateStaticParams
export const revalidate = 0;                   // Invalidate cache immediately on every request (0 = uncached)
export const fetchCache = 'force-no-store';    // Override default fetch caching behavior
export const runtime = 'edge';                 // 'nodejs' | 'edge'
export const preferredRegion = 'iad1';         // Regional edge execution target ('iad1', 'sfo1', 'fra1', 'global')
export const maxDuration = 30;                 // Maximum execution duration in seconds before timeout

export default async function RealtimeAnalyticsPage() {
  const timestamp = new Date().toISOString();
  return <div>Edge Node Realtime Feed at {timestamp}</div>;
}
```

##### Dynamic Metadata & OpenGraph Image Generation (`app/posts/[slug]/opengraph-image.tsx`)
```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Post Open Graph Preview';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #0f172a, #1e1b4b)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 32, color: '#818cf8', fontWeight: 600, marginBottom: 20 }}>
          Next.js 16 Full-Stack Masterclass
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, textAlign: 'center', lineHeight: 1.2 }}>
          {slug.replace(/-/g, ' ').toUpperCase()}
        </div>
      </div>
    ),
    { ...size }
  );
}
```

#### React Server Components & The Flight Protocol
React Server Components (RSC) execute exclusively on the server and stream their rendered structure to the client over an HTTP stream using the **Flight Protocol**.

```mermaid
graph TD
    ClientReq["Client Browser visits /dashboard"] --> NextServer["Next.js Server: Runs Server Components"]
    NextServer --> DBQuery["Direct Database Access (Prisma/Drizzle) without API route"]
    DBQuery --> FlightSerializer["Flight Serializer generates JSON-like text stream"]
    FlightSerializer --> ClientReconciler["Client Reconciler merges Flight stream into existing client VDOM"]
    ClientReconciler --> RealDOM["Seamlessly paints UI without destroying client state!"]
```

##### Anatomy of an RSC Flight Payload Stream
When inspecting the network payload of a Next.js App Router response, you see Flight protocol chunks:
```text
1:I["(app-pages-browser)/./src/components/UserButton.tsx",["app/page","static/chunks/app/page.js"],"default"]
0:["$","div",null,{"className":"p-8","children":[["$","h1",null,{"children":"Dashboard"}],["$","$L1",null,{"name":"Alice"}]]}]
```
* Lines prefixed with `I` declare Client Component boundaries that the browser must dynamically load from static JS chunks.
* Lines prefixed with numbers represent Virtual DOM element trees where Server Component HTML is pre-serialized, and Client Components are inserted as references (`$L1`).

##### Server-Only & Client-Only Boundary Enforcement
To ensure secret server code (e.g. database credentials, private encryption keys) never accidentally leaks into client JavaScript bundles:

```bash
npm install server-only client-only
```

```ts
// lib/server-secrets.ts
import 'server-only'; // Build-time guard: Throws a build error if imported by a Client Component!

export function getInternalDatabaseSecret() {
  return process.env.DATABASE_ENCRYPTION_KEY;
}
```

#### Partial Prerendering (PPR) Architecture
Partial Prerendering (PPR) combines the speed of static sites with the capabilities of fully dynamic server rendering within a single route.

```mermaid
graph LR
    User["Incoming Request"] --> EdgeCDN["Edge CDN serves instant static HTML shell (<50ms TTFB)"]
    EdgeCDN --> Shell["Static Shell (Navbar, Sidebar, Footer, Layout)"]
    EdgeCDN --> DynamicHole["Embedded Suspense Holes stream live data over same HTTP connection"]
    DynamicHole --> Resolved["Live Personalized Cart / User Feed resolves"]
```

##### Configuring and Enabling PPR in Next.js 16
```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,    // Next.js 16: Partial Prerendering for every route
  partialPrefetching: true,
};

export default nextConfig;
```

```tsx
// app/store/page.tsx - Opt-in route segment
import { Suspense } from 'react';

// No per-route flag in Next.js 16: cacheComponents gives every route a static shell plus Suspense holes.

export default function StoreFrontPage() {
  return (
    <main className="p-8 space-y-6">
      {/* 1. Statically prerendered at build time - Served from Edge CDN instantly */}
      <header>
        <h1 className="text-3xl font-bold">Flagship Enterprise Store</h1>
        <p className="text-slate-500">Fast delivery worldwide.</p>
      </header>

      {/* 2. Dynamic Hole: Suspended and streamed on-demand per incoming user session */}
      <Suspense fallback={<div className="h-12 w-48 animate-pulse bg-slate-100 rounded" />}>
        <UserPersonalizedCartBanner />
      </Suspense>

      {/* 3. Static catalog grid prerendered at build time */}
      <StaticProductCatalog />
    </main>
  );
}
```

### M3.2 Server Actions, Asynchronous Data Pipelines & The Next.js 16 Caching Architecture

#### Server Functions & Server Actions Security Architecture
Server Actions are asynchronous functions declared with `'use server'` that execute on the server but can be invoked directly from Client Components or standard HTML forms.

```mermaid
graph TD
    ClientCall["Client invokes async Server Function"] --> HTTPPost["Next.js dispatches HTTP POST with action ID"]
    HTTPPost --> HostCheck{"Host === Origin header?"}
    HostCheck -->|"Fail"| Forbidden["403 Forbidden (CSRF Blocked)"]
    HostCheck -->|"Pass"| AuthCheck{"Active Session Cookie Valid?"}
    AuthCheck -->|"Fail"| Unauthorized["401 Unauthorized"]
    AuthCheck -->|"Pass"| ZodParse["Zod Schema Validation & Rate Limiting"]
    ZodParse --> DBExecute["Database Mutation Execution"]
    DBExecute --> Revalidate["revalidatePath() & revalidateTag()"]
    Revalidate --> ResponsePayload["Return Result or Error Object"]
```

##### Production Server Action with Rate Limiting, CSRF Verification & Zod
```tsx
'use server';

import { cookies, headers } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const UpdateTeamSchema = z.object({
  teamId: z.string().uuid('Invalid Team ID format'),
  teamName: z.string().min(2, 'Name must be at least 2 chars').max(50),
});

export async function updateTeamAction(prevState: any, formData: FormData) {
  // 1. Host and Origin verification (CSRF Defense)
  const headerList = await headers();
  const host = headerList.get('host');
  const origin = headerList.get('origin');
  if (origin && !origin.includes(host || '')) {
    throw new Error('Forbidden: CSRF check failed');
  }

  // 2. Authentication & Session Verification
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('auth_session')?.value;
  if (!sessionToken) {
    return { success: false, error: 'Unauthorized: Please log in' };
  }

  // 3. Schema Parsing
  const raw = {
    teamId: formData.get('teamId'),
    teamName: formData.get('teamName'),
  };

  const parsed = UpdateTeamSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // 4. Database Mutation (Simulated)
  // await db.team.update({ where: { id: parsed.data.teamId }, data: { name: parsed.data.teamName } });

  // 5. Atomic Cache Invalidation
  revalidateTag(`team-${parsed.data.teamId}`, 'max');

  return { success: true, message: 'Team successfully updated!' };
}
```

#### Next.js 16 Caching Hierarchies & The `"use cache"` Directive
Caching in Next.js 16 has shifted to **opt-in by default** to prevent accidental stale-data bugs while offering granular control through the new `"use cache"` directive.

```mermaid
graph TD
    Req["Incoming HTTP Request"] --> L1["1. Request Memoization (Server RAM - Single Render Pass)"]
    L1 --> L2["2. Data Cache (Server Persistent Disk/KV across users)"]
    L2 --> L3["3. Full Route Cache (Server HTML + RSC payload)"]
    L3 --> L4["4. Router Cache (Client Browser In-Memory during Session)"]
```

##### The Four Caching Tiers Breakdown

| Cache Tier | Storage Location | Lifetime | How to Invalidate |
| :--- | :--- | :--- | :--- |
| **Request Memoization** | Server Process Memory | Single component tree render pass | Automatically garbage collected when render completes. |
| **Data Cache** | Server Disk / Key-Value Store | Persistent across incoming requests & users | `revalidateTag(tag)` or `revalidatePath(path)`. |
| **Full Route Cache** | Server Disk / CDN Edge | Persistent until rebuild or revalidation | Redeployment or path revalidation. |
| **Router Cache** | Client Browser RAM | In-memory during user browser session (30s dynamic, 5m static) | `router.refresh()`, Server Action mutation. |

##### Using the Next.js 16 `"use cache"` Directive
```tsx
import { cacheLife, cacheTag } from 'next/cache';

// Caches any arbitrary asynchronous function across requests
export async function getGlobalMarketStatistics(currency: string) {
  'use cache';
  cacheLife('hours'); // Profile options: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks'
  cacheTag('market-metrics', `currency-${currency}`);

  const res = await fetch(`https://api.marketdata.internal/v1/stats?curr=${currency}`);
  if (!res.ok) throw new Error('Failed to fetch market metrics');
  return res.json();
}
```

#### Advanced Data Fetching: Parallel Requests & Waterfalls Elimination
A major performance hazard in Next.js applications is the **Request Waterfall**, where nested components wait sequentially for parent promises to resolve before initiating their own data requests.

```mermaid
graph TD
    subgraph "Anti-Pattern: Sequential Waterfall (Total Time: 1200ms)"
        Parent["Parent Component fetches User (400ms)"] --> Child1["Child 1 fetches Posts (400ms)"]
        Child1 --> Child2["Child 2 fetches Analytics (400ms)"]
    end
    subgraph "Optimized: Parallel Execution via Promise.all (Total Time: 400ms)"
        Start["Single Route Initiation"] --> P1["fetch User (400ms)"]
        Start --> P2["fetch Posts (350ms)"]
        Start --> P3["fetch Analytics (400ms)"]
    end
```

##### Parallel Data Fetching Pattern in Server Components
```tsx
import React from 'react';

async function getUser(id: string) {
  return fetch(`https://api.internal/users/${id}`).then((r) => r.json());
}

async function getRecentOrders(userId: string) {
  return fetch(`https://api.internal/orders?user=${userId}`).then((r) => r.json());
}

export default async function UserDashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Initiate both network requests in parallel without awaiting sequentially!
  const userPromise = getUser(id);
  const ordersPromise = getRecentOrders(id);

  // Await both promises simultaneously via Promise.all
  const [user, orders] = await Promise.all([userPromise, ordersPromise]);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-sm text-slate-500">Order count: {orders.length}</p>
    </div>
  );
}
```

### M3.3 Multi-Layer Caching Architecture: Stale-While-Revalidate & Cache Stampede Protection

High-scale Next.js architectures prevent database overload through multi-layer caching:

```mermaid
graph TD
    User["Incoming Request"] --> EdgeCDN["1. Edge CDN Cache (Cloudflare / Vercel Edge)"]
    EdgeCDN -->|"Cache Miss"| FullRoute["2. Full Route Cache (Next.js Server Disk)"]
    FullRoute -->|"Cache Miss"| DataCache["3. Data Cache (next/cache & 'use cache')"]
    DataCache -->|"Cache Miss"| RedisLayer["4. Redis Distributed Cache (Upstash)"]
    RedisLayer -->|"Cache Miss"| PostgresDB["5. PostgreSQL Master Database"]
```

#### Mutex Locking for Cache Stampede (Thundering Herd) Defense
```ts
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function fetchWithMutexLock<T>(
  cacheKey: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  // 1. Check Redis cache
  const cached = await redis.get<T>(cacheKey);
  if (cached) return cached;

  // 2. Attempt to acquire distributed lock for 10 seconds
  const lockKey = `lock:${cacheKey}`;
  const acquired = await redis.set(lockKey, 'locked', { nx: true, ex: 10 });

  if (acquired) {
    try {
      // Sole thread responsible for executing expensive database query
      const freshData = await fetchFn();
      await redis.set(cacheKey, freshData, { ex: ttlSeconds });
      return freshData;
    } finally {
      await redis.del(lockKey);
    }
  } else {
    // Other concurrent requests sleep briefly and read the freshly populated cache
    await new Promise((resolve) => setTimeout(resolve, 250));
    return fetchWithMutexLock(cacheKey, fetchFn, ttlSeconds);
  }
}
```

### M3.4 App Router Dynamic Segments, Catch-All & Optional Catch-All Routes

Next.js provides expressive directory syntax for dynamic URL structures:

| Route Path Syntax | Example URL Pattern | Matched Params Shape | Optimal Production Use-Case |
| :--- | :--- | :--- | :--- |
| `app/posts/[id]/page.tsx` | `/posts/42` | `{ id: '42' }` | Single resource detail view. |
| `app/docs/[...slug]/page.tsx` | `/docs/guides/auth/jwt` | `{ slug: ['guides', 'auth', 'jwt'] }` | Catch-all nested documentation / CMS hierarchy. |
| `app/shop/[[...categories]]/page.tsx` | `/shop` OR `/shop/shoes/nike` | `{ categories?: ['shoes', 'nike'] }` | Optional catch-all catalog navigation. |
| `app/(marketing)/layout.tsx` | `/about` (No URL prefix!) | None (Route Group) | Grouping routes without adding folder name to URL. |
| `app/@modal/(.)photos/[id]/page.tsx` | Direct visit: standalone `/photos/1`; In-app click: overlay modal | `{ id: '1' }` | Intercepting route modal lightbox. |

### M3.5 Complete Next.js 16 Route Segment Configuration Master Matrix

```tsx
// app/dashboard/reports/page.tsx
export const dynamic = 'auto';
// Options:
// - 'auto': Default behavior (statically prerender unless dynamic functions/cookies are used)
// - 'force-dynamic': Bypasses all caching; always renders at request time on every request
// - 'error': Throws a build error if any dynamic functions or uncached fetches are called
// - 'force-static': Forces static prerendering; headers() and cookies() return empty values

export const dynamicParams = true;
// Options:
// - true: Dynamic params not in generateStaticParams are generated on-demand at request time
// - false: Any param not defined in generateStaticParams returns a 404 page

export const revalidate = 3600;
// Options:
// - false: Default cache duration (indefinite or until revalidated manually)
// - 0: Disables caching (equivalent to dynamic = 'force-dynamic')
// - number: Revalidate data and static page every N seconds (ISR)

export const fetchCache = 'auto';
// Options:
// - 'auto': Default fetch caching behavior
// - 'force-no-store': Overrides all fetch requests to { cache: 'no-store' }
// - 'only-cache': Overrides all fetch requests to { cache: 'force-cache' }

export const runtime = 'nodejs';
// Options:
// - 'nodejs': Full Node.js runtime (access to fs, net, heavy ORMs like Prisma)
// - 'edge': Lightweight V8 isolate runtime (<10ms cold start, globally distributed)

export const preferredRegion = 'iad1';
// Directs compute to a specific cloud region (e.g. 'iad1', 'sfo1', 'fra1', 'home', 'auto')

export const maxDuration = 60;
// Sets serverless function execution timeout in seconds before aborting
```

### M3.6 Client-Side Navigation Architecture: `usePathname`, `useSearchParams` & Blockers

```tsx
'use client';

import React, { useTransition } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function ActiveNavigationLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isActive = pathname === href;

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    startTransition(() => {
      // router.push wraps client navigation in startTransition to prevent UI freezing
      router.push(href);
    });
  };

  return (
    <a
      href={href}
      onClick={handleNavigation}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        isActive
          ? 'bg-indigo-600 text-white shadow-md'
          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
      } ${isPending ? 'opacity-70 animate-pulse' : ''}`}
    >
      {label}
    </a>
  );
}
```

### M3.7 Full-Stack State Synchronization: React 19 Actions + Optimistic Rollback

```tsx
'use client';

import React, { useActionState, useOptimistic, useRef } from 'react';
import { useFormStatus } from 'react-dom';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  isOptimistic?: boolean;
}

function TaskSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50 transition-colors"
    >
      {pending ? 'Saving...' : 'Add Task'}
    </button>
  );
}

export function OptimisticTaskList({ initialTasks }: { initialTasks: Task[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [tasks, formAction] = useActionState(
    async (prevTasks: Task[], formData: FormData) => {
      const title = formData.get('title') as string;
      if (!title.trim()) return prevTasks;

      // Simulated network call to Server Action / Route Handler
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) {
        throw new Error('Failed to create task on backend');
      }

      const createdTask: Task = await res.json();
      return [...prevTasks, createdTask];
    },
    initialTasks
  );

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (current, newTitle: string) => [
      ...current,
      { id: `temp-${Date.now()}`, title: newTitle, isCompleted: false, isOptimistic: true },
    ]
  );

  const handleAction = async (formData: FormData) => {
    const title = formData.get('title') as string;
    formRef.current?.reset();
    addOptimisticTask(title);
    try {
      await formAction(formData);
    } catch (err) {
      console.error('Optimistic mutation rolled back due to error:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-xl font-bold">Enterprise Sprint Backlog</h3>

      <ul className="space-y-2">
        {optimisticTasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-3 border rounded-xl transition-all ${
              task.isOptimistic
                ? 'opacity-60 border-dashed border-indigo-400 bg-indigo-50/20'
                : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50'
            }`}
          >
            <span>{task.title}</span>
            {task.isOptimistic && <span className="text-xs text-indigo-500 font-mono">Syncing...</span>}
          </li>
        ))}
      </ul>

      <form ref={formRef} action={handleAction} className="flex gap-2 pt-2">
        <input
          name="title"
          placeholder="New task title..."
          className="flex-1 px-3 py-2 border rounded-lg dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500"
          required
        />
        <TaskSubmitButton />
      </form>
    </div>
  );
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M4. Masterclass: Proxy, Authentication, Authorization and Security

The request filter in front of the app, session architectures (OAuth 2.0 with PKCE, WebAuthn, cookies), RBAC and ABAC, a threat-by-threat security curriculum, Auth.js and Better Auth integration, and webhook signature verification.

### M4.1 From Middleware to Proxy, Authentication, Authorization & Security

#### Next.js Middleware vs The Emerging Proxy Pattern
The proxy (`proxy.ts`, called `proxy.ts` before Next.js 16) runs before any route renders, on the Node.js runtime. Running database queries or slow session lookups there adds latency to every matched request, including prefetches, so keep it to cheap header and cookie checks.

```mermaid
graph LR
    Incoming["Incoming HTTP Request"] --> EdgeProxy["Proxy / Proxy (Header checks, Subdomains, Bot filtering)"]
    EdgeProxy -->|"Rewrite / Pass"| Server["Origin Node.js Server: Database Session Verification"]
    EdgeProxy -->|"Redirect"| AuthGate["Redirect to /login"]
```

##### Production Proxy (`proxy.ts`) with Security Headers & Rate Limiting
```ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Generate unique request ID and Nonce
  const requestId = crypto.randomUUID();
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // 2. Define hardened Content-Security-Policy (CSP)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-id', requestId);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  // 3. Route Protection Gate
  const isProtectedPath = pathname.startsWith('/dashboard') || pathname.startsWith('/admin');
  const sessionToken = request.cookies.get('auth_session')?.value;

  if (isProtectedPath && !sessionToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Multi-Tenant Subdomain Routing
  const host = request.headers.get('host') || '';
  const subdomain = host.split('.')[0];
  if (subdomain && subdomain !== 'www' && subdomain !== 'localhost:3000') {
    // Rewrite sub.domain.com/feed to /tenants/[subdomain]/feed
    return NextResponse.rewrite(
      new URL(`/tenants/${subdomain}${pathname}`, request.url),
      { headers: requestHeaders }
    );
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

#### Enterprise Authentication Architecture: OAuth2 PKCE, WebAuthn & Sessions
Authentication establishes **who the user is**, while authorization determines **what resources they are permitted to access**.

```mermaid
graph TD
    Client["Browser Client"] -->|"1. POST /api/auth/login"| RouteHandler["Route Handler / Server Action"]
    RouteHandler --> Verify["Verify Argon2 / Bcrypt Password Hash"]
    Verify --> GenSession["Generate Cryptographically Secure 256-bit Session ID"]
    GenSession --> DBStore["Persist Session in Redis / Postgres with TTL"]
    GenSession --> Cookie["Set HttpOnly; Secure; SameSite=Strict Cookie in HTTP Response"]
    Cookie --> Browser["Browser stores cookie securely; JavaScript cannot read it!"]
```

##### Complete Server-Side Session Verification in Server Components
```tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface UserSession {
  userId: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export async function getServerSession(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_session')?.value;
  if (!token) return null;

  // Verify against session database or Redis store
  const session = await db.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return {
    userId: session.user.id,
    email: session.user.email,
    role: session.user.role as any,
  };
}

export async function requireAuth(allowedRoles: Array<'admin' | 'editor' | 'viewer'> = []) {
  const session = await getServerSession();
  if (!session) {
    redirect('/login');
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(session.role)) {
    redirect('/unauthorized');
  }

  return session;
}
```

#### Fine-Grained Authorization: RBAC vs ABAC & Permission Matrices
Role-Based Access Control (RBAC) assigns permissions to roles. Attribute-Based Access Control (ABAC) evaluates context rules (e.g., "An editor can only edit posts they own, or if the organization tenant matches"):

```tsx
type Permission = 'post:create' | 'post:read' | 'post:update' | 'post:delete';

const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  admin: ['post:create', 'post:read', 'post:update', 'post:delete'],
  editor: ['post:create', 'post:read', 'post:update'],
  viewer: ['post:read'],
};

export function canUserPerformAction(
  session: UserSession,
  action: Permission,
  resourceOwnerId?: string
): boolean {
  const permissions = ROLE_PERMISSIONS[session.role] || [];
  if (!permissions.includes(action)) return false;

  // ABAC Ownership Check: Editors can only update their own posts
  if (action === 'post:update' && session.role === 'editor' && resourceOwnerId) {
    return session.userId === resourceOwnerId;
  }

  return true;
}
```

### M4.2 Enterprise Full-Stack Security Curriculum & Threat Mitigation

Full-stack Next.js applications expose multiple attack vectors across Client Components, Server Components, Route Handlers, and Proxy.

```mermaid
graph TD
    Attacker["Malicious Request / Payload"] --> EdgeGuard["1. Proxy: Strict CSP Nonce & Header Verification"]
    EdgeGuard --> ActionCSRF["2. Server Action: Origin & Host Matching (CSRF Defense)"]
    ActionCSRF --> ZodVal["3. Zod Schema Parsing: Input Sanitization & Type Coercion"]
    ZodVal --> DBProtect["4. Parameterized SQL / ORM Queries (SQL Injection Prevention)"]
    DBProtect --> CookieStore["5. HttpOnly; Secure; SameSite=Strict Cookie Storage (Token Theft Defense)"]
```

#### Full-Stack Attack Vector & Mitigation Guide

| Attack Vector | Vulnerability Mechanism in Next.js | Production Hardening Strategy |
| :--- | :--- | :--- |
| **Cross-Site Scripting (XSS)** | Injecting untrusted HTML into `dangerouslySetInnerHTML` or dynamic `href="javascript:..."` | Sanitize with DOMPurify; enforce strict Content-Security-Policy with cryptographic per-request nonces. |
| **Server-Side Request Forgery (SSRF)** | Fetching arbitrary user-supplied URLs on the server (`fetch(userUrl)`) exposing internal cloud metadata (`http://169.254.169.254/`) | Validate protocols strictly against `https:`; maintain an allowlist of permitted external domains; block private IP ranges (`10.0.0.0/8`, `192.168.0.0/16`). |
| **CSRF in Server Actions** | State-changing POST requests invoked from malicious third-party origins | Next.js automatically validates `Host` vs `Origin` headers; pair with `SameSite=Strict` session cookies. |
| **SQL / NoSQL Injection** | Concatenating user strings directly into raw SQL template strings | Always use parameterized queries via Prisma / Drizzle ORM; never concatenate unsanitized strings in `db.execute()`. |
| **Open Redirects** | Redirecting users based on unvalidated query params (`redirect(searchParams.get('from'))`) | Verify destination URL begins with `/` and does not contain protocol specifiers (`//` or `https:`). |
| **Clickjacking** | Framing authenticated application pages inside invisible third-party `<iframe>`s | Set HTTP header `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`. |

#### Redis-Powered Sliding-Window Rate Limiting (`lib/ratelimit.ts`)
```ts
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function checkRateLimit(
  identifier: string,
  limit: number = 10,
  windowSeconds: number = 60
): Promise<{ success: boolean; remaining: number }> {
  const now = Date.now();
  const clearBefore = now - windowSeconds * 1000;
  const key = `ratelimit:${identifier}`;

  // Multi-operation transaction: Remove old ticks, add current, count remaining
  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(key, 0, clearBefore);
  pipeline.zadd(key, { score: now, member: `${now}-${Math.random()}` });
  pipeline.zcard(key);
  pipeline.expire(key, windowSeconds);

  const results = await pipeline.exec<[number, number, number, number]>();
  const totalRequests = results[2];

  return {
    success: totalRequests <= limit,
    remaining: Math.max(0, limit - totalRequests),
  };
}
```

### M4.3 Full-Stack Authentication: NextAuth.js / Better Auth Integration

```ts
// auth.ts - Better Auth Configuration with Passkeys & GitHub OAuth
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { db } from '@/lib/db';

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [
    // WebAuthn / Passkeys authentication
    passkey(),
  ],
});
```

### M4.4 Generic HMAC-SHA256 Webhook Verification Engine

Securing incoming webhooks from external providers (Stripe, GitHub, Shopify, Clerk) requires constant-time cryptographic verification of HMAC-SHA256 signatures:

```ts
// lib/security/webhook-verifier.ts
import crypto from 'crypto';

interface WebhookVerificationOptions {
  payload: string;        // Raw request body text
  signatureHeader: string; // Header value containing hex or base64 signature
  secret: string;         // Secret signing key
  toleranceSeconds?: number; // Maximum age in seconds to prevent replay attacks (default: 300)
}

export function verifyHmacSha256Signature({
  payload,
  signatureHeader,
  secret,
  toleranceSeconds = 300,
}: WebhookVerificationOptions): { isValid: boolean; error?: string } {
  // 1. Extract timestamp and signature components (e.g. t=1710000000,v1=abcdef...)
  const elements = signatureHeader.split(',');
  let timestamp: number | null = null;
  let signature: string | null = null;

  for (const element of elements) {
    const [key, value] = element.trim().split('=');
    if (key === 't') timestamp = parseInt(value, 10);
    if (key === 'v1') signature = value;
  }

  if (!timestamp || !signature) {
    return { isValid: false, error: 'Malformed signature header format' };
  }

  // 2. Prevent Replay Attacks: Check timestamp tolerance
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestamp) > toleranceSeconds) {
    return { isValid: false, error: 'Webhook timestamp outside tolerance window (replay attack)' };
  }

  // 3. Compute Expected HMAC-SHA256 Digest
  const signedPayload = `${timestamp}.${payload}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');

  // 4. Constant-Time Buffer Comparison (Mitigates timing attacks)
  const sourceBuffer = Buffer.from(signature, 'hex');
  const targetBuffer = Buffer.from(expectedSignature, 'hex');

  if (sourceBuffer.length !== targetBuffer.length) {
    return { isValid: false, error: 'Signature length mismatch' };
  }

  const matches = crypto.timingSafeEqual(sourceBuffer, targetBuffer);
  return { isValid: matches, error: matches ? undefined : 'Invalid signature digest' };
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M5. Masterclass: Data Engineering: PostgreSQL, ORMs and State

Serverless connection pooling, Prisma versus Drizzle, transaction isolation levels and their anomalies, indexing with EXPLAIN, full-text search, schema design, database branching and recovery objectives, plus client state libraries compared.

### M5.1 Database Engineering, ORMs (Prisma & Drizzle), State Management & Design Systems

#### Serverless Database Engineering: PgBouncer, Pooling & Transactions
Deploying Next.js to serverless environments (Vercel, AWS Lambda) creates a critical database hazard: each serverless function invocation spawns a separate node process, rapidly exhausting PostgreSQL's connection pool (`max_connections = 100`).

```mermaid
graph TD
    Lambda1["Serverless Function 1"] --> PgBouncer["PgBouncer / Supabase / Neon Connection Pooler"]
    Lambda2["Serverless Function 2"] --> PgBouncer
    Lambda3["Serverless Function 3"] --> PgBouncer
    PgBouncer -->|"Reuses 10 persistent TCP sockets"| PostgresDB["PostgreSQL Master Database"]
```

##### Optimistic Locking vs Pessimistic Locking
* **Optimistic Locking**: Uses a `version` integer column. If two users edit simultaneously, the second update fails if `version` has changed:
  ```sql
  UPDATE products SET stock = stock - 1, version = version + 1 WHERE id = 42 AND version = 3;
  ```
* **Pessimistic Locking**: Locks the row at the database level (`SELECT ... FOR UPDATE`), preventing any other transaction from reading or modifying the row until the current transaction commits.

#### Drizzle ORM vs Prisma: Architecture & Performance Comparison

```mermaid
graph LR
    subgraph "Drizzle ORM (SQL-Like, Zero Rust Engine)"
        Drizzle["TypeScript Schema"] --> SQLQuery["Native SQL Template Literal Compilation"]
        SQLQuery --> UltraFast["Near-zero overhead; instant serverless cold starts (<5ms)"]
    end
    subgraph "Prisma ORM (Schema-First, Rust Query Engine)"
        PrismaSchema["schema.prisma"] --> RustEngine["Precompiled Rust Query Engine binary"]
        RustEngine --> HeavyFeatures["Rich relations, nested writes, Prisma Studio"]
    end
```

##### Drizzle ORM Implementation with Relations, Joins & Transactions
```ts
// db/schema.ts
import { pgTable, uuid, varchar, timestamp, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const posts = pgTable('posts', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  authorId: uuid('author_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  views: integer('views').default(0).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
```

##### Type-Safe Drizzle Query with Relational Join
```ts
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';

export async function getUserWithPosts(userId: string) {
  return await db.query.users.findFirst({
    where: eq(users.id, userId),
    with: {
      posts: {
        orderBy: (posts, { desc }) => [desc(posts.views)],
      },
    },
  });
}
```

#### State Management Architecture: Zustand vs Redux Toolkit vs Jotai

| Library | Paradigm | Mental Model | Bundle Size | Optimal Full-Stack Use-Case |
| :--- | :--- | :--- | :--- | :--- |
| **Zustand** | Centralized External Store | Mutate via actions; subscribe via granular selectors. | ~1.1 KB | Global client UI state (modals, active filters, sidebar collapsed state). |
| **Redux Toolkit** | Centralized Flux Store | Strict action dispatching with Immer reducers & RTK Query. | ~11 KB | Massive enterprise systems requiring strict audit logs & time-travel debugging. |
| **Jotai** | Bottom-Up Atomic | Atoms compose into derived atoms without top-down providers. | ~2.5 KB | Complex canvas tools, spreadsheet grids with fine-grained cell subscriptions. |

##### Zustand Store with DevTools & LocalStorage Persistence
```ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UIStore {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUIStore = create<UIStore>()(
  devtools(
    persist(
      (set) => ({
        isSidebarOpen: true,
        theme: 'dark',
        toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        setTheme: (theme) => set({ theme }),
      }),
      { name: 'app-ui-preferences' }
    ),
    { name: 'UIStore' }
  )
);
```

#### Enterprise Styling & UI: Tailwind CSS & Component Variants (CVA)
```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
        success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300',
        warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
        danger: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
```

### M5.2 Deep Dive: PostgreSQL Indexing, EXPLAIN Query Plans & Serverless Connection Pooling

In high-throughput Next.js applications, inefficient database queries are the #1 cause of slow TTFB (Time to First Byte).

```mermaid
graph TD
    Client["Client Request /orders?status=shipped"] --> ServerAction["Server Action"]
    ServerAction --> DB["PostgreSQL 16 Engine"]
    DB --> IndexScan["Index Scan on idx_orders_customer_status (B-Tree)"]
    IndexScan --> HeapFetch["Table Heap Fetch only for matched pointers"]
    HeapFetch --> FastResult["Result returned in < 2ms (Zero Sequential Table Scan!)"]
```

#### B-Tree vs GIN vs BRIN Indexing Decision Guide

| Index Type | Underlying Data Structure | Optimal Use-Case in Next.js | Example SQL Syntax |
| :--- | :--- | :--- | :--- |
| **B-Tree** | Balanced Tree ($O(\log N)$) | Primary keys, foreign keys, unique emails, sorting (`ORDER BY`). | `CREATE INDEX idx_users_email ON users(email);` |
| **GIN** (Generalized Inverted Index) | Inverted Index | Full-Text Search (FTS), array contains (`@>`), JSONB queries. | `CREATE INDEX idx_posts_tags ON posts USING GIN(tags);` |
| **BRIN** (Block Range Index) | Min/Max values per block | Massive append-only time-series tables (telemetry, logs, audits). | `CREATE INDEX idx_logs_created ON logs USING BRIN(created_at);` |

#### Reading `EXPLAIN (ANALYZE, BUFFERS)` Output
```sql
-- Query plan inspection for slow search
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title, views FROM posts 
WHERE author_id = '00000000-0000-0000-0000-000000000000' 
ORDER BY created_at DESC LIMIT 10;
```
* **Seq Scan (Sequential Scan)**: The database reads every single page on disk from start to finish. If found on tables over 1,000 rows, this is a critical performance bug!
* **Index Scan**: Traverses the index tree to find matching tuples, then retrieves row data from the table heap.
* **Index Only Scan**: All requested columns reside directly in the index (covering index); zero disk heap reads required!

### M5.3 Database Engineering: ACID Transaction Isolation Levels & Concurrency Anomalies

When multiple transactions execute concurrently in PostgreSQL, isolation levels determine which database anomalies are permitted:

```mermaid
graph LR
    ReadUncommitted["Read Uncommitted (Permits Dirty Reads)"] --> ReadCommitted["Read Committed (Default in Postgres - Blocks Dirty Reads)"]
    ReadCommitted --> RepeatableRead["Repeatable Read (Blocks Non-Repeatable Reads)"]
    RepeatableRead --> Serializable["Serializable (Strict Serial Execution - Zero Anomalies)"]
```

#### Concurrency Anomalies & Isolation Matrix

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Serialization Anomaly |
| :--- | :--- | :--- | :--- | :--- |
| **Read Uncommitted** | Possible in MySQL | Possible | Possible | Possible |
| **Read Committed** (Postgres Default) | **Prevented** | Possible | Possible | Possible |
| **Repeatable Read** | **Prevented** | **Prevented** | **Prevented in Postgres** | Possible |
| **Serializable** | **Prevented** | **Prevented** | **Prevented** | **Prevented** |

#### PgBouncer Configuration (`/etc/pgbouncer/pgbouncer.ini`)
```ini
[databases]
enterprise_production = host=127.0.0.1 port=5432 dbname=enterprise_db auth_user=postgres

[pgbouncer]
listen_addr = 0.0.0.0
listen_port = 6432
auth_type = scram-sha-256
auth_file = /etc/pgbouncer/userlist.txt

; Optimal pooling mode for serverless Next.js applications:
pool_mode = transaction

; Connection Pool Limits:
max_client_conn = 5000
default_pool_size = 25
min_pool_size = 5
reserve_pool_size = 5
reserve_pool_timeout = 5
max_db_connections = 100
```

### M5.4 State Management Deep Dive: Redux Toolkit, Zustand, Jotai & XState

#### 1. Redux Toolkit with RTK Query Full Architecture
```ts
// store/features/productsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Product' as const, id })), { type: 'Product', id: 'LIST' }]
          : [{ type: 'Product', id: 'LIST' }],
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
```

#### 2. Jotai Atomic State Pattern
```tsx
import { atom, useAtom } from 'jotai';

// Primitive atom
export const countAtom = atom(0);

// Derived atom (read-only)
export const doubleCountAtom = atom((get) => get(countAtom) * 2);

export function CounterView() {
  const [count, setCount] = useAtom(countAtom);
  const [double] = useAtom(doubleCountAtom);

  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => setCount((c) => c + 1)} className="px-3 py-1 bg-indigo-600 text-white rounded">
        Count: {count}
      </button>
      <span className="font-bold">Double: {double}</span>
    </div>
  );
}
```

#### 3. XState v5 Finite State Machine for Checkout Flow
```ts
import { setup, assign } from 'xstate';

export const checkoutMachine = setup({
  types: {
    context: {} as { cartTotal: number; orderId: string | null; error: string | null },
    events:
      | { type: 'SUBMIT_PAYMENT' }
      | { type: 'PAYMENT_SUCCESS'; orderId: string }
      | { type: 'PAYMENT_ERROR'; error: string }
      | { type: 'RETRY' },
  },
}).createMachine({
  id: 'checkout',
  initial: 'idle',
  context: { cartTotal: 150, orderId: null, error: null },
  states: {
    idle: {
      on: { SUBMIT_PAYMENT: 'authorizing' },
    },
    authorizing: {
      on: {
        PAYMENT_SUCCESS: {
          target: 'confirmed',
          actions: assign({ orderId: ({ event }) => event.orderId }),
        },
        PAYMENT_ERROR: {
          target: 'failed',
          actions: assign({ error: ({ event }) => event.error }),
        },
      },
    },
    confirmed: {
      type: 'final',
    },
    failed: {
      on: { RETRY: 'authorizing' },
    },
  },
});
```

### M5.5 Comprehensive PostgreSQL Relational Schema (Multi-Tenant E-Commerce)

```sql
-- PostgreSQL 16 Enterprise Multi-Tenant Schema DDL

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector"; -- pgvector for AI similarity

-- 1. Tenants Table
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subdomain VARCHAR(63) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    plan VARCHAR(32) NOT NULL DEFAULT 'standard',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Users Table with Tenant Isolation
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_tenant_email UNIQUE(tenant_id, email)
);

-- 3. Roles and Permissions (RBAC)
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(64) NOT NULL,
    permissions TEXT[] NOT NULL DEFAULT '{}'
);

CREATE TABLE user_roles (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- 4. Products Table with Full-Text Search and Vector Embeddings
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    sku VARCHAR(64) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(12, 2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    attributes JSONB NOT NULL DEFAULT '{}',
    embedding vector(1536), -- OpenAI Ada/3-small embedding vector
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', name || ' ' || description)
    ) STORED,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for Ultra-Fast Retrieval
CREATE INDEX idx_products_tenant_sku ON products(tenant_id, sku);
CREATE INDEX idx_products_search ON products USING GIN(search_vector);
CREATE INDEX idx_products_attributes ON products USING GIN(attributes jsonb_path_ops);
CREATE INDEX idx_products_embedding ON products USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- 5. Orders and Payments with Optimistic Versioning
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    total_amount NUMERIC(12, 2) NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'pending',
    version INTEGER NOT NULL DEFAULT 1, -- Optimistic locking
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Audit Logs Table (Append-Only)
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    tenant_id UUID NOT NULL,
    user_id UUID,
    action VARCHAR(64) NOT NULL,
    entity_type VARCHAR(64) NOT NULL,
    entity_id UUID NOT NULL,
    diff JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_audit_logs_tenant_date ON audit_logs(tenant_id, created_at DESC);
```

#### Complex Window Functions & Common Table Expressions (CTEs)
```sql
-- Advanced Analytics Query: Customer Lifetime Value (LTV) & Order Recency Ranking
WITH customer_order_aggregates AS (
    SELECT 
        user_id,
        COUNT(id) AS total_orders,
        SUM(total_amount) AS lifetime_value,
        MAX(created_at) AS last_order_date
    FROM orders
    WHERE tenant_id = '00000000-0000-0000-0000-000000000000'
      AND status = 'completed'
    GROUP BY user_id
)
SELECT 
    u.id,
    u.email,
    coa.total_orders,
    coa.lifetime_value,
    DENSE_RANK() OVER (ORDER BY coa.lifetime_value DESC) AS spending_rank,
    NTILE(4) OVER (ORDER BY coa.lifetime_value DESC) AS customer_quartile,
    LAG(coa.lifetime_value, 1) OVER (ORDER BY coa.lifetime_value DESC) - coa.lifetime_value AS gap_to_next_rank
FROM users u
JOIN customer_order_aggregates coa ON u.id = coa.user_id
ORDER BY spending_rank ASC
LIMIT 20;
```

### M5.6 Production PostgreSQL Full-Text Search (FTS) Pipeline

Full-text search in PostgreSQL provides fast, zero-dependency search with stemming, dictionary ranking, and headline highlighting:

```sql
-- PostgreSQL Full-Text Search Schema & Indexing
ALTER TABLE articles ADD COLUMN tsv_content tsvector 
  GENERATED ALWAYS AS (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(body, ''))) STORED;

CREATE INDEX idx_articles_fts ON articles USING GIN(tsv_content);

-- Search Query with Stemming & Headline Snippets
SELECT 
    id, 
    title,
    ts_rank(tsv_content, websearch_to_tsquery('english', 'kubernetes deployment')) AS rank,
    ts_headline('english', body, websearch_to_tsquery('english', 'kubernetes deployment'), 
                'StartSel=<mark>, StopSel=</mark>, MaxWords=35, MinWords=15') AS snippet
FROM articles
WHERE tsv_content @@ websearch_to_tsquery('english', 'kubernetes deployment')
ORDER BY rank DESC
LIMIT 10;
```

#### Search Component with Debounced URL Query Synchronization
```tsx
'use client';

import React, { useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export function SearchInput({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term.trim()) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      // Replace URL search params without triggering full page re-render
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative max-w-md w-full">
      <input
        type="search"
        defaultValue={searchParams.get('q') || ''}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 border rounded-xl dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500"
      />
      <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
      {isPending && <span className="absolute right-3 top-2.5 animate-spin text-xs">⏳</span>}
    </div>
  );
}
```

### M5.7 Database Branching Workflows for Ephemeral Preview Environments

In modern continuous deployment with Vercel and Neon/Supabase, every pull request can spin up an isolated, copy-on-write database branch in sub-second time:

```mermaid
graph TD
    PR["GitHub Pull Request Created (#142)"] --> VercelPreview["Vercel Preview Deployment Built"]
    PR --> NeonAPI["Neon / Supabase API: Branch 'main' database"]
    NeonAPI --> EphemeralDB["Ephemeral Branch DB (Copy-on-Write)"]
    VercelPreview -->|"DATABASE_URL=branch_connection"| EphemeralDB
    EphemeralDB --> PRTest["E2E Tests run against isolated real database!"]
    PR -->|"Merge PR"| Teardown["Destroy ephemeral DB branch & promote code"]
```

#### GitHub Actions Workflow for Ephemeral Database Branching
```yaml
# .github/workflows/preview-branch-db.yml
name: Ephemeral Preview Database Branching

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  provision-db-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create Neon Database Branch
        id: neon-branch
        uses: neondatabase/create-branch-action@v5
        with:
          project_id: ${{ secrets.NEON_PROJECT_ID }}
          branch_name: pr-${{ github.event.number }}
          api_key: ${{ secrets.NEON_API_KEY }}

      - name: Run Drizzle Migrations on Preview Branch
        run: |
          npm ci
          npx drizzle-kit migrate
        env:
          DATABASE_URL: ${{ steps.neon-branch.outputs.db_url }}
```

### M5.8 Enterprise Disaster Recovery: RPO, RTO & Point-In-Time Recovery (PITR)

| Recovery Metric | Enterprise Target | Technical Strategy |
| :--- | :--- | :--- |
| **Recovery Point Objective (RPO)** | **< 1 minute** | Continuous Write-Ahead Log (WAL) archiving to encrypted multi-region S3 buckets. |
| **Recovery Time Objective (RTO)** | **< 15 minutes** | Automated DNS failover via Route 53 health checks to pre-warmed standby replica regions. |
| **Point-In-Time Recovery (PITR)** | **30-Day Window** | Replay WAL logs up to specific microsecond timestamp to reverse accidental drop/delete operations. |

```sql
-- Point-In-Time Recovery Simulation (Recovery to Specific Microsecond Target)
-- In postgresql.conf:
-- restore_command = 'aws s3 cp s3://enterprise-wal-archive/%f %p'
-- recovery_target_time = '2026-09-21 14:02:15.123456+00'
-- recovery_target_action = 'promote'
```

[Back to top ⤴️](#-table-of-contents)

---

## M6. Masterclass: Accessibility, SEO, Internationalisation and Design Systems

WCAG 2.2 AA in practice, structured data and dynamic metadata, image optimisation, RTL-aware internationalisation, and accessible component primitives built with CVA, Radix and Floating UI.

### M6.1 Web Accessibility (WCAG), Enterprise SEO, Media Optimization & Localization

#### Enterprise Web Accessibility: WCAG 2.2 AA & Focus Management
Accessibility is a core engineering discipline. Full-stack Next.js applications must conform to WCAG 2.2 AA standards to support screen readers, keyboard-only navigators, and motor-impaired users.

##### Accessible Dialog Modal with Focus Trapping & ARIA
```tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function AccessibleModal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Retain previous active element to restore focus on close
    previousFocusRef.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Enforce Focus Trap within modal boundary
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.querySelector<HTMLElement>('button, input')?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-xl max-w-lg w-full p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="dialog-title" className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close modal" className="text-slate-400 hover:text-white">✕</button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}
```

#### Enterprise Next.js SEO: Dynamic Metadata & JSON-LD Structured Data
Search engine web crawlers and social indexers rely on standard OpenGraph meta tags and Schema.org JSON-LD structured data for rich snippet display.

```tsx
// app/products/[slug]/page.tsx
import { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return {
    title: `${product.name} | Flagship Enterprise Store`,
    description: product.summary,
    alternates: {
      canonical: `https://store.enterprise.com/products/${slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.summary,
      url: `https://store.enterprise.com/products/${slug}`,
      siteName: 'Enterprise Store',
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.summary,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // Schema.org Product Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.imageUrl,
    description: product.summary,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://store.enterprise.com/products/${slug}`,
    },
  };

  return (
    <article className="p-8 max-w-4xl mx-auto space-y-6">
      {/* Inject JSON-LD directly into HTML for Google Search Crawler */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl font-extrabold">{product.name}</h1>
      <p className="text-xl font-semibold text-emerald-600">${product.price}</p>
      <p className="text-slate-600 dark:text-slate-300">{product.description}</p>
    </article>
  );
}
```

#### High-Performance Media: `next/image` & Remote Pattern Optimization
The Next.js image component automatically converts JPEG/PNG to modern AVIF/WebP formats, generates blur placeholders, and prevents Cumulative Layout Shift (CLS).

```tsx
import Image from 'next/image';

export function ResponsiveHeroBanner({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src={imageUrl}
        alt="Product Showcase Banner"
        fill
        priority // Preloads image to guarantee sub-2.5s LCP on mobile
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFmMjkzNyIvPjwvc3ZnPg=="
        className="object-cover"
      />
    </div>
  );
}
```

### M6.2 Full-Stack Internationalization (`next-intl`) with RTL Mirroring

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'de', 'ja', 'ar'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### M6.3 Accessible WAI-ARIA Combobox with Keyboard Autocomplete

```tsx
'use client';

import React, { useState, useRef, useId, KeyboardEvent } from 'react';

interface ComboboxOption {
  id: string;
  label: string;
}

export function AccessibleCombobox({
  options,
  placeholder,
  onSelect,
}: {
  options: ComboboxOption[];
  placeholder?: string;
  onSelect: (opt: ComboboxOption) => void;
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listboxId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < filtered.length) {
      e.preventDefault();
      const selected = filtered[activeIndex];
      onSelect(selected);
      setQuery(selected.label);
      setIsOpen(false);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative max-w-sm">
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeIndex >= 0 ? `${listboxId}-opt-${activeIndex}` : undefined}
        value={query}
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
      />

      {isOpen && filtered.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-30 w-full mt-1 bg-white dark:bg-slate-900 border rounded-lg shadow-xl max-h-60 overflow-y-auto"
        >
          {filtered.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <li
                key={item.id}
                id={`${listboxId}-opt-${idx}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onSelect(item);
                  setQuery(item.label);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer text-sm ${
                  isSelected ? 'bg-indigo-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
```

### M6.4 Production Performance & Core Web Vitals Optimization

| Core Web Vital | Metric Target | Primary Culprits | Next.js Engineering Remedy |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | **< 2.5s** | Slow server TTFB, unoptimized hero banner images, render-blocking CSS. | Preload hero image using `next/image` with `priority`; stream HTML shell with Suspense; edge CDN caching. |
| **INP** (Interaction to Next Paint) | **< 200ms** | Long JavaScript tasks blocking the main thread on user click/tap. | Offload CPU work to Web Workers; wrap state transitions in `startTransition`; yield using `scheduler.yield()`. |
| **CLS** (Cumulative Layout Shift) | **< 0.1** | Dynamic ads/images without explicit width/height dimensions. | Always define `aspect-ratio` or `width`/`height` attributes on images and layout containers. |
| **TTFB** (Time to First Byte) | **< 800ms** | Uncached synchronous database calls, heavy serverless cold starts. | Enable Partial Prerendering (PPR); utilize connection pooling (PgBouncer); cache data with `"use cache"`. |

### M6.5 Enterprise UI Component Primitives with CVA & Tailwind CSS

#### 1. Accessible Accordion Component Primitive
```tsx
'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';

interface AccordionContextType {
  activeId: string | null;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export function AccordionRoot({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggle = (id: string) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <AccordionContext.Provider value={{ activeId, toggle }}>
      <div className="divide-y border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be within AccordionRoot');
  const isOpen = ctx.activeId === id;

  return (
    <div>
      <button
        type="button"
        onClick={() => ctx.toggle(id)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center p-4 font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-slate-50/50 dark:bg-slate-950/50 text-slate-600 dark:text-slate-400 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}
```

#### 2. Accessible Toast Notification System
```tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = 'info') => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={`p-4 rounded-xl shadow-2xl text-white pointer-events-auto flex items-center justify-between transition-all ${
              toast.type === 'success'
                ? 'bg-emerald-600'
                : toast.type === 'error'
                ? 'bg-rose-600'
                : 'bg-indigo-600'
            }`}
          >
            <span className="text-sm font-medium">{toast.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-xs opacity-75 hover:opacity-100 ml-4"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
```

### M6.6 Complete Design System Primitives (CVA + Radix + Tailwind)

#### 1. Accessible Switch / Toggle Component
```tsx
'use client';

import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Switch({ checked, onChange, label, disabled = false }: SwitchProps) {
  return (
    <label className={`inline-flex items-center gap-3 select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          checked ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      {label && <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>}
    </label>
  );
}
```

#### 2. Accessible Breadcrumbs with JSON-LD Schema.org Metadata
```tsx
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://enterprise.com${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {idx > 0 && <span>/</span>}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-indigo-600 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

#### 3. Accessible Slider Primitive
```tsx
'use client';

import React, { useRef, useState, KeyboardEvent } from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
  ariaLabel?: string;
}

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  ariaLabel = 'Range Slider',
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      onChange(Math.min(max, value + step));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      onChange(Math.max(min, value - step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      onChange(min);
    } else if (e.key === 'End') {
      e.preventDefault();
      onChange(max);
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full h-6 flex items-center select-none cursor-pointer"
      onClick={(e) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const rawPercent = clickX / rect.width;
        const rawVal = min + rawPercent * (max - min);
        const steppedVal = Math.round(rawVal / step) * step;
        onChange(Math.min(max, Math.max(min, steppedVal)));
      }}
    >
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div style={{ width: `${percentage}%` }} className="h-full bg-indigo-600 transition-all" />
      </div>
      <div
        role="slider"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        onKeyDown={handleKeyDown}
        style={{ left: `${percentage}%` }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
```

### M6.7 Production WCAG 2.2 AA Accessibility Audit Protocol

Every customer-facing page must pass four verification tests before merging into production:

1. **Color Contrast Thresholds**:
   * Normal Text (< 18pt): Minimum **4.5:1** contrast ratio against background.
   * Large Text (>= 18pt or 14pt bold): Minimum **3.0:1** contrast ratio.
   * Interactive UI Controls & Focus Rings: Minimum **3.0:1** contrast against adjacent backgrounds.
2. **Keyboard Traversal**:
   * Every interactive element must be reachable via `Tab` key.
   * Focus outlines must never be hidden (`outline: none` without replacement is strictly forbidden).
   * Modals and dropdowns must trap focus until dismissed with the `Escape` key.
3. **Screen Reader Live Announcements**:
   * Asynchronous validation errors must be announced via `aria-live="assertive"`.
   * Non-critical status updates (e.g. "Draft auto-saved") must use `aria-live="polite"`.
4. **Automated CI Accessibility Verification**:
   * Execute Playwright with `@axe-core/playwright` scanning all routes in automated GitHub Actions pull requests.

### M6.8 Storybook & Component-Driven Development (CSF 3)

Storybook isolates UI component logic, accessibility testing, and visual regression from backend databases.

```tsx
// components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Enterprise Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'destructive'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Deploy Application',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /deploy application/i });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'md',
    children: 'Delete Cluster',
  },
};
```

### M6.9 Accessible Floating UI Tooltip Primitive (`components/Tooltip.tsx`)

```tsx
'use client';

import React, { useState, useRef, ReactNode, useId } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  content: string;
  children: ReactNode;
  delayMs?: number;
}

export function Tooltip({ content, children, delayMs = 300 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setCoords({
          top: rect.top - 8 + window.scrollY,
          left: rect.left + rect.width / 2 + window.scrollX,
        });
        setIsVisible(true);
      }
    }, delayMs);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={isVisible ? tooltipId : undefined}
        className="inline-block cursor-help"
      >
        {children}
      </span>

      {isVisible &&
        createPortal(
          <div
            id={tooltipId}
            role="tooltip"
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              transform: 'translate(-50%, -100%)',
            }}
            className="fixed z-50 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 border border-slate-700 rounded-md shadow-xl pointer-events-none transition-opacity animate-in fade-in zoom-in-95 duration-150"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
          </div>,
          document.body
        )}
    </>
  );
}
```

### M6.10 Accessible WAI-ARIA APG Data Grid Component

```tsx
'use client';

import React, { useState } from 'react';

interface RowData {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function AccessibleDataGrid({ data }: { data: RowData[] }) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelectAll = (checked: boolean) => {
    if (checked) setSelectedIds(new Set(data.map((d) => d.id)));
    else setSelectedIds(new Set());
  };

  const toggleSelectRow = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  return (
    <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
      <table role="grid" aria-label="Team Members Grid" className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-sm">
        <thead className="bg-slate-50 dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-200">
          <tr role="row">
            <th role="columnheader" className="p-4 w-10">
              <input
                type="checkbox"
                aria-label="Select all members"
                checked={selectedIds.size === data.length && data.length > 0}
                onChange={(e) => toggleSelectAll(e.target.checked)}
              />
            </th>
            <th role="columnheader" className="p-4">Name</th>
            <th role="columnheader" className="p-4">Email</th>
            <th role="columnheader" className="p-4">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950">
          {data.map((row) => {
            const isSelected = selectedIds.has(row.id);
            return (
              <tr
                key={row.id}
                role="row"
                aria-selected={isSelected}
                onClick={() => toggleSelectRow(row.id)}
                className={`cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 ${isSelected ? 'bg-indigo-50/40 dark:bg-indigo-950/20' : ''}`}
              >
                <td role="gridcell" className="p-4" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    aria-label={`Select ${row.name}`}
                    checked={isSelected}
                    onChange={() => toggleSelectRow(row.id)}
                  />
                </td>
                <td role="gridcell" className="p-4 font-medium">{row.name}</td>
                <td role="gridcell" className="p-4 text-slate-500">{row.email}</td>
                <td role="gridcell" className="p-4">
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {row.role}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M7. Masterclass: Production Subsystems: AI, Payments, Jobs, Realtime and Uploads

The integrations most products add after launch: streaming LLM responses and tool calling, Stripe Checkout, subscriptions and idempotent webhooks, durable background jobs, WebSockets and Server-Sent Events, transactional email, resumable uploads and consent-aware analytics.

### M7.1 Production Enterprise Subsystems: AI, Payments, Background Jobs & Storage

#### Vercel AI SDK & Streaming LLM Architecture
Modern enterprise applications integrate generative AI models with streaming responses, tool calling, and Retrieval-Augmented Generation (RAG).

```mermaid
graph LR
    UserPrompt["User Prompt"] --> NextEdge["Next.js Edge Route Handler"]
    NextEdge --> Embed["Generate Vector Embeddings"]
    Embed --> VectorDB["pgvector / Pinecone Similarity Search"]
    VectorDB --> Augment["Augment Context with Retrieved Documents"]
    Augment --> LLMStream["Stream tokens from OpenAI / Gemini / Claude via AI SDK"]
    LLMStream --> ClientStream["useChat() streams markdown into UI in real-time"]
```

##### Streaming AI Chatbot Route Handler (`app/api/chat/route.ts`)
```ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge'; // Ultra-low latency edge streaming

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are an expert full-stack TypeScript and Next.js architectural assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}
```

#### Stripe Payments & Secure Webhook Signature Verification
Handling e-commerce checkouts requires zero-trust webhook signature verification to prevent replay attacks and fraudulent fulfillment.

```mermaid
graph TD
    UserPay["User submits payment via Stripe Elements"] --> StripeServer["Stripe verifies card and charges customer"]
    StripeServer -->|"POST /api/webhooks/stripe"| WebhookRoute["Route Handler receives event"]
    WebhookRoute --> VerifySig["stripe.webhooks.constructEvent() using STRIPE_WEBHOOK_SECRET"]
    VerifySig -->|"Valid Signature"| Fulfill["Fulfill order, create invoice & provision licenses in DB"]
    VerifySig -->|"Invalid Signature"| Reject["400 Bad Request (Attack Blocked)"]
```

##### Secure Stripe Webhook Route Handler (`app/api/webhooks/stripe/route.ts`)
```ts
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-01-27.acacia' as any });

export async function POST(req: Request) {
  const body = await req.text(); // Must read raw text for signature verification!
  const headerList = await headers();
  const signature = headerList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerId = session.customer as string;
      // Fulfill subscription or order in database...
      console.log(`Payment confirmed for customer ${customerId}`);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      // Revoke customer access in database...
      break;
    }
  }

  return NextResponse.json({ received: true });
}
```

#### Enterprise Background Jobs with Inngest
Serverless functions have strict timeout limits (15-30s). Complex workflows (e.g. sending bulk emails, generating PDF reports, video transcoding) must run in durable asynchronous background workers.

```ts
// inngest/functions.ts
import { inngest } from './client';

export const sendWeeklyDigestEmail = inngest.createFunction(
  { id: 'send-weekly-digest' },
  { event: 'report/generate.weekly' },
  async ({ event, step }) => {
    // Step 1: Query large dataset with automatic retries on transient errors
    const reportData = await step.run('query-database-metrics', async () => {
      return await db.metrics.aggregateForUser(event.data.userId);
    });

    // Step 2: Sleep for scheduled delay without consuming server execution seconds!
    await step.sleep('wait-for-morning', '8h');

    // Step 3: Dispatch email via Resend
    await step.run('dispatch-email', async () => {
      await resend.emails.send({
        to: event.data.email,
        subject: 'Your Weekly Performance Digest',
        text: `Here are your weekly metrics: ${JSON.stringify(reportData)}`,
      });
    });

    return { status: 'completed' };
  }
);
```

#### Direct-to-S3 File Uploads via Presigned URLs
Uploading files through serverless Next.js functions incurs memory overhead and bandwidth limits. Instead, the server generates a cryptographically signed Amazon S3 / Cloudflare R2 URL, allowing the client browser to upload directly to object storage.

```mermaid
graph LR
    Client["Browser Client"] -->|"1. GET /api/upload/presign"| NextAPI["Next.js Server: Verifies auth & generates AWS S3 Presigned URL"]
    NextAPI -->|"2. Returns Signed S3 Upload URL"| Client
    Client -->|"3. PUT /object directly to AWS S3 bucket"| S3Bucket["Amazon S3 / Cloudflare R2 (Bypasses server completely!)"]
```

```ts
// app/api/upload/presign/route.ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const { filename, fileType } = await req.json();

  const fileKey = `uploads/${crypto.randomUUID()}-${filename}`;
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileKey,
    ContentType: fileType,
  });

  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 }); // Valid for 5 minutes

  return NextResponse.json({ uploadUrl, fileKey });
}
```

### M7.2 Enterprise Realtime Architecture: WebSockets & Server-Sent Events (SSE)

```mermaid
graph LR
    subgraph "Server-Sent Events (SSE) - Unidirectional Stream"
        NextEdge["Next.js Route Handler"] -->|"Text Stream (text/event-stream)"| SSEClient["Browser EventSource (Auto-reconnecting)"]
    end
    subgraph "WebSockets - Bidirectional Full-Duplex"
        WSClient["Browser WebSocket"] <-->|"Binary / JSON Frames"| WSServer["Dedicated WebSocket Gateway / Socket.IO Node"]
    end
```

#### Production SSE Route Handler with Heartbeats (`app/api/stream/route.ts`)
```ts
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(req: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // 1. Send initial connection confirmation
      controller.enqueue(encoder.encode('event: connected\ndata: {"status":"active"}\n\n'));

      // 2. Periodic heartbeat ping to prevent proxy connection timeout
      const heartbeatInterval = setInterval(() => {
        controller.enqueue(encoder.encode(': heartbeat\n\n'));
      }, 15000);

      // 3. Broadcast real-time message handler
      const messageHandler = (data: any) => {
        controller.enqueue(encoder.encode(`event: update\ndata: ${JSON.stringify(data)}\n\n`));
      };

      // Cleanup on client disconnection
      req.signal.addEventListener('abort', () => {
        clearInterval(heartbeatInterval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
```

### M7.3 Transactional Emails with React Email & Resend

Writing raw HTML email tables is painful and prone to rendering bugs across Gmail and Outlook. **React Email** compiles React components into email-client-safe HTML tables:

```tsx
// emails/WelcomeEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Button,
} from '@react-email/components';
import * as React from 'react';

export function WelcomeEmail({ userName }: { userName: string }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the Next.js 16 Masterclass Platform</Preview>
      <Body style={{ backgroundColor: '#f8fafc', fontFamily: 'sans-serif', padding: '40px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '8px' }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Hello {userName},</Text>
          <Text style={{ color: '#475569', lineHeight: '1.6' }}>
            Thank you for joining our flagship enterprise platform. Your account is ready.
          </Text>
          <Button
            href="https://platform.enterprise.com/dashboard"
            style={{
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Launch Dashboard →
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
```

### M7.4 Full-Stack Payments & Subscriptions: Stripe Checkout & Webhook Idempotency

```ts
// app/api/checkout/session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServerSession } from '@/lib/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-01-27.acacia' as any });

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { priceId } = await req.json();

  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: session.email,
    client_reference_id: session.userId,
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
    metadata: {
      userId: session.userId,
    },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
```

### M7.5 Full-Stack AI & LLM Systems: Vercel AI SDK with Structured Tool Calling

```tsx
// app/api/ai/agent/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are an enterprise support copilot with access to live order data.',
    messages,
    tools: {
      lookupOrder: tool({
        description: 'Look up real-time shipping status for a specific customer order ID',
        parameters: z.object({
          orderId: z.string().describe('The alphanumeric order identifier (e.g. ORD-1234)'),
        }),
        execute: async ({ orderId }) => {
          // Simulated order lookup
          return { orderId, status: 'Shipped', carrier: 'FedEx', trackingNumber: '9876543210' };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

### M7.6 Privacy-First Analytics & GDPR/CCPA Consent Management Engine

```tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentStatus = 'granted' | 'denied' | 'pending';

interface ConsentContextType {
  consent: ConsentStatus;
  grantConsent: () => void;
  denyConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentStatus>('pending');

  useEffect(() => {
    const stored = localStorage.getItem('gdpr_consent') as ConsentStatus | null;
    if (stored) setConsent(stored);
  }, []);

  const grantConsent = () => {
    localStorage.setItem('gdpr_consent', 'granted');
    setConsent('granted');
    // Enable tracking scripts dynamically
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.opt_in_capturing();
    }
  };

  const denyConsent = () => {
    localStorage.setItem('gdpr_consent', 'denied');
    setConsent('denied');
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.opt_out_capturing();
    }
  };

  return (
    <ConsentContext.Provider value={{ consent, grantConsent, denyConsent }}>
      {children}
      {consent === 'pending' && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl space-y-4"
        >
          <h4 className="font-bold text-base">Privacy & Cookie Choices</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            We use cookies to analyze site traffic and enhance our developer services. In compliance with GDPR and CCPA, you may choose to opt in or opt out.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={denyConsent}
              className="px-3 py-1.5 text-xs font-semibold border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Decline Optional
            </button>
            <button
              onClick={grantConsent}
              className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              Accept All
            </button>
          </div>
        </aside>
      )}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be within CookieConsentProvider');
  return ctx;
};
```

### M7.7 BullMQ Distributed Background Worker Process (`workers/email.worker.ts`)

```ts
import { Worker, Queue, Job } from 'bullmq';
import { Redis } from 'ioredis';

const connection = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

export const emailQueue = new Queue('email-queue', { connection });

// Production BullMQ Worker with Concurrency Tuning & Dead-Letter Handling
export const emailWorker = new Worker(
  'email-queue',
  async (job: Job<{ to: string; subject: string; template: string }>) => {
    console.log(`Processing job ${job.id} on attempt ${job.attemptsMade + 1}`);

    // Call transactional email provider (Resend / SendGrid)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'alerts@enterprise.com',
        to: job.data.to,
        subject: job.data.subject,
        html: `<p>${job.data.template}</p>`,
      }),
    });

    if (!res.ok) {
      throw new Error(`Email provider error: ${res.statusText}`);
    }

    return { sentAt: new Date().toISOString() };
  },
  {
    connection,
    concurrency: 10, // Process 10 concurrent jobs per worker process
    limiter: {
      max: 100,      // Rate limiting: Max 100 emails per 10 seconds
      duration: 10000,
    },
  }
);

emailWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed permanently after max retries:`, err);
  // Pipe to dead-letter queue or alert on-call engineer via PagerDuty...
});
```

### M7.8 Stripe Subscriptions & Customer Portal Full Lifecycle Engine

Managing SaaS billing requires orchestrating plan changes, proration, customer portal redirects, and webhook synchronization.

```mermaid
graph LR
    User["Customer / Dashboard"] --> PortalAction["POST /api/billing/portal"]
    PortalAction --> StripePortal["Stripe Customer Portal (Self-Service Credit Card & Plan Switch)"]
    StripePortal --> Webhook["Stripe Webhook: customer.subscription.updated"]
    Webhook --> DBUpdate["Update User Subscription Tier & Seat Count in PostgreSQL"]
```

#### Customer Portal Redirection Route Handler (`app/api/billing/portal/route.ts`)
```ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServerSession } from '@/lib/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-01-27.acacia' as any });

export async function POST() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.userId),
  });

  if (!user || !(user as any).stripeCustomerId) {
    return NextResponse.json({ error: 'No active Stripe customer found' }, { status: 400 });
  }

  // Generate self-service billing portal session
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: (user as any).stripeCustomerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings/billing`,
  });

  return NextResponse.json({ url: portalSession.url });
}
```

### M7.9 Client-Side Image Pre-Processing & Chunked Resumable Uploads

Before uploading multi-megabyte images to cloud storage, compressing and cropping on the client browser saves bandwidth and reduces cloud storage bills:

```tsx
'use client';

import React, { useState, useRef } from 'react';

export function ClientImageCompressor({ onReady }: { onReady: (blob: Blob) => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxDim = 1200;
      let { width, height } = img;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);

      // Convert to WebP with 85% quality compression
      canvas.toBlob(
        (blob) => {
          if (blob) {
            setPreview(URL.createObjectURL(blob));
            onReady(blob);
          }
        },
        'image/webp',
        0.85
      );
    };
  };

  return (
    <div className="space-y-4">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="block text-sm text-slate-500" />
      {preview && (
        <div className="relative w-48 h-48 rounded-xl overflow-hidden border shadow-md">
          <img src={preview} alt="Compressed preview" className="object-cover w-full h-full" />
        </div>
      )}
    </div>
  );
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M8. Masterclass: Testing, DevOps, Docker and Observability

A complete testing pyramid, hardened container images, OpenTelemetry tracing, the full `next.config.ts` reference, Nginx and HTTP/3 in front of Next.js, Lighthouse CI, incident runbooks, cost tuning, launch checklists and team conventions.

### M8.1 Testing Pyramid, DevOps, Production Docker & Observability Architecture

#### Enterprise Full-Stack Testing Pyramid
Testing in full-stack Next.js applications covers isolated unit logic, asynchronous Server Action mutations, and cross-browser End-to-End user journeys.

```mermaid
graph TD
    E2E["Playwright E2E Tests (10%) - Auth, Payments, Critical User Journeys"] --> Integration["Integration Tests (40%) - Server Actions, Route Handlers, Database Transactions"]
    Integration --> Unit["Unit & Component Tests (50%) - React Testing Library, Hooks, Pure Utilities"]
```

##### Complete Integration Test for Server Actions using Vitest & Testing Library
```tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updateTeamAction } from '@/actions/teams';

// Mock headers and cookies from next/headers
vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue(new Map([['host', 'app.internal'], ['origin', 'https://app.internal']])),
  cookies: vi.fn().mockResolvedValue({
    get: vi.fn().mockReturnValue({ value: 'mock-valid-session-token' }),
  }),
}));

vi.mock('next/cache', () => ({
  revalidateTag: vi.fn(),
}));

describe('updateTeamAction Server Action Integration', () => {
  it('rejects update when team name is too short', async () => {
    const formData = new FormData();
    formData.set('teamId', '00000000-0000-0000-0000-000000000000');
    formData.set('teamName', 'A'); // Invalid (< 2 chars)

    const result = await updateTeamAction(null, formData);

    expect(result.success).toBe(false);
    expect(result.errors?.teamName).toBeDefined();
  });

  it('successfully executes update on valid parameters', async () => {
    const formData = new FormData();
    formData.set('teamId', '11111111-1111-1111-1111-111111111111');
    formData.set('teamName', 'Alpha Engineering Team');

    const result = await updateTeamAction(null, formData);

    expect(result.success).toBe(true);
    expect(result.message).toContain('successfully updated');
  });
});
```

#### Hardened Multi-Stage Dockerfile with Non-Root Security
```dockerfile
# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# 1. Dependencies Stage
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# 2. Builder Stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# 3. Lean Runner Stage
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Security: Create and switch to non-privileged service user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# Automatically leverages Next.js standalone output to reduce container image to <150MB
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3   CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
```

#### OpenTelemetry & Distributed Tracing (`instrumentation.ts`)
Next.js provides native hooks into the OpenTelemetry standard, tracing HTTP requests from browser clicks down through Server Actions, Route Handlers, and database queries.

```ts
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node');
    const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http');
    const { Resource } = await import('@opentelemetry/resources');
    const { SEMRESATTRS_SERVICE_NAME } = await import('@opentelemetry/semantic-conventions');

    const sdk = new NodeSDK({
      resource: new Resource({
        [SEMRESATTRS_SERVICE_NAME]: 'nextjs-enterprise-backend',
      }),
      traceExporter: new OTLPTraceExporter({
        url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
      }),
    });

    sdk.start();
  }
}
```

#### Complete `next.config.ts` Master Configuration Reference
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Essential for lean Docker containers
  reactStrictMode: true,
  poweredByHeader: false, // Security: Removes X-Powered-By header
  compress: true,         // Enable Gzip/Brotli compression

  cacheComponents: true, // replaces experimental.ppr in Next.js 16
  reactCompiler: true,   // stable top-level option since 16.0

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.enterprise.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### M8.2 Production Nginx Reverse Proxy with Brotli, HTTP/2 & SSL Hardening

```nginx
# /etc/nginx/conf.d/enterprise-nextjs.conf
upstream nextjs_upstream {
    server 127.0.0.1:3000 max_fails=3 fail_timeout=10s;
    keepalive 64;
}

server {
    listen 443 ssl http2;
    server_name platform.enterprise.com;

    ssl_certificate /etc/letsencrypt/live/platform.enterprise.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/platform.enterprise.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Brotli & Gzip Compression
    brotli on;
    brotli_comp_level 6;
    brotli_types text/plain text/css application/javascript application/json image/svg+xml;

    # Static Asset Caching (Immutable Next.js Chunks)
    location /_next/static/ {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Dynamic Application Route Proxy
    location / {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### M8.3 Full-Stack Observability: OpenTelemetry, Sentry & Custom RUM Metrics

Enterprise production systems pipe client vitals, server errors, and database traces into unified observability backends.

```mermaid
graph TD
    Client["Client Browser"] -->|"Web Vitals Beacon"| VitalsEndpoint["/api/telemetry/vitals Route Handler"]
    VitalsEndpoint --> Datadog["Datadog / Prometheus / CloudWatch Dashboard"]
    Server["Next.js Server Process"] -->|"OpenTelemetry OTLP"| Jaeger["Jaeger Distributed Tracing"]
    Server -->|"Unhandled Exceptions"| Sentry["Sentry Error Tracking"]
```

#### Custom Real User Monitoring (RUM) Telemetry Beacon (`lib/vitals.ts`)
```ts
import { onCLS, onINP, onLCP, onTTFB, onFCP, Metric } from 'web-vitals';

function sendBeaconMetric(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    url: window.location.href,
    timestamp: Date.now(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/telemetry/vitals', body);
  } else {
    fetch('/api/telemetry/vitals', {
      method: 'POST',
      body,
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export function registerClientWebVitals() {
  onCLS(sendBeaconMetric);
  onINP(sendBeaconMetric);
  onLCP(sendBeaconMetric);
  onTTFB(sendBeaconMetric);
  onFCP(sendBeaconMetric);
}
```

### M8.4 Enterprise End-to-End Testing with Playwright & Automated Accessibility

```ts
// tests/e2e/auth-flow.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Enterprise Authentication & Accessibility Journey', () => {
  test('should satisfy WCAG 2.2 AA accessibility requirements on login view', async ({ page }) => {
    await page.goto('/login');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should validate input errors and authenticate user session', async ({ page }) => {
    await page.goto('/login');

    // 1. Submit empty form to trigger validation
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Email is required')).toBeVisible();

    // 2. Fill credentials
    await page.fill('input[name="email"]', 'staff.engineer@enterprise.com');
    await page.fill('input[name="password"]', 'CorrectHorseBatteryStaple123!');
    await page.click('button[type="submit"]');

    // 3. Verify session redirection to /dashboard
    await page.waitForURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Executive Overview');

    // 4. Verify HttpOnly auth_session cookie presence
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find((c) => c.name === 'auth_session');
    expect(sessionCookie).toBeDefined();
    expect(sessionCookie?.httpOnly).toBe(true);
    expect(sessionCookie?.secure).toBe(true);
    expect(sessionCookie?.sameSite).toBe('Strict');
  });
});
```

### M8.5 Comprehensive Testing Suite: Custom Hooks & Server Route Handlers

#### 1. Unit Testing Custom Hooks with Vitest & `renderHook`
```tsx
// tests/hooks/useDebounce.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useDebounce } from '@/hooks/useDebounce';

describe('useDebounce Custom Hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should debounce value updates across time window', () => {
    let value = 'step-1';
    const { result, rerender } = renderHook(() => useDebounce(value, 500));

    expect(result.current).toBe('step-1');

    // Update prop
    value = 'step-2';
    rerender();
    expect(result.current).toBe('step-1'); // Not updated yet!

    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('step-1'); // Still waiting...

    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('step-2'); // Settled!
  });
});
```

#### 2. Testing Next.js Route Handlers (`app/api/products/route.ts`)
```tsx
import { describe, it, expect, vi } from 'vitest';
import { GET, POST } from '@/app/api/products/route';

describe('Products API Route Handlers', () => {
  it('GET should return list of products with cache headers', async () => {
    const req = new Request('http://localhost:3000/api/products');
    const res = await GET(req);

    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('application/json');

    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
  });

  it('POST should reject payloads missing required fields', async () => {
    const req = new Request('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '' }), // Missing price and SKU
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const error = await res.json();
    expect(error.errors).toBeDefined();
  });
});
```

### M8.6 Exhaustive `next.config.ts` Master API Reference

```ts
import type { NextConfig } from 'next';

const masterNextConfig: NextConfig = {
  // 1. Output & Directory Paths
  output: 'standalone',       // Builds standalone executable folder for Docker
  distDir: '.next',           // Build output directory
  basePath: '',               // Sub-path prefix for enterprise reverse proxies (e.g. '/app')
  assetPrefix: '',            // Custom CDN host for static assets (e.g. 'https://cdn.enterprise.com')
  trailingSlash: false,       // Enforce strict URL trailing slashes

  // 2. React Runtime Rules
  reactStrictMode: true,      // Double-renders in dev to catch side-effects
  poweredByHeader: false,     // Security: Strips 'X-Powered-By: Next.js' header
  compress: true,             // Enables native Gzip/Brotli compression

  // 3. Rendering features (stable top-level options in Next.js 16)
  cacheComponents: true,      // Partial Prerendering and "use cache"
  reactCompiler: true,        // React Compiler 1.0; needs babel-plugin-react-compiler
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',  // Maximum payload size for Server Actions file uploads
      allowedOrigins: ['app.enterprise.com', 'admin.enterprise.com'],
    },
  },

  // 4. Image Optimization Engine
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.enterprise.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 5. URL Rewrites & Redirects
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://backend-api.internal/:path*', // Reverse proxy to internal microservices
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/legacy-dashboard',
        destination: '/dashboard',
        permanent: true, // HTTP 301 Moved Permanently
      },
    ];
  },

  // 6. Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default masterNextConfig;
```

### M8.7 Complete Production `docker-compose.yml` Infrastructure Stack

Running enterprise full-stack Next.js applications locally with parity to cloud production environments requires orchestrating Next.js, PostgreSQL with pgvector, PgBouncer, Redis, MinIO (S3 emulation), and Mailpit:

```yaml
# docker-compose.production.yml
version: '3.9'

services:
  # 1. Next.js 16 Standalone Web Application
  nextjs_app:
    build:
      context: .
      dockerfile: Dockerfile
      target: runner
    container_name: nextjs_production_runner
    restart: always
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:SecretPassword123@pgbouncer:6432/enterprise_db?pgbouncer=true
      - REDIS_URL=redis://redis:6379
      - S3_ENDPOINT=http://minio:9000
      - NEXTAUTH_URL=https://platform.enterprise.com
      - NEXTAUTH_SECRET=SuperSecretCryptographicKey32BytesLong!
    ports:
      - '3000:3000'
    depends_on:
      pgbouncer:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - enterprise_mesh

  # 2. PostgreSQL 16 with pgvector Extension
  postgres_db:
    image: pgvector/pgvector:pg16
    container_name: enterprise_postgres_master
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=SecretPassword123
      - POSTGRES_DB=enterprise_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - enterprise_mesh

  # 3. PgBouncer Connection Pooler (Transaction Pooling)
  pgbouncer:
    image: edoburu/pgbouncer:latest
    container_name: enterprise_pgbouncer
    restart: always
    environment:
      - DB_USER=postgres
      - DB_PASSWORD=SecretPassword123
      - DB_HOST=postgres_db
      - DB_PORT=5432
      - DB_NAME=enterprise_db
      - POOL_MODE=transaction
      - MAX_CLIENT_CONN=5000
      - DEFAULT_POOL_SIZE=25
    ports:
      - '6432:6432'
    healthcheck:
      test: ["CMD", "nc", "-z", "127.0.0.1", "6432"]
      interval: 10s
      timeout: 3s
      retries: 3
    depends_on:
      postgres_db:
        condition: service_healthy
    networks:
      - enterprise_mesh

  # 4. Redis In-Memory Cache & Job Queue
  redis:
    image: redis:7.2-alpine
    container_name: enterprise_redis
    restart: always
    command: redis-server --appendonly yes --requirepass RedisSecretAuthPass123
    volumes:
      - redisdata:/data
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "RedisSecretAuthPass123", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3
    networks:
      - enterprise_mesh

  # 5. MinIO S3-Compatible Object Storage
  minio:
    image: minio/minio:latest
    container_name: enterprise_minio_s3
    restart: always
    command: server /data --console-address ":9001"
    environment:
      - MINIO_ROOT_USER=EnterpriseAdminKey
      - MINIO_ROOT_PASSWORD=EnterpriseSecretPassword123
    volumes:
      - miniodata:/data
    ports:
      - '9000:9000'
      - '9001:9001'
    networks:
      - enterprise_mesh

networks:
  enterprise_mesh:
    driver: bridge

volumes:
  pgdata:
  redisdata:
  miniodata:
```

### M8.8 Automated Lighthouse CI Quality Gate (`lighthouserc.js`)

Enforce performance, accessibility, SEO, and security budgets in continuous integration before merging code into main:

```javascript
// lighthouserc.js - Automated CI Performance Quality Gate
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/', 'http://localhost:3000/dashboard'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Enforce strict scores
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1.0 }], // Zero a11y regressions allowed!
        'categories:best-practices': ['error', { minScore: 1.0 }],
        'categories:seo': ['error', { minScore: 1.0 }],

        // Core Web Vitals Strict Metric Thresholds
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'interaction-to-next-paint': ['error', { maxNumericValue: 200 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### M8.9 Production Incident Response Runbook & Post-Mortem Template

#### Incident Severity Levels

| Severity | Definition | Target MTTA (Acknowledge) | Target MTTR (Resolve) | Escalation Channel |
| :--- | :--- | :--- | :--- | :--- |
| **SEV-1** (Critical) | Complete site outage, data loss risk, checkout completely offline. | **< 5 minutes** | **< 30 minutes** | PagerDuty On-Call + Exec Slack War Room |
| **SEV-2** (Major) | Degraded performance (INP > 500ms), 5% error rates, partial feature outage. | **< 15 minutes** | **< 2 hours** | DevOps Alert Slack Channel |
| **SEV-3** (Minor) | Cosmetic UI defect, non-critical background worker latency. | **< 1 business day**| **< 3 business days** | Jira Bug Tracker |

#### Production Incident Post-Mortem Template
```markdown
# Incident Post-Mortem: [INCIDENT-ID] - [Incident Title]
**Date**: 2026-09-21  
**Incident Commander**: Staff Full-Stack Lead  
**Severity**: SEV-1  
**Total Downtime**: 14 minutes  

## 1. Executive Summary
Between 14:02 UTC and 14:16 UTC, incoming traffic to the enterprise checkout route suffered from HTTP 500 errors. The root cause was an un-pooled serverless database connection spike exhausting PostgreSQL's max_connections limit following a marketing email campaign.

## 2. Root Cause Analysis (5 Whys)
1. **Why did checkout fail?** Server Actions threw "connection limit exceeded" errors.
2. **Why was connection limit exceeded?** 1,200 concurrent serverless function instances connected directly to PostgreSQL.
3. **Why did they connect directly?** The `DATABASE_URL` environment variable pointed directly to port 5432 instead of PgBouncer on port 6432.
4. **Why was it pointing to 5432?** A recent pull request updated the database connection string without the `?pgbouncer=true` parameter.
5. **Why did CI not catch this?** Integration tests ran against local SQLite rather than containerized PostgreSQL with connection constraints.

## 3. Corrective Action Items
- [ ] Enforce PgBouncer URL validation in `env.mjs` schema (Owner: DevOps, Due: 2026-09-23).
- [ ] Update CI test suites to run against containerized PgBouncer with 20-connection artificial ceiling (Owner: QA, Due: 2026-09-24).
- [ ] Set up automated Datadog alert triggering at 80% database connection saturation (Owner: SRE, Due: 2026-09-22).
```

### M8.10 Production Serverless Cost Optimization & Resource Tuning

Deploying full-stack Next.js at scale requires tuning image cache TTLs, edge functions, and database connection pooling to avoid unexpected billing spikes:

1. **Optimize `next/image` Transformation Bills**:
   * Set `minimumCacheTTL: 2592000` (30 days) in `next.config.ts` so transformed AVIF/WebP images are not continuously re-computed.
   * Restrict `deviceSizes` and `imageSizes` to only the 4 viewports used by your application.
2. **Eliminate Unnecessary Proxy Invocations**:
   * Strictly configure `matcher` arrays in `proxy.ts` to exclude static assets (`/_next/static`, `/images`, `favicon.ico`).
3. **Database Connection Pool Sizing**:
   * Keep PgBouncer `default_pool_size = 20-25` to prevent CPU context switching overhead on multi-core database servers.

### M8.11 Pre-Flight Security & Reliability Quality Gate

```mermaid
graph TD
    Audit["1. Pre-Deployment Audit"] --> SecAudit["Security: Strict CSP Nonces, HttpOnly Cookies, CSRF Origin Verification"]
    Audit --> PerfAudit["Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1, Image minimumCacheTTL 30d"]
    Audit --> A11yAudit["Accessibility: WCAG 2.2 AA Contrast >= 4.5:1, Axe Core 0 Violations"]
    Audit --> RelAudit["Reliability: PgBouncer Transaction Pooling, Redis Mutex Caching, Error Sentry Active"]
    SecAudit --> Pass{"All 4 Gates Pass?"}
    PerfAudit --> Pass
    A11yAudit --> Pass
    RelAudit --> Pass
    Pass -->|"Yes"| Deploy["Promote Build to Production (Zero-Downtime Rollout)"]
    Pass -->|"No"| Block["Block Deployment in CI/CD Pipeline"]
```

#### Pre-Launch Verification Checklist

1. **Security & Identity**:
   - [ ] All session tokens stored in `HttpOnly; Secure; SameSite=Strict` cookies.
   - [ ] Strict Content-Security-Policy (CSP) with per-request dynamic nonces set in proxy.ts.
   - [ ] `Origin` header matches `Host` on all Server Action mutations to block CSRF.
   - [ ] Sensitive database credentials guarded with `import 'server-only'`.
   - [ ] Rate limiting active on authentication endpoints via Upstash Redis sliding window.

2. **Performance & Core Web Vitals**:
   - [ ] Largest Contentful Paint (LCP) < 2.5 seconds on simulated 4G mobile devices.
   - [ ] Interaction to Next Paint (INP) < 200 milliseconds across all user interactions.
   - [ ] Cumulative Layout Shift (CLS) < 0.1 with explicit image dimensions and font fallbacks.
   - [ ] Long tasks broken up with `scheduler.yield()` or offloaded to background Web Workers.
   - [ ] Partial Prerendering (PPR) enabled on high-traffic product and marketing routes.

3. **Accessibility (WCAG 2.2 AA)**:
   - [ ] Automated `@axe-core/playwright` test scan reports zero violations across all routes.
   - [ ] Keyboard focus outlines preserved; zero focus traps on unmounted elements.
   - [ ] Dialogs, modals, and drawers implement roving tabindex and dismiss on `Escape`.
   - [ ] Dynamic asynchronous error states announced via `aria-live="assertive"`.
   - [ ] Skip-to-content link present as first element inside `<body>`.

4. **Database & Infrastructure**:
   - [ ] PgBouncer connection pooler active in transaction mode (`max_client_conn = 5000`).
   - [ ] Composite indexes verified via `EXPLAIN (ANALYZE, BUFFERS)` with zero sequential scans.
   - [ ] Distributed locks (Redis Mutex) preventing cache stampedes on high-traffic keys.
   - [ ] Multi-stage Dockerfile running as non-privileged `USER nextjs` with health checks.
   - [ ] Continuous WAL archiving to S3 enabled for Point-in-Time Recovery (PITR).

### M8.12 Conventional Commit Standards

All contributions to enterprise full-stack repositories must adhere to the Conventional Commits specification:

| Commit Type | Purpose | Example |
| :--- | :--- | :--- |
| `feat` | Introduces a new feature or user-facing functionality | `feat(auth): implement webauthn passkey registration` |
| `fix` | Patches a bug or resolves an exception | `fix(cache): prevent race condition during redis mutex acquisition` |
| `docs` | Updates documentation, guides, or comments | `docs(nextjs): expand rsc flight protocol payload explanation` |
| `refactor` | Code change that neither fixes a bug nor adds a feature | `refactor(db): migrate raw sql queries to drizzle relational schema` |
| `perf` | Code change that improves performance or latency | `perf(image): configure 30-day minimumCacheTTL for avif assets` |
| `test` | Adds missing tests or corrects existing test suites | `test(e2e): add playwright axe-core accessibility verification` |
| `chore` | Build process, auxiliary tools, or dependency updates | `chore(deps): bump next from 15.2.0 to 15.2.1` |

### M8.13 Pull Request Quality Gates Checklist

```markdown
### PR Verification Checklist
- [ ] TypeScript compilation passes cleanly without errors (`npx tsc --noEmit`).
- [ ] ESLint passes with zero warnings (`npm run lint`).
- [ ] Automated Vitest unit and integration tests pass at 100% (`npm test`).
- [ ] Playwright End-to-End tests pass across Chromium, Firefox, and WebKit.
- [ ] Axe automated accessibility scan reports 0 violations (`wcag2aa`).
- [ ] Core Web Vitals thresholds satisfied (INP < 200ms, LCP < 2.5s, CLS < 0.1).
- [ ] Database schema changes accompanied by automated Drizzle/Prisma migrations.
- [ ] All new user inputs validated with strict Zod schemas on the server.
```

[Back to top ⤴️](#-table-of-contents)

---

## M9. Masterclass: Large-Scale Architecture: Monorepos, Clean Architecture, GraphQL and System Design

How large Next.js codebases are organised and how full-stack systems are designed: domain-driven folders, Turborepo, GraphQL with Server Components, hexagonal architecture, CQRS, micro-frontends, ten system design blueprints with implementations, decision matrices and engineering principles.

### M9.1 Large-Scale Architecture, Monorepos (Turborepo), Design Systems & GraphQL

#### Domain-Driven Design (DDD) & Feature-Based Architecture
Flat folder structures become unmaintainable as engineering teams grow beyond 20 developers. Organizing by feature domain encapsulates state, API queries, and UI components behind strict boundaries.

```text
src/
├── app/                       # Routing, layouts, page shells
├── features/                  # Domain feature slices
│   ├── authentication/        # Login, MFA, session management
│   │   ├── api/               # Server Actions, Route Handlers
│   │   ├── components/        # LoginForm, PasskeyPrompt
│   │   ├── hooks/             # useSession, useMfa
│   │   └── types/             # Domain TypeScript definitions
│   ├── billing/               # Stripe subscriptions, invoices
│   └── organizations/         # Multi-tenant organization switching
├── packages/ui/               # Shared headless & styled design primitives
└── lib/                       # Universal utilities, Prisma client, telemetry
```

##### Monorepo Architecture with Turborepo & pnpm Workspaces
```mermaid
graph TD
    Root["Monorepo Root (turbo.json, pnpm-workspace.yaml)"] --> Apps["apps/"]
    Apps --> WebApp["apps/web (Next.js 16 Customer Portal)"]
    Apps --> AdminApp["apps/admin (Next.js 16 Internal Dashboard)"]
    Apps --> DocsApp["apps/docs (Next.js 16 Documentation)"]
    Root --> Packages["packages/"]
    Packages --> SharedUI["packages/ui (Design System)"]
    Packages --> SharedDB["packages/database (Drizzle / Prisma Client)"]
    Packages --> SharedConfig["packages/eslint-config & tsconfig"]
    WebApp --> SharedUI
    WebApp --> SharedDB
    AdminApp --> SharedUI
    AdminApp --> SharedDB
```

#### GraphQL Architecture in Next.js Server Components
In Next.js 16, GraphQL queries can be executed directly inside asynchronous Server Components without Apollo Client bundle overhead in the browser:

```tsx
import { cache } from 'react';

// Request memoization wraps the raw GraphQL query to prevent duplicate calls per render
const fetchGraphQL = cache(async (query: string, variables: Record<string, any> = {}) => {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.INTERNAL_SERVICE_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { tags: ['graphql-data'] },
  });

  const { data, errors } = await res.json();
  if (errors) throw new Error(errors[0].message);
  return data;
});

export default async function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = await fetchGraphQL(
    `
    query GetUserProfile($id: ID!) {
      user(id: $id) {
        id
        email
        displayName
        organizations {
          id
          name
        }
      }
    }
    `,
    { id }
  );

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">{data.user.displayName}</h1>
      <p className="text-slate-500">{data.user.email}</p>
    </div>
  );
}
```

### M9.2 Enterprise Monorepo Architecture with Turborepo & pnpm Workspaces

```json
// turbo.json - Production Monorepo Pipeline Configuration
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": [".env"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### M9.3 Staff-Level System Design Blueprints & Architectural Specifications

#### System Design 1: Scalable URL Shortener with Edge Redirects (<10ms TTFB)
* **Traffic Profile**: 50,000 requests/sec read traffic, 500 writes/sec.
* **Architecture**:
  * Proxy extracts short code `/xyz123` from request URL.
  * Direct lookup in Redis Edge Cache (Upstash) serving 301 redirects with zero Node.js server invocation.
  * Asynchronous clickstream analytics event sent via `navigator.sendBeacon` or QStash message queue to ClickHouse column database for analytics dashboards.

```mermaid
graph LR
    User["Mobile / Desktop User"] --> Edge["Next.js Proxy (<10ms)"]
    Edge --> RedisEdge["Redis Edge KV (In-Memory Key/Value)"]
    RedisEdge -->|"Cache Hit (99.8%)"| Redirect["HTTP 301 Moved Permanently"]
    RedisEdge -->|"Cache Miss"| Origin["Origin Next.js Route Handler"]
    Origin --> Postgres["PostgreSQL Master DB"]
    Edge -.->|"Async Telemetry Beacon"| ClickHouse["ClickHouse Columnar Analytics"]
```

```ts
// app/[shortCode]/route.ts - Edge URL Shortener Redirect
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ shortCode: string }> }
) {
  const { shortCode } = await params;

  // 1. Direct Edge KV lookup
  const targetUrl = await redis.get<string>(`short:${shortCode}`);

  if (targetUrl) {
    // Increment click count asynchronously without blocking redirect latency
    redis.incr(`stats:clicks:${shortCode}`).catch(console.error);

    return NextResponse.redirect(new URL(targetUrl), {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    });
  }

  return NextResponse.redirect(new URL('/404', req.url));
}
```

#### System Design 2: High-Volume E-Commerce Platform with PPR & Stripe
* **Key Components**:
  * Static Product Shell with Sub-50ms TTFB via Edge CDN.
  * Dynamic Cart & Live Inventory Hole via Streaming Suspense.
  * Server Actions with Zod validation for 0-JS progressive enhancement checkout.
  * Stripe Checkout Session creation with Webhook idempotency table.

```mermaid
graph TD
    UserReq["User lands on /product/macbook-pro"] --> EdgeCDN["Edge CDN serves static HTML shell"]
    EdgeCDN --> SuspenseHole["Suspense Boundary: Evaluates live stock in parallel"]
    SuspenseHole --> LiveStock["Live inventory count streams into page"]
    UserReq --> Checkout["User clicks 'Buy Now'"]
    Checkout --> ServerAction["Server Action validates stock and creates Stripe Session"]
    ServerAction --> StripeIframe["Redirect to Stripe Checkout"]
    StripeIframe --> Webhook["Stripe Webhook confirms payment"]
    Webhook --> DBOrder["Insert order & reduce inventory in single DB transaction"]
```

#### System Design 3: Multi-Tenant Enterprise SaaS with Dynamic Subdomains & RLS
* **Architecture Highlights**:
  * Wildcard DNS `*.enterprise.com` routed to Next.js.
  * Proxy rewrites subdomain `acme.enterprise.com/billing` to `/tenants/acme/billing`.
  * Drizzle ORM client automatically sets PostgreSQL session configuration for Row-Level Security:
    ```sql
    SET LOCAL app.current_tenant_id = 'acme-uuid';
    ```

```tsx
// lib/db/tenant.ts - Multi-tenant Drizzle DB Context Wrapper
import { db } from './index';
import { sql } from 'drizzle-orm';

export async function withTenant<T>(tenantId: string, queryFn: () => Promise<T>): Promise<T> {
  return await db.transaction(async (tx) => {
    // Set transaction-local tenant identifier for PostgreSQL Row Level Security (RLS)
    await tx.execute(sql`SELECT set_config('app.current_tenant_id', ${tenantId}, true)`);
    return await queryFn();
  });
}
```

#### System Design 4: Real-Time Collaborative Canvas with CRDTs (Yjs)
* **Problem**: Concurrent edits from 50 users on a single canvas cause merge conflicts and drawing flicker.
* **Architecture**:
  * Conflict-Free Replicated Data Types (CRDTs) mathematically guarantee deterministic merging.
  * WebRTC peer-to-peer data channels for sub-30ms latency between active collaborators.
  * WebSocket fallback gateway syncing state to PostgreSQL binary byte arrays for cold-start rehydration.

#### System Design 5: Enterprise Distributed Notification Engine
* **Architecture**:
  * Inngest / BullMQ priority queues (`high`, `normal`, `batch`).
  * Cross-browser tab deduplication via `BroadcastChannel`.
  * Multi-channel dispatch: Push API, WebSockets, Resend transactional emails, Twilio SMS.

#### System Design 6: Distributed AI Knowledge Assistant with pgvector
```tsx
// app/api/rag/search/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sql } from 'drizzle-orm';
import { openai } from '@ai-sdk/openai';
import { embed } from 'ai';

export async function POST(req: Request) {
  const { query, organizationId } = await req.json();

  // 1. Generate query embedding vector
  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: query,
  });

  // 2. Perform Cosine Similarity Vector Search in PostgreSQL 16
  const matchedDocuments = await db.execute(sql`
    SELECT id, title, content, 1 - (embedding <=> ${JSON.stringify(embedding)}::vector) AS similarity
    FROM documents
    WHERE organization_id = ${organizationId}
    ORDER BY similarity DESC
    LIMIT 5;
  `);

  return NextResponse.json({ documents: matchedDocuments.rows });
}
```

#### System Design 7: Digital Asset Management (DAM) with Presigned Uploads
* Multi-part S3 direct uploads with chunked retry on network dropouts.
* Client-side WebAssembly image compression (reducing upload bandwidth by 65%).
* Async processing via AWS Lambda / SQS generating responsive thumbnails and EXIF metadata.

#### System Design 8: Real-Time Omnichannel Customer Support Hub
* Bidirectional chat interface using Server-Sent Events (SSE) and Route Handlers.
* Web Audio API synthesizing alert chimes on incoming tickets.
* Agent presence tracking in Redis with 10-second TTL heartbeats.

#### System Design 9: High-Throughput Social Feed with Infinite Virtualization
* Bi-directional DOM virtualization recycling list elements (`@tanstack/react-virtual`).
* Intercepting Route modals masking URL transitions (`/feed` -> `/photo/42`) without unmounting feed scroll state.
* Stale-While-Revalidate caching with TanStack Query v5.

#### System Design 10: Role-Based Admin Analytics with 100,000-Row Grid
* Fixed headers and sticky left/right action columns via CSS Subgrid.
* Offloading CSV/Parquet file export generation to a Web Worker thread to prevent UI freezing.
* Fine-grained column permission gates checking user RBAC credentials.

### M9.4 Enterprise Full-Stack Clean Architecture, CQRS & Micro-Frontends

#### Clean Architecture (Hexagonal / Ports & Adapters) in Next.js 16
Clean architecture decouples core business logic from frameworks, UI libraries, and databases, allowing teams to swap PostgreSQL for MongoDB or Next.js for Fastify without modifying domain use cases.

```mermaid
graph TD
    UI["Presentation Layer: Next.js App Router (Server Components & Actions)"] --> UseCases["Application Layer: Use Cases (CreateOrder, CancelSubscription)"]
    UseCases --> Domain["Domain Layer: Pure Entities & Business Rules (Order, User)"]
    UseCases --> Ports["Ports (Interfaces): IOrderRepository, IPaymentGateway, INotificationService"]
    Infrastructure["Infrastructure Layer: Prisma/Drizzle Adapter, Stripe Adapter, Resend Adapter"] --> Ports
```

##### Pure Domain Entity (`src/domain/entities/Order.ts`)
```ts
export class Order {
  constructor(
    public readonly id: string,
    public readonly customerId: string,
    public readonly totalAmount: number,
    public status: 'pending' | 'paid' | 'shipped' | 'cancelled',
    public readonly createdAt: Date = new Date()
  ) {
    if (totalAmount <= 0) {
      throw new Error('Order total must be greater than zero');
    }
  }

  public markAsPaid(): void {
    if (this.status !== 'pending') {
      throw new Error(`Cannot pay for order in status: ${this.status}`);
    }
    this.status = 'paid';
  }

  public cancel(): void {
    if (this.status === 'shipped') {
      throw new Error('Cannot cancel an order that has already shipped');
    }
    this.status = 'cancelled';
  }
}
```

##### Repository Port Interface (`src/domain/ports/IOrderRepository.ts`)
```ts
import { Order } from '../entities/Order';

export interface IOrderRepository {
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
  update(order: Order): Promise<void>;
}
```

##### Application Use Case (`src/application/use-cases/PayOrderUseCase.ts`)
```ts
import { IOrderRepository } from '@/domain/ports/IOrderRepository';

export class PayOrderUseCase {
  constructor(private readonly orderRepo: IOrderRepository) {}

  public async execute(orderId: string): Promise<{ success: boolean; message: string }> {
    const order = await this.orderRepo.findById(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    order.markAsPaid();
    await this.orderRepo.update(order);

    return { success: true, message: `Order ${orderId} successfully marked as paid` };
  }
}
```

##### Infrastructure Drizzle Adapter (`src/infrastructure/repositories/DrizzleOrderRepository.ts`)
```ts
import { IOrderRepository } from '@/domain/ports/IOrderRepository';
import { Order } from '@/domain/entities/Order';
import { db } from '@/db';
import { orders } from '@/db/schema';
import { eq } from 'drizzle-orm';

export class DrizzleOrderRepository implements IOrderRepository {
  public async findById(id: string): Promise<Order | null> {
    const record = await db.query.orders.findFirst({ where: eq(orders.id, id) });
    if (!record) return null;
    return new Order(record.id, record.userId, Number(record.totalAmount), record.status as any, record.createdAt);
  }

  public async save(order: Order): Promise<void> {
    await db.insert(orders).values({
      id: order.id,
      userId: order.customerId,
      totalAmount: String(order.totalAmount),
      status: order.status,
      createdAt: order.createdAt,
    });
  }

  public async update(order: Order): Promise<void> {
    await db.update(orders).set({ status: order.status }).where(eq(orders.id, order.id));
  }
}
```

#### Command Query Responsibility Segregation (CQRS) in Next.js
CQRS separates mutation operations (**Commands**) from read operations (**Queries**), allowing teams to optimize the read database (e.g. read-replicas or Elasticsearch) independently from the write master database.

```mermaid
graph LR
    User["Client Browser"] -->|"Command: POST Server Action"| WriteModel["Write Model: PostgreSQL Master (ACID Transactions)"]
    WriteModel -->|"Event / Change Data Capture (CDC)"| ReadSync["Debezium / Kafka / Redis PubSub"]
    ReadSync --> ReadModel["Read Model: Read-Replica / Redis / Elasticsearch"]
    User -->|"Query: GET Server Component"| ReadModel
```

#### Micro-Frontends & Module Federation with Next.js 16
In organizations with 100+ developers, multiple independently deployed Next.js applications share header navigation, authentication sessions, and design systems using Webpack / Module Federation or Multi-Zones:

```mermaid
graph TD
    Gateway["Reverse Proxy Gateway (Nginx / Cloudflare)"] --> ZoneMarketing["Zone 1: / (Marketing Next.js App)"]
    Gateway --> ZoneApp["Zone 2: /app/* (Core Dashboard Next.js App)"]
    Gateway --> ZoneDocs["Zone 3: /docs/* (Docusaurus / Next.js Docs)"]
```

##### Multi-Zones Configuration in `next.config.ts`
```ts
// apps/marketing/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/app',
        destination: `${process.env.DASHBOARD_APP_URL}/app`,
      },
      {
        source: '/app/:path*',
        destination: `${process.env.DASHBOARD_APP_URL}/app/:path*`,
      },
    ];
  },
};

export default nextConfig;
```

### M9.5 System Design Implementation: Multi-Tenant SaaS with Row-Level Security

```tsx
// lib/auth/tenant-context.ts
import { headers } from 'next/headers';
import { db } from '@/db';
import { tenants } from '@/db/schema';
import { eq } from 'drizzle-orm';

export interface TenantInfo {
  id: string;
  subdomain: string;
  name: string;
}

export async function getCurrentTenant(): Promise<TenantInfo> {
  const headerList = await headers();
  const host = headerList.get('host') || '';
  
  // Extract subdomain: 'acme.enterprise.com' -> 'acme'
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : 'default';

  const tenant = await db.query.tenants.findFirst({
    where: eq(tenants.subdomain, subdomain),
  });

  if (!tenant) {
    throw new Error(`Tenant not found for subdomain: ${subdomain}`);
  }

  return {
    id: tenant.id,
    subdomain: tenant.subdomain,
    name: tenant.name,
  };
}
```

#### Multi-Tenant Product Query with Automatic Tenant Scoping
```tsx
// app/tenants/[tenant]/products/page.tsx
import React from 'react';
import { getCurrentTenant } from '@/lib/auth/tenant-context';
import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function TenantProductsPage() {
  const tenant = await getCurrentTenant();

  // Queries are strictly locked to tenant ID via database index
  const tenantProducts = await db.query.products.findMany({
    where: eq(products.tenantId, tenant.id),
    orderBy: (products, { desc }) => [desc(products.createdAt)],
  });

  return (
    <div className="p-8 space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">{tenant.name} Product Catalog</h1>
        <p className="text-slate-500">Subdomain: {tenant.subdomain}.enterprise.com</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tenantProducts.map((p) => (
          <div key={p.id} className="p-6 border rounded-xl shadow-sm bg-white dark:bg-slate-900">
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-emerald-600 font-semibold mt-1">${p.price}</p>
            <p className="text-sm text-slate-500 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### M9.6 System Design Implementation: Collaborative Document Editor (CRDTs + Yjs)

```tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export function CollaborativeEditor({ documentId, userName }: { documentId: string; userName: string }) {
  const [content, setContent] = useState('');
  const [peers, setPeers] = useState<string[]>([]);
  const ydocRef = useRef<Y.Doc | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    ydocRef.current = ydoc;

    const provider = new WebsocketProvider(
      'wss://collab.enterprise.internal',
      `doc-${documentId}`,
      ydoc
    );
    providerRef.current = provider;

    const ytext = ydoc.getText('codemirror');

    // Sync remote updates
    ytext.observe(() => {
      setContent(ytext.toString());
    });

    // Awareness: Track presence of active collaborators
    provider.awareness.setLocalStateField('user', {
      name: userName,
      color: '#6366f1',
    });

    provider.awareness.on('change', () => {
      const states = Array.from(provider.awareness.getStates().values()) as any[];
      setPeers(states.map((s) => s.user?.name).filter(Boolean));
    });

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [documentId, userName]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setContent(newText);

    if (ydocRef.current) {
      const ytext = ydocRef.current.getText('codemirror');
      ydocRef.current.transact(() => {
        ytext.delete(0, ytext.length);
        ytext.insert(0, newText);
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Document: {documentId}</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Active Collaborators:</span>
          {peers.map((peer, i) => (
            <span key={i} className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full font-semibold">
              {peer}
            </span>
          ))}
        </div>
      </div>

      <textarea
        value={content}
        onChange={handleInput}
        placeholder="Collaborate in real-time..."
        className="w-full h-96 p-4 font-mono text-sm border rounded-xl focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900"
      />
    </div>
  );
}
```

### M9.7 GraphQL Apollo Client Integration with React Server Components

```tsx
// lib/graphql/client.ts - Apollo Client for Next.js 16 RSC
import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_ENDPOINT,
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_SERVICE_KEY}`,
      },
    }),
  });
});
```

#### Executing Typed Queries in Server Components
```tsx
// app/dashboard/teams/page.tsx
import React from 'react';
import { getClient } from '@/lib/graphql/client';
import { gql } from '@apollo/client';

const GET_TEAMS_QUERY = gql`
  query GetEnterpriseTeams {
    teams {
      id
      name
      seatCount
      createdAt
    }
  }
`;

export default async function TeamsPage() {
  const { data } = await getClient().query({
    query: GET_TEAMS_QUERY,
    context: {
      fetchOptions: {
        next: { tags: ['teams-data'], revalidate: 300 },
      },
    },
  });

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Enterprise Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.teams.map((team: any) => (
          <div key={team.id} className="p-4 border rounded-xl shadow-sm bg-white dark:bg-slate-900">
            <h3 className="font-bold">{team.name}</h3>
            <p className="text-sm text-slate-500">Seats: {team.seatCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### M9.8 10 Enterprise Full-Stack System Design Blueprints

1. **High-Frequency Real-Time Trading Dashboard**: Next.js 16, WebSockets, HTML5 Canvas, Web Workers for orderbook sorting, Redis pub/sub.
2. **Global E-Commerce Storefront with PPR**: Next.js 16 Partial Prerendering, Stripe Elements, Server Actions, Edge CDN caching, Algolia search.
3. **Multi-Tenant SaaS with Dynamic Subdomains**: Proxy rewrites (`tenant.app.com` -> `/tenants/[tenant]`), Prisma schema isolation, tenant RBAC.
4. **Collaborative Document Editor**: React 19, Yjs (CRDTs), WebSockets, TipTap/Lexical editor, local IndexedDB persistence.
5. **Distributed AI Chat & RAG Assistant**: Vercel AI SDK, pgvector similarity search, OpenAI streaming tokens, Redis semantic caching.
6. **Enterprise Digital Asset Management (DAM)**: Direct Amazon S3 presigned multipart uploads, Cloudflare CDN, WebAssembly client-side image compression.
7. **Omnichannel Customer Support Center**: Server-Sent Events (SSE), Web Audio notification queue, agent presence indicators.
8. **Scalable URL Shortener & Analytics Platform**: Edge runtime redirection (<10ms TTFB), Redis click stream counters, ClickHouse analytical aggregation.
9. **Event-Driven Notification Engine**: BullMQ background worker queue, Web Push API, Resend transactional emails, dead-letter recovery.
10. **High-Throughput Social Feed with Infinite Virtualization**: TanStack Query v5, `@tanstack/react-virtual`, optimistic like counters, intercepting modal photo viewer.

### M9.9 20 Comprehensive Enterprise Project Architectures

#### Project 1: High-Frequency Real-Time Trading Terminal
* **Stack**: Next.js 16, WebSockets, HTML5 Canvas, Web Workers, Redis Pub/Sub, Tailwind CSS.
* **Core Problem**: Streaming 100 orderbook updates per second freezes the React main thread if standard DOM nodes are re-rendered.
* **Solution**: Orderbook delta streams are processed in a dedicated background Web Worker and painted directly to an HTML5 Canvas at 60 FPS, with React managing only high-level controls and modal interactions.

#### Project 2: Universal Monorepo with Turborepo & Shared UI
* **Stack**: Turborepo, pnpm workspaces, Next.js 16 (Web), Expo (Mobile), Shared UI package.
* **Core Problem**: Duplication of business logic, types, and component primitives across Web and Mobile apps.
* **Solution**: Shared `@enterprise/ui` component library, shared `@enterprise/db` Drizzle schema, and remote build caching cutting CI build times by 80%.

#### Project 3: AI-Powered Knowledge Base with pgvector & RAG
* **Stack**: Next.js 16, Vercel AI SDK, PostgreSQL 16 + pgvector, OpenAI Text-Embedding-3, Drizzle ORM.
* **Core Problem**: Accurate context retrieval over millions of unstructured documents without hallucinations.
* **Solution**: Document chunking pipeline with cosine similarity search in PostgreSQL, streaming markdown responses via `streamText` to client `useChat` hooks.

#### Project 4: High-Conversion E-Commerce with Partial Prerendering (PPR)
* **Stack**: Next.js 16 PPR, Stripe Elements, Server Actions, Edge CDN, Algolia Search.
* **Core Problem**: Balancing sub-50ms static cache delivery with real-time stock inventory and personalized cart badges.
* **Solution**: Statically prerender product description, images, and reviews at build time; dynamic Suspense holes stream live inventory and cart status on-demand per user session.

#### Project 5: Multi-Tenant Enterprise SaaS with Dynamic Subdomains
* **Stack**: Next.js 16, Proxy, Prisma ORM, PostgreSQL Row-Level Security (RLS).
* **Core Problem**: Securely routing requests from `tenant.app.com` to `/tenants/[tenant]` without exposing cross-tenant data.
* **Solution**: Proxy rewrites incoming requests based on Host header, passing validated `tenant_id` to database queries enforced via PostgreSQL RLS.

#### Project 6: Collaborative Whiteboard with CRDTs & WebRTC
* **Stack**: Next.js 16, Yjs (CRDT), WebRTC, HTML5 Canvas, IndexedDB.
* **Core Problem**: Offline-capable peer-to-peer real-time drawing without merge conflicts.
* **Solution**: Yjs conflict-free replicated data structures synchronizing drawing vectors peer-to-peer with automatic reconciliation.

#### Project 7: Digital Asset Management (DAM) with S3 Direct Uploads
* **Stack**: Next.js 16, AWS S3 Presigned URLs, WebAssembly Image Resizing, Cloudflare CDN.
* **Core Problem**: Uploading large multi-gigabyte video/image files through serverless functions causes function timeouts and bandwidth bills.
* **Solution**: Server generates cryptographically signed S3 URLs, enabling the browser to stream multipart uploads directly to S3 buckets.

#### Project 8: Omnichannel Support Hub with Server-Sent Events (SSE)
* **Stack**: Next.js 16 Edge Route Handlers, Server-Sent Events, Web Audio API, Radix UI.
* **Core Problem**: Instant ticket notifications across browser tabs without WebSocket server infrastructure.
* **Solution**: Lightweight HTTP text stream using SSE, synthesized audio alert chime via Web Audio oscillator API.

#### Project 9: Enterprise Notification Engine with Background Queues
* **Stack**: Next.js 16, Inngest / BullMQ, Redis, Resend, Web Push API.
* **Core Problem**: Discarding lost notifications when downstream email providers rate limit.
* **Solution**: Durable step functions with automatic exponential backoff, dead-letter queues, and cross-tab `BroadcastChannel` deduplication.

#### Project 10: High-Throughput Social Feed with Infinite Virtualization
* **Stack**: Next.js 16, `@tanstack/react-virtual`, TanStack Query v5, Intercepting Routes.
* **Core Problem**: Mobile browser crashing when scrolling through 50,000 DOM image nodes.
* **Solution**: DOM windowing rendering only the 15 visible feed cards, with intercepting modals masking full-screen photo views without losing scroll position.

#### Projects 11-20: Advanced Production Architectures
* **Project 11**: Role-Based Admin Analytics with 100,000-row Virtualized Data Grid (`@tanstack/react-table`).
* **Project 12**: Global Hotel Booking Engine with URL-synchronized filter state and ICU pluralization.
* **Project 13**: Headless CMS Studio with Live Split-Screen Iframe PostMessage synchronization.
* **Project 14**: Adaptive Bitrate Video Portal with HLS.js and Picture-in-Picture.
* **Project 15**: Real-Time Kanban Board with `@dnd-kit` and optimistic task drag-and-drop.
* **Project 16**: Faceted Elasticsearch Catalog with debounced query params and zero race-condition fetches.
* **Project 17**: Scalable URL Shortener with Edge Redirects (<10ms TTFB) and ClickHouse analytics.
* **Project 18**: Accessible Design System with 30+ Radix primitives and Chromatic visual testing in CI.
* **Project 19**: Progressive Web App with Barcode Scanner & Camera API.
* **Project 20**: Payment Gateway with PCI-DSS iframe tokenization and Stripe webhook verification.

### M9.10 Master Full-Stack Architectural Decision Matrices

#### Full-Stack Framework Comparison Matrix

| Dimension | Next.js 16 (App Router) | React Router 7 / Remix | Astro | Vite + React 19 (SPA) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Rendering Paradigm** | React Server Components (RSC) + Partial Prerendering (PPR) | Single Fetch Loaders & Actions (Client/Server Hydration) | Island Architecture (Zero-JS HTML by default) | Pure Client-Side Rendering (CSR) |
| **Data Mutation Strategy** | Server Actions (`'use server'`) & Native Form Actions | Route Actions (`action()`) & Form Component | API Endpoints & Nanostores | Client Hooks (`useMutation`, TanStack Query) |
| **SEO & First Load (LCP)** | Ultra-fast (<50ms TTFB via PPR static shell) | Fast (Streaming SSR) | Exceptional (100% Lighthouse zero JS) | Slow (Requires client JS download to paint) |
| **Client Bundle Size** | 0 KB for Server Components | Standard React runtime bundle | **0 KB** (until interactive island hydrated) | Full React bundle + library dependencies |
| **Optimal Use-Case** | Complex SaaS platforms, dynamic e-commerce, enterprise portals | Content-driven dashboards, web applications | Marketing sites, technical documentation, blogs | Internal enterprise dashboards behind corporate VPN |

#### Node.js ORMs & Query Builders Decision Matrix

| Dimension | Drizzle ORM | Prisma ORM | Kysely | TypeORM |
| :--- | :--- | :--- | :--- | :--- |
| **Architecture** | Pure TypeScript SQL-like query builder | Schema DSL (`schema.prisma`) with Rust binary | Pure TypeScript SQL query builder | Active Record / Data Mapper with Decorators |
| **Cold Start Overhead** | **< 5ms** (Zero native binary) | ~150ms - 300ms (Rust engine spawn) | **< 5ms** | ~50ms - 100ms |
| **Type Safety** | Inferred directly from schema | Generated code via `prisma generate` | Inferred directly from TypeScript interface | TypeScript types via decorators |
| **Migrations** | `drizzle-kit` SQL file generator | Automated shadow database migrations | User-written manual SQL migration files | Automated schema synchronization |
| **SQL Escape Hatch** | `db.execute(sql\`...\`)` | `db.$queryRaw\`...\`` | `sql\`...\`.execute(db)` | `connection.query('...')` |

#### Modern Authentication Providers Comparison

| Provider | Open Source / Self-Hosted | Passkeys / WebAuthn | Database Adapter | Optimal Use-Case |
| :--- | :--- | :--- | :--- | :--- |
| **Better Auth** | Yes (MIT License) | Native plugin | Prisma, Drizzle, Kysely | Modern full-stack Next.js 16 apps with native passkey support |
| **Auth.js (NextAuth v5)** | Yes (ISC License) | Supported | Official Prisma & Drizzle adapters | Standard OAuth 2.0 social login workflows |
| **Clerk** | Hosted SaaS | Turnkey built-in | Hosted Managed DB | Rapid MVP prototyping with pre-built UI components |
| **Supabase Auth** | Open Source / Hosted | Native GoTrue engine | Built directly into PostgreSQL | Applications already using Supabase as their backend database |

#### Modern Styling Systems Trade-Off Matrix

| Styling System | Runtime Overhead | Zero-JS CSS Output | Colocation with Components | Optimal Use-Case |
| :--- | :--- | :--- | :--- | :--- |
| **Tailwind CSS v4** | **0 KB** (Precompiled) | Yes (Atomic utilities) | Direct in JSX `className` | Rapid UI prototyping, enterprise design systems |
| **CSS Modules** | **0 KB** (Scoper) | Yes (Locally scoped classes) | Companion `.module.css` file | Teams preferring separation of CSS from JSX |
| **Vanilla Extract** | **0 KB** (Zero-runtime TS) | Yes (Type-safe CSS at build) | Companion `.css.ts` file | Strict design tokens with full TypeScript autocompletion |
| **styled-components** | ~12 KB JS Runtime | No (CSS injected at runtime) | Integrated styled tags | Legacy React codebases (Incompatible with RSC!) |

#### Deployment Target Decision Matrix

| Platform | Compute Model | Global Edge Anycast | Database Integration | Pricing Model |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel** | Fluid Compute & Edge | Native Edge Network | Vercel Postgres, KV, Blob | Pay-per-use serverless bandwidth & execution |
| **AWS ECS / Fargate** | Persistent Docker Containers | CloudFront CDN | Direct VPC peering to RDS | Predictable hourly compute per vCPU / RAM |
| **Cloudflare Workers** | V8 Isolates | Global Anycast | Cloudflare D1, KV, R2 | Extremely low cost for high-volume edge rewrites |
| **Self-Hosted Nginx + Docker** | Multi-Stage Standalone Image | Manual Cloudflare setup | Self-hosted PostgreSQL on bare metal | Fixed hardware infrastructure cost |

#### Database Selection Architecture Matrix

| Database Engine | Data Model | ACID Compliance | Horizontal Scalability | Optimal Workload |
| :--- | :--- | :--- | :--- | :--- |
| **PostgreSQL 16** | Relational + JSONB + Vector | Full ACID | Read replicas + Partitioning | Primary source of truth, transactions, users, orders, AI RAG |
| **Redis 7** | In-Memory Key-Value / Data Structures | In-Memory (AOF/RDB) | Redis Cluster | High-frequency caching, rate limiting, pub/sub, queues |
| **ClickHouse** | Columnar Database | Append-Optimized | Native Sharding | Clickstream telemetry, high-volume event logs, analytics |
| **Amazon DynamoDB** | Document / Key-Value | Single/Multi-Item ACID | Infinite Automated Sharding | High-scale single-key lookups, shopping carts, session stores |

### M9.11 Staff Full-Stack Engineering Principles

1. **Prefer Unidirectional Data Flow Over Two-Way Binding**: State flows down; events and actions trigger mutations upward.
2. **Move Compute as Close to the Data as Possible**: Execute heavy queries in Server Components directly against co-located database replicas rather than making serial client round-trips.
3. **Design for Failure and Graceful Degradation**: Every network request can fail; wrap UI subtrees in Suspense and Error Boundaries with actionable retry mechanisms.
4. **Zero-Trust Security**: Never trust client input; validate and sanitize all incoming `FormData` and JSON payloads with strict Zod schemas on the server.
5. **Continuous Verification Over Manual Audits**: Automate accessibility, performance budgets, and linting in continuous integration pipelines.

### M9.12 Key Architecture Principles Summary

1. **Zero-Trust Network Isolation**: Never expose raw database endpoints or internal service keys to client bundles.
2. **Deterministic State Mutations**: Form actions and Server Functions must be idempotent and transactional.
3. **Progressive Enhancement First**: Always provide functional HTML fallbacks before JavaScript hydrates.
4. **Sub-100ms Global First Paint**: Deliver pre-built static shells from edge CDNs using Partial Prerendering.
5. **Continuous Verification**: Enforce automated testing, accessibility, and type safety on every commit.

```text
End of Masterclass. Happy Engineering! 🚀
```

### M9.13 Staff Engineer Axioms for Next.js and React

1. **Network Boundaries Define Safety**: The 'use server' and 'use client' boundary markers are network isolation points. Never pass sensitive configuration tokens or unparsed client inputs across boundary edges.
2. **Deterministic Revalidation Over Ad-Hoc Invalidation**: Rely on granular `revalidateTag` and domain-driven tag hierarchies rather than broad path sweeps to maintain cache consistency across globally distributed edge caches.
3. **Progressive Hydration is Resilience**: Design every page to render meaningful semantic HTML, interactive buttons via native forms, and graceful fallback states even before client-side JavaScript bundles hydrate.
4. **Zero-Trust Security by Default**: Validate every Server Action input with Zod schemas, enforce session verification inside actions (not just in the proxy), and use parameterized queries across Prisma and Drizzle.
5. **Continuous Observability**: Instrument distributed tracing with OpenTelemetry and track Core Web Vitals (LCP, INP, CLS) as hard architectural budgets across every deployment pipeline.

```typescript
// Production Staff Engineering Healthcheck & Readiness Contract
export async function verifyProductionReadiness(): Promise<{ ready: boolean; timestamp: string }> {
  return {
    ready: process.env.DATABASE_URL !== undefined && process.env.AUTH_SECRET !== undefined,
    timestamp: new Date().toISOString()
  };
}
```

[Back to top ⤴️](#-table-of-contents)

---

## M10. Masterclass: Flagship Blueprint: Complete Project Implementations

End-to-end builds that combine most of the guide: Server Actions, streaming, authentication, payments, AI and realtime. Each project lists its files in full so you can rebuild it from an empty `create-next-app`.

### M10.1 Seven Starter Projects with Code

#### Todo App with Server Actions

```tsx
// app/todos/page.tsx
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function TodoApp() {
  const todos = await db.todo.findMany();

  async function addTodo(formData: FormData) {
    'use server';
    const text = formData.get('task') as string;
    await db.todo.create({ data: { text, completed: false } });
    revalidatePath('/todos');
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Server Action Todo List</h2>
      <form action={addTodo} className="flex gap-2 mb-4">
        <input name="task" required placeholder="New task..." className="border p-2 rounded flex-1" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="p-2 border rounded bg-slate-800 text-white">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### CRUD App

A complete REST API CRUD implementation using Next.js Route Handlers:

```ts
// app/api/customers/[id]/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const customer = await db.customer.findUnique({ where: { id } });
  return NextResponse.json(customer);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const updated = await db.customer.update({ where: { id }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await db.customer.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
```

#### Authentication Starter

Auth flow template featuring Auth.js GitHub OAuth integration and session validation:

```tsx
import { auth, signIn, signOut } from '@/auth';

export async function AuthHeader() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <span>My Next.js Application</span>
      {session?.user ? (
        <div className="flex gap-4 items-center">
          <span>Signed in as {session.user.name}</span>
          <form action={async () => { 'use server'; await signOut(); }}>
            <button type="submit">Sign Out</button>
          </form>
        </div>
      ) : (
        <form action={async () => { 'use server'; await signIn('github'); }}>
          <button type="submit">Sign In with GitHub</button>
        </form>
      )}
    </header>
  );
}
```

#### Dashboard with Streaming & Suspense

```tsx
import { Suspense } from 'react';

async function RevenueCard() {
  const rev = await fetch('https://api.example.com/rev').then(r => r.json());
  return <div className="p-4 border rounded">Total Revenue: ${rev.amount}</div>;
}

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1>Executive Dashboard</h1>
      <Suspense fallback={<p>Streaming revenue data...</p>}>
        <RevenueCard />
      </Suspense>
    </div>
  );
}
```

#### E-commerce Store

Dynamic catalog with server-rendered product cards, search params filtering, and instant shopping cart:

```tsx
interface Product {
  id: string;
  name: string;
  price: number;
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const products: Product[] = await db.product.findMany({
    where: category ? { category } : undefined,
  });

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded-lg">
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
```

#### AI Chat Application

Interactive AI assistant with streaming token responses powered by Vercel AI SDK:

```tsx
'use client';

import { useChat } from 'ai/react';

export function ChatApp() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-slate-800 text-slate-200'}`}>
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 pt-4">
        <input value={input} onChange={handleInputChange} placeholder="Type message..." className="border p-2 rounded flex-1" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
```

#### SaaS Starter, Blog Platform & Social Media Clone

Full blueprints featuring multi-tenant routing, Markdown rendering with MDX, Stripe subscriptions, and PostgreSQL database seeding.

### M10.2 Complete Enterprise Project Implementations (Full Code Showcases)

#### Project 1: Omnichannel Support Hub with Server-Sent Events (SSE) & Web Audio Alerts

##### Real-Time Ticket Stream Route Handler (`app/api/support/stream/route.ts`)
```ts
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(req: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Connect notification
      controller.enqueue(encoder.encode('event: ping\ndata: {"status":"connected"}\n\n'));

      // Heartbeat interval to prevent socket timeout
      const timer = setInterval(() => {
        controller.enqueue(encoder.encode(': heartbeat\n\n'));
      }, 15000);

      // Simulation of incoming support tickets
      const ticketInterval = setInterval(() => {
        const ticket = {
          id: `TICK-${Math.floor(Math.random() * 90000 + 10000)}`,
          customer: 'Enterprise User',
          priority: Math.random() > 0.7 ? 'urgent' : 'normal',
          subject: 'Database connection pool latency alert',
          timestamp: new Date().toLocaleTimeString(),
        };
        controller.enqueue(encoder.encode(`event: ticket\ndata: ${JSON.stringify(ticket)}\n\n`));
      }, 8000);

      req.signal.addEventListener('abort', () => {
        clearInterval(timer);
        clearInterval(ticketInterval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
```

##### Client Support Dashboard with Web Audio Chime Synthesis (`components/SupportDashboard.tsx`)
```tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';

interface SupportTicket {
  id: string;
  customer: string;
  priority: 'urgent' | 'normal';
  subject: string;
  timestamp: string;
}

export function SupportDashboard() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playChime = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio context policy
    }
  };

  useEffect(() => {
    const eventSource = new EventSource('/api/support/stream');

    eventSource.addEventListener('ping', () => setIsConnected(true));

    eventSource.addEventListener('ticket', (event) => {
      const ticket: SupportTicket = JSON.parse(event.data);
      setTickets((prev) => [ticket, ...prev.slice(0, 19)]);
      playChime();
    });

    eventSource.onerror = () => setIsConnected(false);

    return () => eventSource.close();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">Omnichannel Support Center</h1>
          <p className="text-sm text-slate-500">Live Ticket Ingestion Stream</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
          <span className="text-xs font-semibold">{isConnected ? 'LIVE FEED' : 'RECONNECTING'}</span>
        </div>
      </div>

      <div className="divide-y border rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
        {tickets.length === 0 ? (
          <div className="p-8 text-center text-slate-400">Waiting for incoming tickets...</div>
        ) : (
          tickets.map((t) => (
            <div key={t.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-sm text-indigo-600">{t.id}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.priority === 'urgent' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'}`}>
                    {t.priority.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400">{t.timestamp}</span>
                </div>
                <p className="font-medium mt-1">{t.subject}</p>
                <p className="text-xs text-slate-500">Customer: {t.customer}</p>
              </div>
              <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                Claim Ticket
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
```

#### Project 2: High-Conversion E-Commerce with Next.js 16 PPR & Cart Drawer
```tsx
// app/store/[id]/page.tsx
import { Suspense } from 'react';
import Image from 'next/image';
import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

// Partial Prerendering comes from cacheComponents: true in next.config.ts (experimental_ppr was removed in 16).

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Statically cached product data
  const product = await db.query.products.findFirst({
    where: eq(products.id, id),
  });

  if (!product) notFound();

  return (
    <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* 1. Statically Prerendered Image Gallery (Edge CDN Cached) */}
      <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
        <Image
          src="/images/product-hero.webp"
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>

      {/* 2. Product Details */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-600 uppercase">SKU: {product.sku}</span>
          <h1 className="text-3xl font-extrabold mt-1">{product.name}</h1>
          <p className="text-2xl font-bold text-emerald-600 mt-2">${product.price}</p>
        </div>

        <p className="text-slate-600 dark:text-slate-300">{product.description}</p>

        {/* 3. Dynamic Suspense Hole: Real-Time Live Stock & Personalized Discount */}
        <Suspense fallback={<div className="h-12 w-full animate-pulse bg-slate-100 rounded-lg" />}>
          <LiveInventoryBadge productId={product.id} />
        </Suspense>
      </div>
    </div>
  );
}

// Live Dynamic Component streamed on request
async function LiveInventoryBadge({ productId }: { productId: string }) {
  // Simulated dynamic database lookup
  const stock = 7; // Live query
  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
      <span className="text-sm font-semibold text-amber-800">
        ⚡ Only {stock} units left in stock! Order within 2 hours for next-day dispatch.
      </span>
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm shadow">
        Add to Bag
      </button>
    </div>
  );
}
```

#### Project 3: Real-Time Canvas Trading Orderbook with Web Worker Engine

##### Background Orderbook Worker (`public/workers/orderbook.worker.js`)
```js
// High-frequency orderbook aggregator on dedicated Web Worker thread
let bids = new Map();
let asks = new Map();

self.onmessage = (e) => {
  const { type, payload } = e.data;

  if (type === 'SNAPSHOT') {
    bids.clear();
    asks.clear();
    payload.bids.forEach(([price, qty]) => bids.set(price, qty));
    payload.asks.forEach(([price, qty]) => asks.set(price, qty));
  } else if (type === 'DELTA') {
    payload.bids.forEach(([price, qty]) => {
      if (qty === 0) bids.delete(price);
      else bids.set(price, qty);
    });
    payload.asks.forEach(([price, qty]) => {
      if (qty === 0) asks.delete(price);
      else asks.set(price, qty);
    });
  }

  // Sort top 10 bids (descending) and top 10 asks (ascending)
  const sortedBids = Array.from(bids.entries()).sort((a, b) => b[0] - a[0]).slice(0, 10);
  const sortedAsks = Array.from(asks.entries()).sort((a, b) => a[0] - b[0]).slice(0, 10);

  self.postMessage({ bids: sortedBids, asks: sortedAsks });
};
```

##### High-Speed Canvas Renderer Component (`components/OrderBookCanvas.tsx`)
```tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';

export function OrderBookCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const [spread, setSpread] = useState<number>(0);

  useEffect(() => {
    const worker = new Worker('/workers/orderbook.worker.js');
    workerRef.current = worker;

    worker.onmessage = (e) => {
      const { bids, asks } = e.data;
      if (bids.length > 0 && asks.length > 0) {
        setSpread(Number((asks[0][0] - bids[0][0]).toFixed(2)));
      }
      renderCanvas(bids, asks);
    };

    // Simulate incoming high-frequency WebSocket updates (50 ticks/sec)
    const interval = setInterval(() => {
      const base = 65000;
      const mockDelta = {
        bids: [[base - Math.random() * 50, Math.random() * 2]],
        asks: [[base + Math.random() * 50, Math.random() * 2]],
      };
      worker.postMessage({ type: 'DELTA', payload: mockDelta });
    }, 20);

    return () => {
      clearInterval(interval);
      worker.terminate();
    };
  }, []);

  const renderCanvas = (bids: [number, number][], asks: [number, number][]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Asks (Sell Orders - Red)
    ctx.fillStyle = '#ef4444';
    ctx.font = '12px monospace';
    asks.forEach(([price, qty], i) => {
      ctx.fillText(`${price.toFixed(2)}`, 20, 30 + i * 20);
      ctx.fillText(`${qty.toFixed(4)}`, 140, 30 + i * 20);
    });

    // Draw Bids (Buy Orders - Green)
    ctx.fillStyle = '#10b981';
    bids.forEach(([price, qty], i) => {
      ctx.fillText(`${price.toFixed(2)}`, 20, 260 + i * 20);
      ctx.fillText(`${qty.toFixed(4)}`, 140, 260 + i * 20);
    });
  };

  return (
    <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-sm">BTC-USD Orderbook</h3>
        <span className="text-xs font-mono text-slate-400">Spread: ${spread}</span>
      </div>
      <canvas ref={canvasRef} width={300} height={480} className="w-full bg-slate-900 rounded-lg" />
    </div>
  );
}
```

[Back to top ⤴️](#-table-of-contents)

---

## 7. Stage 7: Staff Next.js Full-Stack Engineer Interview Handbook & Cheatsheet

The questions below are grouped the way staff-level loops usually run: fundamentals first, then internals and performance, then architecture and design, then debugging scenarios. Answers assume Next.js 16 and React 19.2. Where an answer depends on whether Cache Components is enabled, it says so.

```mermaid
mindmap
  root((Staff Next.js interview))
    Core concepts
      RSC vs SSR
      Server Actions
      Caching layers
    Internals
      Fiber and lanes
      Flight payload
      Partial Prerendering
    Architecture
      Auth and RBAC
      Data layer and pooling
      Observability
    Scenarios
      Hydration mismatch
      Slow TTFB
      Cache not invalidating
```

### 7.1 Core Concepts (Q1-Q20)

#### Q1. What are Server Actions and how do they work?

Server Actions are asynchronous functions defined with `'use server'` that execute securely on the server. They can be passed directly to the `action` attribute of HTML forms or called programmatically from Client Components. Next.js manages the underlying HTTP POST request, CSRF tokens, and data mutations automatically.

#### Q2. How do the cache layers work in Next.js 16, and what changes when Cache Components is enabled?

Without Cache Components (the default), four layers decide what is reused:

1. **Request memoization** (React): identical `fetch` calls and functions wrapped in `React.cache` run once per server render. Nothing survives the request.
2. **Data Cache** (server): stores `fetch` responses across requests and users, but only for calls that opt in with `cache: 'force-cache'`, `next.revalidate` or `next.tags`. Since Next.js 15, plain `fetch` is not cached.
3. **Full Route Cache** (server): the HTML and RSC payload of static routes, produced at build time or by ISR. Any request-time API (`cookies()`, `headers()`, `searchParams`, `connection()`) makes the route dynamic and skips this layer.
4. **Router Cache** (browser): RSC payloads of visited and prefetched segments, kept in memory. Page segments are not reused by default (`staleTimes.dynamic` is 0); layouts and loading states are.

With `cacheComponents: true`, layers 2 and 3 are replaced by one explicit mechanism. Nothing is cached until a function, component or file is marked `"use cache"`. Each entry has a lifetime from `cacheLife` and labels from `cacheTag`. At build time every route is prerendered into a static shell made of the cached and synchronous parts, and everything that reads request data streams into `<Suspense>` holes. Request memoization still exists, and the client router keeps visited routes mounted with React's `<Activity>`.

| Question | Default model | Cache Components |
| --- | --- | --- |
| Is `fetch` cached? | Only when opted in | Only inside `"use cache"` |
| Unit of static output | Whole route | Static shell per route |
| Time-based refresh | `revalidate` export or `next.revalidate` | `cacheLife('hours')` |
| On-demand refresh | `revalidatePath`, `revalidateTag(tag, 'max')` | `revalidateTag(tag, 'max')`, `updateTag(tag)` |
| Per-user caching | Not supported | `"use cache: private"` |

Invalidation is the part interviewers probe: `updateTag` gives read-your-writes inside a Server Action, `revalidateTag(tag, 'max')` is stale-while-revalidate for everyone else, `revalidatePath` invalidates by URL, and `refresh()` re-renders the client without touching any cache entry.

#### Q3. What is the exact difference between Server-Side Rendering (SSR) and React Server Components (RSC)?

**Answer:**
* **SSR (Server-Side Rendering)** executes on the server to generate an initial HTML string so the browser can paint content quickly. However, **the entire JavaScript bundle for the component and all its dependencies** must be downloaded by the browser to attach event handlers during the hydration phase.
* **RSC (React Server Components)** execute **strictly on the server**. Their JavaScript dependencies (e.g. database drivers, Markdown parsers, heavy crypto libraries) are **never shipped to the client**, resulting in 0 KB added to client bundles. RSC outputs an immutable JSON-like stream called the Flight Payload that the client merges directly into its virtual DOM tree without destroying existing client state.

#### Q4. Explain the Flight Protocol and how Next.js streams Server Components to the client

**Answer:**
The Flight Protocol is React's internal serialization format for streaming Server Components. As the server evaluates async components, it serializes DOM tags, props, and references to Client Component chunks (`$L1`) into a chunked text stream. The client browser's React reconciler parses these chunks in real-time as they arrive over HTTP, progressively stitching them into the active component tree before the entire server response finishes downloading.

#### Q5. How does Partial Prerendering (PPR) differ from Incremental Static Regeneration (ISR)?

**Answer:**
* **ISR (Incremental Static Regeneration)** operates on an **entire page route level**. The whole route is either completely static or completely regenerated in the background upon cache expiration.
* **PPR (Partial Prerendering)** operates at a **sub-component boundary level**. A single route combines a static shell (navigation, header, product cards) rendered at build time with embedded dynamic Suspense holes (cart count, personalized recommendations) that stream live on-demand per incoming user session over the exact same HTTP connection.

#### Q6. Why are Server Actions in Next.js vulnerable to CSRF attacks by default if origin headers are not checked?

**Answer:**
When a client invokes a Server Action, Next.js performs an HTTP POST request carrying an internal action ID header. Because modern browsers send cookies automatically with cross-origin POST requests (unless `SameSite=Strict`), a malicious third-party site could submit a form targeting the Server Action endpoint. Next.js mitigates this by automatically validating that the incoming request's `Host` header strictly matches its `Origin` header before executing the action.

#### Q7. How does the new `"use cache"` directive in Next.js differ from legacy `unstable_cache`?

**Answer:**
`unstable_cache` was an imperative wrapper function around database calls that suffered from rigid cache serialization and manual key maintenance. The `"use cache"` directive is a compiler-level directive that can be placed at the top of a file, component, or asynchronous function. It automatically captures closure arguments, integrates with `cacheLife` (for defining stale-while-revalidate profiles) and `cacheTag` (for targeted invalidation), and works natively across both Server Components and data functions.

#### Q8. Explain the difference between `React.createElement`, JSX, and a React Fiber node

* **Answer**: JSX is syntactic sugar that compiles to `jsx()` (or `React.createElement`). It outputs a lightweight, immutable JavaScript object called a **React Element** `{ type, props, key, ref }`. A **Fiber Node** is React's internal mutable representation of a component instance in memory, containing state queues, effect lists, priority bitmasks (`lanes`), and tree traversal pointers (`child`, `sibling`, `return`).

#### Q9. How does Next.js resolve the "Tearing" issue in concurrent rendering?

* **Answer**: "Tearing" occurs when concurrent rendering is interrupted by an external store mutation, causing two components on the screen to render inconsistent states. Next.js and React 18/19 solve this via `useSyncExternalStore`. When an external store mutates during an in-flight concurrent render, React cancels the render pass and restarts it synchronously from scratch, guaranteeing atomic consistency.

#### Q10. What is the exact difference between `revalidatePath` and `revalidateTag`?

* **Answer**:
* `revalidatePath('/posts')`: Purges the Full Route Cache for all data and static HTML tied to a specific URL pathname.
* `revalidateTag('posts', 'max')`: Granularly purges only the cached `fetch` and `"use cache"` entries tagged with `'posts'`, across all routes in the application without re-evaluating unrelated route segments.

#### Q11. Why must props passed across Server and Client Components be serializable?

* **Answer**: Server Components run on the server and stream their UI as an RSC Flight payload over HTTP. Functions, classes, symbols, and DOM nodes cannot be serialized to JSON over the network. Therefore, passing an event handler like `onClick={() => {}}` from a Server Component to a Client Component throws a serialization error.

#### Q12. How does Next.js Partial Prerendering (PPR) stream content over a single HTTP connection?

* **Answer**: PPR uses standard HTTP chunked transfer encoding (`Transfer-Encoding: chunked`). The initial chunk containing the pre-built static HTML shell is sent immediately. The server keeps the HTTP connection open while evaluating the asynchronous promises inside Suspense boundaries, streaming subsequent HTML and script replacement tags directly into the browser DOM as each promise resolves.

#### Q13. How does `proxy.ts` differ from the `middleware.ts` it replaced in Next.js 16?

The API is the same: a function receives a `NextRequest`, returns `NextResponse.next()`, `redirect()`, `rewrite()` or a plain `Response`, and a `config.matcher` selects the paths it runs for. What changed is the name, the runtime and the intent.

| | `middleware.ts` (deprecated) | `proxy.ts` |
| --- | --- | --- |
| Export | `middleware` | `proxy` (or default export) |
| Runtime | Edge by default, Node.js optional | Node.js only, not configurable |
| Config flags | `skipMiddlewareUrlNormalize` | `skipProxyUrlNormalize` |
| Status in 16 | Works with a warning; the only way to stay on Edge | Recommended |

The rename signals what the file is for: a thin network layer in front of the app, like a reverse proxy. It is the right place for redirects, rewrites (multi-tenant hostnames, A/B buckets), security headers and a cheap "is there a session cookie" check. It is the wrong place for database queries or full session validation, because it runs for every matched request, including prefetches, and because Server Actions and Route Handlers must still authorise each call themselves. Migrate with `npx @next/codemod@canary upgrade latest`, which renames the file, the function and the config flags.

```ts
// proxy.ts
import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (!request.cookies.has('session') && request.nextUrl.pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/app/:path*'] };
```

#### Q14. Explain the difference between `React.Children.map` and standard `props.children.map`

* **Theoretical Mechanics**: `props.children` is an opaque data structure: if a component receives only 1 child, `props.children` is a single object (not an array); if it receives no children, it is `undefined`. Calling `props.children.map()` directly throws a runtime `TypeError: props.children.map is not a function`! `React.Children.map` safely normalizes `children` into an array, handles `null`/`undefined`, and preserves key prefixes.

#### Q15. What is the Purpose of `React.Fragment` keys?

* **Theoretical Mechanics**: In standard syntax, `<>...</>` shorthand cannot accept props. When rendering lists of fragments where each item needs multiple sibling elements without a wrapper `<div>`, you must use `<React.Fragment key={item.id}>...</React.Fragment>` so React's reconciliation engine can track item order.

#### Q16. What is the difference between `cache()` from React and `"use cache"` from Next.js?

* **Theoretical Mechanics**:
* `cache()` (React): Request memoization. Caches the result of a function **only within a single render pass**. Once the server finishes rendering the request, the cache is destroyed.
* `"use cache"` (Next.js 16): Persistent cross-request caching. Stores the function result on disk, in Redis, or at the CDN Edge across multiple requests from different users.

#### Q17. What is the purpose of `structuredClone()` vs `JSON.parse(JSON.stringify())`?

* **Theoretical Mechanics**: `JSON.stringify` drops `undefined`, functions, and symbols, converts `Date` objects to strings, converts `NaN`/`Infinity` to `null`, and throws a fatal error on circular object references. `structuredClone()` is a native browser/Node algorithm that correctly clones circular references, `Date`, `RegExp`, `Map`, `Set`, `ArrayBuffer`, and `Blob`.

#### Q18. What is the difference between `generateMetadata` and static `metadata`?

* **Theoretical Mechanics**: Static `export const metadata: Metadata = { ... }` is evaluated at build time. `export async function generateMetadata({ params, searchParams })` dynamically fetches database records at request time to generate title, description, and OpenGraph tags per entity.

#### Q19. What is the Difference between `useTransition` and `useDeferredValue`?

* **Theoretical Mechanics**:
* `useTransition`: Gives you a function `startTransition(scope)` and a boolean `isPending`. Used when you control the state updater code.
* `useDeferredValue`: Accepts a value and returns a deferred version of that value. Used when the value is passed from a parent component as a prop and you don't control the original state setter.

#### Q20. Explain the difference between `React.PureComponent` and `React.memo`

* **Theoretical Mechanics**: `PureComponent` is for class components; it implements `shouldComponentUpdate` with shallow equality comparison of props and state. `React.memo` is a higher-order component for function components that performs shallow comparison of props.

### 7.2 Internals & Performance (Q21-Q34)

#### Q21. Explain the Fiber Tree Double-Buffering mechanism and root pointer swapping

* **Explanation**: In React Fiber, the reconciler maintains two parallel trees in memory: the **Current Tree** (reflecting the nodes currently visible on the screen) and the **Work-in-Progress (WIP) Tree** (a clone constructed and reconciled on background frames). During Concurrent rendering, React processes updates unit by unit. If a high-priority user interaction arrives, React pauses or discards the WIP tree without affecting the screen. Once the entire WIP tree finishes reconciliation, React commits all physical DOM changes in a single synchronous pass and swaps the root pointer: `root.current = workInProgress`.
* **Code Architecture**:
```tsx
// Mental model of Fiber Root Pointer Swapping
function commitRoot(root: FiberRoot) {
  const finishedWork = root.current.alternate;
  // 1. Synchronously mutate DOM nodes
  commitMutationEffects(finishedWork);
  // 2. Atomic pointer swap
  root.current = finishedWork;
  // 3. Trigger passive layout and useEffect queues
  flushPassiveEffects();
}
```

#### Q22. How does the React Compiler identify reactive scopes without breaking closure dependencies?

* **Explanation**: The React Compiler converts component AST into a Static Single Assignment (SSA) intermediate representation. It performs control-flow analysis, variable lifetime tracking, and mutability inference according to the Rules of React. It synthesizes reactive scopes around derived computations and JSX elements, effectively auto-inserting memoization caches at build time while eliminating manual `useMemo` and `useCallback` calls.

#### Q23. Trace the lifecycle of an incoming HTTP request in Next.js App Router from the proxy to client hydration

* **Explanation**:
1. **Edge Gateway / CDN**: Anycast DNS routes the packet to the nearest Edge POP.
2. **Proxy (`proxy.ts`)**: Evaluates rewrites, CSP nonces, auth cookies, and geolocation headers in sub-5ms.
3. **Route Matcher**: App Router resolves matching layout, template, loading, and page segments.
4. **Data Cache & Request Memoization**: Executes Server Components in parallel; dedupes identical `fetch` requests.
5. **Flight Serialization**: Server serializes RSC elements into chunked Flight payload stream.
6. **Streaming HTML**: Initial HTML shell sent over chunked HTTP connection (<50ms TTFB).
7. **Client Reconciler**: Browser loads static JavaScript chunks for Client Components (`"use client"`), mounts virtual DOM, and attaches event listeners (selective hydration).

#### Q24. How does Next.js Partial Prerendering (PPR) stream dynamic Suspense holes into a static shell?

* **Explanation**: PPR compiles a route into a static HTML shell containing embedded Suspense boundaries at build time. When a user requests the page, the Edge CDN serves the pre-rendered shell instantly. Over the same HTTP connection, the server evaluates asynchronous data promises inside Suspense boundaries and streams HTML chunks directly into the browser DOM to populate the holes without requiring client-side re-renders.

#### Q25. What are 31-bit Fiber Lanes and how do they replace legacy priority numbers?

* **Answer**: Fiber Lanes represent update priority as binary bitmasks (e.g. `SyncLane = 0b0001`, `TransitionLane = 0b0010`). Bitwise operators (`&`, `|`, `~`) allow React to combine, intersect, and prioritize multiple overlapping update queues with extreme CPU efficiency.

#### Q26. How do you prevent cache stampedes (Thundering Herd) when a high-traffic cache key expires?

* **Answer**: Use **Probabilistic Early Expiration (XFetch)** or **Mutex Locking**. When a cache key nears expiration, one background worker acquires a distributed lock (e.g. via Redis) to compute and re-populate the cache, while all other incoming user requests continue reading the stale cached value without hammering the primary database.

#### Q27. What causes Microtask Starvation in Node.js, and how does Next.js scheduler avoid it?

* **Theoretical Mechanics**: Microtasks (`Promise.then`, `queueMicrotask`) execute immediately after the current synchronous script frame and drain completely before the V8 engine yields to the event loop. If promises recursively schedule microtasks, the event loop can never process macrotasks (I/O, network sockets, timers). Next.js and React Concurrent scheduler yield execution using `MessageChannel` (a macrotask) and `scheduler.yield()`, allowing the engine to process I/O and user events between render frames.

#### Q28. How does WebAssembly (Wasm) integrate with Next.js Server Components and Edge Route Handlers?

* **Theoretical Mechanics**: Wasm modules compile C/Rust code into portable bytecode that runs at near-native speeds. In Next.js, Wasm can be imported directly into Edge or Node.js runtimes for CPU-heavy tasks like image manipulation, cryptography, or syntax highlighting.
* **Code Example**:
```ts
// app/api/resize/route.ts
import { NextResponse } from 'next/server';
// Direct WebAssembly module import supported natively by Turbopack / Webpack
import initWasm, { resize_image } from '@/wasm/image_processor.wasm';

export const runtime = 'edge';

export async function POST(req: Request) {
  const buffer = await req.arrayBuffer();
  await initWasm();

  // Execute high-speed Rust image resizing in V8 isolate
  const processed = resize_image(new Uint8Array(buffer), 800, 600);

  return new Response(processed, {
    headers: { 'Content-Type': 'image/webp' },
  });
}
```

#### Q29. What specific architectural changes reduce Interaction to Next Paint (INP) to < 200ms?

* **Actionable Engineering Rules**:
1. **Break Long Tasks**: Any JavaScript execution block exceeding 50ms is classified as a Long Task. Use `await scheduler.yield()` to break long loops into smaller slices.
2. **Offload Non-UI Work**: Move search indexing, data filtering, and cryptographic hashing into a dedicated Web Worker.
3. **Wrap Non-Urgent State in `startTransition`**: Prevents expensive component re-renders from blocking the main thread during typing or clicking.
4. **Eliminate Layout Thrashing**: Batch DOM measurement reads (`getBoundingClientRect()`) separately from DOM mutation writes.

#### Q30. How do you identify memory leaks using Chrome DevTools Heap Snapshots?

* **Step-by-Step Diagnostic Protocol**:
1. Open Chrome DevTools -> **Memory** tab -> Select **Heap snapshot**.
2. Take Baseline Snapshot (Snapshot 1).
3. Perform the suspected action (e.g. open and close a modal 10 times).
4. Force Garbage Collection (Trash icon) -> Take Snapshot 2.
5. Select **Comparison** view between Snapshot 1 and Snapshot 2.
6. Filter by **Detached HTMLElement**: If detached DOM nodes have positive `# Delta`, an active closure, event listener, or global state store is retaining references to unmounted component nodes!

#### Q31. How does React 19 Stylesheet Precedence prevent Flash of Unstyled Content (FOUC)?

* **Theoretical Mechanics**: By declaring `<link rel="stylesheet" href="..." precedence="high" />`, React 19 pauses rendering of the component subtree until the browser finishes loading and parsing the stylesheet, guaranteeing that elements are never displayed in an unstyled state.

#### Q32. How does PostgreSQL Index-Only Scan work, and what is the Visibility Map?

* **Theoretical Mechanics**: An Index-Only Scan retrieves all required columns directly from the B-Tree index without accessing the table heap on disk. However, because PostgreSQL uses Multi-Version Concurrency Control (MVCC), index entries do not store transaction visibility information. The engine checks the **Visibility Map**: if the table block is marked as all-visible, it skips the heap read entirely, achieving near-instant execution.

#### Q33. How does Next.js Turbopack achieve 10x faster compilation than Webpack?

* **Theoretical Mechanics**: Turbopack is written in Rust and built on an incremental computation engine called **Turbo Engine**. When a file changes, Turbopack never re-bundles the entire dependency graph; it only recompiles the specific function calls and modules that were invalidated, caching results in memory across sessions.

#### Q34. How does the Browser Cache-Control `stale-while-revalidate` directive work?

* **Theoretical Mechanics**: `Cache-Control: max-age=600, stale-while-revalidate=86400` instructs the browser to serve cached content instantly if under 600 seconds old. If between 600 seconds and 86400 seconds old, the browser serves the stale cached response immediately to the user while asynchronously issuing a background network request to update the cache for the next visit.

### 7.3 Architecture & Design (Q35-Q54)

#### Q35. How do you secure Next.js Server Actions against Cross-Site Request Forgery (CSRF) and Parameter Tampering?

* **Explanation**:
1. **Host/Origin Validation**: Next.js automatically verifies that the incoming request's `Host` header strictly matches its `Origin` header.
2. **Cookie Security**: Store session tokens in `HttpOnly; Secure; SameSite=Strict` cookies.
3. **Zod Validation**: Always parse incoming `FormData` against strict Zod schemas with type coercion.
4. **Authorization Guards**: Validate active session roles and ownership permissions before performing database mutations.
* **Code Example**:
```tsx
'use server';

import { headers, cookies } from 'next/headers';
import { z } from 'zod';

const ActionSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(['admin', 'editor']),
});

export async function mutateUserRole(formData: FormData) {
  // 1. Verify Origin
  const origin = (await headers()).get('origin');
  const host = (await headers()).get('host');
  if (!origin || !origin.includes(host || '')) {
    throw new Error('CSRF origin mismatch');
  }

  // 2. Validate Session
  const sessionToken = (await cookies()).get('auth_session')?.value;
  if (!sessionToken) throw new Error('Unauthorized');

  // 3. Parse Schema
  const parsed = ActionSchema.safeParse({
    id: formData.get('id'),
    role: formData.get('role'),
  });
  if (!parsed.success) return { error: 'Invalid input' };

  // 4. Execute DB mutation...
  return { success: true };
}
```

#### Q36. How does Connection Pooling with PgBouncer solve the Serverless Database Hazard?

* **Explanation**: In serverless architectures (Vercel, AWS Lambda), each incoming request can spawn an independent Node.js process. If 1,000 requests arrive concurrently, 1,000 processes attempt to open direct TCP sockets to PostgreSQL, exceeding PostgreSQL's `max_connections` limit (typically 100). **PgBouncer** acts as an intermediary connection pooler. It maintains a small set of persistent TCP connections (e.g. 20) to PostgreSQL and multiplexes thousands of transient client requests over those connections in transaction mode, preventing database connection exhaustion.

#### Q37. How do you optimize N+1 query waterfalls using Drizzle ORM and Prisma?

* **Explanation**: The N+1 problem occurs when fetching N parent records and executing N subsequent queries in a loop to fetch related children. In Prisma, use `include: { relation: true }` or batch queries using `$transaction`. In Drizzle, use relational queries (`db.query.users.findMany({ with: { posts: true } })`) which compile to single `LEFT JOIN` or json aggregation SQL queries.

#### Q38. How do you configure OpenTelemetry distributed tracing across Next.js Server Components and backend microservices?

* **Explanation**: Using Next.js's native `instrumentation.ts` file, initialize the OpenTelemetry NodeSDK on server bootstrap. When Next.js issues outgoing `fetch` requests, the HTTP tracer automatically injects standard W3C `traceparent` headers (`00-{traceId}-{spanId}-01`). Downstream microservices (Go, Python, Java) extract this header, propagating the identical trace context across all service boundaries.

#### Q39. What is the difference between Blue/Green Deployments and Canary Deployments in Next.js production?

* **Explanation**:
* **Blue/Green Deployment**: Two identical production environments exist. The router points to Blue. Green is updated with the new build. Once health checks pass, traffic is instantly flipped 100% to Green. Rollback is instant by pointing traffic back to Blue.
* **Canary Deployment**: A small percentage of incoming production traffic (e.g. 5%) is routed to the new build, while 95% remains on the stable build. Automated telemetry monitors error rates and latency. If error rates remain normal, traffic is incrementally shifted (25% -> 50% -> 100%).

#### Q40. How does PostgreSQL Row-Level Security (RLS) enforce multi-tenant isolation?

* **Answer**: RLS allows database administrators to define security policies directly on tables (e.g. `CREATE POLICY tenant_isolation ON orders USING (tenant_id = current_setting('app.current_tenant_id')::uuid)`). Every SQL query executed within that session automatically filters rows by tenant, making cross-tenant data leaks impossible even if application code forgets a `WHERE tenant_id = ...` clause.

#### Q41. What is the N+1 query problem in ORMs, and how do you diagnose it with EXPLAIN ANALYZE?

* **Answer**: The N+1 problem occurs when an application executes 1 initial query to fetch parent records, and then executes N separate queries in a loop to fetch related child data. In `EXPLAIN ANALYZE`, this manifests as thousands of repetitive index lookups. In Prisma, use `include: { relation: true }`; in Drizzle, use relational queries with `with: { ... }` which compile down to efficient `LEFT JOIN`s or single array aggregations.

#### Q42. How do you build an optimistic mutation queue with automated rollback in Next.js?

* **Theoretical Mechanics**: When a user submits an action, `useOptimistic` updates the local UI immediately. If the server action fails or throws an exception, React automatically drops the optimistic state and reverts to the last confirmed server state without manual rollback boilerplate.
* **Code Implementation**:
```tsx
'use client';

import { useActionState, useOptimistic, useRef } from 'react';

interface LikePayload {
  postId: string;
  likeCount: number;
}

export function OptimisticLikeButton({ postId, initialCount }: { postId: string; initialCount: number }) {
  const [count, formAction, isPending] = useActionState(
    async (prevCount: number, formData: FormData) => {
      const res = await fetch(`/api/posts/${postId}/like`, { method: 'POST' });
      if (!res.ok) throw new Error('Like failed');
      const data: LikePayload = await res.json();
      return data.likeCount;
    },
    initialCount
  );

  const [optimisticCount, setOptimisticCount] = useOptimistic(
    count,
    (current, delta: number) => current + delta
  );

  const handleLike = async (formData: FormData) => {
    setOptimisticCount(1);
    try {
      await formAction(formData);
    } catch {
      // Reverts automatically
    }
  };

  return (
    <form action={handleLike}>
      <button
        type="submit"
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-1.5 border rounded-lg hover:bg-slate-50"
      >
        <span>❤️</span>
        <span className="font-bold">{optimisticCount}</span>
      </button>
    </form>
  );
}
```

#### Q43. Explain the OAuth 2.0 PKCE (Proof Key for Code Exchange) flow and why it replaces the Implicit Flow in SPAs

* **Theoretical Mechanics**: In the legacy Implicit Flow, access tokens were returned directly in the URL hash fragment (`#access_token=...`), exposing tokens to browser history, referrer logs, and malicious browser extensions. PKCE generates a cryptographically random `code_verifier` and hashes it into a `code_challenge`. The authorization code can only be exchanged for tokens if the client proves possession of the original verifier, blocking interception attacks.
* **Architecture Diagram**:
```mermaid
graph TD
    Client["Client Browser"] -->|"1. Generate code_verifier & code_challenge"| Client
    Client -->|"2. Redirect to Auth Provider with code_challenge"| IdP["Identity Provider (Google/GitHub/Auth0)"]
    IdP -->|"3. User consents; Redirect with auth_code"| Client
    Client -->|"4. POST /token with auth_code + code_verifier"| IdP
    IdP -->|"5. Verify hash(verifier) === challenge; Issue JWT"| Client
```

#### Q44. How do `HttpOnly; Secure; SameSite=Strict` cookie flags prevent XSS and CSRF?

* **Theoretical Mechanics**:
* `HttpOnly`: Forbids JavaScript (`document.cookie`) from reading the cookie, neutralizing token theft even if the application suffers from an XSS vulnerability.
* `Secure`: Instructs the browser to only transmit the cookie over encrypted TLS (HTTPS) connections.
* `SameSite=Strict`: Ensures the cookie is never sent with cross-site requests (e.g. following links from external websites or third-party forms), eliminating Cross-Site Request Forgery (CSRF).

#### Q45. How do Conflict-Free Replicated Data Types (CRDTs) enable offline-first collaboration?

* **Theoretical Mechanics**: Unlike Operational Transformation (OT) which requires a centralized server to sequence operations, CRDTs (like Yjs and Automerge) are mathematically proven data structures where operations commute. Concurrent edits from multiple distributed clients can be merged in any order, always resolving to the exact same deterministic state without conflict locks.

#### Q46. How does `@vercel/og` generate dynamic social preview images at the edge in sub-50ms?

* **Theoretical Mechanics**: `@vercel/og` uses Satori, a lightweight HTML/CSS layout engine written in WebAssembly. Instead of spinning up a full headless Chromium browser (which consumes 500MB RAM and takes 2 seconds), Satori parses JSX and converts it directly into SVG vectors, which are then rasterized to PNG in WebAssembly at the Edge in ~30ms.

#### Q47. How do you configure distributed tracing across Next.js and backend microservices using W3C TraceContext?

* **Theoretical Mechanics**: W3C TraceContext defines standard HTTP headers:
* `traceparent: 00-{traceId}-{spanId}-{flags}`
* `tracestate: vendorSpecificData`
When Next.js issues a `fetch()` call inside a Server Component, the OpenTelemetry instrumentation hook reads the active span from AsyncLocalStorage, generates a child `spanId`, and injects the `traceparent` header into outgoing request headers. Downstream services extract this header, linking all database queries and microservice hops into a single unified waterfall in Jaeger or Datadog.

#### Q48. How do you design an accessible Sortable Table according to WAI-ARIA APG specifications?

* **Theoretical Mechanics**: Column header elements must be `<th scope="col">` with `aria-sort="ascending"`, `aria-sort="descending"`, or `aria-sort="none"`. When activated via click or Enter/Space keys, screen readers announce the updated sort direction.

#### Q49. How do you handle file uploads in Next.js Server Actions with size limits?

* **Theoretical Mechanics**: Configure `serverActions.bodySizeLimit` in `next.config.ts` (default is 1MB). Extract files as `File` objects from `FormData`. Validate MIME type using `file.type` and magic byte verification to prevent malicious executable uploads.

#### Q50. How does Server-Sent Events (SSE) compare to WebSockets for live notifications?

* **Theoretical Mechanics**: SSE runs over standard HTTP/2, natively supports browser auto-reconnection with last-event IDs, traverses corporate firewalls effortlessly, and has zero protocol upgrade overhead. WebSockets require protocol upgrade (`101 Switching Protocols`), custom heartbeat ping/pongs, and specialized reverse proxy configurations.

#### Q51. How does BullMQ manage Distributed Background Jobs with Redis?

* **Theoretical Mechanics**: BullMQ uses Redis streams and sorted sets (`ZSET`) to schedule jobs with delay, priority, and exponential retry. Distributed worker processes atomically dequeue jobs using Lua scripts, guaranteeing that each job is processed exactly once even across multi-node Kubernetes clusters.

#### Q52. How do you implement Multi-Tenant Subdomain Routing with `proxy.ts`?

* **Theoretical Mechanics**: In `proxy.ts`, extract the host header (`req.headers.get('host')`), parse out the subdomain (e.g. `acme` from `acme.enterprise.com`), and rewrite the URL pathname internally to `/tenants/[subdomain]/[...path]` without changing the URL visible in the user's browser.

#### Q53. What is Serverless Database Cold Start and how do you eliminate it?

* **Theoretical Mechanics**: Traditional databases require multi-packet TCP handshakes and TLS negotiation upon connection. In serverless functions, this adds 150-300ms. Eliminate this by using HTTP-based database drivers (like Neon serverless driver or Supabase REST/PostgREST) which execute queries over stateless HTTP requests without persistent TCP socket handshakes.

#### Q54. How do you architect a Multi-Region Next.js Deployment for global sub-100ms latency?

* **Theoretical Mechanics**: Deploy Next.js to Edge/Serverless compute across multiple cloud regions (e.g. US-East, EU-Central, AP-Southeast). Route traffic via Anycast DNS to the nearest edge location. Pair with globally distributed read-replica databases (e.g. Amazon Aurora Global Database or Neon Multi-Region) with writes directed to the primary region.

### 7.4 Scenario & Debugging Questions (Q55-Q66)

#### Q55. How do you secure Next.js against Prototype Pollution?

* **Theoretical Mechanics**: Prototype pollution occurs when merging untrusted JSON objects into existing objects without sanitizing keys like `__proto__`, `constructor`, or `prototype`. Mitigate by freezing prototypes (`Object.freeze(Object.prototype)`), validating objects with Zod schemas, or using `Map` instead of plain `{}` objects.

#### Q56. How do you prevent XSS in Markdown rendering in React?

* **Theoretical Mechanics**: Use `react-markdown` paired with `rehype-sanitize`. Never pass unsanitized markdown HTML directly to `dangerouslySetInnerHTML`.

#### Q57. How do you implement Zero-Downtime Database Migrations with Prisma or Drizzle?

* **Theoretical Mechanics**: Follow the **Expand and Contract** pattern:
1. **Expand**: Add new columns or tables as nullable or with defaults. Deploy database migration.
2. **Dual-Write**: Deploy application code that reads from the old column and writes to both old and new columns.
3. **Backfill**: Run a script to copy historical data to the new column.
4. **Contract**: Deploy application code that reads exclusively from the new column.
5. **Clean Up**: Remove the old column in a subsequent migration.

#### Q58. How do you implement a Skip-to-Content Link for WCAG Compliance?

* **Theoretical Mechanics**: Render an `<a>` tag with `href="#main-content"` as the first element inside `<body>`. Use CSS classes `sr-only focus:not-sr-only` so the link remains invisible until a keyboard navigator presses Tab upon entering the page.

#### Q59. What is Hydration Mismatch and how do you debug it?

* **Theoretical Mechanics**: Occurs when the server-rendered HTML does not match the client's initial Virtual DOM tree (e.g. rendering `new Date().toLocaleTimeString()` or checking `typeof window`). In React 19, the error console displays a diff highlighting the conflicting element. Use `suppressHydrationWarning` on specific text nodes or render client-only components using `useEffect`.

#### Q60. How do you secure Next.js against Timing Attacks during Password Hash Verification?

* **Theoretical Mechanics**: Standard string comparison (`a === b`) exits on the first mismatched character, allowing attackers to deduce passwords by measuring microsecond latency differences. Always use constant-time comparison functions like `crypto.timingSafeEqual()`.

#### Q61. What is the Difference between `cookieStore.set` in Server Actions vs Route Handlers?

* **Theoretical Mechanics**: In Server Actions, `cookies().set()` automatically injects `Set-Cookie` headers into the streaming action response. In Route Handlers, cookies can be set via `cookies().set()` or directly on the `NextResponse` object: `response.cookies.set()`.

#### Q62. How do you mock network requests in Next.js Server Components for Testing?

* **Theoretical Mechanics**: Use Mock Service Worker (MSW v2) in Node environment (`setupServer`). MSW intercepts Node.js native `fetch` requests at the network layer, returning mock JSON responses without touching external APIs.

#### Q63. How does CSS Subgrid solve complex grid alignment in card components?

* **Theoretical Mechanics**: In standard CSS Grid, child elements of a grid item participate in their own independent grid. With `grid-template-rows: subgrid`, child elements (header, body, footer) align directly across neighboring sibling cards regardless of varying content lengths.

#### Q64. What is the Difference between Soft Deletes and Hard Deletes?

* **Theoretical Mechanics**:
* Hard Delete: `DELETE FROM users WHERE id = 1;` permanently destroys row data.
* Soft Delete: `UPDATE users SET deleted_at = NOW() WHERE id = 1;` flags the record as inactive while preserving historical references and audit compliance.

#### Q65. How does Next.js handle Streaming Waterfalls when a parent component suspends?

* **Theoretical Mechanics**: If a parent Server Component suspends, Next.js streams its fallback HTML immediately. Sibling components outside the Suspense boundary continue evaluating and streaming in parallel, preventing the entire page from stalling.

#### Q66. How do you handle Session Invalidation across multiple devices upon password reset?

* **Theoretical Mechanics**: Store a `session_version` integer on the user table. When issuing JWTs or database sessions, encode the current `session_version`. Upon password reset, increment `session_version = session_version + 1` in the database. All existing session tokens with the older version number are instantly rejected across all devices.

### 7.5 Staff Cheatsheet

| Need | Next.js 16 answer | Gotcha |
| --- | --- | --- |
| Interactive widget on a server page | Small `'use client'` leaf; pass server content as `children` | Everything a client module imports becomes client code |
| Read route params | `const { id } = await params` | Synchronous access was removed in 16 |
| Page data | `await` in an async Server Component | Independent awaits in sequence create a waterfall; use `Promise.all` |
| Same query in page and `generateMetadata` | Wrap the fetcher in `React.cache` | Per request only; not a cross-request cache |
| Cache across requests | `"use cache"` + `cacheLife` + `cacheTag` (Cache Components) or `fetch` with `next.revalidate` | Request APIs are not allowed inside `"use cache"` |
| Opt out of prerendering | `await connection()` | `unstable_noStore` is the old name |
| Show the author their own write | `updateTag(tag)` in the Server Action | Only works inside Server Actions |
| Refresh shared content | `revalidateTag(tag, 'max')` | The one-argument form is deprecated |
| Mutation from a form | Server Action + `useActionState` | Every action is a public POST endpoint: authenticate and validate inside it |
| Instant UI feedback | `useOptimistic` inside `startTransition` | Outside a transition the optimistic value does not apply |
| Public JSON endpoint or webhook | `route.ts` | `GET` handlers without request data can be prerendered; add `dynamic` or read the request |
| Redirect before rendering | `redirects()` in config, or `proxy.ts` | Proxy runs for prefetches too; keep it free of I/O |
| Redirect after a check | `redirect()` | Throws; never inside `try/catch` |
| Per-segment errors | `error.tsx` with `retry()` | Cannot catch its own folder's layout; use the parent or `global-error.tsx` |
| Static shell with live parts | `cacheComponents: true` + `<Suspense>` around request-dependent parts | Uncached I/O outside `<Suspense>` fails the build |
| Container deployment | `output: 'standalone'`, `node server.js`, `HOSTNAME=0.0.0.0` | Copy `.next/static` and `public/` next to `server.js` |
| Type-safe route props | `next typegen` then `PageProps<'/route'>` | Regenerate after adding routes |
| Bundle regression check | `next build` First Load JS, `next analyze export` | Dev mode sizes are not representative |

#### Master Full-Stack Cheat Sheets

##### Next.js 16 Route Segment Configuration Cheat Sheet

| Config Variable | Supported Values | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `export const dynamic` | `'auto' \| 'force-dynamic' \| 'error' \| 'force-static'` | `'auto'` | Controls static prerendering vs request-time rendering. |
| `export const revalidate` | `false \| 0 \| number` (seconds) | `false` | Sets route-level cache revalidation interval. |
| `export const fetchCache` | `'auto' \| 'default-cache' \| 'only-cache' \| 'force-no-store'` | `'auto'` | Overrides fetch request caching heuristics. |
| `export const runtime` | `'nodejs' \| 'edge'` | `'nodejs'` | Sets compute execution environment. |
| `export const preferredRegion` | `'auto' \| 'global' \| 'home' \| string[]` | `'auto'` | Directs edge function execution to nearest region. |
| `export const maxDuration` | `number` (seconds) | Deployment default | Configures execution timeout before terminating. |

##### Next.js 16 Cache APIs Cheat Sheet

| Cache API | Usage Syntax | Where It Executes |
| :--- | :--- | :--- |
| `"use cache"` | Directive at top of function or component | Server-side / Build / Request |
| `cacheLife('hours')` | `import { cacheLife } from 'next/cache'` | Inside `"use cache"` functions |
| `cacheTag('my-tag')` | `import { cacheTag } from 'next/cache'` | Inside `"use cache"` functions |
| `revalidateTag('tag', 'max')`| `import { revalidateTag } from 'next/cache'` | Inside Server Actions / Route Handlers |
| `revalidatePath('/path')`| `import { revalidatePath } from 'next/cache'` | Inside Server Actions / Route Handlers |

#### Complete Production Full-Stack Master Cheat Sheets

##### React 19 Core APIs

| API | Signature | Execution Phase | Purpose |
| :--- | :--- | :--- | :--- |
| `useActionState` | `const [state, formAction, isPending] = useActionState(fn, init)` | Render / Event | Asynchronous form mutations with built-in pending state. |
| `useFormStatus` | `const { pending, data, method } = useFormStatus()` | Context / DOM | Child component form submission tracking without prop drilling. |
| `useOptimistic` | `const [optState, addOpt] = useOptimistic(state, fn)` | Render / Transition | Immediate optimistic feedback with automated server rollback. |
| `use` | `const data = use(promiseOrContext)` | Render / Suspense | Reads promises or contexts conditionally inside render. |

##### Next.js 16 Route Segment Variables

| Variable | Values | Default | Behavior |
| :--- | :--- | :--- | :--- |
| `export const dynamic` | `'auto' \| 'force-dynamic' \| 'error' \| 'force-static'` | `'auto'` | Prerendering vs Request-Time computation mode. |
| `export const revalidate` | `false \| 0 \| number` | `false` | Cache lifetime in seconds (0 = uncached). |
| `export const fetchCache` | `'auto' \| 'force-no-store' \| 'only-cache'` | `'auto'` | Overrides fetch caching heuristics. |
| `export const runtime` | `'nodejs' \| 'edge'` | `'nodejs'` | Compute runtime environment. |
| `export const maxDuration` | `number` | Deployment default | Execution timeout in seconds. |

##### Database & ORM Commands

| Action | Prisma Command | Drizzle Command |
| :--- | :--- | :--- |
| Generate Types | `npx prisma generate` | Automatic via TypeScript |
| Create Migration | `npx prisma migrate dev --name init` | `npx drizzle-kit generate` |
| Apply Migration | `npx prisma migrate deploy` | `npx drizzle-kit migrate` |
| Database GUI | `npx prisma studio` | `npx drizzle-kit studio` |
| Push Schema Directly | `npx prisma db push` | `npx drizzle-kit push` |

#### React 19 Built-In Hooks Master Reference

| Hook | Signature | Thread / Phase | Purpose |
| :--- | :--- | :--- | :--- |
| `useActionState` | `const [state, formAction, isPending] = useActionState(fn, init)` | Client / Event | Orchestrates async form mutations, pending flags, and error states. |
| `useFormStatus` | `const { pending, data, method } = useFormStatus()` | Client / Context | Accesses parent `<form>` submission status in nested child buttons. |
| `useOptimistic` | `const [optState, addOpt] = useOptimistic(state, fn)` | Client / Transition | Provides instantaneous optimistic feedback with automated rollback. |
| `use` | `const val = use(promiseOrContext)` | Render / Suspense | Reads promises or contexts conditionally inside render. |
| `useId` | `const id = useId()` | Render / SSR | Generates stable unique IDs across SSR and hydration for accessible inputs. |
| `useDeferredValue` | `const deferred = useDeferredValue(val)` | Concurrent Scheduler | Defers expensive re-renders until high-priority inputs complete. |
| `useSyncExternalStore` | `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` | Client / SSR | Subscribes to external stores atomically to prevent tearing in Concurrent React. |
| `useImperativeHandle` | `useImperativeHandle(ref, createHandle, [deps])` | Layout Effect | Customizes the instance value exposed to parent components via `ref`. |
| `useInsertionEffect` | `useInsertionEffect(setup, [deps])` | Pre-Layout Effect | Injects `<style>` tags before DOM layout measurements run. |

#### Next.js 16 App Router Route Segment Config Cheat Sheet

| Variable | Type & Options | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `dynamic` | `'auto' \| 'force-dynamic' \| 'error' \| 'force-static'` | `'auto'` | Controls static prerendering vs request-time rendering. |
| `revalidate` | `false \| 0 \| number` (seconds) | `false` | Sets ISR revalidation interval. |
| `dynamicParams` | `boolean` | `true` | Permits params not returned by `generateStaticParams`. |
| `fetchCache` | `'auto' \| 'force-no-store' \| 'only-cache'` | `'auto'` | Overrides fetch request caching heuristics. |
| `runtime` | `'nodejs' \| 'edge'` | `'nodejs'` | Sets compute runtime environment. |
| `preferredRegion` | `'auto' \| 'global' \| 'home' \| string[]` | `'auto'` | Directs edge execution to specific cloud regions. |
| `maxDuration` | `number` (seconds) | Platform default | Sets maximum serverless execution timeout. |

#### Complete Caching APIs Cheat Sheet

| Cache Function / Directive | Import / Syntax | Execution Scope | Invalidation Mechanism |
| :--- | :--- | :--- | :--- |
| `"use cache"` | Directive at top of file / function | Server / Build / Request | `revalidateTag()`, `cacheLife()` |
| `cacheLife('hours')` | `import { cacheLife } from 'next/cache'` | Inside `"use cache"` | SWR profile expiration |
| `cacheTag('my-tag')` | `import { cacheTag } from 'next/cache'` | Inside `"use cache"` | `revalidateTag('my-tag', 'max')` |
| `revalidateTag('tag', 'max')`| `import { revalidateTag } from 'next/cache'` | Server Action / Route Handler | On-demand purge |
| `revalidatePath('/p')`| `import { revalidatePath } from 'next/cache'` | Server Action / Route Handler | Purges Full Route Cache |

#### Drizzle ORM vs Prisma Master Reference Cheat Sheet

| Capability | Prisma ORM | Drizzle ORM |
| :--- | :--- | :--- |
| **Schema Definition** | `schema.prisma` DSL | Pure TypeScript (`pgTable`, `drizzle-orm/pg-core`) |
| **Runtime Footprint** | Precompiled Rust engine binary (~15 MB) | Pure lightweight JavaScript template literals (<50 KB) |
| **Serverless Cold Starts**| ~150ms - 300ms | **< 5ms** (Near-zero cold start overhead) |
| **Migrations** | `prisma migrate dev` | `drizzle-kit generate` & `drizzle-kit migrate` |
| **Relational Queries** | `db.user.findMany({ include: { posts: true } })` | `db.query.users.findMany({ with: { posts: true } })` |
| **Raw SQL Escape Hatch** | `db.$queryRaw\`SELECT * FROM users\`` | `db.execute(sql\`SELECT * FROM users\`)` |

#### Production Docker & DevOps Cheat Sheet

| Task | Command / Configuration |
| :--- | :--- |
| **Build Standalone App** | `output: 'standalone'` in `next.config.ts` |
| **Build Multi-Stage Image** | `docker build --target runner -t enterprise-nextjs .` |
| **Inspect Image Layers** | `docker history enterprise-nextjs:latest` |
| **Run Container with Non-Root**| `USER nextjs` in Dockerfile |
| **Container Healthcheck** | `HEALTHCHECK --interval=30s CMD wget -q --spider http://localhost:3000/api/health \|\| exit 1` |

#### 15 Additional Enterprise Full-Stack Cheat Sheets

##### React 18 to 19 Migration Quick-Reference

| Feature | React 18 Syntax | React 19 Modern Syntax |
| :--- | :--- | :--- |
| **Ref Forwarding** | `forwardRef((props, ref) => <input ref={ref} />)` | `function Input({ ref, ...props }) { return <input ref={ref} /> }` |
| **Context Consumer**| `<ThemeContext.Provider value="dark">` | `<ThemeContext value="dark">` |
| **Form Submission** | `const [loading, setLoading] = useState(false)` | `const [state, formAction, isPending] = useActionState(action, init)` |
| **Async Values** | `useEffect` + `useState` | `const data = use(dataPromise)` |

##### Essential TypeScript Utility Types

| Utility Type | Syntax | Transformation Description |
| :--- | :--- | :--- |
| `Partial<T>` | `Partial<User>` | Makes all properties optional. |
| `Required<T>` | `Required<User>` | Makes all properties required. |
| `Readonly<T>` | `Readonly<User>` | Makes all properties immutable (`readonly`). |
| `Pick<T, K>` | `Pick<User, 'id' \| 'email'>` | Constructs a type with only specified keys. |
| `Omit<T, K>` | `Omit<User, 'passwordHash'>` | Constructs a type with specified keys omitted. |
| `Record<K, T>` | `Record<string, User>` | Constructs an object type with keys `K` and values `T`. |
| `ReturnType<T>`| `ReturnType<typeof fetchUser>`| Extracts return type of a function. |
| `Awaited<T>` | `Awaited<Promise<User>>` | Unwraps nested Promise types to the resolved type. |

##### Standard HTTP Status Codes

| Code | Status Phrase | Meaning & When to Return |
| :--- | :--- | :--- |
| **200** | OK | Standard successful response. |
| **201** | Created | Entity successfully created in database. |
| **204** | No Content | Mutation succeeded; no body payload returned. |
| **301** | Moved Permanently | Resource permanently moved (SEO canonical redirect). |
| **302 / 307** | Found / Temporary Redirect | Temporary redirect; preserves HTTP method in 307. |
| **304** | Not Modified | Client cached copy is fresh (conditional ETag match). |
| **400** | Bad Request | Schema validation failed (Zod error). |
| **401** | Unauthorized | Missing or expired authentication token. |
| **403** | Forbidden | User authenticated but lacks required role/permission. |
| **404** | Not Found | Target resource does not exist. |
| **409** | Conflict | Unique constraint violation (e.g. email already exists). |
| **429** | Too Many Requests | Rate limit exceeded (Redis sliding window). |
| **500** | Internal Server Error | Unhandled server exception. |
| **503** | Service Unavailable | Database connection pool exhausted or server maintenance. |

#### Next.js 16 Compute Runtimes Comparison

| Dimension | Node.js Runtime | Edge Runtime |
| :--- | :--- | :--- |
| **API Compatibility** | Full Node.js (`fs`, `net`, `crypto`, `child_process`, native C++ binaries) | Subset of Web Standard APIs (`fetch`, `Request`, `Response`, `CryptoKey`, `WebSocket`) |
| **Cold Start Latency** | ~150ms - 500ms | **< 10ms** (Instant V8 isolate allocation) |
| **Memory Limit** | 512 MB - 4+ GB | 128 MB |
| **Max Execution Duration** | Minutes (Configurable) | 25 - 30 seconds |
| **Optimal Use-Case** | Heavy ORMs (Prisma, TypeORM), file streaming, PDF generation | Fast URL rewrites, geolocation routing, auth header validation |

#### Hardened Security Headers Matrix

| HTTP Header | Production Value | Security Defense |
| :--- | :--- | :--- |
| **Content-Security-Policy** | `default-src 'self'; script-src 'self' 'nonce-{nonce}' 'strict-dynamic'` | Neutralizes XSS and unauthorized script injection. |
| **Strict-Transport-Security** | `max-age=63072000; includeSubDomains; preload` | Forces browsers to communicate exclusively over HTTPS. |
| **X-Frame-Options** | `DENY` | Prevents page from being rendered inside an `<iframe>` (Clickjacking). |
| **X-Content-Type-Options** | `nosniff` | Blocks MIME-type sniffing attacks. |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Protects privacy by omitting sensitive path parameters in referrers. |
| **Permissions-Policy** | `camera=(), microphone=(), geolocation=()` | Disables unauthorized hardware access. |

#### Git & GitHub Actions CI/CD Pipeline Master Cheat Sheet

```yaml
# .github/workflows/production-ci.yml
name: Production Quality & Verification Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci --frozen-lockfile

      - name: TypeScript Static Analysis
        run: npx tsc --noEmit

      - name: ESLint Compliance
        run: npm run lint

      - name: Vitest Unit & Integration Tests
        run: npm test

      - name: Playwright E2E & Accessibility Tests
        run: |
          npx playwright install --with-deps
          npx playwright test

      - name: Build Next.js Production Bundle
        run: npm run build
```

#### PostgreSQL Performance Tuning & EXPLAIN Operators Cheat Sheet

| EXPLAIN Operator | Performance Cost | Meaning & Actionable Remedy |
| :--- | :--- | :--- |
| **Seq Scan** | High ($O(N)$) | Full table scan reading every disk block. Add an index on filtered columns! |
| **Index Scan** | Low ($O(\log N)$) | Traverses index tree and retrieves corresponding heap tuples from disk. |
| **Index Only Scan** | Ultra-Low | All queried columns exist directly in the index; zero heap reads required. |
| **Bitmap Index Scan** | Medium | Batches index tuple lookups to read disk blocks in physical sequential order. |
| **Hash Join** | Medium-High | Builds an in-memory hash table of smaller relation to join larger relation. |
| **Nested Loop** | Low-High | Loops over outer relation and seeks inner relation; fast if inner is indexed. |

[Back to top ⤴️](#-table-of-contents)

---

## 🧪 Example Projects

| Project | Builds on | What you practise | Stretch goal |
| --- | --- | --- | --- |
| [Starter project](./app) (in this repo) | [Stage 1](#1-stage-1-foundations-toolchain-project-anatomy--react-essentials), [Stage 2](#2-stage-2-app-router-file-conventions-routing-layouts--navigation), [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers) | Layouts, dynamic routes with `generateStaticParams`, Server and Client Components, a Server Action with `useActionState`, Route Handlers, `proxy.ts`, Vitest | Exercises 1.11, 2.11 and 3.13: About page, route group, note deletion |
| Todo app with Server Actions | [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers) | Forms without client JS, `revalidatePath`, `useOptimistic` | Drag-to-reorder with optimistic updates and rollback |
| Blog with Markdown and ISR | [Stage 2](#2-stage-2-app-router-file-conventions-routing-layouts--navigation), [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers), [Stage 4](#4-stage-4-data-layer-authentication-state-styling--assets) | `generateStaticParams`, `generateMetadata`, `sitemap.ts`, tag revalidation from a CMS webhook | Switch to Cache Components and compare the build output |
| Authentication starter | [Stage 4](#4-stage-4-data-layer-authentication-state-styling--assets), [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers) | Auth.js or Better Auth, a data access layer, role checks in actions | Passkeys (WebAuthn) and session revocation across devices |
| Streaming analytics dashboard | [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers), [Stage 5](#5-stage-5-caching-performance-security--platform-services) | Parallel routes, per-widget `<Suspense>`, `error.tsx` per slot, `React.cache` | Live updates over Server-Sent Events from a Route Handler |
| E-commerce storefront | [Stage 4](#4-stage-4-data-layer-authentication-state-styling--assets), [Stage 5](#5-stage-5-caching-performance-security--platform-services) | Partial Prerendering, `next/image`, Stripe Checkout and webhooks | Cart that survives sign-in, with `"use cache: private"` |
| AI chat application | [Stage 5](#5-stage-5-caching-performance-security--platform-services) | Streaming responses from a Route Handler, rate limiting in the proxy | Tool calling with structured output and a pgvector knowledge base |
| Multi-tenant SaaS | [Stage 3](#3-stage-3-server-components-data-fetching-server-actions--route-handlers), [Stage 4](#4-stage-4-data-layer-authentication-state-styling--assets), [Stage 6](#6-stage-6-testing-deployment--architecture-patterns) | Hostname rewrites in `proxy.ts`, PostgreSQL row-level security, Docker deployment | Per-tenant custom domains and billing |

Complete implementations of several of these, kept from the earlier edition, are in the flagship masterclass.

## 📝 Cheat Sheets

### CLI / Commands

```bash
npx create-next-app@latest my-app          # scaffold (TypeScript, ESLint, Tailwind, App Router)
npm run dev                                # next dev: Turbopack, Fast Refresh, http://localhost:3000
next dev --webpack                         # dev server with webpack instead of Turbopack
next dev -p 4000 -H 0.0.0.0                # custom port, listen on all interfaces
next build                                 # production build (Turbopack), prints the route table
next build --webpack                       # production build with webpack
next start -p 8080                         # serve a build (not for output: 'standalone')
node .next/standalone/server.js            # serve a standalone build (copy .next/static and public first)
next typegen                               # generate PageProps / LayoutProps / RouteContext types
next info                                  # environment report for bug reports
next upgrade                               # bump next, react, react-dom and types together
next analyze export                        # write a bundle analysis (16.4+)
npx eslint .                               # lint (next lint was removed in 16)
npx @next/codemod@canary upgrade latest    # run the version upgrade codemods
npx @next/codemod@canary next-async-request-api .   # finish the async params/cookies migration
NODE_OPTIONS='--inspect' next dev          # attach a debugger to server code
NEXT_TELEMETRY_DISABLED=1 next build       # disable anonymous telemetry
npm test                                   # starter: vitest run
docker build -t learn-nextjs . && docker run -p 8080:8080 learn-nextjs   # starter image
```

### File Conventions Quick Reference

| File | Purpose |
| :--- | :--- |
| `layout.tsx` | Persistent UI wrapper shared by child routes |
| `page.tsx` | UI for a route; makes the segment public |
| `template.tsx` | Like a layout, but remounts on navigation |
| `loading.tsx` | `<Suspense>` fallback for the segment |
| `error.tsx` | Error boundary for the segment (`'use client'`, receives `error` and `retry`) |
| `global-error.tsx` | Error boundary for the root layout; renders `<html>` and `<body>` |
| `not-found.tsx` | UI for `notFound()` and unmatched URLs |
| `forbidden.tsx`, `unauthorized.tsx` | UI for `forbidden()` / `unauthorized()` (`experimental.authInterrupts`) |
| `default.tsx` | Parallel route slot fallback (required in 16) |
| `route.ts` | HTTP handler (`GET`, `POST`, ...) |
| `proxy.ts` | Runs before routing (was `middleware.ts`) |
| `instrumentation.ts` | Server start-up hook (OpenTelemetry, error reporting) |
| `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx` | Generated metadata files |

### API Quick Reference

| Task | Code |
| --- | --- |
| Read route params | `const { slug } = await params` |
| Read the query string in a page | `const { q } = await searchParams` |
| Read the query string in a Client Component | `useSearchParams().get('q')` |
| Read a cookie | `(await cookies()).get('session')?.value` |
| Read a header | `(await headers()).get('user-agent')` |
| Opt out of prerendering | `await connection()` |
| Cache a function (Cache Components) | `'use cache'; cacheLife('hours'); cacheTag('posts')` |
| Cache a `fetch` (default model) | `fetch(url, { next: { revalidate: 3600, tags: ['posts'] } })` |
| Never cache a `fetch` | `fetch(url, { cache: 'no-store' })` |
| Deduplicate per request | `export const getUser = cache(async (id) => ...)` |
| Invalidate for everyone | `revalidateTag('posts', 'max')` |
| Read-your-writes in an action | `updateTag('posts')` |
| Invalidate a page | `revalidatePath('/posts')` |
| Re-render without cache changes | `refresh()` (action) or `router.refresh()` (client) |
| Redirect on the server | `redirect('/login')` / `permanentRedirect('/new')` |
| 404 | `notFound()` |
| Form state from an action | `const [state, action, pending] = useActionState(fn, initial)` |
| Optimistic value | `const [value, add] = useOptimistic(base, reducer)` |
| Run work after the response | `after(() => log(event))` from `next/server` |
| Prerender params | `export function generateStaticParams() { return [{ slug: 'a' }] }` |
| Dynamic title | `export async function generateMetadata({ params }) { ... }` |

### Data Fetching Cheat Sheet

```ts
import { revalidateTag, updateTag } from 'next/cache';

// Cached until invalidated (static)
await fetch('https://api.example.com/catalogue', { cache: 'force-cache' });

// Never cached (dynamic route)
await fetch('https://api.example.com/live', { cache: 'no-store' });

// Time-based revalidation (ISR)
await fetch('https://api.example.com/articles', { next: { revalidate: 60 } });

// Tag-based revalidation
await fetch('https://api.example.com/posts', { next: { tags: ['posts'] } });
revalidateTag('posts', 'max'); // stale-while-revalidate for all readers
updateTag('posts');            // Server Actions only: expire now for read-your-writes
```

## 📚 Resources

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js blog and release announcements](https://nextjs.org/blog)
- [Next.js source repository and releases](https://github.com/vercel/next.js/releases)
- [Next.js Learn course](https://nextjs.org/learn)
- [React documentation](https://react.dev/)
- [React blog](https://react.dev/blog)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vitest documentation](https://vitest.dev/)
- [Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/)

## 🤝 Contributing

Contributions are welcome. Read the [contributing guide](https://github.com/TheLearningHubOrg/.github/blob/main/CONTRIBUTING.md) and the [code of conduct](https://github.com/TheLearningHubOrg/.github/blob/main/CODE_OF_CONDUCT.md) before you open a pull request. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), which drive the automated changelog.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) and its maintainers
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/), used by the starter's tests
- [ESLint](https://eslint.org/) with `eslint-config-next`

## 🌐 Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## ☕ Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through GitHub Sponsors. Your support helps me keep these guides up to date. Thank you!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-donate-FFDD00?logo=buymeacoffee&logoColor=000)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green?logo=github)](https://github.com/sponsors/manthanank)

---

Show your support by 🌟 the repository.
