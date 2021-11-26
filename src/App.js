import React from 'react';
import Provider from './context/Provider';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Provider>
      <ShoppingCart />
    </Provider>
  );
}

export default App;
