// @vitest-environment node
import { NextRequest } from 'next/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// revalidatePath needs the Next.js request context, which does not exist in a
// unit test. Replace it with a spy so the action can run in isolation.
vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }));

import { revalidatePath } from 'next/cache';
import { GET as getTopicsRoute } from '@/app/api/topics/route';
import { GET as getHealth } from '@/app/health/route';
import { addNoteAction } from '@/app/notes/actions';
import { listNotes, resetNotes } from '@/lib/notes';
import { proxy } from '@/proxy';

function form(fields: Record<string, string>): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
}

describe('GET /health', () => {
  it('answers 200 with status ok and no-store caching', async () => {
    const response = getHealth();
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toMatchObject({ status: 'ok' });
  });
});

describe('GET /api/topics', () => {
  it('returns all topics', async () => {
    const response = getTopicsRoute(new NextRequest('http://localhost/api/topics'));
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.topics.length).toBeGreaterThanOrEqual(5);
  });

  it('filters by a valid level', async () => {
    const response = getTopicsRoute(new NextRequest('http://localhost/api/topics?level=advanced'));
    const body = await response.json();
    expect(body.topics.every((t: { level: string }) => t.level === 'advanced')).toBe(true);
  });

  it('rejects an unknown level with 400', async () => {
    const response = getTopicsRoute(new NextRequest('http://localhost/api/topics?level=guru'));
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: 'Unknown level "guru"' });
  });
});

describe('addNoteAction', () => {
  beforeEach(() => resetNotes());

  it('returns a validation error and stores nothing for blank input', async () => {
    const state = await addNoteAction({}, form({ text: '  ' }));
    expect(state).toEqual({ error: 'Note text is required.' });
    expect(listNotes()).toHaveLength(0);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it('saves the note and revalidates /notes', async () => {
    const state = await addNoteAction({}, form({ text: 'Learn Server Actions' }));
    expect(state).toEqual({ saved: 'Learn Server Actions' });
    expect(listNotes()[0].text).toBe('Learn Server Actions');
    expect(revalidatePath).toHaveBeenCalledWith('/notes');
  });
});

describe('proxy', () => {
  it('adds security headers and passes the request through', () => {
    const response = proxy(new NextRequest('http://localhost/topics'));
    expect(response.headers.get('x-content-type-options')).toBe('nosniff');
    expect(response.headers.get('x-frame-options')).toBe('DENY');
    expect(response.headers.get('x-pathname')).toBe('/topics');
    // NextResponse.next() marks the response as "continue to the route".
    expect(response.headers.get('x-middleware-next')).toBe('1');
  });
});
