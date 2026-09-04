import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'learn-nextjs',
  description: 'Complete guide and resources to learn Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
