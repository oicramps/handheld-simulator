import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';
import { Container } from './styles';

const Popup: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
};

export default Popup;
