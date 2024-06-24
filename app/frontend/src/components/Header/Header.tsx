import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { popcornBoxIcon } from '../../assets/icons';
import {
  SearchBar, LogInBox, SignUpBox, LoggedBox,
} from '.';
import { getUserData, useAppContext } from '../../utils';
import { UserData } from '../../../types';
import '../../styles/layout/Header.scss';

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
