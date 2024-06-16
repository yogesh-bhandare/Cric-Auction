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
    <div className="w-full h-screen p-8 bg-[#262626] text-white flex flex-col items-center justify-center">
      <div className="absolute top-8 left-8">
        <NavLink
          to="/"
          className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Back
        </NavLink>
      </div>
      {currentPlayer ? (
        <>
          <img src={currentPlayer.imgUrl} alt={currentPlayer.name} className="w-32 h-32 mb-4 rounded-full" />
          <h2 className="text-4xl font-bold text-[#F23D4C] mb-4">{currentPlayer.name}</h2>
          <p className="text-2xl mb-4">Type: {currentPlayer.type}</p>
          <p className="text-2xl mb-4">Points: {currentPlayer.points}</p>
          <p className="text-2xl mb-4">Origin: {currentPlayer.origin}</p>
          <p className="text-2xl mb-4">Status: {currentPlayer.status}</p>
          <div className="flex space-x-4 mb-4">
            <button
              onClick={handleBidIncrease}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Increase Bid by 100
            </button>
            <p className="text-2xl">Bid Amount: {bidAmount}</p>
          </div>
          <div className="flex space-x-4 mb-4">
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
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition-colors duration-300"
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
        </>
      ) : (
        <h2 className="text-4xl font-bold text-[#F23D4C]">No more players</h2>
      )}
    </div>
  );
};

export default Dashboard;
