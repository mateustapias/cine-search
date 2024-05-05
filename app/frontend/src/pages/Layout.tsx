import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

// type LayoutProps = {
//   children: React.ReactNode
// }

const Layout = () => {
// const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      {/* {children} */}
    </div>
  );
};


export default Layout;