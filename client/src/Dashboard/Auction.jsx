import React, { useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { NavLink } from "react-router-dom";

const Auction = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    date: '',
    sportType: '',
    pointsPerTeam: '',
    minimumBid: '',
    bidIncreaseBy: '',
    playersPerTeam: ''
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
    console.log(formData);
  };

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <form onSubmit={handleSubmit} className="bg-[#262626] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Auction Registration</h2>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 bg-white px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="sportType">
                Type of Sport
              </label>
              <select
                name="sportType"
                value={formData.sportType}
                onChange={handleChange}
                className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Volleyball">Volleyball</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="pointsPerTeam">
                Points per Team
              </label>
              <input
                type="number"
                name="pointsPerTeam"
                value={formData.pointsPerTeam}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="minimumBid">
                Minimum Bid
              </label>
              <input
                type="number"
                name="minimumBid"
                value={formData.minimumBid}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="bidIncreaseBy">
                Bid Increase By
              </label>
              <input
                type="number"
                name="bidIncreaseBy"
                value={formData.bidIncreaseBy}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="playersPerTeam">
              Players per Team
            </label>
            <input
              type="number"
              name="playersPerTeam"
              value={formData.playersPerTeam}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <NavLink
            to={'/auction/lists'}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auction;
