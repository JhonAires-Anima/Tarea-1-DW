import { useEffect, useRef, useState } from 'react';
import './Country.scss';

const Country = (props) => {
  let [classNameHighlight, setClassNameHighlight] = useState('');

  const highlightCountry = props.highlightCountry;
  const countryName = props.country.name;
  const actualRef = useRef(null);

  const scrollHandler = () => {
    actualRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
      <h1>{countryName}</h1>
    </div>
  );
};

export default Country;
