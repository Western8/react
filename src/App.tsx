import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import store from './components/store/store';
import Wrapper from './components/wrapper/Wrapper';
import { Details } from './components/details/details';
import './App.css';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <AppRouter />
        </Provider>
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
