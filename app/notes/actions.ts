'use server';

import { revalidatePath } from 'next/cache';
import { addNote, validateNote } from '@/lib/notes';

export interface NoteFormState {
  error?: string;
  saved?: string;
}

// A Server Action. The client receives only a reference to it; the body runs
// on the server. Treat formData as untrusted input, like any POST body.
export async function addNoteAction(
  _previous: NoteFormState,
  formData: FormData,
): Promise<NoteFormState> {
  const result = validateNote(formData.get('text'));
  if (!result.ok) {
    return { error: result.error };
  }
  const note = addNote(result.text);
  revalidatePath('/notes');
  return { saved: note.text };
}
