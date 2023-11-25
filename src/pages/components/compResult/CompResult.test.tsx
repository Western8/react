import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mockResults } from '../../test/mocks';

import CompResult from './CompResult';

describe('Test Card (CompResult) component', async () => {
  it('Should return relevant card data', async () => {
    render(
      <BrowserRouter>
        <CompResult result={mockResults[0]} page="1" />
      </BrowserRouter>
    );
    const res = await screen.getByText('Luke Skywalker');
    expect(res).toBeDefined();
  });
});
