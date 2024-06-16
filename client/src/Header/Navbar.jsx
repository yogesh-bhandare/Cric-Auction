import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar text-[#262626] bg-[#BFF207] fixed z-[999] w-full px-20 py-2 font-['Poppins'] flex justify-between items-center">
      <div className="logo flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-vector/illustration-law-concept_53876-5911.jpg?w=740&t=st=1718465746~exp=1718466346~hmac=a7a0221408d37dc7c9a5307199ff9cfc138e5c8f68e68ce5441f1b35e55d0ad8"
          alt="Logo"
          className="h-12 w-12"
        />
        <h1 className="text-xl font-semibold">Cric-Auction</h1>
      </div>

      <div className="nav-links ml-auto mr-5">
        {["Home", "Features", "How It Works", "Services"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-lg font-medium capitalize ml-6"
            activeClassName="text-[#F20707]"
          >
            {item}
          </NavLink>
        ))}
      </div>

      <div className="nav-NavLinks flex gap-3">
        {["LogIn", "SignUp"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
            className={`text-lg font-medium capitalize ${
              index === 0
                ? "rounded-lg border-[2px] border-[#F23D4C] px-4 py-2"
                : "rounded-lg bg-[#F23D4C] px-4 py-2"
            }`}
            activeClassName="bg-[#F20707] text-white"
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
