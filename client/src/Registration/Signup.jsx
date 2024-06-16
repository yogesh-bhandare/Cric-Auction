// SignUp.js
import React from 'react';

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-2/3 w-full hidden md:block bg-white">
        <img
          className="w-full h-full object-scale-down object-bottom"
          src="https://img.freepik.com/premium-vector/law-justice-concept-with-characters-judical-elements-lawbook-lawyer-judg-with-gavel-courtroom-court-jury-people_87771-4485.jpg?w=996" 
          alt="Sign Up"
        />
      </div>
      <div className="md:w-1/3 w-full flex flex-col justify-center items-start p-8 bg-[#262626] text-white">
        <h2 className="text-4xl font-bold mb-8 text-[#F23D4C]">Sign Up</h2>
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-[#BFF207] rounded bg-[#262626] text-white focus:outline-none focus:border-[#F23D4C]"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-[#BFF207] rounded bg-[#262626] text-white focus:outline-none focus:border-[#F23D4C]"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-[#BFF207] rounded bg-[#262626] text-white focus:outline-none focus:border-[#F23D4C]"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
