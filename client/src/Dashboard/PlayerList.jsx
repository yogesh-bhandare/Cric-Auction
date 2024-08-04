import React, { useEffect, useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import api from "../api";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const {id} = useParams();

  const fetchPlayers = async () => {
    try {
      const response = await api.get(`players/`);
      if (response.status === 200) {
        setPlayers(response.data);
      } else {
        console.error("Failed to fetch players data");
      }
    } catch (error) {
      console.error("Error fetching players data:", error);
    }
  };

  const handleDelete = (playerId) => {
    api.delete(`players/${playerId}`)
      .then((res) => {
        console.log("Player deleted successfully");
        fetchPlayers(); 
      })
      .catch((error) => {
        console.error("Error deleting player:", error);
      });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const totalPlayers = players.length;

  const handleDownload = () => {
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
              to={`/auction/players/add/${id}`}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Add Player
            </NavLink>
            <button
              onClick={handleDownload}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Download List
            </button>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg">Total Players: {totalPlayers}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-xl">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">Player Type</th>
                <th className="py-3 px-6 text-left">Origin</th>
                <th className="py-3 px-6 text-left">Player Points</th>
                <th className="py-3 px-6 text-left">Base Price</th>
                <th className="py-3 px-6 text-left">Player Image</th>
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
                      <NavLink to={`/auction/player/edit/${player.id}`}>
                        <MdEdit className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <button
                        onClick={() => handleDelete(player.id)}
                        className="cursor-pointer"
                      >
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </button>
                      <NavLink to={`/player/details/${player.id}`}>
                        <IoPerson className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{player.player_name}</td>
                  <td className="py-3 px-6 text-left">{player.player_type}</td>
                  <td className="py-3 px-6 text-left">{player.origin}</td>
                  <td className="py-3 px-6 text-left">{player.player_points}</td>
                  <td className="py-3 px-6 text-left">{player.base_price}</td>
                  <td className="py-3 px-6 text-left">
                    <img
                      src={player.player_image}
                      alt={player.player_name}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </td>
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
