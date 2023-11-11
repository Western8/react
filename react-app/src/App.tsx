import './App.css';
import Wrapper from './Wrapper';
import ErrorBoundary from './ErrorBoundary';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* <Wrapper /> */}
        <AppRouter />
      </ErrorBoundary>
    </>
  );
}

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/1111" element={<div>1111111111111111111111111</div>} />
          <Route path=":page" element={<Wrapper/>} />
          <Route path="*" element={<Wrapper page="0" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Pagination results={searchResults.results} prev={searchResults.prev} next={searchResults.next}/>