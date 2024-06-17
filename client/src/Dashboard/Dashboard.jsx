import React, { useState } from "react";
import { MdOutlineSell } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [bidAmount, setBidAmount] = useState(0);
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Player 1",
      type: "Batsman",
      points: 100,
      origin: "Native",
      status: "Available",
      imgUrl: "path/to/player1.jpg"
    },
    {
      id: 2,
      name: "Player 2",
      type: "Bowler",
      points: 150,
      origin: "Overseas",
      status: "Available",
      imgUrl: "path/to/player2.jpg"
    },
    {
      id: 3,
      name: "Player 3",
      type: "Allrounder",
      points: 200,
      origin: "Native",
      status: "Available",
      imgUrl: "path/to/player3.jpg"
    },
  ]);

  const teams = ["Team Alpha", "Team Bravo", "Team Charlie"];

  const handleSold = () => {
    const updatedPlayers = players.map((player, index) =>
      index === currentPlayerIndex ? { ...player, status: `Sold to ${selectedTeam}` } : player
    );
    setPlayers(updatedPlayers);
    setSelectedTeam("");
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1 < players.length ? prevIndex + 1 : prevIndex));
  };

  const handleUnsold = () => {
    const updatedPlayers = players.map((player, index) =>
      index === currentPlayerIndex ? { ...player, status: "Unsold" } : player
    );
    setPlayers(updatedPlayers);
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1 < players.length ? prevIndex + 1 : prevIndex));
  };

  const handleBidIncrease = () => {
    setBidAmount(bidAmount + 100);
  };

  const currentPlayer = players[currentPlayerIndex];

  return (
    <div className="w-full h-screen p-8 bg-[#262626] text-white flex">
      <div className="absolute top-8 left-8">
        <NavLink
          to="/auction/lists"
          className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Back
        </NavLink>
      </div>
      {currentPlayer ? (
        <div className="flex w-full h-full">
          <div className="w-1/2 flex flex-col justify-center items-center p-8 space-y-4">
            <h2 className="text-7xl font-bold text-[#F23D4C]">{currentPlayer.name}</h2>
            <p className="text-4xl">Type: {currentPlayer.type}</p>
            <p className="text-4xl">Points: {currentPlayer.points}</p>
            <p className="text-4xl">Origin: {currentPlayer.origin}</p>
            <p className="text-4xl">Status: {currentPlayer.status}</p>
            <div className="space-x-6">
              <h1 className="text-4xl pb-4">Bid Amount: {bidAmount}</h1>
              <button
                onClick={handleBidIncrease}
                className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
              >
                Increase Bid by 100
              </button>
            </div>
            <div className="flex space-x-4 items-center">
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
              >
                <option value="">Select Team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team}>
                    {team}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSold}
                className="flex items-center gap-1 justify-center py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition-colors duration-300"
                disabled={!selectedTeam}
              >
                <MdOutlineSell className="text-xl" /> Sold
              </button>
              <button
                onClick={handleUnsold}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300"
              >
                Unsold
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src={currentPlayer.imgUrl} alt={currentPlayer.name} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      ) : (
        <h2 className="text-4xl font-bold text-[#F23D4C]">No more players</h2>
      )}
    </div>
  );
};

export default Dashboard;
