import '../styles/components/Header.css';
import popcornBox from '../assets/images/popcornBox.png';

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={popcornBox} alt="Logo" className="headerImage" />
      <p>oi</p>
    </div>
  );
};


export default Header;