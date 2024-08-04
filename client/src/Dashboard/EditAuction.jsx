import React, { useEffect, useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

const EditAuction = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [auction, setAuction] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getAuctionData = async () => {
    try {
      const response = await api.get(`auctions/${id}/`);
      if (response.status === 200) {
        const data = response.data;
        setAuction(data);
        setValue("name", data.auction_name);
        setValue("date", dayjs(data.auction_date).format('YYYY-MM-DD'));
        setValue("sportType", data.auction_type);
        setValue("pointsPerTeam", data.auction_purse);
        setValue("minimumBid", data.min_bid);
        setValue("bidIncreaseBy", data.bid_increase);
        setValue("playersPerTeam", data.players_per_team);
        setValue("auctionLogo", data.auction_logo); 
      } else {
        console.error("Failed to fetch auction data");
      }
    } catch (error) {
      console.error("Error fetching auction data:", error);
    }
  };

  useEffect(() => {
    getAuctionData();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    const formattedDate = dayjs(data.date).format('YYYY-MM-DD');

    formData.append("auction_name", data.name);
    formData.append("auction_date", formattedDate);
    formData.append("auction_type", data.sportType);
    formData.append("auction_purse", data.pointsPerTeam);
    formData.append("min_bid", data.minimumBid);
    formData.append("bid_increase", data.bidIncreaseBy);
    formData.append("players_per_team", data.playersPerTeam);
    formData.append("auction",id);

    // Append the image file if it exists
    if (data.auctionLogo && data.auctionLogo[0]) {
      formData.append("auction_logo", data.auctionLogo[0]);
    }

    try {
      const response = await api.put(`auctions/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Updated Data Successfully");
        navigate('/auction/lists/');
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#262626] p-6 rounded-lg shadow-md" encType="multipart/form-data">
          <h2 className="text-2xl font-bold mb-6 text-center">Auction Registration</h2>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={auction.auction_name || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                defaultValue={dayjs(auction.auction_date).format('YYYY-MM-DD')}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.date ? "border-red-500" : ""
                }`}
              />
              {errors.date && <p className="text-red-500 text-xs italic">Date is required.</p>}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="sportType">
                Type of Sport
              </label>
              <select
                {...register("sportType", { required: true })}
                defaultValue={auction.auction_type || ""}
                className={`shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.sportType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Volleyball">Volleyball</option>
              </select>
              {errors.sportType && <p className="text-red-500 text-xs italic">Sport type is required.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="pointsPerTeam">
                Points per Team
              </label>
              <input
                type="number"
                {...register("pointsPerTeam", { required: true })}
                defaultValue={auction.auction_purse || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.pointsPerTeam ? "border-red-500" : ""
                }`}
              />
              {errors.pointsPerTeam && <p className="text-red-500 text-xs italic">Points per team is required.</p>}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="minimumBid">
                Minimum Bid
              </label>
              <input
                type="number"
                {...register("minimumBid", { required: true })}
                defaultValue={auction.min_bid || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.minimumBid ? "border-red-500" : ""
                }`}
              />
              {errors.minimumBid && <p className="text-red-500 text-xs italic">Minimum bid is required.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="bidIncreaseBy">
                Bid Increase By
              </label>
              <input
                type="number"
                {...register("bidIncreaseBy", { required: true })}
                defaultValue={auction.bid_increase || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.bidIncreaseBy ? "border-red-500" : ""
                }`}
              />
              {errors.bidIncreaseBy && <p className="text-red-500 text-xs italic">Bid increase is required.</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="playersPerTeam">
              Players per Team
            </label>
            <input
              type="number"
              {...register("playersPerTeam", { required: true })}
              defaultValue={auction.players_per_team || ""}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.playersPerTeam ? "border-red-500" : ""
              }`}
            />
            {errors.playersPerTeam && <p className="text-red-500 text-xs italic">Players per team is required.</p>}
          </div>

          {/* <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="auctionLogo">
              Auction Logo
            </label>
            <input
              type="file"
              {...register("auctionLogo")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div> */}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAuction;
