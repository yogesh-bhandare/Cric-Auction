import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './Registration/Signup.jsx';
import Login from './Registration/Login.jsx';
import About from './Landing/About.jsx';
import Features from './Landing/Features.jsx';
import Working from './Landing/Working.jsx';
import Services from './Landing/Services.jsx';
import Root from './Root.jsx';
import MyAuctions from './Dashboard/MyAuctions.jsx';
import Auction from './Dashboard/Auction.jsx';
import PlayerForm from './Dashboard/PlayerForm.jsx';
import TeamForm from './Dashboard/TeamForm.jsx';
import PlayerList from './Dashboard/PlayerList.jsx';
import TeamList from './Dashboard/TeamList.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Summary from './Dashboard/Summary.jsx';
import AppLayout from './AppLayout.jsx';
import IncrementRules from './Dashboard/IncrementRules.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Root />
      },
      {
        path: "/home",
        element: <Root />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/how-it-works",
        element: <Working />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/auction/lists",
        element: <MyAuctions />
      },
      {
        path: "/auction/add",
        element: <Auction />
      },
      {
        path: "/auction/players/add",
        element: <PlayerForm />
      },
      {
        path: "/auction/players/1",
        element: <PlayerList />
      },
      {
        path: "/auction/teams/1",
        element: <TeamList />
      },
      {
        path: "/auction/teams/add",
        element: <TeamForm />
      },
      {
        path: "/auction/dashboard/1",
        element: <Dashboard />
      },
      {
        path: "/auction/summary/1",
        element: <Summary />
      },
      {
        path: "/auction/bid-rules/1",
        element: <IncrementRules />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
