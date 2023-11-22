import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import { Details } from './components/details/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page/:page" element={<Home />}>
          <Route path="person/:person" element={<Details />} />
        </Route>
        <Route path="*" element={<Navigate to="/page/1" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
