import '../styles/components/Header.css';
import popcornBox from '../assets/images/popcornBox.png';

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={popcornBox} alt="Logo" className="headerImage" />
      <div className='logoNameContainer'>
        <span>CineSearch</span>
      </div>
    </div>
  );
};


export default Header;