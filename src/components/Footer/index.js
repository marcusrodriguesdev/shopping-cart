import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';
import Context from '../../context/Context';

function Footer() {
  const { totalPrice } = useContext(Context);
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
      >
        Continuar
      </Button>
      <div>
        <p>
          R$
          {' '}
          {totalPrice.toFixed(2)}
        </p>
        <FaShoppingCart size={25} color="black" className="icon" />
      </div>
    </Container>
  );
}

export default Footer;
