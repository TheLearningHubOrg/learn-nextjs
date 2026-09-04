import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Hello, learn-nextjs');
  });

  it('renders the subtitle congratulations message', () => {
    render(<Home />);
    expect(
      screen.getByText(/Congratulations! Your Next.js 15 App Router app is running/i),
    ).toBeInTheDocument();
  });
});
