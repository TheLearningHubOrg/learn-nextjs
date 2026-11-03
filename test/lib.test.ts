// @vitest-environment node
import { beforeEach, describe, expect, it } from 'vitest';
import { addNote, listNotes, MAX_NOTE_LENGTH, resetNotes, validateNote } from '@/lib/notes';
import { getTopic, getTopics, isLevel } from '@/lib/topics';

describe('lib/topics', () => {
  it('returns every topic without a filter', () => {
    expect(getTopics().length).toBeGreaterThanOrEqual(5);
  });

  it('filters by level', () => {
    const beginner = getTopics('beginner');
    expect(beginner.length).toBeGreaterThan(0);
    expect(beginner.every((topic) => topic.level === 'beginner')).toBe(true);
  });

  it('finds a topic by slug and returns undefined for unknown slugs', () => {
    expect(getTopic('server-actions')?.stage).toBe(3);
    expect(getTopic('does-not-exist')).toBeUndefined();
  });

  it('narrows unknown values to a Level', () => {
    expect(isLevel('advanced')).toBe(true);
    expect(isLevel('expert')).toBe(false);
    expect(isLevel(['beginner'])).toBe(false);
  });
});

describe('lib/notes', () => {
  beforeEach(() => resetNotes());

  it('rejects missing, blank and oversized text', () => {
    expect(validateNote(null)).toEqual({ ok: false, error: 'Note text is required.' });
    expect(validateNote('   ')).toEqual({ ok: false, error: 'Note text is required.' });
    expect(validateNote('x'.repeat(MAX_NOTE_LENGTH + 1)).ok).toBe(false);
  });

  it('trims valid text', () => {
    expect(validateNote('  ship it  ')).toEqual({ ok: true, text: 'ship it' });
  });

  it('stores notes newest first with increasing ids', () => {
    addNote('first');
    addNote('second');
    const notes = listNotes();
    expect(notes.map((note) => note.text)).toEqual(['second', 'first']);
    expect(notes[0].id).toBe(2);
  });
});
