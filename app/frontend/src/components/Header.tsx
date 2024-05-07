import '../styles/components/Header.css';
import popcornBoxIcon from '../assets/images/popcornBoxIcon.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to="/" className='logoContainer'>
        <img src={popcornBoxIcon} alt="Logo" className="headerImage" />
        <div className='logoNameContainer'>
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