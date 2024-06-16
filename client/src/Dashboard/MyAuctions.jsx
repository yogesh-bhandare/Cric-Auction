import React from "react";
import { NavLink } from "react-router-dom";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoPerson, IoRefresh } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { SlGraph, SlVolume1 } from "react-icons/sl";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";

const MyAuctions = () => {
  // Dummy data for auctions - Replace this with actual data fetching logic
  const auctions = [
    {
      id: 1,
      name: "Auction 1",
      typeOfSport: "Hockey",
      pointsPerTeam: 12000,
      minimumBid: 600,
      bidIncreaseBy: 800,
      playersPerTeam: 12,
      date: "17-06-2024",
      description: "Description for Auction 1",
    },
    {
      id: 2,
      name: "Auction 2",
      typeOfSport: "Football",
      pointsPerTeam: 8000,
      minimumBid: 500,
      bidIncreaseBy: 700,
      playersPerTeam: 10,
      date: "20-06-2024",
      description: "Description for Auction 2",
    },
    {
      id: 3,
      name: "Auction 3",
      typeOfSport: "Cricket",
      pointsPerTeam: 15000,
      minimumBid: 1000,
      bidIncreaseBy: 1200,
      playersPerTeam: 15,
      date: "25-06-2024",
      description: "Description for Auction 3",
    },
  ];

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#F23D4C]">My Auctions</h2>
          <NavLink
            to="/auction/add"
            className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
          >
            Add Auction
          </NavLink>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Type Of Sport</th>
                <th className="py-3 px-6 text-left">Points Per Team</th>
                <th className="py-3 px-6 text-left">Minimum Bid</th>
                <th className="py-3 px-6 text-left">Bid Increase By</th>
                <th className="py-3 px-6 text-left">Players Per Team</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {auctions.map((auction) => (
                <tr
                  key={auction.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <div className="flex space-x-2 gap-3">
                      <NavLink to={`/auction/edit/${auction.id}`}>
                        <MdEdit className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/delete/${auction.id}`}>
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/players/${auction.id}`}>
                        <IoPerson className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/teams/${auction.id}`}>
                        <FaUserGroup className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/dashboard/${auction.id}`}>
                        <MdDashboard className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/summary/${auction.id}`}>
                        <MdSummarize className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/logo/${auction.id}`}>
                        <AiFillPicture className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/bid-rules/${auction.id}`}>
                        <SlGraph className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/sponsors/${auction.id}`}>
                        <FaRupeeSign className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/refresh/${auction.id}`}>
                        <IoMdRefresh className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/player-registration-link/${auction.id}`}>
                        <FaUserPlus className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{auction.name}</td>
                  <td className="py-3 px-6 text-left">{auction.typeOfSport}</td>
                  <td className="py-3 px-6 text-left">
                    {auction.pointsPerTeam}
                  </td>
                  <td className="py-3 px-6 text-left">{auction.minimumBid}</td>
                  <td className="py-3 px-6 text-left">
                    {auction.bidIncreaseBy}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {auction.playersPerTeam}
                  </td>
                  <td className="py-3 px-6 text-left">{auction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAuctions;
