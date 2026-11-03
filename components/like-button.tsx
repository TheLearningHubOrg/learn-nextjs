'use client';

import { useState } from 'react';

// The smallest useful Client Component: local state plus an event handler.
export function LikeButton({ label }: { label: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <p className="like">
      <span>{label}</span>{' '}
      <button type="button" onClick={() => setLikes((n) => n + 1)}>
        Like ({likes})
      </button>
    </p>
  );
}
