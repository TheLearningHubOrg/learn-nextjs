export interface Note {
  id: number;
  text: string;
  createdAt: string;
}

export type NoteValidation = { ok: true; text: string } | { ok: false; error: string };

export const MAX_NOTE_LENGTH = 140;

// Module-level state lives as long as the server process. That is fine for a
// demo; a real app would write to a database instead.
let notes: Note[] = [];
let nextId = 1;

export function validateNote(input: FormDataEntryValue | null): NoteValidation {
  if (typeof input !== 'string') {
    return { ok: false, error: 'Note text is required.' };
  }
  const text = input.trim();
  if (text.length === 0) {
    return { ok: false, error: 'Note text is required.' };
  }
  if (text.length > MAX_NOTE_LENGTH) {
    return { ok: false, error: `Keep notes under ${MAX_NOTE_LENGTH} characters.` };
  }
  return { ok: true, text };
}

export function addNote(text: string): Note {
  const note: Note = { id: nextId++, text, createdAt: new Date().toISOString() };
  notes = [note, ...notes];
  return note;
}

export function listNotes(): Note[] {
  return [...notes];
}

export function resetNotes(): void {
  notes = [];
  nextId = 1;
}
