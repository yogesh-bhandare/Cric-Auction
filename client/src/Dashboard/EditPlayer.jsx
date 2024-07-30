import React, { useEffect, useState } from "react";
import DashboardSide from "../Components/DashboardSide";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

const EditPlayer = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [player, setPlayer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getPlayerData = async () => {
    try {
      const response = await api.get(`players/${id}/`);
      if (response.status === 200) {
        const data = response.data;
        setPlayer(data);
        setValue("name", data.player_name);
        setValue("player_type", data.player_type);
        setValue("origin", data.origin);
        setValue("minimumBid", data.base_price);
        setValue("player_points", data.player_points);
        setValue("player_image", data.player_image); 
      } else {
        console.error("Failed to fetch player data");
      }
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  useEffect(() => {
    getPlayerData();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("player_name", data.name);
    formData.append("player_type", data.player_type);
    formData.append("origin", data.origin);
    formData.append("base_price", data.minimumBid);
    formData.append("player_points", data.player_points);

    if (data.player_image && data.player_image[0]) {
      formData.append("player_image", data.player_image[0]);
    }

    try {
      const response = await api.put(`players/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Updated Data Successfully");
        navigate('/auction/players/:id');
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#262626] p-6 rounded-lg shadow-md"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Player Registration
          </h2>
          <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="player_image">
              Player Logo
            </label>
            <input
              type="file"
              {...register("player_image")}
              className={`shadow appearance-none border rounded w-full bg-white py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Player Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={player.player_name || ""} // Ensure default value is set
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">Name is required.</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="player_type"
              >
                Player Type
              </label>
              <select
                {...register("player_type", { required: true })}
                defaultValue={player.player_type || ""}
                className={`shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.player_type ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a sport</option>
                <option value="All Rounder">All Rounder</option>
                <option value="BatsMan">BatsMan</option>
                <option value="Bowler">Bowler</option>
              </select>
              {errors.player_type && (
                <p className="text-red-500 text-xs italic">
                  Player type is required.
                </p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="origin"
              >
                Player Origin
              </label>
              <select
                {...register("origin", { required: true })}
                defaultValue={player.origin || ""}
                className={`shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.origin ? "border-red-500" : ""
                }`}
              >
                <option value="">Origin</option>
                <option value="Indian">Indian</option>
                <option value="Overseas">Overseas</option>
              </select>
              {errors.origin && (
                <p className="text-red-500 text-xs italic">
                  Player Origin is required.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="minimumBid"
              >
                Minimum Bid
              </label>
              <input
                type="number"
                {...register("minimumBid", { required: true })}
                defaultValue={player.base_price || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.minimumBid ? "border-red-500" : ""
                }`}
              />
              {errors.minimumBid && (
                <p className="text-red-500 text-xs italic">
                  Minimum bid is required.
                </p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="player_points"
              >
                Player Points
              </label>
              <input
                type="number"
                {...register("player_points", { required: true })}
                defaultValue={player.player_points || ""}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.player_points ? "border-red-500" : ""
                }`}
              />
              {errors.player_points && (
                <p className="text-red-500 text-xs italic">
                  Points per team is required.
                </p>
              )}
            </div>
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

export default EditPlayer;
