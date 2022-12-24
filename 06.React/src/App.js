import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes2 from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes2 />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
