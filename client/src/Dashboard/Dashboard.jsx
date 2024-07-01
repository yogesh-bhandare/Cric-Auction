import React, { useState, useEffect } from "react";
import { MdOutlineSell } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AxiosInstance from "../Axios";

const Dashboard = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [bidAmount, setBidAmount] = useState(0);
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionResults, setAuctionResults] = useState([]);

  useEffect(() => {
    AxiosInstance.get("/players/")
      .then((response) => setPlayers(response.data))
      .catch((error) => console.error("Error fetching players:", error));

    AxiosInstance.get("/teams/")
      .then((response) => setTeams(response.data))
      .catch((error) => console.error("Error fetching teams:", error));

    AxiosInstance.get("/auctions/")
      .then((response) => setAuctions(response.data))
      .catch((error) => console.error("Error fetching auctions:", error));

    AxiosInstance.get("/summary/")
      .then((response) => setAuctionResults(response.data))
      .catch((error) => console.error("Error fetching auction results:", error));
  }, []);

  const handleSold = () => {
    const currentPlayer = players[currentPlayerIndex];
    const currentAuction = auctions[0];
    const selectedTeamObj = teams.find(team => team.team_name === selectedTeam);

    const data = {
      player: currentPlayer.id,
      team: selectedTeamObj.id,
      sold_price: bidAmount,
      status: "sold",
      auction: currentAuction.id
    };

    AxiosInstance.post("/summary/", data)
      .then((response) => {
        setAuctionResults([...auctionResults, response.data]);
        const updatedPlayers = players.map((player, index) =>
          index === currentPlayerIndex ? { ...player, status: `Sold to ${selectedTeam}` } : player
        );
        setPlayers(updatedPlayers);
        setSelectedTeam("");
        setCurrentPlayerIndex((prevIndex) =>
          prevIndex + 1 < players.length ? prevIndex + 1 : prevIndex
        );
      })
      .catch((error) => console.error("Error updating auction result:", error));
  };

  const handleUnsold = () => {
    const currentPlayer = players[currentPlayerIndex];
    const currentAuction = auctions[0];

    const data = {
      player: currentPlayer.id,
      team: null,
      sold_price: null,
      status: "unsold",
      auction: currentAuction.id
    };

    AxiosInstance.post("/summary/", data)
      .then((response) => {
        setAuctionResults([...auctionResults, response.data]);
        const updatedPlayers = players.map((player, index) =>
          index === currentPlayerIndex ? { ...player, status: "Unsold" } : player
        );
        setPlayers(updatedPlayers);
        setCurrentPlayerIndex((prevIndex) =>
          prevIndex + 1 < players.length ? prevIndex + 1 : prevIndex
        );
      })
      .catch((error) => console.error("Error updating auction result:", error));
  };

  const handleBidIncrease = () => {
    const currentPlayer = players[currentPlayerIndex];
    const currentAuction = auctions[0];

    if (currentAuction) {
      let nextBidAmount = bidAmount + currentAuction.bid_increase;

      if (nextBidAmount < currentPlayer.base_price) {
        nextBidAmount = currentPlayer.base_price;
      }

      setBidAmount(nextBidAmount);
    }
  };

  useEffect(() => {
    if (players.length > 0) {
      setBidAmount(players[currentPlayerIndex].base_price);
    }
  }, [currentPlayerIndex, players]);

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
            <h2 className="text-7xl font-bold text-[#F23D4C]">{currentPlayer.player_name}</h2>
            <p className="text-4xl">Type: {currentPlayer.player_type}</p>
            <p className="text-4xl">Points: {currentPlayer.player_points}</p>
            <p className="text-4xl">Origin: {currentPlayer.origin}</p>
            <div className="space-x-6">
              <h1 className="text-4xl pb-4">Bid Amount: {bidAmount}</h1>
            </div>
            <div className="flex space-x-4 items-center">
              <button
                onClick={handleBidIncrease}
                className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
              >
                Increase Bid by {auctions[0]?.bid_increase || 0}
              </button>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
              >
                <option value="">Select Team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team.team_name}>
                    {team.team_name}
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
            <img
              src={`http://127.0.0.1:8000/${currentPlayer.player_image}`}
              alt={currentPlayer.player_name}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      ) : (
        <h2 className="text-4xl font-bold text-[#F23D4C]">No more players</h2>
      )}
    </div>
  );
};

export default Dashboard;
