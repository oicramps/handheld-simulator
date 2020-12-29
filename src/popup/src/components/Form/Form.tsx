import React from 'react';
import { FormContainer, ScanButton, TextField } from './styles';

const Header: React.FC = () => {
  return (
    <FormContainer>
      <TextField />
      <ScanButton>Scan</ScanButton>
    </FormContainer>
  );
};

export default Header;
