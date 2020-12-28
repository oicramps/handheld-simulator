import React from 'react';
import Popup from './containers/Popup';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Popup />
    </>
  );
}

export default App;
