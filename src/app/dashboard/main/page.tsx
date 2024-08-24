"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import BasicPie from "@/component/DashboardPieChart";
import Chart from "@/component/Chart";
import { useState, useEffect } from "react";
import { signOut, getSession } from "next-auth/react";

export default function Main() {
  const generateRandomData = (numPoints = 24) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      const time = `${String(i).padStart(2, "0")}:00`;
      const value = parseFloat((Math.random() * (1 - 0.1) + 0.1).toFixed(2)); // Random value between 0.1 and 1
      data.push({ time, value });
    }
    return data;
  };

  const deviceData: {
    [key: string]: {
      activeSince: string;
      outgoingMessages: number;
      incomingMessages: number;
      failedMessages: number;
      totalPesanKeluar: number;
      totalPesanMasuk: number;
      totalPesanGagal: number;
      hariIni: number;
      rataHarian: number;
      bulanIni: number;
      rataWaktu: string;
      chartData: { time: string; value: number }[];
    };
  } = {
    RMX3263: {
      activeSince: "29.8.2023",
      outgoingMessages: 24,
      incomingMessages: 7,
      failedMessages: 0,
      totalPesanKeluar: 31,
      totalPesanMasuk: 7,
      totalPesanGagal: 0,
      hariIni: 24,
      rataHarian: 7,
      bulanIni: 23,
      rataWaktu: "00:02:42",
      chartData: generateRandomData(),
    },
    RMX1234: {
      activeSince: "15.7.2023",
      outgoingMessages: 30,
      incomingMessages: 10,
      failedMessages: 2,
      totalPesanKeluar: 40,
      totalPesanMasuk: 10,
      totalPesanGagal: 2,
      hariIni: 30,
      rataHarian: 10,
      bulanIni: 25,
      rataWaktu: "00:03:15",
      chartData: generateRandomData(),
    },
    RMX5678: {
      activeSince: "01.5.2023",
      outgoingMessages: 20,
      incomingMessages: 5,
      failedMessages: 1,
      totalPesanKeluar: 25,
      totalPesanMasuk: 5,
      totalPesanGagal: 1,
      hariIni: 20,
      rataHarian: 5,
      bulanIni: 18,
      rataWaktu: "00:04:05",
      chartData: generateRandomData(),
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("RMX3263");
  const data = deviceData[selectedItem]?.chartData || [];
  const [deviceStats, setDeviceStats] = useState(deviceData[selectedItem]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setDeviceStats(deviceData[item]);
    setIsOpen(false);
  };
  const formatDate = (date: Date) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
  };

  const today = new Date();

  const [isSignoutClick, setIsSignoutClick] = useState<boolean>(false);

  const handleSignOut = () => {
    setIsSignoutClick(!isSignoutClick);
  };

  const buttonSignOut = async () => {
    await signOut({ callbackUrl: "/signin" });
  };

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUserSession = async () => {
      const session = await getSession();
      setUser(session?.user);
    };

    fetchUserSession();
  }, []);

  const getFirstName = (fullName: any) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    return names[0];
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F8] dark:bg-[#1F1F21] transition-all duration-500 ease-in-out dark:text-white text-black p-5 md:p-10">
      <title>Dashboard | Forwardin</title>
      <div className="flex flex-row  justify-center md:justify-end space-x-5 items-center">
        <div>
          <button className="bg-white dark:bg-[#121212] dark:text-white transition-all duration-500 ease-in-out text-black p-3 rounded-full shadow-lg ">
            <NotificationsIcon />
          </button>
        </div>
        <div className="z-10 relative flex items-center bg-white shadow-lg dark:bg-[#121212] transition-all duration-500 ease-in-out dark:text-white text-black px-5 rounded-full">
          <h1 className="text-[14px]  text-black dark:text-white transition-all duration-500 ease-in-out">{user?.name || "Username"}</h1>
          <button
            onClick={handleSignOut}
            className={`bg-biru hover:bg-red-500 hover:translate-x-5 text-white p-3 ml-3 rounded-full shadow-lg transition-all duration-500 ease-in-out ${isSignoutClick ? "translate-x-5 bg-red-500" : "translate-x-0 "}`}
          >
            <PersonIcon />
          </button>
        </div>
        <div className="absolute z-0">
          <button
            onClick={buttonSignOut}
            className={`bg-red-500 md:-translate-x-20  hover:bg-red-700 text-[14px] text-white p-3 ml-3 rounded-md shadow-lg transition-all duration-500 ease-in-out ${
              isSignoutClick ? "translate-y-14 blur-0 scale-100" : "translate-y-0 blur-sm scale-0"
            }`}
          >
            Signout
          </button>
        </div>

        <div>
          <button className="bg-white dark:bg-[#121212] dark:text-white transition-all duration-500 ease-in-out text-black p-3 rounded-full shadow-lg ">
            <SettingsIcon />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-5">
        <h1 className="text-[24px]  font-bold ">Selamat siang, {getFirstName(user?.name)}!</h1>
        <div className="hidden md:flex flex-row justify-center items-center ">
          <div className="flex flex-col  font-bold font-inter justify-end items-end mr-3">
            <h1 className="text-[12px] text-gray-300 font-inter">Tanggal hari ini</h1>
            <h1 className="text-[12px] text-gray-500 font-inter">{formatDate(today)}</h1>
          </div>
          <CalendarMonthIcon />
        </div>
        <div className="flex md:hidden flex-row justify-start items-center mt-8">
          <CalendarMonthIcon />
          <div className="flex flex-col  font-bold font-inter justify-start items-start ml-3">
            <h1 className="text-[12px] text-gray-300 font-inter">Tanggal hari ini</h1>
            <h1 className="text-[12px] text-gray-500 font-inter">{formatDate(today)}</h1>
          </div>
        </div>
      </div>

      {/* pembagian 2 div STARTER */}
      <div className="flex flex-col md:flex-row mt-5 md:space-x-4 space-x-0 space-y-4 md:space-y-0">
        <div className="md:w-3/4 w-full dark:bg-transparent dark:border dark:border-gray-400gr bg-white shadow-lg rounded-md p-5 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="space-y-5 flex flex-col justify-between">
              <div className="flex md:flex-row flex-col">
                <h1 className="hidden md:block text-[12px] text-black dark:text-white font-inter ">
                  Paket <br />
                  saat ini
                </h1>
                <h1 className="block md:hidden text-[12px] text-black dark:text-white font-inter text-center ">Paket saat ini</h1>
                <div className="flex flex-row pl-5 space-x-2  justify-center items-center">
                  <h1 className="text-[24px] text-black dark:text-white font-bold ">Starter</h1>
                  <div className="bg-black dark:bg-white text-[12px] h-fit rounded-xl text-white dark:text-black px-2">Free</div>
                </div>
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col md:flex-row items-center md:space-x-2">
                  <h1 className="text-[12px] text-black dark:text-white font-inter">Devices</h1>
                  <div className="md:pl-5 flex flex-col">
                    <div className="flex mt-1">
                      {Array.from({ length: 10 }, (v, i) => (
                        <div key={i} className={`h-2 ${i === 0 ? "rounded-l-full" : ""} ${i === 9 ? "rounded-r-full" : ""} ${i < 8 ? "bg-red-500" : "bg-gray-500"} w-5`}></div>
                      ))}
                    </div>
                    <p className="text-[10px] font-inter">8 dari 10 device yang tersedia</p>
                  </div>
                </div>
                <div className=" flex flex-col md:flex-row items-center md:space-x-2">
                  <h1 className="text-[12px] text-black dark:text-white font-inter">Contact</h1>
                  <div className="md:pl-5 flex flex-col">
                    <div className="flex mt-1">
                      {Array.from({ length: 50 }, (v, i) => (
                        <div key={i} className={`h-2 ${i === 0 ? "rounded-l-full" : ""} ${i === 49 ? "rounded-r-full" : ""} ${i < 5 ? "bg-green-500" : "bg-gray-500"} w-1`}></div>
                      ))}
                    </div>

                    <p className="text-[10px] font-inter">5 dari 100 device yang tersedia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 md:mt-0 flex flex-col justify-between md:w-1/5 w-full">
              <div className="flex flex-col">
                <div className=" md:items-end items-center flex flex-col">
                  {" "}
                  <h1 className="text-[10px] text-gray-400 font-inter">Aktif sampai dengan</h1>
                  <h1 className="text-[11px] text-black dark:text-white font-bold">31 Agustus 2022</h1>
                </div>

                <div className="flex md:items-end items-center  flex-col">
                  <p className="text-[12px] md:text-right text-center mt-5">Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
                  <button className="bg-transparent border-biru border text-[14px] text-biru py-2 hover:bg-biru hover:text-white transition-all  px-10 rounded-md mt-5">Upgrade Paket</button>
                </div>
              </div>
            </div>
          </div>
          <button className="text-[14px] text-center h-fit text-biru font-inter mt-5">
            Tampilkan kapasitas fitur lainnya <ArrowDropDown />
          </button>
        </div>
        <div className="md:w-1/4 w-full dark:bg-transparent dark:border dark:border-gray-400gr bg-white shadow-lg  rounded-md p-5 flex flex-col justify-between ">
          <div className="flex flex-col ">
            <h1>Pesan Terakhir</h1>

            <div className="bg-white space-x-3 flex flex-row justify-between dark:bg-transparent dark:border dark:border-gray-400gr dark:text-white text-black px-3 py-2 rounded-md shadow-lg mt-3">
              <div className="flex flex-row space-x-4">
                <div className="bg-biru text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out">
                  <PersonIcon />
                </div>
                <div className=" text-[10px] flex flex-col justify-center items-start">
                  <h1 className="font-bold">Anda</h1>
                  <p className="truncate md:w-[150px] w-[100px] overflow-hidden font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="bg-biru  text-[12px]  rounded-xl text-white  px-2">Terkirim</div>
              </div>
            </div>
            <div className="bg-white space-x-3 flex flex-row justify-between dark:bg-transparent dark:border dark:border-gray-400gr dark:text-white text-black px-3 py-2 rounded-md shadow-lg mt-3">
              <div className="flex flex-row space-x-4">
                <div className="bg-biru text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out">
                  <PersonIcon />
                </div>
                <div className=" text-[10px] flex flex-col justify-center items-start">
                  <h1 className="font-bold">Anda</h1>
                  <p className="truncate md:w-[150px] w-[100px] overflow-hidden font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="bg-biru  text-[12px]  rounded-xl text-white  px-2">Terkirim</div>
              </div>
            </div>
          </div>
          <button className="text-[14px] text-center h-fit text-biru font-inter mt-5">
            Tampilkan lainnya
            <ArrowDropDown />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-5 dark:bg-transparent dark:border dark:border-gray-400gr bg-white rounded-md p-5">
        <h1 className="text-[24px] text-black dark:text-white font-bold mb-5">Analitik</h1>
        {/* <Chart /> */}
        <div className="flex flex-col md:flex-row md:space-x-3 space-x-0 md:space-y-0 space-y-4">
          <div className="md:w-1/3 w-full space-y-3 dark:bg-transparent dark:border dark:border-gray-400gr bg-white shadow-lg  rounded-md p-5 flex flex-col justify-between ">
            <h1 className="text-[16px] text-black dark:text-white font-bold ">Ringkasan Hari Ini</h1>
            <div className="flex flex-row space-x-3">
              <div className="relative w-1/2 flex flex-row justify-between items-center p-3 bg-gray-200 dark:bg-[#121212] transition-all duration-500 ease-in-out rounded-lg">
                <div className="flex flex-col">
                  <h1 className="text-[12px] text-black dark:text-white font-inter">Device</h1>
                  <h1 className="text-[14px] text-black dark:text-white font-bold">{selectedItem}</h1>
                </div>
                <button onClick={handleToggle} className="flex items-center">
                  <ArrowDropDown />
                </button>
                {isOpen && (
                  <div className="absolute text-[14px] top-full left-0 mt-2 w-full bg-gray-200 dark:bg-[#121212] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                    <ul>
                      <li onClick={() => handleSelect("RMX3263")} className="p-2 hover:bg-gray-300 dark:hover:bg-[#2a2a2a] cursor-pointer">
                        RMX3263
                      </li>
                      <li onClick={() => handleSelect("RMX1234")} className="p-2 hover:bg-gray-300 dark:hover:bg-[#2a2a2a] cursor-pointer">
                        RMX1234
                      </li>
                      <li onClick={() => handleSelect("RMX5678")} className="p-2 hover:bg-gray-300 dark:hover:bg-[#2a2a2a] cursor-pointer">
                        RMX5678
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="w-1/2 flex flex-col justify-between items-start p-3 bg-gray-200 dark:bg-[#121212] transition-all duration-500 ease-in-out rounded-lg">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Aktif sejak</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.activeSince}</h1>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="w-full flex flex-col justify-between items-start p-3  ">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Pesan Keluar</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.outgoingMessages}</h1>
              </div>
              <div className="w-full flex flex-col justify-between items-start p-3 ">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Pesan Masuk</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.incomingMessages}</h1>
              </div>
              <div className="w-full flex flex-col justify-between items-start p-3 ">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Pesan Gagal</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.failedMessages}</h1>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full dark:bg-transparent dark:border dark:border-gray-400gr bg-white shadow-lg  rounded-md p-5 flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col  justify-between">
              <h1 className="text-[16px] text-black dark:text-white font-bold ">Total Statistik Pesan</h1>
              <div className="flex flex-row space-x-3 ">
                <div className="w-full flex flex-col justify-between items-start p-3 ">
                  <h1 className="text-[12px] text-black dark:text-white font-inter">Total Pesan Keluar</h1>
                  <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.totalPesanKeluar}</h1>
                </div>
                <div className="w-full flex flex-col justify-between items-start p-3 ">
                  <h1 className="text-[12px] text-black dark:text-white font-inter">Total Pesan Gagal</h1>
                  <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.totalPesanGagal}</h1>
                </div>
              </div>
              <div className="w-full flex flex-col justify-between items-start p-3 ">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Total Pesan Masuk</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.totalPesanMasuk}</h1>
              </div>
            </div>
            <div className="">
              <BasicPie />
            </div>
          </div>
        </div>
        <div className="flex flex-col dark:bg-transparent dark:border dark:border-gray-400gr bg-white shadow-lg mt-3 rounded-md p-5">
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
            <div className="flex flex-row space-x-2 md:space-x-3 ">
              <div className="md:w-fit w-full flex flex-col  justify-between items-start p-3 bg-gray-200 dark:bg-[#121212]  md:min-w-32 transition-all duration-500 ease-in-out rounded-lg">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Hari ini</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.hariIni}</h1>
              </div>
              <div className="md:w-fit w-full flex flex-col justify-between items-start p-3 bg-gray-200 dark:bg-[#121212] md:min-w-32 transition-all duration-500 ease-in-out rounded-lg">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Rata-rata harian</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.rataHarian}</h1>
              </div>
            </div>
            <div className="flex flex-row space-x-2 md:space-x-3">
              <div className="md:w-fit w-full flex flex-col justify-between items-start p-3 bg-gray-200 dark:bg-[#121212] md:min-w-32 transition-all duration-500 ease-in-out rounded-lg">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Bulan ini</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.bulanIni}</h1>
              </div>
              <div className="md:w-fit w-full flex flex-col justify-between items-start p-3 bg-gray-200 dark:bg-[#121212] md:min-w-32 transition-all duration-500 ease-in-out rounded-lg">
                <h1 className="text-[12px] text-black dark:text-white font-inter">Rata-rata waktu</h1>
                <h1 className="text-[14px] text-black dark:text-white font-bold ">{deviceStats.rataWaktu}</h1>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <h1 className="font-inter font-bold">Grafik Chart Per-jam</h1>
            <h1 className="font-inter font-bold md:text-[24px] text-biru">502</h1>
            <div className="w-full mt-3">
              <Chart data={data} />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-inter font-bold">Trend Interaksi Pesan</h1>
            <h1 className="font-inter font-bold md:text-[24px] text-biru">505</h1>
            <div className="w-full mt-3">
              <Chart data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
