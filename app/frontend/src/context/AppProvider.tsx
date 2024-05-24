import { useState } from 'react';
import AppContext, { AppContextType } from './AppContext';
import { ShowLogInOrSignUp } from '../../types';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const INITIAL_SHOW_LOG_IN_OR_SIGN_UP_STATE: ShowLogInOrSignUp = {
    show: false,
    type: 'logIn',
  };

  const [showLogInOrSignUp, setShowLogInOrSignUp] = useState<ShowLogInOrSignUp>(
    INITIAL_SHOW_LOG_IN_OR_SIGN_UP_STATE,
  );
  const [userRequest, setUserRequest] = useState<boolean>(false);
  const INITIAL_APP_CONTEXT: AppContextType = {
    showLogInOrSignUp,
    setShowLogInOrSignUp,
    userRequest,
    setUserRequest,
  };

  return (
    <AppContext.Provider value={INITIAL_APP_CONTEXT}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
