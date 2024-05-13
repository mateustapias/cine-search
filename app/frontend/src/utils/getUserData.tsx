import { UserData } from '../../types';

const getUserData = (): UserData | undefined => {
  const userDataSTR = sessionStorage.getItem('userData');
  if (userDataSTR) return JSON.parse(userDataSTR);
  return undefined;
};

export default getUserData;
