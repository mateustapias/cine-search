import { createContext, Dispatch, SetStateAction } from 'react';
import { ShowLogInOrSignUp } from '../../types';

export type AppContextType = {
  showLogInOrSignUp: ShowLogInOrSignUp
  setShowLogInOrSignUp: Dispatch<SetStateAction<ShowLogInOrSignUp>>
  isLogged: boolean,
  setIsLogged: Dispatch<SetStateAction<boolean>>
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
