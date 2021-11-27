import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Products from './pages/Products';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
