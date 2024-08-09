import React, { useState } from "react";
import { Link, NavLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar text-[#262626] bg-[#BFF207] fixed z-[999] w-full px-4 py-2 font-['Poppins'] flex justify-between items-center">
      <Link
        key={"Landing"}
        to={"landing"}
        smooth={true}
        duration={1000}
        className="cursor-pointer"
      >
      <div className="logo flex items-center gap-3">
        <img
          src="/src/assets/Logo-1.png"
          alt="Logo"
          className="h-12 rounded-lg"
        />
      </div>      
      </Link>


      <div className="lg:hidden flex items-center">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className={`lg:flex lg:items-center lg:gap-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="nav-links flex flex-col lg:flex-row lg:ml-auto lg:mr-5">
          {["Landing", "About", "Features", "Working"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={1000}
              className="text-lg font-medium capitalize cursor-pointer lg:ml-6"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="nav-NavLinks flex flex-col lg:flex-row lg:gap-3">
          <RouterLink
            to="/login"
            className="text-lg font-medium capitalize rounded-lg border-[2px] border-[#F23D4C] px-4 py-2"
          >
            LogIn
          </RouterLink>
          <RouterLink
            to="/register"
            className="text-lg font-medium capitalize rounded-lg bg-[#F23D4C] px-4 py-2"
          >
            Register
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
