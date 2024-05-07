// import { Outlet } from 'react-router-dom';
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={{}}>
      {/* <div className='appProvider'> */}
      {children}
      {/* </div> */}
    </AppContext.Provider>
  );
};

export default AppProvider;