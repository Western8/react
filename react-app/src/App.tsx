import './App.css';
import Wrapper from './Wrapper';
import { Details } from './Bottom';
import ErrorBoundary from './ErrorBoundary';
import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Result } from './types';
import GlobalContext from './Context';

function App() {

  const [contInputValue, setInputValue] = React.useState('');
  const initResults: Result[] = [];
  const [contResults, setResults] = React.useState(initResults);

  return (
    <>
      <ErrorBoundary>
        <GlobalContext.Provider value={{ contInputValue, setInputValue, contResults, setResults }}>
          <AppRouter />
        </GlobalContext.Provider>
      </ErrorBoundary>
    </>
  );
}

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/page/:page" element={<Wrapper />}>
            <Route path="person/:person" element={<Details />} />
          </Route>
          <Route path="*" element={<Navigate to="/page/1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
