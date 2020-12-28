import React from 'react';
import { Logo, LogoContainer, Title } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>Handheld Simulator</Title>
    </>
  );
};

export default Header;
