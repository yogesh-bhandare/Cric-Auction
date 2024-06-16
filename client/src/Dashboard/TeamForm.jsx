import React, { useState } from 'react';
import DashboardSide from '../Components/DashboardSide';
import { NavLink } from 'react-router-dom';

const TeamForm = () => {
  const [formData, setFormData] = useState({
    teamImage: null,
    teamName: '',
    username: '',
    password: '',
    purseAmount: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex h-screen bg-[#262626]">
      <DashboardSide />
      <div className="flex items-center justify-center w-full p-8 md:ml-[16vw]">
        <form className="bg-[#262626] p-6 rounded-lg shadow-md w-full" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Team Registration</h2>
          
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="teamImage">
              Upload Team Image
            </label>
            <input
              type="file"
              id="teamImage"
              name="teamImage"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="teamName">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="purseAmount">
              Purse Amount Assign
            </label>
            <input
              type="number"
              id="purseAmount"
              name="purseAmount"
              value={formData.purseAmount}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <NavLink
            to="/auction/lists"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Submit
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
