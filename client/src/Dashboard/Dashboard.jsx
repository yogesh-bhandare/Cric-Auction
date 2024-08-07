import React, { useState, useEffect } from "react";
import { MdOutlineSell } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import api from "../api";

const Dashboard = () => {
  const { id } = useParams();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [bidAmount, setBidAmount] = useState(0);
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionResults, setAuctionResults] = useState([]);
  const [bidincrement, setBidincrement] = useState([]);

  const fetchDashboardData = () => {
    api.get("/players/")
      .then((response) => setPlayers(response.data))
      .catch((error) => console.error("Error fetching players:", error));

    api.get("/teams/")
      .then((response) => setTeams(response.data))
      .catch((error) => console.error("Error fetching teams:", error));

    api.get("/auctions/")
      .then((response) => setAuctions(response.data))
      .catch((error) => console.error("Error fetching auctions:", error));

    api.get("/summary/")
      .then((response) => setAuctionResults(response.data))
      .catch((error) => console.error("Error fetching auction results:", error));

    api.get("/bidincrement/")
      .then((response) => setBidincrement(response.data))
      .catch((error) => console.error("Error fetching bid data:", error));
  };

  useEffect(() => {
    fetchDashboardData();
    const storedPlayerIndex = localStorage.getItem(`currentPlayerIndex_${id}`);
    if (storedPlayerIndex) {
      setCurrentPlayerIndex(Number(storedPlayerIndex));
    }
    console.log("Successfully Fetched");
  }, []);

  const handleSold = () => {
    const currentPlayer = players[currentPlayerIndex];
    const selectedTeamObj = teams.find((team) => team.team_name === selectedTeam);

    const data = {
      player: currentPlayer.id,
      team: selectedTeamObj.id,
      sold_price: bidAmount,
      status: "sold",
      auction: id,
    };
    api.post("/summary/", data)
      .then((response) => {
        setAuctionResults([...auctionResults, response.data]);
        const updatedPlayers = players.map((player, index) =>
          index === currentPlayerIndex ? { ...player, status: `Sold to ${selectedTeam}` } : player
        );
        setPlayers(updatedPlayers);
        setSelectedTeam("");
        const nextIndex = currentPlayerIndex + 1 < players.length ? currentPlayerIndex + 1 : currentPlayerIndex;
        setCurrentPlayerIndex(nextIndex);
        localStorage.setItem(`currentPlayerIndex_${id}`, nextIndex);
      })
      .catch((error) => console.error("Error updating auction result:", error));
  };

  const handleUnsold = () => {
    const currentPlayer = players[currentPlayerIndex];

    const data = {
      player: currentPlayer.id,
      team: null,
      sold_price: null,
      status: "unsold",
      auction: id,
    };
    api.post("/summary/", data)
      .then((response) => {
        setAuctionResults([...auctionResults, response.data]);
        const updatedPlayers = players.map((player, index) =>
          index === currentPlayerIndex ? { ...player, status: "Unsold" } : player
        );
        setPlayers(updatedPlayers);
        const nextIndex = currentPlayerIndex + 1 < players.length ? currentPlayerIndex + 1 : currentPlayerIndex;
        setCurrentPlayerIndex(nextIndex);
        localStorage.setItem(`currentPlayerIndex_${id}`, nextIndex);
      })
      .catch((error) => console.error("Error updating auction result:", error));
  };

  const handleBidIncrease = () => {
    const currentPlayer = players[currentPlayerIndex];
    const currentAuction = auctions[0];

    if (bidincrement.length > 0) {
      const bidData = bidincrement[0];
      const bidAmtFromBackend = bidData.bidAmt;
      const bidIncrementFromBackend = bidData.bidIncrement;

      let nextBidAmount = bidAmount;

      if (bidAmount >= bidAmtFromBackend) {
        nextBidAmount += bidIncrementFromBackend;
      } else if (currentAuction) {
        nextBidAmount += currentAuction.bid_increase;

        if (nextBidAmount >= bidAmtFromBackend) {
          nextBidAmount = bidAmtFromBackend + bidIncrementFromBackend;
        }
      }

      if (nextBidAmount < currentPlayer.base_price) {
        nextBidAmount = currentPlayer.base_price;
      }

      setBidAmount(nextBidAmount);
    } else if (currentAuction) {
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
      <div className="absolute top-3 left-3">
        <NavLink
          to="/auction/lists"
          className="py-2 px-4 mx-1 bg-[#F23D4C] text-xs text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Back
        </NavLink>
        <NavLink
          to={`/auction/summary/${id}`}
          className="py-2 px-4 mx-1 bg-[#F23D4C] text-xs text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Summary
        </NavLink>
      </div>
      {currentPlayer ? (
        <div className="flex w-full h-full">
          <div className="w-1/2 flex flex-col justify-center items-center p-8 space-y-4">
            <h2 className="text-8xl font-bold text-[#F23D4C]">{currentPlayer.player_name}</h2>
            <p className="text-5xl">Type: {currentPlayer.player_type}</p>
            <p className="text-5xl">Points: {currentPlayer.player_points}</p>
            <p className="text-5xl">Origin: {currentPlayer.origin}</p>
            <div className="space-x-6">
              <h1 className="text-5xl pb-4">Bid Amount: {bidAmount}</h1>
            </div>
            <div className="flex space-x-2 items-center absolute bottom-2 left-2 text-sm">
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
              src={currentPlayer.player_image}
              alt={currentPlayer.player_name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ) : (
        <p className="text-3xl text-center">No more players to auction.</p>
      )}
    </div>
  );
};

export default Dashboard;
