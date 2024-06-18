import { UserData } from '../../types';

const getUserData = (): UserData | undefined => {
  const userDataSTR = sessionStorage.getItem('userData');

  return userDataSTR ? JSON.parse(userDataSTR) : undefined;
};

export default getUserData;
