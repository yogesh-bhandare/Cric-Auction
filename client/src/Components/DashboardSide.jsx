import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSide = () => {
  return (
    <div className="h-screen w-[16vw] bg-gradient-to-b from-blue-950 to-purple-800 text-white font-[Poppins] fixed top-0 left-0 z-10">
      <div className="bg-indigo-950 text-center py-4">
        <h1 className="text-2xl">Cric Auction</h1>
      </div>
      <div className="flex flex-col items-center mt-8 space-y-4">
        <NavLink
          to="/auction/lists"
          className={({ isActive }) =>
            `w-full text-center py-2 hover:bg-[#F23D4C] hover:text-white transition-colors duration-300 ${
              isActive ? 'bg-[#F23D4C] text-white' : ''
            }`
          }
        >
          <h1>My Auctions</h1>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `w-full text-center py-2 hover:bg-[#F23D4C] hover:text-white transition-colors duration-300 ${
              isActive ? 'bg-[#F23D4C] text-white' : ''
            }`
          }
        >
          <h1>Profile</h1>
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `w-full text-center py-2 hover:bg-[#F23D4C] hover:text-white transition-colors duration-300 ${
              isActive ? 'bg-[#F23D4C] text-white' : ''
            }`
          }
        >
          <h1>Logout</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSide;
