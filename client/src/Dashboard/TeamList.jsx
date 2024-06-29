import React, { useEffect, useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import AxiosInstance from "../Axios";

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeams = async () => {
    try {
      const response = await AxiosInstance.get(`teams/`);
      setTeams(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch teams", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleDelete = async (teamId) => {
    try {
      await AxiosInstance.delete(`teams/${teamId}`);
      console.log("Team deleted successfully");
      fetchTeams();
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalTeams = teams.length;

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#F23D4C]">My Teams</h2>
          <div className="flex space-x-4">
            <NavLink
              to={"/auction/teams/add"}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Add Team
            </NavLink>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg">Total Teams: {totalTeams}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-xl">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">Team Name</th>
                <th className="py-3 px-6 text-left">Image</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {teams.map((team) => (
                <tr
                  key={team.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <div className="flex space-x-2 gap-3">
                      <NavLink to={`/auction/team/edit/${team.id}`}>
                        <MdEdit className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <button
                        onClick={() => handleDelete(team.id)}
                        className="cursor-pointer"
                      >
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </button>
                      <NavLink to={`/team/details/${team.id}`}>
                        <AiFillPicture className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{team.team_name}</td>
                  <td className="py-3 px-6 text-left">
                    <img
                      src={team.team_logo}
                      alt={team.team_name}
                      className="w-16 h-16 object-cover rounded-full"
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

export default TeamList;
