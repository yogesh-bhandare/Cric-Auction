import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import api from "../api";

const Summary = () => {
  const {id} = useParams()
  const [activeTab, setActiveTab] = useState("teams");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const response = await api.get("/summary/");

        const playersData = await Promise.all(
          response.data.map(async (result) => {
            const playerResponse = await api.get(`/players/${result.player}/`);
            const playerData = playerResponse.data;

            let teamName = "Unknown Team";
            if (result.team !== null) {
              const teamResponse = await api.get(`/teams/${result.team}/`);
              teamName = teamResponse.data.team_name;
            }

            return {
              id: result.player,
              name: playerData.player_name,
              type: playerData.player_type,
              points: playerData.player_points,
              origin: playerData.origin,
              base_price: playerData.base_price,
              status: result.status,
              price: result.sold_price ? result.sold_price : "NULL",
              team: teamName,
            };
          })
        );

        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching auction results:", error);
      }
    };

    fetchSummaryData();
  }, []);

  const teamData = players.reduce((acc, player) => {
    if (!acc[player.team]) {
      acc[player.team] = [];
    }
    acc[player.team].push(player);
    return acc;
  }, {});

  return (
    <div className="w-full h-screen p-8 bg-[#262626] text-white flex flex-col items-center">
      <div className="absolute top-3 left-3">
        <NavLink
          to="/auction/lists"
          className="py-2 px-4 mx-1 bg-[#F23D4C] text-xs text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Back
        </NavLink>
        <NavLink
          to={`/auction/dashboard/${id}`}
          className="py-2 px-4 mx-1 bg-[#F23D4C] text-xs text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
        >
          Auction
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
          {Object.keys(teamData).length > 0 ? (
            Object.keys(teamData).map((team, index) => (
              <div key={index} className="mb-8 w-full">
                <h2 className="text-3xl font-bold text-[#BFF207] mb-4">{team}</h2>
                {teamData[team].length > 0 ? (
                  <table className="min-w-full bg-white shadow-xl mb-4">
                    <thead className="bg-[#F23D4C] text-white">
                      <tr>
                        <th className="py-3 px-6 text-left">Player Name</th>
                        <th className="py-3 px-6 text-left">Type</th>
                        <th className="py-3 px-6 text-left">Points</th>
                        <th className="py-3 px-6 text-left">Origin</th>
                        <th className="py-3 px-6 text-left">Base Price</th>
                        <th className="py-3 px-6 text-left">Sold Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {teamData[team].map((player) => (
                        <tr key={player.id} className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">{player.name}</td>
                          <td className="py-3 px-6 text-left">{player.type}</td>
                          <td className="py-3 px-6 text-left">{player.points}</td>
                          <td className="py-3 px-6 text-left">{player.origin}</td>
                          <td className="py-3 px-6 text-left">{player.base_price}</td>
                          <td className="py-3 px-6 text-left">{player.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-xl text-white">No players bought by this team.</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-xl text-white">No team data available.</p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-lg">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Player Name</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Points</th>
                <th className="py-3 px-6 text-left">Origin</th>
                <th className="py-3 px-6 text-left">Base Price</th>
                <th className="py-3 px-6 text-left">Sold Price</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Team Name</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {players.map((player) => (
                <tr key={player.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{player.name}</td>
                  <td className="py-3 px-6 text-left">{player.type}</td>
                  <td className="py-3 px-6 text-left">{player.points}</td>
                  <td className="py-3 px-6 text-left">{player.origin}</td>
                  <td className="py-3 px-6 text-left">{player.base_price}</td>
                  <td className="py-3 px-6 text-left">{player.price}</td>
                  <td className="py-3 px-6 text-left">{player.status}</td>
                  <td className="py-3 px-6 text-left">{player.team}</td>
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
