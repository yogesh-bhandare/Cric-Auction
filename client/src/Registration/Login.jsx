import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-2/3 w-full hidden md:block bg-white">
        <img
          className="w-full h-full object-scale-down object-bottom"
          src="https://img.freepik.com/free-vector/round-auction-isometric-emblem-with-auctioneer-three-men-with-tablets-their-hands-illustration_1284-31362.jpg?t=st=1718480876~exp=1718484476~hmac=4884ddfff55c7a4ed4c3f2512cdd3c59606a673b05d2cbbd09869630766c35e7&w=740"
          alt="Login"
        />
      </div>
      <div className="md:w-1/3 w-full flex flex-col justify-center items-start p-8 bg-[#262626] text-white">
        <h2 className="text-4xl font-bold mb-8 text-[#F23D4C]">Login</h2>
        <form className="w-full">
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
          <NavLink
            className="w-full py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
            type="submit"
            to={"/auction/lists"}
          >
            Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
