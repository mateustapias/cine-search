import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { GeneralPrompt } from '../components/LogInOrSignUpPrompt';
import useAppContext from '../utils/useAppContext';
import '../styles/pages/Layout.scss';

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
