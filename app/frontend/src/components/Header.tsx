import '../styles/components/Header.css';
import popcornBoxIcon from '../assets/images/popcornBoxIcon.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';

const Header = () => {
  return (
    <div className='c-header'>
      <Link to="/" className='c-logo'>
        <img src={popcornBoxIcon} alt="Logo" className="img-header" />
        <div className='c-logo-name'>
          <span>C</span>ine<span>S</span>earch
        </div>
      </Link>
      <SearchBar />
      <LogInBox />
      <SignUpBox />
    </div>
  );
};


export default Header;