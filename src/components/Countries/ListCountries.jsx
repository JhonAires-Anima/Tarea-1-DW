import Country from './Country';
import GetCountries from './GetCountries';

const ListCountries = (props) => {
  const countries = GetCountries();

  let listOfCountries = countries.map((country, index) => {
    return (
      <Country
        key={index}
        country={country}
        highlightCountry={props.highlightCountry}
        countriesList={countries}
        index={index}
      />
    );
  });

  return <div className='country'>{listOfCountries}</div>;
};

export default ListCountries;
