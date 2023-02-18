import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterBottom from './footer/FooterBottom';
import Navbar from './navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterBottom />
    </>
  );
};

export default Layout;
