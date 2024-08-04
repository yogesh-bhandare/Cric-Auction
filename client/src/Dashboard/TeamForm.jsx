import React from "react";
import DashboardSide from "../Components/DashboardSide";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const TeamForm = () => {
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("team_logo", data.teamLogo[0]);
    formData.append("team_name", data.teamName);
    formData.append("team_username", data.username);
    formData.append("purse_amt", data.purseAmount);
    formData.append("auction",id);
    console.log(formData);
    try {
      const response = await api.post("/teams/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status == 201) {
        console.log("Posted Data Successfully");
        navigate(`/auction/teams/${id}`);
      } else {
        const errorData = await response.json();
        console.error("Failed to post data", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-[#262626]">
      <DashboardSide />
      <div className="flex items-center justify-center w-full p-8 md:ml-[16vw]">
        <form
          className="bg-[#262626] p-6 rounded-lg shadow-md w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Team Registration
          </h2>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="teamLogo"
            >
              Team Logo
            </label>
            <input
              type="file"
              id="teamLogo"
              {...register("teamLogo", { required: true })}
              accept="image/*"
              className={`w-full p-2 bg-white text-black border rounded ${
                errors.teamLogo ? "border-red-500" : ""
              }`}
            />
            {errors.teamLogo && (
              <p className="text-red-500 text-xs italic">
                Team Logo is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="teamName"
            >
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              {...register("teamName", { required: true })}
              className={`w-full p-2 border rounded ${
                errors.teamName ? "border-red-500" : ""
              }`}
            />
            {errors.teamName && (
              <p className="text-red-500 text-xs italic">
                Team Name is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
              className={`w-full p-2 border rounded ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Username is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="purseAmount"
            >
              Purse Amount Assign
            </label>
            <input
              type="number"
              id="purseAmount"
              {...register("purseAmount", { required: true })}
              className={`w-full p-2 border rounded ${
                errors.purseAmount ? "border-red-500" : ""
              }`}
            />
            {errors.purseAmount && (
              <p className="text-red-500 text-xs italic">
                Purse Amount is required.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
