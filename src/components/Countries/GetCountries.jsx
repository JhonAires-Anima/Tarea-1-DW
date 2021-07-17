import axios from 'axios';
import { useEffect, useState } from 'react';

const GetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=name`)
      .then((res) => {
        const gettedCountries = res.data;
        return setCountries(gettedCountries);
      });
    return;
  }, []);

  return countries;
};

export default GetCountries;
