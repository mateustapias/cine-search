import '../styles/components/Header.css';
import popcornBox from '../assets/images/popcornBox.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to="/" className='logoContainer'>
        <img src={popcornBox} alt="Logo" className="headerImage" />
        <div className='logoNameContainer'>
          <span>CineSearch</span>
        </div>
      </Link>
      <SearchBar />
    </div>
  );
};


export default Header;