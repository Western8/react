import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { BrowserRouter } from 'react-router-dom';
import People from './People';

describe('Renders People correcttly', () => {
  it('Should return a list of 10 results elements', async () => {
    renderWithProviders(
      <BrowserRouter>
        <People />
      </BrowserRouter>
    );

    await waitFor(() => {
      const links = screen.getAllByRole('link');
      const countLinks = 10;
      const countPageBtns = 2;
      expect(links).toHaveLength(countLinks + countPageBtns);
    });
  });
});
