"use client";

import { useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsFeaturesOpen(false);
    setIsSignInOpen(false);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  return (
    <nav className="fixed  top-0 left-0 right-0 w-full bg-white shadow-lg py-7 px-10 z-50 md:hidden text-[14px]">
      <div className="flex justify-between items-center">
        <img src="logoforwardinfull.svg" alt="Logo" className="h-8" />

        <button className="text-biru focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="my-4 flex flex-col justify-center items-center space-y-4 p-4">
          <div className="flex flex-col justify-center items-center">
            <button className="flex justify-center items-center w-full text-biru" onClick={toggleFeatures}>
              Features
              <ArrowDropDown className={`transform ${isFeaturesOpen ? "rotate-180" : ""}`} />
            </button>
            {isFeaturesOpen && (
              <div className="mt-2 justify-center flex flex-col items-center space-y-2">
                <a href="/" className=" text-gray-700">
                  Feature 1
                </a>
                <a href="/" className=" text-gray-700">
                  Feature 2
                </a>
              </div>
            )}
          </div>

          <a href="/" className="text-black">
            Pricing
          </a>

          <a href="/" className="text-black">
            Demo
          </a>

          <a href="/" className="text-black">
            Blog
          </a>

          <div className="flex flex-col w-full justify-center items-center">
            <button className="flex justify-center items-center w-full bg-biru text-white px-4 py-2 rounded-md" onClick={toggleSignIn}>
              Sign In
              <ArrowDropDown className={`transform ${isSignInOpen ? "rotate-180" : ""}`} />
            </button>
            {isSignInOpen && (
              <div className="mt-2 w-full flex flex-col justify-center items-center space-y-2 text-gray-400">
                <a href="/signin" className="px-4 py-2 bg-slate-100 w-full text-center rounded-md ">
                  Sign In as Admin
                </a>
                <a href="/signin" className="px-4 py-2 bg-slate-100 w-full text-center rounded-md">
                  Sign In as Customer Service
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
