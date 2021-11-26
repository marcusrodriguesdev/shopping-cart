import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>Footer</p>
      <div>
        <FaShoppingCart size={25} />
        <span>R$ 0,00</span>
      </div>
    </Container>
  );
}

export default Footer;
