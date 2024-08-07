import React from "react";
import DashboardSide from "../Components/DashboardSide";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Auction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formattedDate = dayjs(data.date).format('YYYY-MM-DD');

    const formData = new FormData();
    // formData.append('auction_logo', data.image[0]);
    formData.append('auction_name', data.name);
    formData.append('auction_date', formattedDate);
    formData.append('auction_type', data.sportType);
    formData.append('auction_purse', data.pointsPerTeam);
    formData.append('min_bid', data.minimumBid);
    formData.append('bid_increase', data.bidIncreaseBy);
    formData.append('players_per_team', data.playersPerTeam);

    try {
      const response = await api.post("/auctions/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        console.log("Posted Data Successfully");
        navigate('/auction/lists/');
      } else {
        const errorData = await response.json();
        console.error("Failed to post data", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 bg-[#262626] text-white min-h-screen pt-24">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#262626] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Auction Registration</h2>
          
          {/* <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className={`shadow appearance-none border rounded w-full py-2 bg-white px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.image ? "border-red-500" : ""
              }`}
            />
            {errors.image && <p className="text-red-500 text-xs italic">Image is required.</p>}
          </div> */}

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
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
                className={`shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.sportType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a sport</option>
                <option value="Cricket">Cricket</option>
                <option value="FootBall">FootBall</option>
                <option value="VolleyBall">VolleyBall</option>
                <option value="Hockey">Hockey</option>
              </select>
              {errors.sportType && <p className="text-red-500 text-xs italic">Sport type is required.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="pointsPerTeam">
                Purse Amount
              </label>
              <input
                type="number"
                {...register("pointsPerTeam", { required: true })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.pointsPerTeam ? "border-red-500" : ""
                }`}
              />
              {errors.pointsPerTeam && <p className="text-red-500 text-xs italic">Purse Amount is required.</p>}
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.playersPerTeam ? "border-red-500" : ""
              }`}
            />
            {errors.playersPerTeam && <p className="text-red-500 text-xs italic">Players per team is required.</p>}
          </div>

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

export default Auction;
