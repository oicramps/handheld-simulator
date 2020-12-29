import React from 'react';
import Popup from './containers/Popup';
import { createGlobalStyle } from 'styled-components';
import Montserrat400 from './assets/fonts/Montserrat-Regular.ttf';
import Montserrat600 from './assets/fonts/Montserrat-SemiBold.ttf';
import Montserrat700 from './assets/fonts/Montserrat-Bold.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Jura;
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat400});
  }

  @font-face {
    font-family: Jura;
    font-style: normal;
    font-weight: 600;
    src: url(${Montserrat600});
  }

  @font-face {
    font-family: Jura;
    font-style: normal;
    font-weight: 700;
    src: url(${Montserrat700});
  }
 
  body, input {
    font-family: 'Jura', sans-serif;
    font-size: 14px;
    outline: none;
    color: #2B2B2B;
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
