// components/Navbar.js

"use client";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <nav className="hidden md:flex bg-white shadow-2xl w-fit flex-row justify-between fixed rounded-lg mt-5 top-0 left-1/2 transform -translate-x-1/2 bg-transparent text-black px-4 py-2 z-50">
      <img src="logoforwardinfull.svg" alt="Logo" />

      <ul className="flex flex-row  justify-center items-center space-x-7 mx-16 text-[14px] font-inter font-medium">
        <button className=" flex justify-center text-biru">
          Features
          <ArrowDropDown />
        </button>
        <li>Pricing</li>
        <li>Demo</li>
        <li>Blog</li>
      </ul>

      <a href="/signin" className="bg-biru text-white px-8 py-2 rounded-md font-inter font-light text-[14px]">
        Sign In
      </a>
    </nav>
  );
};

export default Navbar;
