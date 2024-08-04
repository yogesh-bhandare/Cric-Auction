import React from 'react'
import DashboardSide from '../Components/DashboardSide'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api'

const SponsorForm = () => {
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("sponser_logo", data.image[0]); 
    formData.append("sponser_name", data.name);
    formData.append("auction",id);

    try {
      const response = await api.post("/sponsors/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        console.log("Posted Data Successfully");
        navigate(`/auction/sponsors/${id}`);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#262626] p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sponsors Registration
          </h2>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Sponsor Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">Name is required.</p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="image"
              >
                Sponsor Image
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                accept="image/*"
                className={`shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline ${
                  errors.image ? "border-red-500" : ""
                }`}
              />
              {errors.image && (
                <p className="text-red-500 text-xs italic">
                  Image is required.
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
  )
}

export default SponsorForm