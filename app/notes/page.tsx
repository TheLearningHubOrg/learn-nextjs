import type { Metadata } from 'next';
import { connection } from 'next/server';
import { listNotes } from '@/lib/notes';
import { NoteForm } from './note-form';

export const metadata: Metadata = { title: 'Notes' };

export default async function NotesPage() {
  // The note list changes at runtime, so opt this route out of prerendering.
  await connection();
  const notes = listNotes();

  return (
    <>
      <h1>Notes</h1>
      <NoteForm />
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul className="notes">
          {notes.map((note) => (
            <li key={note.id}>
              {note.text} <time dateTime={note.createdAt}>{note.createdAt.slice(0, 10)}</time>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
