import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import Header from './Header';

describe('Renders Header correctly', () => {
  it('Should render search component with placeholder Enter search text', async () => {
    renderWithProviders(<Header testError={() => {}} />);
    const input = await screen.getByPlaceholderText('Enter search text');
    expect(input).not.toBeNull();
  });
});
