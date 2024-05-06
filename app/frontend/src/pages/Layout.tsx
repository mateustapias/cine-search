import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import '../styles/pages/Layout.css';

const Layout = () => {
  return (
    <div className='layoutContainer'>
      <Header />
      <div className='outletContainer'>
        <Outlet />
      </div>
    </div>
  );
};


export default Layout;