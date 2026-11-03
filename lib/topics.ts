export const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

export type Level = (typeof LEVELS)[number];

export interface Topic {
  slug: string;
  title: string;
  stage: number;
  level: Level;
  summary: string;
}

// A tiny in-repo "database". Server Components import it directly:
// it never reaches the browser bundle.
const TOPICS: readonly Topic[] = [
  {
    slug: 'project-anatomy',
    title: 'Project anatomy',
    stage: 1,
    level: 'beginner',
    summary: 'What lives in app/, public/, next.config.ts and package.json, and why.',
  },
  {
    slug: 'layouts-and-pages',
    title: 'Layouts and pages',
    stage: 2,
    level: 'beginner',
    summary: 'Nested layouts persist across navigations; pages are the leaf of a route.',
  },
  {
    slug: 'dynamic-routes',
    title: 'Dynamic routes',
    stage: 2,
    level: 'intermediate',
    summary: 'Folders like [slug] turn URL segments into an async params prop.',
  },
  {
    slug: 'server-components',
    title: 'Server Components',
    stage: 3,
    level: 'intermediate',
    summary: 'Components that run only on the server and send no JavaScript for themselves.',
  },
  {
    slug: 'server-actions',
    title: 'Server Actions',
    stage: 3,
    level: 'advanced',
    summary: 'Functions marked "use server" that forms can call without a hand-written API.',
  },
];

export function isLevel(value: unknown): value is Level {
  return typeof value === 'string' && (LEVELS as readonly string[]).includes(value);
}

export function getTopics(level?: Level): Topic[] {
  return TOPICS.filter((topic) => level === undefined || topic.level === level);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
