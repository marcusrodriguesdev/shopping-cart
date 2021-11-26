import React from 'react';
import { Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
      >
        Continuar
      </Button>
      <div>
        <p>R$ 0,00</p>
        <FaShoppingCart size={25} color="black" className="icon" />
      </div>
    </Container>
  );
}

export default Footer;
