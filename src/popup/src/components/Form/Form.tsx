import React, { useRef, useEffect } from 'react';
import { FormContainer, ScanButton, TextField } from './styles';

const Header: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <FormContainer>
      <TextField ref={inputRef} />
      <ScanButton>Scan</ScanButton>
    </FormContainer>
  );
};

export default Header;
