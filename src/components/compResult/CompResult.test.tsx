// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mockResults } from '../../test/mocks';

// To Test
import CompResult from './CompResult';

// Tests
describe('Test Card (CompResult) component', async () => {
  it('Should return relevant card data', async () => {
    // Setup
    render(
      <BrowserRouter>
        <CompResult result={mockResults[0]} page="1" />
      </BrowserRouter>
    );
    const res = await screen.getByText('Luke Skywalker');
    // Expectations
    expect(res).toBeDefined();
  });
});