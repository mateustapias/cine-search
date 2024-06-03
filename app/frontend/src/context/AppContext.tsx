import { Dispatch, SetStateAction, createContext } from 'react';
import { ShowLogInOrSignUp } from '../../types';

export type AppContextType = {
  showLogInOrSignUp: ShowLogInOrSignUp
  setShowLogInOrSignUp: Dispatch<SetStateAction<ShowLogInOrSignUp>>
  userRequest: boolean,
  setUserRequest: Dispatch<SetStateAction<boolean>>
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
