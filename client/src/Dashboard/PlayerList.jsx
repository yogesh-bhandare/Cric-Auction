import React from "react";
// import { button } from "react-router-dom";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PlayerList = () => {
  // Dummy data for players - Replace this with actual data fetching logic
  const players = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      playerType: "Batsman",
      origin: "Native",
      playerPoints: 100,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      playerType: "Bowler",
      origin: "Overseas",
      playerPoints: 150,
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      playerType: "Allrounder",
      origin: "Native",
      playerPoints: 200,
    },
  ];

  const totalPlayers = players.length;

  const handleDownload = () => {
    // Implement download logic here
    console.log("Download player list");
  };

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#F23D4C]">My Players</h2>
          <div className="flex space-x-4">
            <NavLink
              to={"/auction/players/add"}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Add Player
            </NavLink>
            <button
              onClick={handleDownload}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              {/* <IoMdDownload className="inline-block mr-2" /> */}
              Download List
            </button>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg">Total Players: {totalPlayers}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">First Name</th>
                <th className="py-3 px-6 text-left">Last Name</th>
                <th className="py-3 px-6 text-left">Player Type</th>
                <th className="py-3 px-6 text-left">Origin</th>
                <th className="py-3 px-6 text-left">Player Points</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {players.map((player) => (
                <tr
                  key={player.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <div className="flex space-x-2 gap-3">
                      <button to={`/player/edit/${player.id}`}>
                        <MdEdit className="text-3xl text-[#F23D4C]" />
                      </button>
                      <button to={`/player/delete/${player.id}`}>
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </button>
                      <button to={`/player/details/${player.id}`}>
                        <IoPerson className="text-3xl text-[#F23D4C]" />
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{player.firstName}</td>
                  <td className="py-3 px-6 text-left">{player.lastName}</td>
                  <td className="py-3 px-6 text-left">{player.playerType}</td>
                  <td className="py-3 px-6 text-left">{player.origin}</td>
                  <td className="py-3 px-6 text-left">{player.playerPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
