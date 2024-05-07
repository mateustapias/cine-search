// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AppContext, { AppContextType } from './AppContext';
import { ShowLogInOrSignUp } from '../../types';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const INITIAL_SHOW_LOG_IN_OR_SIGN_UP_STATE: ShowLogInOrSignUp = {
    show: false,
    type: 'signUp'
  };

  const [showLogInOrSignUp, setShowLogInOrSignUp] = useState(INITIAL_SHOW_LOG_IN_OR_SIGN_UP_STATE);
  const INITIAL_APP_CONTEXT: AppContextType = {
    showLogInOrSignUp,
    setShowLogInOrSignUp
  };

  return (
    <AppContext.Provider value={INITIAL_APP_CONTEXT}>
      {/* <div className='appProvider'> */}
      {children}
      {/* </div> */}
    </AppContext.Provider>
  );
};

export default AppProvider;