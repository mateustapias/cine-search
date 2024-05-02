import React from 'react';
import Header from '../components/Header';
import '../styles/pages/Layout.css';

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <Header />
      {children}
    </div>
  );
};


export default Layout;