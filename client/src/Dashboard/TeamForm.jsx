import React from 'react';
import DashboardSide from '../Components/DashboardSide';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TeamForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/teams/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          team_name: formData.teamName,
          team_username: formData.username,
          purse_amt: formData.purseAmount
        }),
      });

      if (response.ok) {
        console.log("Posted Data Successfully");
        navigate("/auction/lists/");
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
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Team Registration</h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="teamName">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              {...register('teamName', { required: true })}
              className={`w-full p-2 border rounded ${errors.teamName ? 'border-red-500' : ''}`}
            />
            {errors.teamName && (
              <p className="text-red-500 text-xs italic">Team Name is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: true })}
              className={`w-full p-2 border rounded ${errors.username ? 'border-red-500' : ''}`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">Username is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="purseAmount">
              Purse Amount Assign
            </label>
            <input
              type="number"
              id="purseAmount"
              {...register('purseAmount', { required: true })}
              className={`w-full p-2 border rounded ${errors.purseAmount ? 'border-red-500' : ''}`}
            />
            {errors.purseAmount && (
              <p className="text-red-500 text-xs italic">Purse Amount is required.</p>
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
