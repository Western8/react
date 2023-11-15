// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// To Test
import Bottom from '../Bottom';
import GlobalContext from '../Context';
import { BrowserRouter } from 'react-router-dom';


// Tests
describe('Renders Bottom correcttly', async () => {
  it('Should return a list of 10 results elements', async () => {
    // Setup
    const setInputValue = () => { };
    const setResults = () => { };
    const contInputValue = '';
    const contResults = [];
    for (let i = 0; i < 10; i++) {
      const result = { name: '', desc: '', url: i.toString() };
      contResults.push(result);
    }
    render(
      <GlobalContext.Provider value={{ contInputValue, setInputValue, contResults, setResults }}>
        <BrowserRouter>
          <Bottom results={contResults} page="1" />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const links = await screen.getAllByRole('link');
    // Expectations
    const countLinks = 10;
    const countPageBtns = 2;
    expect(links).toHaveLength(countLinks + countPageBtns);
  });
});