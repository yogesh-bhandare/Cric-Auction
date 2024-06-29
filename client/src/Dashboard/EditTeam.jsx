import React, { useEffect, useState } from 'react';
import DashboardSide from '../Components/DashboardSide';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosInstance from '../Axios';

const EditTeam = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await AxiosInstance.get(`/teams/${id}/`);
        const teamData = response.data;
        setValue('teamName', teamData.team_name);
        setValue('username', teamData.team_username);
        setValue('purseAmount', teamData.purse_amt);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch team data", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTeam();
  }, [id, setValue]);

  const onSubmit = async (formData) => {
    try {
      const response = await AxiosInstance.put(`/teams/${id}/`, {
        team_name: formData.teamName,
        team_username: formData.username,
        purse_amt: formData.purseAmount
      });

      if (response.status === 200) {
        console.log("Updated Data Successfully");
        navigate("/auction/lists/");
      } else {
        console.error("Failed to update data", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex h-screen bg-[#262626]">
      <DashboardSide />
      <div className="flex items-center justify-center w-full p-8 md:ml-[16vw]">
        <form
          className="bg-[#262626] p-6 rounded-lg shadow-md w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Edit Team</h2>

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

export default EditTeam;
