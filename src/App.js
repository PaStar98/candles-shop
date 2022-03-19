import { useState } from 'react';

import Navigation from './components/UI/Navigation/Navigation';
import Home from './components/Home/Home/Home';
import Candles from './components/Home/Candles/Candles';
import Soaps from './components/Home/Soaps/Soaps';
import About from './components/Home/About/About';
import Footer from './components/UI/Footer/Footer';
import TopAsideInfo from './components/UI/TopAsideInfo/TopAsideInfo';

function App() {
  const [pageContent, setPageContent] = useState('n1');

  const setPageContentHandler = navID => {
    /* navID identifier
     * n1 -> Home
     * n2 -> Candles
     * n3 -> Soaps
     * n4 -> About */
    setPageContent(navID);
    console.log(navID);
  };

  let currentPage = '';
  if (pageContent === 'n1') currentPage = <Home />;
  else if (pageContent === 'n2') currentPage = <Candles />;
  else if (pageContent === 'n3') currentPage = <Soaps />;
  else if (pageContent === 'n4') currentPage = <About />;
  else throw new Error('Error: invalid navigation identifier.');

  return (
    <>
      <TopAsideInfo />
      <Navigation onSetPageContent={setPageContentHandler} />
      {currentPage}
      <Footer />
    </>
  );
}

export default App;
