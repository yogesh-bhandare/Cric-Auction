import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Summary = () => {
  const [activeTab, setActiveTab] = useState("teams");

  const players = [
    { id: 1, name: "Player 1", type: "Batsman", points: 100, origin: "Native", status: "Sold to Team Alpha", price: 500 },
    { id: 2, name: "Player 2", type: "Bowler", points: 150, origin: "Overseas", status: "Unsold", price: 0 },
    { id: 3, name: "Player 3", type: "Allrounder", points: 200, origin: "Native", status: "Sold to Team Bravo", price: 700 },
  ];

  const teams = ["Team Alpha", "Team Bravo", "Team Charlie"];

  const teamData = teams.map((team) => ({
    name: team,
    players: players.filter((player) => player.status.includes(team)),
  }));

  return (
    <div className="w-full h-screen p-8 bg-[#262626] text-white flex flex-col items-center">
      <div className="absolute top-8 left-8">
        <NavLink
          to="/"
          className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Back
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold text-[#F23D4C] mb-8">Auction Summary</h1>
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab("teams")}
          className={`py-2 px-4 ${activeTab === "teams" ? "bg-[#F23D4C]" : "bg-gray-700"} text-white font-semibold rounded-l hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300`}
        >
          Team List
        </button>
        <button
          onClick={() => setActiveTab("players")}
          className={`py-2 px-4 ${activeTab === "players" ? "bg-[#F23D4C]" : "bg-gray-700"} text-white font-semibold rounded-r hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300`}
        >
          Player List
        </button>
      </div>
      {activeTab === "teams" ? (
        <div className="overflow-x-auto w-full">
          {teamData.map((team, index) => (
            <div key={index} className="mb-8 w-full">
              <h2 className="text-3xl font-bold text-[#BFF207] mb-4">{team.name}</h2>
              {team.players.length > 0 ? (
                <table className="min-w-full bg-white rounded-lg shadow-lg mb-4">
                  <thead className="bg-[#F23D4C] text-white">
                    <tr>
                      <th className="py-3 px-6 text-left">Player Name</th>
                      <th className="py-3 px-6 text-left">Type</th>
                      <th className="py-3 px-6 text-left">Points</th>
                      <th className="py-3 px-6 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {team.players.map((player) => (
                      <tr key={player.id} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{player.name}</td>
                        <td className="py-3 px-6 text-left">{player.type}</td>
                        <td className="py-3 px-6 text-left">{player.points}</td>
                        <td className="py-3 px-6 text-left">{player.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-xl text-white">No players bought by this team.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Player Name</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Points</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {players.map((player) => (
                <tr key={player.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{player.name}</td>
                  <td className="py-3 px-6 text-left">{player.type}</td>
                  <td className="py-3 px-6 text-left">{player.points}</td>
                  <td className="py-3 px-6 text-left">{player.price}</td>
                  <td className="py-3 px-6 text-left">{player.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Summary;
