import '../../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import popcornBoxIcon from '../../assets/images/popcornBoxIcon.png';
import SearchBar from './SearchBar';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';
import useAppContext from '../../utils/useAppContext';
import getUserData from '../../utils/getUserData';
import { UserData } from '../../../types';
import LoggedBox from './LoggedBox';

const Header = () => {
  const { userRequest, setUserRequest } = useAppContext();
  // TODO: MUDAR O NOME DESSA VARIÁVEL
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    const userDataSession = getUserData();
    if (userDataSession) setUserData(userDataSession);
    setUserRequest(false);
  }, [userRequest]);

  return (
    <div className='c-header'>
      <Link to="/" className='c-logo' title='CineSearch'>
        <img src={popcornBoxIcon} alt="Logo" className="img-logo" />
        <div className='c-logo-name'>
          <span>C</span>ine<span>S</span>earch
        </div>
      </Link>
      <SearchBar />
      {userData
        ? <LoggedBox userData={userData} setUserData={setUserData} />
        : <>
          <LogInBox />
          <SignUpBox />
        </>
      }
    </div>
  );
};

export default Header;
