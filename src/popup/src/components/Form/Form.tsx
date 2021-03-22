import React, { useRef, useEffect } from 'react';
import { FormContainer, ScanButton, TextField } from './styles';

const Header: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleScan = () => {
    const code: string = inputRef.current?.value || '';

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: chrome.tabs.Tab[]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'fill', message: code }, {});
      window.close();
    });
  };

  return (
    <FormContainer>
      <TextField ref={inputRef} />
      <ScanButton onClick={handleScan}>Scan</ScanButton>
    </FormContainer>
  );
};

export default Header;
