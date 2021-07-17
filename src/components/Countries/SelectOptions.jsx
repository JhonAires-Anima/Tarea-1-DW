const SelectOptions = (props) => {
  const countries = props.countries;
  return countries.map((country, index) => {
    return (
      <option key={index} value={country.name.toLowerCase()}>
        {country.name}
      </option>
    );
  });
};

export default SelectOptions;
