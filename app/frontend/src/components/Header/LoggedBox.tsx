import { Dispatch, useState } from 'react';
import { defaultUserIcon, downIcon } from '../../assets/icons';
import { UserData } from '../../../types';
import '../../styles/components/Header/LoggedBox.scss';

type LoggedBoxProps = {
  userData: UserData;
  setUserData: Dispatch<React.SetStateAction<UserData | undefined>>;
};

const LoggedBox = ({ userData, setUserData }: LoggedBoxProps) => {
  const [menu, setMenu] = useState<boolean>(false);

  const showMenu = (): void => {
    setMenu(!menu);
  };

  const logOff = (): void => {
    sessionStorage.removeItem('userData');
    setUserData(undefined);
    window.location.reload();
  };

  return (
    <div className='c-logged-box' onBlur={(event) => (event.relatedTarget ? null : setMenu(false))}>
      <button className='c-btn-user' onClick={showMenu}>
        <div className='c-img-user'>
          <img src={defaultUserIcon} />
        </div>
        <div className='c-username'>
          <span>{userData.username}</span>
        </div>
        <div className={`c-img-down${menu ? ' with-menu' : ''}`}>
          <img src={downIcon} />
        </div>
      </button>
      {menu && (
        <div className='c-user-options'>
          <button className='aa btn-log-off' onClick={logOff}>
            LogOff
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedBox;
