import { Dispatch, useState } from 'react';
import { UserData } from '../../../types';
import useAppContext from '../../utils/useAppContext';
import defaultUserIcon from '../../assets/images/defaultUserIcon.png';
import downIcon from '../../assets/images/downIcon.png';
import '../../styles/components/LoggedBox.css';

type LoggedBoxProps = {
  userData: UserData;
  setUserData: Dispatch<React.SetStateAction<UserData | undefined>>;
};
const LoggedBox = ({ userData, setUserData }: LoggedBoxProps) => {
  const { setIsLogged } = useAppContext();
  const [menu, setMenu] = useState<boolean>(false);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
    if (event.relatedTarget
      && event.relatedTarget.parentElement
      && event.relatedTarget.parentElement.className === 'c-user-options') {
      return;
    }
    setMenu(false);
  };

  const showMenu = (): void => {
    setMenu(!menu);
  };

  const logOff = (): void => {
    sessionStorage.removeItem('userData');
    setUserData(undefined);
    setIsLogged(false);
  };

  return (
    <div className='c-logged-box' onBlur={handleBlur}>
      <button className='c-btn-user' onClick={showMenu}>
        <div className='c-img-user'>
          <img src={defaultUserIcon} />
        </div>
        <div className='c-username'>
          {userData.username}
        </div>
        <div className={`c-img-down ${menu ? ' withMenu' : ''}`}>
          <img src={downIcon}/>
        </div>
      </button>
      {menu
        && <div className='c-user-options'>
          <button className='aa btn-log-off' onClick={logOff}>
            LogOff
          </button>
        </div>
      }
    </div>
  );
};

export default LoggedBox;