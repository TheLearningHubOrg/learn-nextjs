'use client';

import { useActionState } from 'react';
import { addNoteAction, type NoteFormState } from './actions';
import { MAX_NOTE_LENGTH } from '@/lib/notes';

const initialState: NoteFormState = {};

export function NoteForm() {
  const [state, formAction, pending] = useActionState(addNoteAction, initialState);

  return (
    <form action={formAction} className="note-form">
      <label htmlFor="note-text">New note</label>
      <input id="note-text" name="text" maxLength={MAX_NOTE_LENGTH} disabled={pending} />
      <button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Add note'}
      </button>
      {state.error && <p role="alert">{state.error}</p>}
      {state.saved && <p role="status">Saved: {state.saved}</p>}
    </form>
  );
}
