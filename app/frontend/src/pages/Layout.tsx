import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/Layout.css';
import useAppContext from '../utils/useAppContext';
import GeneralPrompt from '../components/LogInOrSignUpPrompt/GeneralPrompt';

const Layout = () => {
  const { showLogInOrSignUp } = useAppContext();

  return (
    <div className='layoutContainer'>
      <Header />
      <div className='outletContainer'>
        <Outlet />
      </div>
      {showLogInOrSignUp.show && <GeneralPrompt />}
    </div>
  );
};


export default Layout;