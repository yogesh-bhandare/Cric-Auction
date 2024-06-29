import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardSide from "../Components/DashboardSide";
import { MdEdit, MdDelete, MdDashboard, MdSummarize } from "react-icons/md";
// import { IoPerson, IoMdRefresh } from "react-icons/io5";
// import { FaUserGroup, FaRupeeSign, FaUserPlus } from "react-icons/fa6";
// import { FaRupeeSign } from "react-icons/fa6"
import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { IoRefresh } from "react-icons/io5";
// import { AiFillPicture } from "react-icons/ai";
// import { FiUserPlus } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineRefresh } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import AxiosInstance from "../Axios";

const MyAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  const getAuctionData = () => {
    AxiosInstance.get(`auctions/`)
      .then((res) => {
        setAuctions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching auction data:", error);
      });
  };

  useEffect(() => {
    getAuctionData();
  }, []);

  const handleDelete = (auctionId) => {
    AxiosInstance.delete(`auctions/${auctionId}`)
      .then((res) => {
        console.log("Auction deleted successfully");
        getAuctionData();
      })
      .catch((error) => {
        console.error("Error deleting auction:", error);
      });
  };

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
          <table className="min-w-full bg-white shadow-xl">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Action</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Type Of Sport</th>
                <th className="py-3 px-6 text-left">Players Per Team</th>
                <th className="py-3 px-6 text-left">Minimum Bid</th>
                <th className="py-3 px-6 text-left">Bid Increase By</th>
                <th className="py-3 px-6 text-left">Auction Purse</th>
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
                      {/* <NavLink to={`/auction/delete/${auction.id}`}>
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </NavLink> */}
                      <button
                        onClick={() => handleDelete(auction.id)}
                        className="cursor-pointer"
                      >
                        <MdDelete className="text-3xl text-[#F23D4C]" />
                      </button>
                      <NavLink to={`/auction/players/${auction.id}`}>
                        <IoMdPerson className="text-3xl text-[#F23D4C]" />
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
                      {/* <NavLink to={`/auction/logo/${auction.id}`}>
                        <AiFillPicture className="text-3xl text-[#F23D4C]" />
                      </NavLink> */}
                      <NavLink to={`/auction/bid-rules/${auction.id}`}>
                        <SlGraph className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/sponsors/${auction.id}`}>
                        <MdOutlineCurrencyRupee className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/refresh/${auction.id}`}>
                        <MdOutlineRefresh className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                      <NavLink to={`/auction/player-registration-link/${auction.id}`}>
                        <FaUserPlus className="text-3xl text-[#F23D4C]" />
                      </NavLink>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">{auction.auction_name}</td>
                  <td className="py-3 px-6 text-left">{auction.auction_type}</td>
                  <td className="py-3 px-6 text-left">{auction.players_per_team}</td>
                  <td className="py-3 px-6 text-left">{auction.min_bid}</td>
                  <td className="py-3 px-6 text-left">{auction.bid_increase}</td>
                  <td className="py-3 px-6 text-left">{auction.auction_purse}</td>
                  <td className="py-3 px-6 text-left">{new Date(auction.auction_date).toLocaleDateString()}</td>
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
