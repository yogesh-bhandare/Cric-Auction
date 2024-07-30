import React, { useEffect, useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import api from "../api";

const SponsorList = () => {
  const [sponsors, setsponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchsponsors = async () => {
    try {
      const response = await api.get(`sponsors/`);
      setsponsors(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch sponsors", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchsponsors();
  }, []);

  const handleDelete = async (sponsorId) => {
    try {
      await api.delete(`sponsors/${sponsorId}`);
      console.log("sponsor deleted successfully");
      fetchsponsors();
    } catch (error) {
      console.error("Error deleting sponsor:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalsponsors = sponsors.length;

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#F23D4C]">My sponsors</h2>
          <div className="flex space-x-4">
            <NavLink
              to={"/auction/sponsors/add"}
              className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            >
              Add Sponsor
            </NavLink>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg">Total Sponsors: {totalsponsors}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-xl">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">Sponsor Name</th>
                <th className="py-3 px-6 text-left">Image</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {sponsors.map((sponsor) => (
                <tr
                  key={sponsor.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <div className="flex space-x-2 gap-3">
                      {/* <NavLink to={`/auction/sponsor/edit/${sponsor.id}`}>
                        <MdEdit className="text-3xl text-[#F23D4C]" />
                      </NavLink> */}
                      <button
                        onClick={() => handleDelete(sponsor.id)}
                        className="cursor-pointer"
                      >
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </button>
                      {/* <NavLink to={`/sponsor/details/${sponsor.id}`}>
                        <IoPerson className="text-3xl text-[#F23D4C]" />
                      </NavLink> */}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{sponsor.sponser_name}</td>
                  <td className="py-3 px-6 text-left">
                    <img
                      src={`http://127.0.0.1:8000/${sponsor.sponser_logo}`}
                      alt={sponsor.sponsor_name}
                      className="w-32 h-32 object-cover rounded-lg"
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

export default SponsorList;
