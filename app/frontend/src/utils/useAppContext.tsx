import { useContext } from 'react';
import AppContext from '../context/AppContext';

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export default useAppContext;