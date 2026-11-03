import type { Metadata } from 'next';
import Link from 'next/link';
import { getTopics, isLevel, LEVELS } from '@/lib/topics';

export const metadata: Metadata = { title: 'Topics' };

// Reading searchParams makes this route render per request.
export default async function TopicsPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string | string[] }>;
}) {
  const { level } = await searchParams;
  const active = isLevel(level) ? level : undefined;
  const topics = getTopics(active);

  return (
    <>
      <h1>Topics</h1>
      <nav aria-label="Filter by level" className="filters">
        <Link href="/topics" aria-current={active === undefined ? 'page' : undefined}>
          All
        </Link>
        {LEVELS.map((value) => (
          <Link
            key={value}
            href={`/topics?level=${value}`}
            aria-current={active === value ? 'page' : undefined}
          >
            {value}
          </Link>
        ))}
      </nav>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/topics/${topic.slug}`}>{topic.title}</Link> <small>({topic.level})</small>
          </li>
        ))}
      </ul>
    </>
  );
}
