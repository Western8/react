import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import FormUnctrl from './components/FormUnctrl/FormUnctrl';
import FormCtrl from './components/FormCtrl/FormCtrl';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/unctrl" element={<FormUnctrl />} />
        <Route path="/ctrl" element={<FormCtrl />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
