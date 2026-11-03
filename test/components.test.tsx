import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }));

import HomePage from '@/app/page';
import TopicPage, { generateStaticParams } from '@/app/topics/[slug]/page';
import { LikeButton } from '@/components/like-button';
import { NoteForm } from '@/app/notes/note-form';

describe('LikeButton (Client Component)', () => {
  it('increments the count on click', () => {
    render(<LikeButton label="Useful?" />);
    const button = screen.getByRole('button', { name: 'Like (0)' });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: 'Like (2)' })).toBeInTheDocument();
  });
});

describe('HomePage (synchronous Server Component)', () => {
  it('renders the heading and a link per topic', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Learn Next.js' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Server Actions' })).toHaveAttribute(
      'href',
      '/topics/server-actions',
    );
  });
});

describe('TopicPage (async Server Component)', () => {
  // RTL cannot render an async component, but we can await the function
  // ourselves and render the JSX it resolves to.
  it('renders a known topic', async () => {
    render(await TopicPage({ params: Promise.resolve({ slug: 'dynamic-routes' }) }));
    expect(screen.getByRole('heading', { level: 1, name: 'Dynamic routes' })).toBeInTheDocument();
  });

  it('calls notFound() for an unknown slug', async () => {
    await expect(TopicPage({ params: Promise.resolve({ slug: 'nope' }) })).rejects.toThrow();
  });

  it('prerenders one path per topic', () => {
    expect(generateStaticParams()).toContainEqual({ slug: 'server-components' });
  });
});

describe('NoteForm', () => {
  it('renders a labelled input and a submit button', () => {
    render(<NoteForm />);
    expect(screen.getByLabelText('New note')).toHaveAttribute('maxlength', '140');
    expect(screen.getByRole('button', { name: 'Add note' })).toBeEnabled();
  });
});
