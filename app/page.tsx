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
