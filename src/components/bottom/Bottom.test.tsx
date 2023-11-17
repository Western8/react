// Imports
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mockResults } from '../../test/mocks';

// To Test
import Bottom from './Bottom';
import { Details } from './Bottom';
import GlobalContext from '../../Context';

const setInputValue = () => { };
const setResults = () => { };
const contInputValue = '';
const contResults = mockResults;

// Tests
describe('Renders Bottom correcttly', async () => {
  it('Should return a list of 10 results elements', async () => {
    // Setup
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
/*
  it('Should open a detailed card component after click on Card', async () => {
    // Setup
    render(
      <GlobalContext.Provider value={{ contInputValue, setInputValue, contResults, setResults }}>
        <BrowserRouter>
          <Bottom results={mockResults} page="1" />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const card = await screen.getByText('Luke Skywalker');
    fireEvent.click(card);
    // Expectations
    // waitFor(async () => {
      const res = await screen.findByText('bottom-details');
      // console.log('screen111', screen);
      expect(res).not.toBeDefined();
    // });
  });


  it('Should close detailed card after click button Close', async () => {
    // Setup
    render(
      // <GlobalContext.Provider value={{ contInputValue, setInputValue, contResults, setResults }}>
        <BrowserRouter>
          <Details/>
        </BrowserRouter>
      // </GlobalContext.Provider>
    );
    const btnClose = await screen.getByText('Close');
    fireEvent.click(btnClose);
    // Expectations
    // waitFor(async () => {
      const res = await screen.findByText('Description');
      // console.log('screen111', screen);
      expect(res).not.toBeDefined();
    // });
  });
*/
});