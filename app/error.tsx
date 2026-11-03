'use client';

// Error boundaries must be Client Components: they catch errors thrown while
// rendering the segment below them. retry() (stable since Next.js 16.3)
// re-fetches and re-renders the segment; the older reset() only re-renders.
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
