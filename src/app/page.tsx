"use client";

import { SetStateAction, useState } from "react";
import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PricingCard from "../component/PricingCard";
import FAQ from "../component/FAQ";
import AdminToolsDesktop from "../component/AdminToolsDesktop";
import AdminToolsMobile from "../component/AdminToolsMobile";
import SidePageNav from "../Navbar/SidePageNav";
import NavbarMobile from "@/Navbar/NavbarMobile";
import NavbarDesktop from "@/Navbar/NavbarDesktop";

export default function Home() {
  const [activePricing, setActivePricing] = useState<string>("monthly");

  const setPricing = (pricing: string) => {
    setActivePricing(pricing);
  };

  const setSection = (section: string) => {
    setActiveSection(section);
  };
  const [activeSection, setActiveSection] = useState("bisnis");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Bisnis dan Pemasaran");

  const dropdownItems = [
    { section: "bisnis", text: "Bisnis dan Pemasaran" },
    { section: "komersial", text: "Komersial dan Penjualan" },
    { section: "organisasi", text: "Organisasi Sosial" },
  ];

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (section: SetStateAction<string>, text: SetStateAction<string>) => {
    setSelectedLabel(text);
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  return (
    <main className="bg-[#ECF2FA] text-black">
      <title>Forwardin</title>
      <NavbarMobile />
      <NavbarDesktop />
      <div className="absolute z-10">
        <SidePageNav />
      </div>

      {/* 1st start */}
      <section id="section1" className="relative px-8">
        <div className="absolute inset-0 ">
          <Image src="landingpagesvg/top.svg" alt="logo" width={175} height={33.25} className="w-full h-full object-fill min-h-screen" />
        </div>

        <div className="mt-20 md:mt-0 relative flex flex-col md:flex-row min-h-screen items-center justify-center max-w-[1037px] mx-auto md:space-x-[112px]">
          <AdminToolsMobile />
          <div className="max-w-[367px] space-y-5">
            <h1 className="font-lexa text-[24px] md:text-[34px] font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
            <p className="font-inter text-[14px] font-bold">
              Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur
              sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
            </p>
            <div className="flex flex-row rounded-lg">
              <button className="text-[14px] bg-black text-white w-fit py-3 px-10 rounded-tl-md rounded-bl-md ">Daftar Sekarang</button>
              <a href="" className="py-3 px-3 bg-black text-white rounded-tr-md rounded-br-md border-l border-white">
                <EastIcon />
              </a>
            </div>
          </div>
          <AdminToolsDesktop />
        </div>
      </section>

      {/* 1st end */}

      {/* 2nd start */}
      <section id="section2" className="px-8">
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center max-w-[1037px] mx-auto">
          <div>
            <img src="images/landingpage/broadcasttools.png" alt="broadcasttools" />
          </div>
          <div className="max-w-[367px] space-y-5">
            <h1 className="font-lexa text-[34px] font-bold">Reach Further with Ease</h1>
            <p className="font-inter text-[14px] font-bold">
              Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
            </p>
          </div>
        </div>
      </section>
      {/* 2nd end */}

      {/* 3rd start */}
      <section id="section3" className=" bg-white">
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center max-w-[1037px] mx-auto px-8 w-full">
          <div className="block md:hidden">
            <img src="images/landingpage/campaigntools.png" alt="campaigntools" />
          </div>
          <div className="max-w-[367px] space-y-5">
            <h1 className="font-lexa text-[34px] font-bold">Right Time, Effective Messages</h1>
            <p className="font-inter text-[14px] font-bold">
              Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan
              iklan memiliki dampak yang lebih besar.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="images/landingpage/campaigntools.png" alt="campaigntools" />
          </div>
        </div>
      </section>
      {/* 3rd end */}

      {/* 4th start */}
      <section id="section4" className="px-8">
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center max-w-[1037px] mx-auto">
          <div>
            <img src="images/landingpage/autoreply.png" alt="autoreply" />
          </div>
          <div className="max-w-[367px] space-y-5">
            <h1 className="font-lexa text-[34px] font-bold">Respond Faster with the Convenience of Auto Reply</h1>
            <p className="font-inter text-[14px] font-bold">
              Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan
              energi Anda. Tanggap lebih cepat dengan Fowardin.
            </p>
          </div>
        </div>
      </section>
      {/* 4th end */}

      {/* 5th start */}
      <section id="section5" className="bg-white">
        <div className="flex flex-row min-h-screen items-center justify-center max-w-[941px] px-8 py-10 mx-auto">
          <div className="flex flex-col space-y-[58px]">
            <h1 className="font-lexa text-biru text-[34px] text-center font-bold">&ldquo;One Step Closer to More Effective and Connected Communication!&rdquo;</h1>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="w-[253px] h-[243px]">
                <img src="images/landingpage/statisticmsg.png" alt="statisticmsg" />
              </div>

              <div className="max-w-[638px] ">
                {/* desktop button */}
                <div className="md:flex hidden flex-row space-x-3 mb-4">
                  <button
                    onClick={() => setSection("bisnis")}
                    className={`border border-biru text-[14px] rounded-lg px-6 py-2 transition-all duration-300 ease-in-out ${activeSection === "bisnis" ? "bg-biru text-white" : "bg-transparent text-biru"}`}
                  >
                    Bisnis dan Pemasaran
                  </button>
                  <button
                    onClick={() => setSection("komersial")}
                    className={`border border-biru text-[14px] rounded-lg px-6 py-2 transition-all duration-300 ease-in-out ${activeSection === "komersial" ? "bg-biru text-white" : "bg-transparent text-biru"}`}
                  >
                    Komersial dan Penjualan
                  </button>
                  <button
                    onClick={() => setSection("organisasi")}
                    className={`border border-biru text-[14px] rounded-lg px-6 py-2 transition-all duration-300 ease-in-out ${activeSection === "organisasi" ? "bg-biru text-white" : "bg-transparent text-biru"}`}
                  >
                    Organisasi Sosial
                  </button>
                </div>

                {/* mobile button */}
                <div className="md:hidden flex flex-col w-full mb-5">
                  <button onClick={handleButtonClick} className={`border border-biru text-[14px] w-full rounded-lg px-6 py-2 transition-all duration-300 ease-in-out ${isDropdownOpen ? "bg-biru text-white" : " bg-biru text-white"}`}>
                    {selectedLabel}
                    <ArrowDropDownIcon />
                  </button>

                  {isDropdownOpen && (
                    <div className="mt-2 space-y-2">
                      {dropdownItems
                        .filter((item) => item.text !== selectedLabel)
                        .map((item) => (
                          <button
                            key={item.section}
                            onClick={() => handleOptionClick(item.section, item.text)}
                            className={`border border-biru text-[14px] w-full rounded-lg px-6 py-2 transition-all duration-300 ease-in-out ${activeSection === item.section ? "bg-biru text-white" : "bg-transparent text-biru"}`}
                          >
                            {item.text}
                          </button>
                        ))}
                    </div>
                  )}
                </div>

                <div className="relative text-[14px] ">
                  <div className={`transition-opacity duration-300 ease-in-out ${activeSection === "bisnis" ? "opacity-100" : "opacity-0 absolute"}`}>
                    <p>
                      Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan
                      menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.
                    </p>
                  </div>

                  <div className={`transition-opacity duration-300 ease-in-out ${activeSection === "komersial" ? "opacity-100" : "opacity-0 absolute"}`}>
                    <p>
                      Dengan fitur broadcast, pelaku bisnis dapat memberi tahu pelanggan tentang penawaran khusus, diskon, atau acara penjualan dengan cepat. Fitur campaign dapat membantu mengatur kampanye penjualan yang lebih terarah dan
                      efektif.
                    </p>
                  </div>

                  <div className={`transition-opacity duration-300 ease-in-out ${activeSection === "organisasi" ? "opacity-100" : "opacity-0 absolute"}`}>
                    <p>
                      Organisasi non-profit dapat menggunakan fitur broadcast untuk menginformasikan para donatur tentang proyek, acara komunitas, atau inisiatif sosial yang sedang berlangsung. Fitur campaign bisa membantu dalam
                      mengingatkan tentang acara atau program yang akan datang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th end */}

      {/* 6th start */}
      <section id="section6" className="bg-white ">
        <div className="flex flex-col min-h-screen items-center justify-center max-w-[1037px] mx-auto px-8 py-10 space-y-3">
          <h1 className="font-lexa md:text-[34px] text-[20px] text-center font-bold">Our Pricing</h1>
          <h1 className="font-lexa text-[34px] md:hidden block text-center font-bold">Subscription</h1>
          <div className="text-[14px] flex flex-row space-x-[9px] shadow-xl p-2 rounded-full">
            <button onClick={() => setActivePricing("monthly")} className={`transition-all px-6 py-3 rounded-full ${activePricing === "monthly" ? "bg-biru text-white" : "bg-transparent text-black"}`}>
              Monthly
            </button>
            <button onClick={() => setActivePricing("yearly")} className={`transition-all px-6 py-3 rounded-full ${activePricing === "yearly" ? "bg-biru text-white" : "bg-transparent text-black"}`}>
              Yearly
            </button>
          </div>
          {activePricing === "yearly" && (
            <div className="p-2 text-[12px] text-biru bg-[#E6E8F0] rounded-xl transition-all">
              <h1 className="font-inter font-semibold">Hemat hingga 25% dengan paket tahunan</h1>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:space-y-0 space-y-10 ">
            <PricingCard
              title="Starter"
              description="Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp."
              price="Gratis"
              yearly="-"
              button="Start Now"
              showYearly={activePricing === "yearly"}
              month=""
            />
            <PricingCard
              title="Basic"
              description="Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp."
              price="Rp. 65.000"
              yearly="Rp. 650.000 /tahun"
              button="Get Started"
              cardClassName="shadow-xl"
              buttonClassName="bg-gold"
              showYearly={activePricing === "yearly"}
              month="/bulan"
            />
            <PricingCard
              title="Premium"
              description="Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp"
              price="Rp. 76.000"
              yearly="Rp. 800.000 /tahun"
              button="Get Started"
              showYearly={activePricing === "yearly"}
              month="/bulan"
            />
            <PricingCard
              title="Pro"
              description="Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp."
              price="Rp. 86.000"
              yearly="Rp. 900.000 /tahun"
              button="Get Started"
              showYearly={activePricing === "yearly"}
              month="/bulan"
            />
          </div>
        </div>
      </section>

      {/* 6th end */}

      {/* 7th start */}

      <section id="section7" className="bg-biru relative px-8">
        <div className="absolute inset-0">
          <Image src="landingpagesvg/bottom.svg" alt="logo" width={175} height={33.25} className="w-full h-full object-fill " />
        </div>
        <div className=" relative flex flex-col min-h-screen items-center justify-center max-w-[1037px] mx-auto space-y-[62px]">
          <h1 className="font-lexa text-[24px] text-center font-bold text-white">Frequently Asked Questions</h1>
          <div className="max-w-[558px]">
            <form className="flex items-center space-x-3 ">
              <input
                type="text"
                placeholder=""
                className="p-2 rounded-lg w-full" // Adjust width as needed
              />
              <button type="submit" className="p-2 flex items-center justify-center">
                <SearchIcon className="text-white" /> {/* Adjust color as needed */}
              </button>
            </form>
            <div>
              <FAQ />
            </div>
          </div>
        </div>
        <section id="section8">
          <div className="relative flex flex-row min-h-screen items-center justify-center max-w-[1037px] mx-auto ">
            <div className="flex flex-col md:flex-row items-start md:space-x-[109px] space-y-[47.86px] md:space-y-0">
              <div className="max-w-[351.34px] space-y-[47.86px] flex flex-col">
                <Image src="logoforwardin.svg" alt="logo" width={175} height={33.25} />
                <p className="font-inter text-[12px] text-white">
                  Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to
                  simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
                </p>
              </div>
              <div className="max-w-[258.67px] space-y-[21.9px] flex flex-col">
                <h1 className="font-inter text-[16px] font-bold text-white">Contact Us</h1>
                <p className="font-inter text-[12px] text-white">
                  Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.
                </p>

                <h3 className="font-inter text-[12px] text-white">
                  Email: info@fowarin
                  <br /> Phone: +1 (123) 456-7890
                </h3>
              </div>
              <div className="max-w-[167.02px] space-y-[21.9px] flex flex-col">
                <h1 className="font-inter text-[16px] font-bold text-white">Lets Talk</h1>
                <h3 className="font-inter text-[12px] text-white">
                  Facebook
                  <br />
                  Instagram
                  <br />
                  Twitter
                </h3>
              </div>
            </div>
          </div>
        </section>

        <div className="relative flex flex-row space-x-3 justify-center pt-40 pb-10">
          <h1 className="font-inter text-[14px] font-extralight text-white">Powered By</h1>
          <Image src="forwardinonly.svg" alt="logo" width={136.03} height={14.58} />
        </div>
      </section>

      {/* 7th end */}
    </main>
  );
}
