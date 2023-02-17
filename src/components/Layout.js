import React from 'react';
import { Outlet } from 'react-router-dom';

import Banner from './banner/Banner';
import Contact from './contact/Contact';
import FooterBottom from './footer/FooterBottom';
import Navbar from './navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />
      <Contact />
      <FooterBottom />
    </>
  );
};

export default Layout;
