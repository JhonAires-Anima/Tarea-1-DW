import { useState } from 'react';

import ListCountries from './components/Countries/ListCountries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.scss';

const App = () => {
  const [countryHighlight, setCountryHighlight] = useState('');

  const highlightCountry = (country) => {
    return setCountryHighlight(country);
  };

  return (
    <div>
      <Header onHighlightCountry={highlightCountry} />
      <main className='content'>
        <div className='principal-content'>
          <ListCountries highlightCountry={countryHighlight} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
