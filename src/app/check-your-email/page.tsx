"use client";
import React from "react";
import Carousel from "../signin/Carousel";

function CheckEmail() {
  return (
    <main className="relative md:bg-[#ECF2FA] bg-white">
      <title>Check Your Email | Forwardin</title>
      <div className="absolute w-full justify-center items-center md:items-start md:justify-start flex z-10 py-10 px-16">
        <a href="/">
          <img src="logoforwardinfull.svg" alt="logo" />
        </a>
      </div>

      <div className="relative  flex flex-row justify-center items-center min-h-screen">
        <div className=" hidden md:flex justify-center items-center md:w-1/2">
          <Carousel />
        </div>
        <div className=" w-full flex justify-center items-center md:w-1/2">
          <div className="flex  w-full flex-col justify-center items-center md:w-[466px] md:h-fit md:bg-white text-black rounded-xl md:shadow-lg px-7 md:p-5">
            <h1 className="font-lexa text-[24px] font-bold">Cek Email</h1>
            <p className="font-inter text-[14px] font-semibold mx-16 text-center">Cek Email yang anda masukkan tadi, kemudian ikuti instruksi untuk proses pemulihan</p>

            <p className=" text-[14px] font-semibold mt-7">
              Kode tidak terkirim?{" "}
              <a href="/forgot-password" className="text-[14px] font-semibold text-biru">
                Coba lagi
              </a>
            </p>

            <p className=" text-[14px] font-semibold">
              Ingin mengganti email?{" "}
              <a href="/forgot-password" className="text-[14px] font-semibold text-biru">
                Kembali
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckEmail;
