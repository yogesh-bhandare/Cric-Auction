import React, { useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { NavLink } from "react-router-dom";

const PlayerForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    firstName: '',
    lastName: '',
    playerType: '',
    origin: '',
    playerPoints: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData);
  };

  return (
    <div className="flex h-screen bg-[#262626]">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] mt-10 p-8">
        <div className="bg-[#262626] p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl text-white font-bold mb-6 text-center">Player Registration</h2>
            
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 bg-white px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="playerType">
                Player Type
              </label>
              <select
                name="playerType"
                value={formData.playerType}
                onChange={handleChange}
                className="shadow appearance-none border bg-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a type</option>
                <option value="allrounder">Allrounder</option>
                <option value="batsman">Batsman</option>
                <option value="bowler">Bowler</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="origin">
                Origin of Player
              </label>
              <select
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                className="shadow appearance-none border bg-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select origin</option>
                <option value="overseas">Overseas</option>
                <option value="native">Native</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="playerPoints">
                Player Points
              </label>
              <input
                type="number"
                name="playerPoints"
                value={formData.playerPoints}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <NavLink
                to={"/auction/lists"}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
