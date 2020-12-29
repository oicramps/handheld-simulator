import React from 'react';
import { HeaderContainer, Title, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Title>Handheld Simulator</Title>
    </HeaderContainer>
  );
};

export default Header;
