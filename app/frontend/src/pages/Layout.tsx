import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import '../styles/pages/Layout.scss';
import useAppContext from '../utils/useAppContext';
import GeneralPrompt from '../components/LogInOrSignUpPrompt/GeneralPrompt';

const Layout = () => {
  const { showLogInOrSignUp } = useAppContext();

  return (
    <div className='c-layout'>
      <Header />
      <div className='c-outlet'>
        <Outlet />
      </div>
      {showLogInOrSignUp.show && <GeneralPrompt />}
    </div>
  );
};

export default Layout;
