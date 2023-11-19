// Imports
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../test/test-utils';
// import configureStore from 'redux-mock-store';
import store from '../store/store';
// import { swSlice } from "../store/swSlice";
import { mockResults } from '../../test/mocks';

// To Test
import People from './People';
import { RingLoader } from 'react-spinners';

/*
const setInputValue = () => { };
const setResults = () => { };
const contInputValue = '';
const contResults = mockResults;
*/

/*
const mockStore: StateSlice = {
  inputValue: '',
  page: "1",
  limit: "10",
  isLoadingList: false,
  isLoadingDetails: false,
  apiResults: [],
  results: mockResults,
}
*/

// Tests
describe('Renders People correcttly', () => {
  it('Should return a list of 10 results elements', async () => {
    // Setup

    // const store = mockStore({});

    renderWithProviders(<People />);

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
          <People results={mockResults} page="1" />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const card = await screen.getByText('Luke Skywalker');
    fireEvent.click(card);
    // Expectations
    // waitFor(async () => {
      const res = await screen.findByText('people-details');
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