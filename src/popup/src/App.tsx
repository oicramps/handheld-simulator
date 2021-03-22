import React from 'react';
import Popup from './containers/Popup';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Popup />
    </>
  );
};

export default App;
