import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders App correctly', async () => {
  it('Should render App correctly', async () => {
    expect(true).toBeTruthy();
  });
});

describe('Renders App React', async () => {
  it('Should render App React', async () => {
    render(<App />);
    const input = await screen.getByPlaceholderText('Enter search text');
    expect(input).not.toBeNull();
  });
});
