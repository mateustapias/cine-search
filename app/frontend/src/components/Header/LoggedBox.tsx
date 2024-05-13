import { Dispatch } from 'react';
import { UserData } from '../../../types';
import useAppContext from '../../utils/useAppContext';

type LoggedBoxProps = {
  userData: UserData;
  setUserData: Dispatch<React.SetStateAction<UserData | undefined>>;
};

const LoggedBox = ({ userData, setUserData }: LoggedBoxProps) => {
  const { setIsLogged } = useAppContext();

  const handleClick = (): void => {
    sessionStorage.removeItem('userData');
    setUserData(undefined);
    setIsLogged(false);
  };

  return (
    <div className='c-logged-box'>
      {userData.username}
      <button onClick={handleClick}>
        LogOff
      </button>
    </div>
  );
};

export default LoggedBox;
