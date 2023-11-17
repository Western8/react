// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// To Test
import App from './App';

// Tests
describe('Renders App correctly', async () => {
    it('Should render App correctly', async () => {
        expect(true).toBeTruthy();
    });
});

describe('Renders App React', async () => {
  it('Should render App React', async () => {
      // Setup
      render(<App />);
      const input = await screen.getByPlaceholderText('Enter search text');
      // Expectations
      expect(input).not.toBeNull();
  });
});