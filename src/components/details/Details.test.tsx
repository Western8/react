import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../test/test-utils';
import { vi } from 'vitest';
import Details from './Details';

describe('Test Details component', () => {
  it('Should return relevant details data for Darth Vader', async () => {
    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual('react-router-dom');
      if (mod) {
        return {
          ...mod,
          useParams: () => ({ person: '4' }),
        };
      }
    });

    renderWithProviders(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );
    await waitFor(() => {
      const res = screen.getByText('Birth year: 41.9BBY');
      expect(res).toBeDefined();
    });
  });
});
