import React from "react";
import Carousel from "../signin/Carousel";

function ForgotPassword() {
  return (
    <main className="relative md:bg-[#ECF2FA] bg-white">
      <title>Forgot Password | Forwardin</title>
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
          <div className="flex w-full flex-col justify-center items-center md:w-[466px] md:h-[427px] md:bg-white text-black rounded-xl md:shadow-lg px-7 md:p-5">
            <h1 className="font-lexa text-[24px] font-bold">Password Recovery</h1>
            <p className="font-inter text-[14px] mx-10 mb-5 font-semibold text-center">Kami akan membantu anda mengatur ulang kata sandi anda dengan cepat</p>
            <div className="w-full px-5 py-3  bg-[#F3F5F8] rounded-lg text-[14px]">Mohon masukkan alamat email anda di bawah ini, kami akan mengirimkan instruksi untuk proses pemulihan.</div>
            <form className="flex flex-col w-full space-y-3 mt-6">
              <input type="email" placeholder="Email" className="text-[14px] py-3 px-4 border-2 rounded-md" />
            </form>
            <a href="/check-your-email" className="w-full">
              <button className="w-full text-[14px] py-3 px-4 mt-7 bg-biru text-white rounded-md">Konfirmasi</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
