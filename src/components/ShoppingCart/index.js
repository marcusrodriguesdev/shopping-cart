import { GlobalStyles } from '@material-ui/styled-engine';
import React from 'react';

function ShoppingCart() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    </React.Fragment>
  );
}

export default ShoppingCart;
