import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopic, getTopics } from '@/lib/topics';

type Params = Promise<{ slug: string }>;

// Prerender one HTML file per topic at build time.
export function generateStaticParams() {
  return getTopics().map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return topic ? { title: topic.title, description: topic.summary } : { title: 'Not found' };
}

export default async function TopicPage({ params }: { params: Params }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) {
    notFound(); // throws; renders the nearest not-found.tsx with a 404 status
  }

  return (
    <article>
      <p>
        <Link href="/topics">&larr; All topics</Link>
      </p>
      <h1>{topic.title}</h1>
      <p>
        Stage {topic.stage} &middot; {topic.level}
      </p>
      <p>{topic.summary}</p>
    </article>
  );
}
