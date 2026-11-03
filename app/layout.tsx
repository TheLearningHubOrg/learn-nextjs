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
