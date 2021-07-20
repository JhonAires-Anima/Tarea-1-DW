import { useEffect, useRef, useState } from 'react';
import './Country.scss';

const Country = (props) => {
  let [classNameHighlight, setClassNameHighlight] = useState('');

  const highlightCountry = props.highlightCountry;
  const countryName = props.country.name;
  const actualRef = useRef(null);

  const scrollHandler = () => {
    actualRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    if (countryName.toLowerCase() === highlightCountry) {
      setClassNameHighlight('highlight');
      scrollHandler();
    } else {
      setClassNameHighlight('');
    }
  }, [countryName, highlightCountry]);

  return (
    <div ref={actualRef} className={`country-container ${classNameHighlight}`}>
      <h2>{countryName}</h2>
    </div>
  );
};

export default Country;
