# Learn Next.js 🚀

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js Version](https://img.shields.io/badge/Next.js-15.2+-black.svg?logo=next.js)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tested with Vitest](https://img.shields.io/badge/Tested%20with-Vitest-yellow.svg?logo=vitest)](https://vitest.dev/)
[![Production Ready](https://img.shields.io/badge/Status-Enterprise%20Grade-brightgreen.svg)](https://github.com/manthanank/learn-nextjs)

**An exhaustive, production-grade masterclass from absolute zero to staff-level full-stack web engineering with Next.js 15 & React 19.**  
Master the App Router, React Server Components (RSC), Server Actions, Partial Prerendering (PPR), Turbopack, Prisma/Drizzle ORMs, caching hierarchies, and enterprise deployment.

[Getting Started](#-getting-started) • [App Router](#2-stage-2-app-router-rendering-modes--navigation) • [Server Components](#3-stage-3-react-server-components-rsc--server-actions) • [ORMs & State](#4-stage-4-enterprise-state-styling-prisma--drizzle-orm) • [Caching & Security](#5-stage-5-caching-hierarchies-partial-prerendering-ppr--security) • [Interview Prep](#7-stage-7-staff-full-stack-interview-handbook--production-cheatsheet)

<br/>

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="180">
</a>

</div>

---

## 🗺️ 7-Stage Pedagogical Roadmap

```mermaid
flowchart LR
    S1["Stage 1: Foundations & React Essentials"] --> S2["Stage 2: App Router & Rendering"]
    S2 --> S3["Stage 3: Server Components & Actions"]
    S3 --> S4["Stage 4: ORMs, DB & Auth"]
    S4 --> S5["Stage 5: Caching & PPR"]
    S5 --> S6["Stage 6: Testing & Containerization"]
    S6 --> S7["Stage 7: Staff Interview Handbook"]
```

| Stage | Focus Domain | Core Concepts & Engineering Outcomes |
| :--- | :--- | :--- |
| **Stage 1** | **Absolute Beginner Foundations** | Next.js 15 App Router vs Pages Router, Turbopack, React 19 essentials, project architecture. |
| **Stage 2** | **App Router & Rendering Modes** | File-system conventions (`page`, `layout`, `loading`, `error`), SSG, SSR, ISR, dynamic routes, navigation. |
| **Stage 3** | **RSC & Server Actions** | React Server Component streaming payload (`react-server-dom-webpack`), `'use client'`, Server Actions, Zod forms. |
| **Stage 4** | **Enterprise Databases & Auth** | Auth.js / Better Auth, Prisma & Drizzle ORM, connection pooling, Tailwind CSS & shadcn/ui. |
| **Stage 5** | **Caching & Partial Prerendering** | 4-layer caching pipeline, on-demand `revalidateTag`, Partial Prerendering (PPR), CSP security headers. |
| **Stage 6** | **Automated Testing & DevOps** | Unit/integration testing with Vitest, Playwright E2E, Docker multi-stage builds, Vercel & Nginx edge proxies. |
| **Stage 7** | **Staff Full-Stack Interview Handbook** | Hydration mismatches, RSC wire protocol, memory profiling, 35+ staff-level interview Q&As, cheat sheet. |

---



## 1. Stage 1: Absolute Beginner Foundations & React Essentials

### 1.1 Introduction to Next.js 15
```mermaid
flowchart TD
    Client["Client Browser"] --> EdgeEdge["Edge Network / CDN"]
    EdgeEdge --> Middleware["Edge Middleware (middleware.ts)"]
    Middleware --> AppRouter["App Router Controller"]
    AppRouter --> RSC["React Server Components (Node/Edge Runtime)"]
    RSC --> Flight["Generate RSC Flight Protocol Data Stream"]
    Flight --> Stream["Stream HTML + Flight Chunks to Client"]
    Stream --> Hydrate["Client Browser Hydrates 'use client' Islands"]
```

### Line-by-Line Code Breakdown: Modern Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: { template: '%s | Enterprise Hub', default: 'Enterprise Hub' },
  description: 'Production full-stack web platform built with Next.js 15.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main id="root-portal">{children}</main>
      </body>
    </html>
  );
}
```

| Line / Statement | Architectural Component | Pedagogical Runtime Purpose |
| :--- | :--- | :--- |
| `import type { Metadata } from 'next'` | **Type Definition** | Imports type definition for static and dynamic metadata export. Stripped at compile time. |
| `const inter = Inter({ ... })` | **Font Optimization (`next/font`)** | Self-hosts Google Fonts locally at build time, eliminating external render-blocking font network requests and zero layout shifts. |
| `export const metadata: Metadata` | **Metadata API** | Statically hoisted to the document `<head>`, generating `<title>`, `<meta name="description">`, and OpenGraph tags automatically. |
| `RootLayout({ children })` | **Root Server Component** | Wraps every route in the application. Preserves client state across page navigations without full document unmounting. |
| `{children}` | **Route Projection Slot** | Nested route pages (`app/page.tsx`, `app/dashboard/page.tsx`) are projected inside this slot by the App Router reconciler. |


### What is Next.js?

**Next.js** is an open-source React framework created and maintained by Vercel. It enables developers to build full-stack web applications by extending the latest React features—including React Server Components (RSC), Server Actions, and Streaming—with built-in routing, rendering optimizations, asset bundling, and deployment utilities.

Unlike client-only React Single Page Applications (SPAs), Next.js executes code on both the server and the client, providing automatic server-side rendering, instant page loads, search engine optimization (SEO), and zero-config bundling.

[Back to top⤴️](#table-of-contents)

### Features

- **App Router**: Modern file-system based router supporting nested layouts, error boundaries, streaming, and loading states.
- **React Server Components (RSC)**: Fetch data and render UI directly on the server without shipping JavaScript to the client.
- **Server Actions**: Asynchronous server functions callable directly from client components and HTML forms with automatic cache revalidation.
- **Hybrid Rendering Modes**: Mix Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR) per route.
- **Turbopack**: Rust-based successor to Webpack providing lightning-fast local development HMR and builds.
- **Built-in Optimizations**: Automatic image compression (`next/image`), zero-layout-shift font hosting (`next/font`), script loading (`next/script`), and metadata SEO management.
- **Edge & Node.js Runtimes**: Deploy lightweight serverless functions globally across Edge networks or traditional Node.js servers.

[Back to top⤴️](#table-of-contents)

### Why Next.js?

| Traditional React SPA | Next.js Full-Stack App |
| :--- | :--- |
| Empty HTML shell downloaded; client renders everything | Server delivers fully populated HTML instantly |
| Slower Time-to-First-Byte (TTFB) and First Contentful Paint (FCP) | Optimal Core Web Vitals with streaming HTML |
| SEO challenges requiring pre-rendering workarounds | First-class SEO with server rendering and dynamic metadata |
| Separate backend server required for API & DB queries | Unified codebase: Route Handlers and Server Actions access DB directly |
| Client bundle grows linearly with all imported libraries | Server dependencies never ship to the user's browser |

[Back to top⤴️](#table-of-contents)

### Architecture

Next.js architecture is organized around the server-client continuum:

```tree
       Browser Request (URL)
                │
                ▼
       ┌─────────────────────────────────────────────────────────┐
       │                  Next.js Middleware                     │
       │       (Edge Runtime: Auth, Redirects, Rewrites)         │
       └────────────────────────────┬────────────────────────────┘
                                    │
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                   App Router Pipeline                   │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │               Server Components (RSC)             │  │
       │  │  - Direct Database / ORM Access (Prisma/Drizzle)  │  │
       │  │  - Secrets & Environment Variables Secure         │  │
       │  │  - Zero Client JavaScript Bundle Overhead         │  │
       │  └─────────────────────────┬─────────────────────────┘  │
       │                            │ props (JSON / RSC Payload) │
       │                            ▼                            │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │             Client Components ('use client')      │  │
       │  │  - Browser Event Handlers (onClick, onChange)     │  │
       │  │  - React Hooks (useState, useEffect)              │  │
       │  │  - Interactivity & Client Animation               │  │
       │  └───────────────────────────────────────────────────┘  │
       └────────────────────────────┬────────────────────────────┘
                                    │ Streamed HTML + RSC Payload
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                   Browser Real DOM                      │
       │      Instant Paint + Background Hydration               │
       └─────────────────────────────────────────────────────────┘
```

[Back to top⤴️](#table-of-contents)

### Rendering Modes

1. **Static Rendering (Default)**: Routes are pre-rendered at build time or revalidated in the background. Ideal for blogs, marketing, and documentation.
2. **Dynamic Rendering**: Routes are rendered on the server for each incoming user request. Ideal for personalized dashboards and live search.
3. **Streaming**: UI is progressively rendered and streamed to the browser using React Suspense, delivering initial content while heavy components load.
4. **Partial Prerendering (PPR)**: Combines a static shell with dynamic streamed components in the same route.

[Back to top⤴️](#table-of-contents)

### Version History

| Version | Release Year | Key Innovations |
| :--- | :--- | :--- |
| **1.0** | 2016 | Initial release: Zero-config SSR for React |
| **9.0** | 2019 | Dynamic routing, API routes, automatic static optimization |
| **12.0** | 2021 | Rust compiler (SWC), React 18 support, Edge runtime |
| **13.0** | 2022 | **App Router** introduction, React Server Components, Turbopack alpha |
| **14.0** | 2023 | Stable Server Actions, Partial Prerendering preview |
| **15.0** | 2024 | React 19 support, async request APIs (`params`, `cookies`), Turbopack stable for dev |

[Back to top⤴️](#table-of-contents)

### App Router vs Pages Router

| Feature | App Router (`app/`) | Pages Router (`pages/`) |
| :--- | :--- | :--- |
| **Component Paradigm** | Server Components by default | Client Components by default |
| **Data Fetching** | Async/await inside components | `getServerSideProps`, `getStaticProps` |
| **Layouts** | Nested, state-preserving layouts | Custom `_app.js` and `getLayout` patterns |
| **Mutations** | Server Actions | API Routes with manual fetch |
| **Streaming** | Native Suspense & `loading.tsx` | Custom SSR workarounds |

[Back to top⤴️](#table-of-contents)

### Project Structure

```tree
learn-nextjs/
├── .github/workflows/      # CI/CD workflows (Docker, Releases)
├── .vscode/                # Editor settings and launch tasks
├── app/                    # Next.js App Router root
│   ├── layout.tsx          # Root HTML layout wrapper
│   ├── page.tsx            # Home page ("/")
│   ├── loading.tsx         # Root streaming fallback
│   ├── error.tsx           # Client error boundary
│   ├── not-found.tsx       # 404 handler
│   ├── globals.css         # Global styling
│   └── api/                # Route Handlers (REST endpoints)
├── public/                 # Static public assets (images, icons)
├── Dockerfile              # Multi-stage production container
├── next.config.ts          # Next.js framework configuration
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

[Back to top⤴️](#table-of-contents)

---

## React Essentials

Next.js is built on top of React. A solid foundation in core React concepts is essential:

### JSX

JSX combines HTML-like markup with JavaScript expressions:

```tsx
export function WelcomeBanner({ username }: { username: string }) {
  return (
    <div className="banner">
      <h1>Welcome back, {username}!</h1>
      <p>Today is {new Date().toLocaleDateString()}.</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Components

Build small, reusable functional components:

```tsx
interface CardProps {
  title: string;
  description: string;
  actionUrl: string;
}

export function FeatureCard({ title, description, actionUrl }: CardProps) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={actionUrl}>Learn More &rarr;</a>
    </article>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Props

Props pass data downwards from parent components to children:

```tsx
interface UserAvatarProps {
  src: string;
  size?: number;
  altText: string;
}

export function UserAvatar({ src, size = 48, altText }: UserAvatarProps) {
  return <img src={src} width={size} height={size} alt={altText} className="rounded-full" />;
}
```

[Back to top⤴️](#table-of-contents)

### State

Component-level dynamic state using `useState` inside Client Components:

```tsx
'use client';

import { useState } from 'react';

export function VoteWidget() {
  const [votes, setVotes] = useState(0);

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => setVotes(v => v + 1)}>Upvote</button>
      <span>{votes}</span>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Events

```tsx
'use client';

export function SearchBox() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Searching for:', formData.get('query'));
  };

  return (
    <form onSubmit={handleSearch}>
      <input name="query" placeholder="Type keyword..." />
      <button type="submit">Search</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Conditional Rendering

```tsx
export function NotificationBadge({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <span className="badge-pill">
      {count > 99 ? '99+' : count}
    </span>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Lists

```tsx
interface Topic {
  id: string;
  label: string;
}

export function TopicCatalog({ topics }: { topics: Topic[] }) {
  return (
    <ul>
      {topics.map(t => (
        <li key={t.id}>{t.label}</li>
      ))}
    </ul>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Forms

```tsx
'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <p>Thank you for subscribing!</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Hooks

Essential hooks used in Client Components: `useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`, and `useTransition`.

[Back to top⤴️](#table-of-contents)

### Context API

Broadcasting state across client component trees:

```tsx
'use client';

import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext<{ isOpen: boolean; toggle: () => void } | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider');
  return ctx;
};
```

[Back to top⤴️](#table-of-contents)

---

## JavaScript & TypeScript

### ES6+

```ts
// Destructuring & Spread
const config = { env: 'production', port: 3000 };
const appConfig = { ...config, debug: false };

// Nullish Coalescing and Optional Chaining
const dbPort = process.env.DB_PORT ?? '5432';
```

[Back to top⤴️](#table-of-contents)

### Modules

```ts
// lib/utils.ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
```

[Back to top⤴️](#table-of-contents)

### Async/Await & Promises

```ts
export async function getLiveMetrics() {
  const response = await fetch('https://api.example.com/metrics');
  if (!response.ok) throw new Error('Failed to fetch live metrics');
  return response.json();
}
```

[Back to top⤴️](#table-of-contents)

### Types & Interfaces

```ts
export interface Article {
  slug: string;
  title: string;
  publishedAt: string;
  readTime: number;
}

export type UserRole = 'admin' | 'editor' | 'viewer';
```

[Back to top⤴️](#table-of-contents)

### Enums

```ts
export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}
```

[Back to top⤴️](#table-of-contents)

### Generics

```ts
export interface ApiResponse<T> {
  data: T;
  timestamp: string;
  success: boolean;
}

export async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  return res.json();
}
```

[Back to top⤴️](#table-of-contents)

### Utility Types

- `Partial<T>`: Make all properties optional.
- `Pick<T, K>`: Select specific properties `K`.
- `Omit<T, K>`: Omit specific properties `K`.
- `Record<K, T>`: Construct dictionary types.

[Back to top⤴️](#table-of-contents)

---

## Project Setup

### Installation & create-next-app

Scaffold a brand new project using the official CLI:

```bash
npx create-next-app@latest my-next-app --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

[Back to top⤴️](#table-of-contents)

### Turbopack

Turbopack is the default bundler for local development in Next.js 15:

```bash
# Run local dev server with Turbopack acceleration
next dev --turbopack
```

[Back to top⤴️](#table-of-contents)

### Package Managers

```bash
# pnpm
pnpm create next-app

# npm
npm create next-app

# Yarn
yarn create next-app

# Bun
bun create next-app
```

[Back to top⤴️](#table-of-contents)

### Folder Structure & Configuration

Key configuration files:
- `next.config.ts`: Image domains, redirects, headers, experimental flags.
- `tsconfig.json`: TypeScript compiler options and `@/*` path mapping.
- `.env.local`: Local secret environment variables (never commit to git).

[Back to top⤴️](#table-of-contents)



---

## 2. Stage 2: App Router, Rendering Modes & Navigation
```mermaid
flowchart TD
    subgraph RoutingHierarchy["App Router File Hierarchy"]
        Layout["layout.tsx (Shared Shell, Persistent State)"]
        Template["template.tsx (Remounted on Navigation)"]
        Loading["loading.tsx (Instant React Suspense Boundary)"]
        Error["error.tsx ('use client' Error Boundary)"]
        Page["page.tsx (Unique Route Leaf Content)"]
    end
    Layout --> Template
    Template --> Loading
    Loading --> Error
    Error --> Page
```


The Next.js App Router relies on a file-system hierarchy inside the `app` directory to define routes and UI layouts.

### app Directory

Every folder inside `app` defines a route segment mapping directly to a URL path.

```tree
app/
├── page.tsx               -> /
├── about/
│   └── page.tsx           -> /about
└── shop/
    ├── layout.tsx         -> /shop/* shell
    ├── page.tsx           -> /shop
    └── [id]/
        └── page.tsx       -> /shop/:id
```

[Back to top⤴️](#table-of-contents)

### layout.tsx

Layouts wrap child pages and persist across navigations without re-rendering:

```tsx
// app/layout.tsx (Root Layout - Required)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">My Next.js Application</header>
        <main>{children}</main>
        <footer>&copy; 2026</footer>
      </body>
    </html>
  );
}
```

[Back to top⤴️](#table-of-contents)

### page.tsx

Defines the unique UI rendered for a given route segment:

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 15</h1>
      <p>High-performance fullstack React.</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### loading.tsx

Creates an automatic React Suspense boundary around the corresponding `page.tsx`:

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header" />
      <div className="skeleton-body" />
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### error.tsx

Defines a client-side React error boundary isolating page crashes:

```tsx
// app/error.tsx
'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-box">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### global-error.tsx

Catches errors in the root `app/layout.tsx`. Must define its own `<html>` and `<body>` tags:

```tsx
// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Critical System Error</h2>
        <button onClick={() => reset()}>Restart App</button>
      </body>
    </html>
  );
}
```

[Back to top⤴️](#table-of-contents)

### not-found.tsx

Renders custom 404 UI when a route is missing or when `notFound()` is invoked:

```tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <Link href="/">Return to Home</Link>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### route.ts

Creates custom HTTP API Route Handlers:

```ts
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ]);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body }, { status: 201 });
}
```

[Back to top⤴️](#table-of-contents)

### Nested Routes

Folders nested inside other folders form nested route paths: `app/blog/news/page.tsx` maps to `/blog/news`.

[Back to top⤴️](#table-of-contents)

### Dynamic Routes

Use brackets to declare dynamic segments: `app/products/[id]/page.tsx`:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h2>Viewing Product: {id}</h2>;
}
```

[Back to top⤴️](#table-of-contents)

### Catch-all Routes

Capture all subsequent segments using `[...slug]`: `app/docs/[...slug]/page.tsx` matches `/docs/a`, `/docs/a/b`, etc.:

```tsx
export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <p>Section: {slug.join(' / ')}</p>;
}
```

[Back to top⤴️](#table-of-contents)

### Optional Catch-all Routes

Enclosed in double brackets `[[...slug]]` to also match the root base URL without subpaths: `app/shop/[[...slug]]/page.tsx` matches `/shop` and `/shop/a/b`.

[Back to top⤴️](#table-of-contents)

### Route Groups

Organize route folders without affecting the public URL using parentheses `(folder)`:

```tree
app/
├── (marketing)/
│   ├── about/page.tsx     -> /about
│   └── contact/page.tsx   -> /contact
└── (shop)/
    └── cart/page.tsx      -> /cart
```

[Back to top⤴️](#table-of-contents)

### Parallel Routes

Simultaneously render multiple pages in the same layout using named slots (`@slot`):

```tsx
// app/dashboard/layout.tsx
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

[Back to top⤴️](#table-of-contents)

### Intercepting Routes

Load a route within the current layout while displaying a modal overlay, using conventions like `(.)photo/[id]`.

[Back to top⤴️](#table-of-contents)

---

## Components

### Server Components

Server Components are the default in App Router. They run strictly on the server:

```tsx
import { db } from '@/lib/db';

export async function UserList() {
  const users = await db.user.findMany();

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Client Components

Add `'use client'` to the top of a file to access client state, event handlers, and browser APIs:

```tsx
'use client';

import { useState } from 'react';

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(prev => !prev)}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Shared Components

Design pure components that can be safely imported into both Server and Client Components.

[Back to top⤴️](#table-of-contents)

### Layouts vs Templates

- **Layout**: State is preserved across route navigations; layout components do NOT remount.
- **Template (`template.tsx`)**: Re-creates a fresh component instance and resets DOM state on every navigation.

[Back to top⤴️](#table-of-contents)

### Metadata API

Define page SEO tags statically or dynamically:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js 15 Masterclass',
  description: 'The ultimate guide to building fullstack React applications.',
};
```

[Back to top⤴️](#table-of-contents)

---

## Rendering

### Static Rendering (SSG)

Routes are compiled to static HTML at build time or revalidated in the background.

[Back to top⤴️](#table-of-contents)

### Server-Side Rendering (SSR)

Routes are dynamically rendered on the server on each incoming user request:

```tsx
// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function LiveClock() {
  return <p>Current Server Time: {new Date().toISOString()}</p>;
}
```

[Back to top⤴️](#table-of-contents)

### Client-Side Rendering (CSR)

Standard client execution using Client Components with `useEffect` or TanStack Query.

[Back to top⤴️](#table-of-contents)

### Incremental Static Regeneration (ISR)

Update static pages in the background without rebuilding the entire website:

```tsx
// Revalidate this page every 60 seconds
export const revalidate = 60;

export default async function StaticNewsFeed() {
  const news = await fetch('https://api.example.com/news').then(r => r.json());
  return <div>{JSON.stringify(news)}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Partial Prerendering (PPR)

Combines ultra-fast static HTML delivery with dynamic streamed content in the same route.

[Back to top⤴️](#table-of-contents)

### Streaming

Progressively streams HTML chunks to the browser using React Suspense:

```tsx
import { Suspense } from 'react';
import { SlowMetricWidget } from './SlowWidget';

export default function AnalyticsPage() {
  return (
    <div>
      <h1>Real-time Metrics</h1>
      <Suspense fallback={<p>Streaming metrics from cloud...</p>}>
        <SlowMetricWidget />
      </Suspense>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Edge vs Node Runtime

Configure per-route runtimes in `page.tsx` or `route.ts`:

```ts
export const runtime = 'edge'; // or 'nodejs' (default)
```

[Back to top⤴️](#table-of-contents)

---

## Data Fetching

### fetch() in Next.js

Next.js extends the native Web `fetch()` API with caching and revalidation controls:

```tsx
// Cached indefinitely (static)
const cachedData = await fetch('https://api.example.com/products', {
  cache: 'force-cache',
});

// Always fresh on every request (dynamic)
const liveData = await fetch('https://api.example.com/live', {
  cache: 'no-store',
});

// Time-based Revalidation (ISR)
const timedData = await fetch('https://api.example.com/articles', {
  next: { revalidate: 3600 }, // 1 hour
});
```

[Back to top⤴️](#table-of-contents)

### Server Fetching vs Client Fetching

- **Server Fetching**: Direct database queries or API requests inside Server Components without CORS limitations or leaking API keys.
- **Client Fetching**: Handled inside Client Components via libraries like SWR or TanStack Query for live polling or user-driven interactions.

[Back to top⤴️](#table-of-contents)

### Async Components

Server Components can be native `async` functions:

```tsx
export default async function ProfileDashboard() {
  const profile = await fetch('https://api.example.com/me').then(r => r.json());

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### cache() and unstable_cache()

Deduplicate database queries within a single render pass or across requests:

```ts
import { cache } from 'react';
import { db } from '@/lib/db';

export const getUser = cache(async (userId: string) => {
  return db.user.findUnique({ where: { id: userId } });
});
```

[Back to top⤴️](#table-of-contents)



---

## 3. Stage 3: React Server Components (RSC) & Server Actions
```mermaid
sequenceDiagram
    autonumber
    participant Browser as Client Browser ('use client')
    participant Action as Server Action ('use server')
    participant DB as Postgres Database (Prisma)
    participant Cache as Next.js Data Cache

    Browser->>Action: POST FormData (Form Submission)
    Note over Action: Validates payload using Zod schema
    Action->>DB: INSERT INTO users VALUES (...)
    DB-->>Action: Record Created
    Action->>Cache: revalidateTag('users-list')
    Action-->>Browser: Return { success: true, user }
    Note over Browser: React re-renders with fresh Server Component stream
```


### Introduction

React Server Components (RSC) represent a paradigm shift in React architecture. Components render exclusively on the server into a special format called the **RSC Payload**, which is streamed to the browser.

[Back to top⤴️](#table-of-contents)

### Benefits

- **Zero Bundle Size**: Large dependencies (e.g. `markdown-it`, `date-fns`, heavy parsers) executed on the server do not add bytes to the client JavaScript bundle.
- **Direct Backend Access**: Query databases, internal microservices, and file systems directly inside component render functions.
- **Enhanced Security**: API secrets, database credentials, and internal tokens never leave the server environment.

[Back to top⤴️](#table-of-contents)

### Limitations

Server Components cannot:
- Use browser-only APIs (`window`, `localStorage`, `document`).
- Use React state or lifecycle hooks (`useState`, `useReducer`, `useEffect`).
- Attach interactive DOM event listeners (`onClick`, `onChange`).

[Back to top⤴️](#table-of-contents)

### Composition Patterns

To pass Server Components into Client Components without turning them into Client Components, use the **children composition pattern**:

```tsx
// ClientWrapper.tsx ('use client')
'use client';
export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <div className="client-wrapper">{children}</div>;
}

// Page.tsx (Server Component)
import { ClientWrapper } from './ClientWrapper';
import { ServerContent } from './ServerContent';

export default function Page() {
  return (
    <ClientWrapper>
      <ServerContent /> {/* Rendered on server, passed as children! */}
    </ClientWrapper>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Best Practices

- Keep components as Server Components by default.
- Push Client Components to the leaves of your component tree.
- Pass serializable props between Server and Client boundaries.

[Back to top⤴️](#table-of-contents)

---

## Client Components

### 'use client' Directive

The `'use client'` directive defines the boundary between server-only and client-interactive code:

```tsx
'use client';

import { useState, useEffect } from 'react';

export function InteractiveWidget() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log('Mounted on client browser');
  }, []);

  return (
    <button onClick={() => setActive(a => !a)}>
      State: {active ? 'On' : 'Off'}
    </button>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Browser APIs & Side Effects

Inside Client Components, access browser globals safely after mount:

```tsx
'use client';

import { useEffect, useState } from 'react';

export function GeolocationDisplay() {
  const [coords, setCoords] = useState<string>('Detecting...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords(`${pos.coords.latitude}, ${pos.coords.longitude}`),
      () => setCoords('Location access denied')
    );
  }, []);

  return <p>Coordinates: {coords}</p>;
}
```

[Back to top⤴️](#table-of-contents)

---

## Navigation

### Link Component

The `next/link` component extends HTML `<a>` tags with automatic viewport prefetching and client-side transitions:

```tsx
import Link from 'next/link';

export function NavigationMenu() {
  return (
    <nav className="nav-bar">
      <Link href="/">Home</Link>
      <Link href="/dashboard" prefetch={true}>Dashboard</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useRouter()

Programmatic navigation in Client Components:

```tsx
'use client';

import { useRouter } from 'next/navigation';

export function CheckoutButton() {
  const router = useRouter();

  const handleCheckout = async () => {
    router.push('/checkout/summary');
    router.refresh(); // Refresh current server route
  };

  return <button onClick={handleCheckout}>Proceed to Checkout</button>;
}
```

[Back to top⤴️](#table-of-contents)

### redirect() and permanentRedirect()

Server-side redirection in Server Components, Route Handlers, and Server Actions:

```ts
import { redirect, permanentRedirect } from 'next/navigation';

export async function authenticateUser() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
}
```

[Back to top⤴️](#table-of-contents)

### notFound()

Triggers the nearest `not-found.tsx` boundary:

```tsx
import { notFound } from 'next/navigation';

export default async function ProductView({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await db.product.findUnique({ where: { id } });

  if (!product) {
    notFound();
  }

  return <h1>{product.title}</h1>;
}
```

[Back to top⤴️](#table-of-contents)

---

## Server Actions

### Forms & Mutations

Server Actions are asynchronous functions that execute securely on the server, invokable directly from forms:

```tsx
// app/actions/todos.ts
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;
  if (!title) throw new Error('Title is required');

  await db.todo.create({ data: { title } });
  revalidatePath('/todos'); // Instant cache invalidation
}

// In Component:
export function AddTodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" required placeholder="New task..." />
      <button type="submit">Create Task</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Optimistic Updates

Use `useOptimistic` to instantly update the UI while a Server Action completes:

```tsx
'use client';

import { useOptimistic } from 'react';
import { updateLikeCount } from '@/app/actions';

export function LikeWidget({ initialLikes }: { initialLikes: number }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    initialLikes,
    (state, addition: number) => state + addition
  );

  return (
    <button
      onClick={async () => {
        setOptimisticLikes(1);
        await updateLikeCount();
      }}
    >
      ❤️ {optimisticLikes}
    </button>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Forms

### React Hook Form & Zod Validation

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const userSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
});

type UserInput = z.infer<typeof userSchema>;

export function ValidatedSignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserInput>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserInput) => {
    console.log('Validated form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      {errors.username && <p className="error">{errors.username.message}</p>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <button type="submit" disabled={isSubmitting}>Sign Up</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## API Routes

### Route Handlers

Route Handlers are defined in `route.ts` files and support standard Web Request and Response APIs:

```ts
// app/api/items/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter');

  return NextResponse.json({
    items: ['Item A', 'Item B'],
    filter,
  });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ created: true, payload }, { status: 201 });
}
```

[Back to top⤴️](#table-of-contents)

---

## Middleware

Middleware executes before a request is completed, enabling authentication verification, rewrites, and security headers:

```ts
// middleware.ts (in root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  // Protect private routes
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('X-Custom-Security-Header', 'StrictNextApp');
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
};
```

[Back to top⤴️](#table-of-contents)



---

## 4. Stage 4: Enterprise State, Styling, Prisma & Drizzle ORM

### Auth.js (NextAuth.js)

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

[Back to top⤴️](#table-of-contents)

### Better Auth

A modern, type-safe authentication framework designed for fullstack TypeScript:

```ts
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
});
```

[Back to top⤴️](#table-of-contents)

---

## Authorization

### Role-Based Access Control (RBAC)

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

[Back to top⤴️](#table-of-contents)

---

## Database & ORM

### Prisma ORM

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

[Back to top⤴️](#table-of-contents)

### Drizzle ORM

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

[Back to top⤴️](#table-of-contents)

---

## State Management

Next.js separates state into Server State and Client State:
- **Server State**: Managed natively via Server Components, `fetch()`, `revalidatePath`, and React Server Actions.
- **Client State**: Managed via Zustand, Redux Toolkit, or React Context for local modals, themes, and client carts.

[Back to top⤴️](#table-of-contents)

---

## Styling & UI Libraries

### Tailwind CSS & shadcn/ui

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

[Back to top⤴️](#table-of-contents)

---

## Images

### next/image

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

[Back to top⤴️](#table-of-contents)

---

## Fonts

### next/font

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

[Back to top⤴️](#table-of-contents)

---

## Metadata

Configure SEO, OpenGraph tags, sitemaps, and robots:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Learn Next.js',
    default: 'Learn Next.js - Full-stack Masterclass',
  },
  description: 'Master Next.js 15, React 19, Server Components, and Server Actions.',
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

[Back to top⤴️](#table-of-contents)



---

## Internationalization (i18n)

Implement multi-language support in App Router using `next-intl`:

```tree
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

[Back to top⤴️](#table-of-contents)

---

## 5. Stage 5: Caching Hierarchies, Partial Prerendering (PPR) & Security
```mermaid
flowchart TD
    Req["Incoming HTTP Request"] --> L1["1. Request Memoization (React Component Tree Deduplication)"]
    L1 -- "Cache Miss" --> L2["2. Data Cache (Persistent fetch() across Users & Requests)"]
    L2 -- "Cache Miss" --> L3["3. Full Route Cache (Static HTML & RSC Flight Payload on Server)"]
    L3 -- "Client Nav" --> L4["4. Router Cache (In-Memory Browser Cache during User Session)"]
    L4 --> Render["Render Output to Screen"]
```


Next.js provides a 4-tier caching architecture:

```tree
1. Request Memoization (React) -> Deduplicates identical fetches during one render
2. Data Cache (Next.js Server) -> Persists fetch responses across server requests
3. Full Route Cache (Next.js)   -> Caches HTML and RSC payload at build or revalidation
4. Router Cache (Client-side)   -> In-memory browser cache for prefetched route segments
```

### Cache Tags & On-Demand Revalidation

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
  revalidateTag('products-list');
}
```

[Back to top⤴️](#table-of-contents)

---

## Performance

### Turbopack

Turbopack is written in Rust, delivering up to 10x faster startup times than Webpack:

```bash
next dev --turbopack
```

[Back to top⤴️](#table-of-contents)

### Dynamic Imports & Lazy Loading

```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart widget...</p>,
  ssr: false, // Disable server rendering for client-only widgets
});
```

[Back to top⤴️](#table-of-contents)

---

## Security

1. **Environment Variables**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Variables without this prefix remain server-only.
2. **Content Security Policy (CSP)**: Set security headers via `next.config.ts` or `middleware.ts`.
3. **Server Action Security**: Server Actions are public HTTP endpoints; always authenticate the session inside the action.

[Back to top⤴️](#table-of-contents)

---

## Environment Variables

```bash
# .env.local (Private Secrets - Server Only)
DATABASE_URL="postgresql://user:pass@localhost:5432/db"
STRIPE_SECRET_KEY="sk_live_..."

# Public Variables (Exposed to Browser)
NEXT_PUBLIC_APP_URL="https://myapp.com"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
```

[Back to top⤴️](#table-of-contents)

---

## File Upload

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

[Back to top⤴️](#table-of-contents)

---

## Emails

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

[Back to top⤴️](#table-of-contents)

---

## Realtime

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

[Back to top⤴️](#table-of-contents)

---

## Background Jobs

Run scheduled cron jobs or long-running tasks using Trigger.dev, Inngest, or Next.js Vercel Cron:

```json
// vercel.json
{
  "crons": [{ "path": "/api/cron/cleanup", "schedule": "0 0 * * *" }]
}
```

[Back to top⤴️](#table-of-contents)

---

## Payments

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

[Back to top⤴️](#table-of-contents)

---

## AI Integration

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

[Back to top⤴️](#table-of-contents)



---

## Analytics

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

[Back to top⤴️](#table-of-contents)

---

## 6. Stage 6: Automated Testing, Containerization & Microservices

### Unit and Component Testing with Vitest

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

[Back to top⤴️](#table-of-contents)

### End-to-End Testing with Playwright

```ts
// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('has title and navigates to about', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('Hello, learn-nextjs');
});
```

[Back to top⤴️](#table-of-contents)

---

## Deployment

### Vercel Deployment

Deploying to Vercel provides instant zero-configuration CI/CD, Edge Middleware, and automatic ISR caching:

```bash
npm install -g vercel
vercel
```

[Back to top⤴️](#table-of-contents)

### Docker Deployment

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

[Back to top⤴️](#table-of-contents)

### Nginx Reverse Proxy

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

[Back to top⤴️](#table-of-contents)

---

## Best Practices

1. **Default to Server Components**: Add `'use client'` only when state, event handlers, or browser APIs are needed.
2. **Co-locate Components and Styles**: Place helper components close to the routes that consume them.
3. **Use Zod for Server Action Validation**: Always parse form input on the server before database mutation.
4. **Leverage Image and Font Optimizations**: Always use `next/image` and `next/font` to eliminate layout shift.
5. **Protect Route Handlers and Actions**: Never assume requests are authenticated; verify session on the server.

[Back to top⤴️](#table-of-contents)

---

## Design Patterns

### Repository & Service Layer Pattern

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

[Back to top⤴️](#table-of-contents)

---

## Common Libraries

| Library | Category | Description |
| :--- | :--- | :--- |
| `zod` | Validation | TypeScript-first schema declaration and validation |
| `react-hook-form` | Forms | Performant, flexible forms with easy validation integration |
| `zustand` | State | Lightweight, hook-based client store |
| `@tanstack/react-query` | Data | Server state synchronization, caching, and background refetching |
| `prisma` / `drizzle-orm`| ORM | Type-safe SQL query generation and database schema migrations |
| `framer-motion` | Animation | Production-ready motion animations for React components |
| `clsx` / `tailwind-merge`| Styling | Utility function for constructing conditional class names cleanly |

[Back to top⤴️](#table-of-contents)



---

## Example Projects

### Todo App with Server Actions

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

[Back to top⤴️](#table-of-contents)

### CRUD App

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

[Back to top⤴️](#table-of-contents)

### Authentication Starter

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

[Back to top⤴️](#table-of-contents)

### Dashboard with Streaming & Suspense

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

[Back to top⤴️](#table-of-contents)

### E-commerce Store

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

[Back to top⤴️](#table-of-contents)

### AI Chat Application

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

[Back to top⤴️](#table-of-contents)

### SaaS Starter, Blog Platform & Social Media Clone

Full blueprints featuring multi-tenant routing, Markdown rendering with MDX, Stripe subscriptions, and PostgreSQL database seeding.

[Back to top⤴️](#table-of-contents)

---

## 7. Stage 7: Staff Full-Stack Interview Handbook & Production Cheatsheet

### Next.js Interview Questions

#### 1. What is the fundamental difference between React Server Components (RSC) and SSR?
- **Server-Side Rendering (SSR)** generates HTML on the server and sends it to the browser along with the entire JavaScript bundle required to hydrate all components on the client.
- **React Server Components (RSC)** execute exclusively on the server and generate an intermediate RSC Payload stream. They do **not** add JavaScript to the client bundle and never hydrate on the client.

#### 2. What are Server Actions and how do they work?
Server Actions are asynchronous functions defined with `'use server'` that execute securely on the server. They can be passed directly to the `action` attribute of HTML forms or called programmatically from Client Components. Next.js manages the underlying HTTP POST request, CSRF tokens, and data mutations automatically.

#### 3. How does the 4-tier Caching system work in Next.js?
1. **Request Memoization**: Deduplicates identical `fetch` requests across the component tree in a single render pass.
2. **Data Cache**: Persists HTTP responses across incoming server requests.
3. **Full Route Cache**: Automatically caches static HTML and RSC payloads at build or revalidation time.
4. **Router Cache**: Client-side in-memory browser cache holding prefetched route segments.

[Back to top⤴️](#table-of-contents)

---

## Cheat Sheets

### CLI Commands Cheat Sheet

| Command | Description |
| :--- | :--- |
| `npx create-next-app@latest` | Scaffold a new Next.js application |
| `next dev --turbopack` | Start local development server with Turbopack |
| `next build` | Create an optimized production build |
| `next start` | Start production server |
| `next lint` | Run ESLint check |

[Back to top⤴️](#table-of-contents)

### Routing Cheat Sheet

| File Convention | Purpose |
| :--- | :--- |
| `layout.tsx` | Persistent UI wrapper shared across child routes |
| `page.tsx` | Unique UI for a specific route |
| `loading.tsx` | Streaming Suspense boundary fallback |
| `not-found.tsx` | 404 handler |
| `error.tsx` | Client error boundary |
| `global-error.tsx` | Root layout error boundary |
| `route.ts` | Backend API Route Handler |

[Back to top⤴️](#table-of-contents)

### Data Fetching Cheat Sheet

```tsx
// Force Cache (Static - SSG)
fetch('https://...', { cache: 'force-cache' });

// No Store (Dynamic - SSR)
fetch('https://...', { cache: 'no-store' });

// Time-Based Revalidation (ISR)
fetch('https://...', { next: { revalidate: 60 } });

// Tag-Based Revalidation
fetch('https://...', { next: { tags: ['my-tag'] } });
revalidateTag('my-tag');
```

[Back to top⤴️](#table-of-contents)

---

## Resources

### Official Documentation
- [Next.js Official Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Vercel Deployment Guides](https://vercel.com/docs)

### Next.js Roadmap
- [Roadmap.sh - Next.js Developer Roadmap](https://roadmap.sh/nextjs)

### Community Resources
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Next.js Discord Community](https://discord.gg/nextjs)
- [shadcn/ui Component Registry](https://ui.shadcn.com/)

[Back to top⤴️](#table-of-contents)

---

## Contributing

Thank you for considering contributing to this project! By this, you agree to abide by the [Code Of Conduct](CODE_OF_CONDUCT.md).

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [React](https://react.dev/)

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-donate-FFDD00?logo=buymeacoffee&logoColor=000)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green?logo=github)](https://github.com/sponsors/manthanank)

---

Show your support by 🌟 the repository.
