import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Header/Navbar';

const AppLayout = () => {
  const location = useLocation();

  const noNavbarRoutes = [
    '/auction/dashboard/',
    '/auction/summary/',
    '/auction/players/add',
    '/auction/players/',
    '/auction/teams/',
    '/auction/teams/add',
    '/auction/add',
    '/auction/lists',
    '/auction/bid-rules/',
    '/team-summary',
    '/auction/edit/',
    '/auction/player/edit/',
    '/auction/team/edit/',
    '/auction/sponsors/',
    '/auction/sponsors/add',
  ];

  const shouldHideNavbar = noNavbarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default AppLayout;
