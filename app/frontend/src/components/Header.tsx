import '../styles/components/Header.css';
import popcornBox from '../assets/images/popcornBox.png';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='logoContainer'>
        <img src={popcornBox} alt="Logo" className="headerImage" />
        <div className='logoNameContainer'>
          <span>CineSearch</span>
        </div>
      </div>
      <div className='searchContainer'>
        <SearchBar />
      </div>
    </div>
  );
};


export default Header;