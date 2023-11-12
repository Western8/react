import './App.css';
import Wrapper from './Wrapper';
import { Details } from './Bottom';
import ErrorBoundary from './ErrorBoundary';
import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <ErrorBoundary>
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
          <Route path="/page/:page" element={<Wrapper/>}>
            <Route path="person/:person" element={<Details />} />
          </Route>
          <Route path="*" element={<Navigate to="/page/1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
