import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./Components/ProtectedRoute"
import Root from './Root.jsx';
import MyAuctions from './Dashboard/MyAuctions.jsx';
import EditAuction from './Dashboard/EditAuction.jsx';
import Auction from './Dashboard/Auction.jsx';
import PlayerForm from './Dashboard/PlayerForm.jsx';
import TeamForm from './Dashboard/TeamForm.jsx';
import PlayerList from './Dashboard/PlayerList.jsx';
import TeamList from './Dashboard/TeamList.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Summary from './Dashboard/Summary.jsx';
import IncrementRules from './Dashboard/IncrementRules.jsx';
import EditPlayer from './Dashboard/EditPlayer.jsx';
import EditTeam from './Dashboard/EditTeam.jsx';
import SponsorList from './Dashboard/SponsorList.jsx';
import SponsorForm from './Dashboard/SponsorForm.jsx';
import TeamSummary from "./TeamDashboard/TeamSummary.jsx"
import Profile from "./Dashboard/Profile.jsx"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auction/lists"
          element={
            <ProtectedRoute>
              <MyAuctions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/add/"
          element={
            <ProtectedRoute>
              <Auction/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/edit/:id"
          element={
            <ProtectedRoute>
              <EditAuction/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/players/add/:id"
          element={
            <ProtectedRoute>
              <PlayerForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/players/:id"
          element={
            <ProtectedRoute>
              <PlayerList/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/player/edit/:id"
          element={
            <ProtectedRoute>
              <EditPlayer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/teams/:id"
          element={
            <ProtectedRoute>
              <TeamList/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/teams/add/:id"
          element={
            <ProtectedRoute>
              <TeamForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/team/edit/:id"
          element={
            <ProtectedRoute>
              <EditTeam/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/dashboard/:id"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/summary/:id"
          element={
            <ProtectedRoute>
              <Summary/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/bid-rules/:id"
          element={
            <ProtectedRoute>
              <IncrementRules/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/sponsors/:id"
          element={
            <ProtectedRoute>
              <SponsorList/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auction/sponsors/add/:id"
          element={
            <ProtectedRoute>
              <SponsorForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/"
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route path="/team-summary" element={
          <ProtectedRoute>
            <TeamSummary/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Root />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
