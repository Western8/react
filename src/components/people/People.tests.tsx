import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import People from './People';

describe('Renders People correcttly', () => {
  it('Should return a list of 10 results elements', async () => {
    renderWithProviders(<People />);

    const links = await screen.getAllByRole('link');
    const countLinks = 10;
    const countPageBtns = 2;
    expect(links).toHaveLength(countLinks + countPageBtns);
  });
});
