import GetCountries from './GetCountries';
import './CountrySelect.scss';
import SelectOptions from './SelectOptions';

const CountrySelect = (props) => {
  const countries = GetCountries();

  const selectCountryHandler = (event) => {
    if (event !== undefined) {
      props.onSelectCountry(event.target.value);
    }
  };

  return (
    <label className='country-select'>
      <select onChange={selectCountryHandler}>
        <option defaultValue hidden>
          Countries
        </option>
        <SelectOptions countries={countries} />
      </select>
    </label>
  );
};

export default CountrySelect;
