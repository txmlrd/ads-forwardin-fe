"use client";
import React from "react";
import Carousel from "../signin/Carousel";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
function NewPassword() {
  const [password, setPassword] = useState("");
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    lowerCase: false,
    upperCase: false,
    number: false,
    specialChar: false,
  });

  const [hasTyped, setHasTyped] = useState(false);
  const validatePassword = (password: any) => {
    setPassword(password);
    setHasTyped(true);
    setPasswordRules({
      minLength: password.length >= 8,
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    });
  };
  return (
    <main className="relative md:bg-[#ECF2FA] bg-white">
      <title>New Password | Forwardin</title>
      <div className="absolute w-full justify-center items-center md:items-start md:justify-start flex z-10 py-10 px-16">
        <a href="/">
          <img src="logoforwardinfull.svg" alt="logo" />
        </a>
      </div>

      <div className="relative flex flex-row justify-center items-center min-h-screen">
        <div className="hidden md:flex justify-center items-center md:w-1/2">
          <Carousel />
        </div>
        <div className="w-full flex justify-center items-center md:w-1/2">
          <div className="flex w-full h-fit flex-col justify-center items-center md:w-[466px]  md:bg-white text-black rounded-xl md:shadow-lg px-7 md:p-5">
            <h1 className="font-lexa text-[24px] font-bold">New Password</h1>
            <p className="font-inter text-[14px] mx-10 mb-5 font-semibold text-center">Masukkan Password Baru</p>

            <form className="flex flex-col w-full space-y-3 mt-6">
              <input type="password" placeholder="Buat Password Baru" value={password} onChange={(e) => validatePassword(e.target.value)} className="text-[14px] py-3 px-4 border-2 rounded-md" />
            </form>
            <div
              className={`bg-[#F3F5F8] w-full  text-[14px] rounded-md mt-2 transition-all  duration-500 ease-in-out  ${hasTyped ? "opacity-100 max-h-screen p-5" : "opacity-0 max-h-0"}`}
              style={{ transition: "max-height 0.5s ease-in-out" }}
            >
              <h1>Password harus mengandung:</h1>
              <div className="flex items-center">
                <CheckIcon className={`mr-1 transition-all ${passwordRules.minLength ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                <ClearIcon className={`mr-1 transition-all ${passwordRules.minLength ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                <h1 className={`${passwordRules.minLength ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Paling tidak 8 karakter</h1>
              </div>
              <div className="flex items-center mt-2">
                <CheckIcon className={`mr-1 transition-all ${passwordRules.upperCase ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                <ClearIcon className={`mr-1 transition-all ${passwordRules.upperCase ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                <h1 className={`${passwordRules.upperCase ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Huruf besar (A-Z)</h1>
              </div>
            </div>
            <form className="flex flex-col w-full space-y-3 mt-6">
              <input type="password" placeholder="Konfirmasi Password Baru" className="text-[14px] py-3 px-4 border-2 rounded-md" />
            </form>
            <button className="w-full text-[14px] py-3 px-4 mt-7 bg-biru text-white rounded-md">Konfirmasi</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NewPassword;
