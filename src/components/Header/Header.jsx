import CountrySelect from '../Countries/CountrySelect';
import './Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <h1>COUNTRIES</h1>
      <CountrySelect onSelectCountry={props.onHighlightCountry} />
    </header>
  );
};

export default Header;
