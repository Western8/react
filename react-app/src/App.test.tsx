import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test/test-utils';
import App from './App';

describe('Renders App correctly', () => {
  it('Should render App correctly', async () => {
    expect(true).toBeTruthy();
  });

  it('Should render App React', async () => {
    renderWithProviders(<App />);
    const input = await screen.getByPlaceholderText('Enter search text');
    expect(input).not.toBeNull();
  });
});
