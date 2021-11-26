import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>Footer</p>
      <div>
        <FaShoppingCart size={25} color="black" />
        <p>R$ 0,00</p>
      </div>
    </Container>
  );
}

export default Footer;
