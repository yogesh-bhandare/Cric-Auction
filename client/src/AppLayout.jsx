import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Header/Navbar';

const AppLayout = () => {
  const location = useLocation();

  const noNavbarRoutes = [
    '/auction/dashboard/1',
    '/auction/summary/1',
    '/auction/players/add',
    '/auction/players/1',
    '/auction/teams/1',
    '/auction/teams/add',
    '/auction/add',
    '/auction/lists',
    '/auction/bid-rules/1',
    '/team-summary',
  ];

  const shouldHideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default AppLayout;
