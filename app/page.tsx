import Link from 'next/link';

export default function Home() {
  const title = 'learn-nextjs';

  return (
    <main className="container">
      <section className="hero">
        <h1 className="title">Hello, {title}</h1>
        <p className="subtitle">Congratulations! Your Next.js 15 App Router app is running. 🎉</p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Next.js Documentation</h2>
          <p>Explore Server Components, Route Handlers, Server Actions, and Turbopack.</p>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Read Docs &rarr;
          </a>
        </article>

        <article className="card">
          <h2>App Router Architecture</h2>
          <p>Master layouts, templates, streaming with Suspense, and parallel routes.</p>
          <a href="https://nextjs.org/docs/app" target="_blank" rel="noopener noreferrer">
            Explore Architecture &rarr;
          </a>
        </article>

        <article className="card">
          <h2>Testing & Vitest</h2>
          <p>Fast unit and integration testing with Vitest and React Testing Library.</p>
          <a href="https://vitest.dev" target="_blank" rel="noopener noreferrer">
            Learn Testing &rarr;
          </a>
        </article>
      </section>

      <footer className="footer">
        <p>Built with modern Next.js, React 19, and TypeScript.</p>
      </footer>
    </main>
  );
}
