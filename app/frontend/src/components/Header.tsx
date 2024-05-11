import '../styles/components/Header.css';
import popcornBoxIcon from '../assets/images/popcornBoxIcon.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';
import useAppContext from '../utils/useAppContext';

const Header = () => {
  const { isLogged } = useAppContext();

  return (
    <div className='c-header'>
      <Link to="/" className='c-logo' title='CineSearch'>
        <img src={popcornBoxIcon} alt="Logo" className="img-header" />
        <div className='c-logo-name'>
          <span>C</span>ine<span>S</span>earch
        </div>
      </Link>
      <SearchBar />
      {!isLogged &&
        <>
          <LogInBox />
          <SignUpBox />
        </>
      }
    </div>
  );
};


export default Header;