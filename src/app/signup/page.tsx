"use client";
import React, { useState } from "react";
import Carousel from "../signin/Carousel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/navigation";

function SignUp() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    lowerCase: false,
    upperCase: false,
    number: false,
    specialChar: false,
  });
  const [hasTyped, setHasTyped] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phoneNumber: "", // This will be updated with phone number including country code
    password: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    // Update phone number field with the value including the country code
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Update formData with the current password value
    const updatedFormData = {
      ...formData,
      password: password,
    };

    console.log("Submitting data:", { updatedFormData });

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Pendaftaran berhasil!");
        router.push("/signin");
      } else {
        setMessage(data.message || "Pendaftaran gagal. Cek data yang Anda masukkan.");
      }
    } catch (error) {
      setMessage("Pendaftaran gagal. Terjadi kesalahan.");
    }
  };

  return (
    <main className="relative md:bg-[#ECF2FA] bg-white">
      <title>Sign Up | Forwardin</title>
      <div className="absolute w-full justify-center items-center md:items-start md:justify-start flex z-10 py-10 px-16">
        <a href="/">
          <img src="logoforwardinfull.svg" alt="logo" />
        </a>
      </div>

      <div className="relative flex flex-row justify-center items-center min-h-screen">
        <div className="hidden md:flex justify-center items-center md:w-1/2">
          <Carousel />
        </div>
        <div className="w-full my-20 flex justify-center items-center md:w-1/2">
          <div className="flex w-full flex-col justify-center items-center md:w-[466px] md:h-fit md:bg-white text-black rounded-xl md:shadow-lg px-7 md:p-5">
            <h1 className="font-lexa text-[24px] font-bold">Welcome to Fowardin</h1>
            <p className="font-inter text-[14px] font-semibold text-center">Revolutionize your communication journey with Fowardin today</p>
            <form className="flex flex-col w-full space-y-3 mt-6" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="text-[14px] py-3 px-4 border-2 rounded-md" required />
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="text-[14px] py-3 px-4 border-2 rounded-md" required />
              <div className="flex flex-row items-center space-x-2">
                <PhoneInput
                  country={""}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "3rem",
                    borderRadius: "0 0.375rem 0.375rem 0",
                    padding: "0.75rem 0.75rem 0.75rem 3.5rem",
                    fontSize: "14px",
                    borderColor: "#E2E8F0",
                  }}
                  buttonStyle={{
                    height: "3rem",
                    borderRadius: "0.375rem 0 0 0.375rem",
                    borderColor: "#E2E8F0",
                    marginRight: "-3.5rem",
                  }}
                  containerStyle={{ width: "fit-content", display: "flex", alignItems: "center" }}
                />
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="WhatsApp Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="text-[14px] py-3 px-4 w-full border-2 rounded-md"
                  style={{ height: "3rem" }}
                  required
                />
              </div>

              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => validatePassword(e.target.value)} className="text-[14px] py-3 px-4 border-2 rounded-md" required />
              <button className="w-full text-[14px] py-3 px-4 mt-7 bg-biru text-white rounded-md">Sign Up</button>
            </form>
            <div
              className={`w-full p-5  bg-[#F3F5F8] rounded-lg text-[14px] font-inter transition-all duration-500 ease-in-out overflow-hidden ${hasTyped ? "my-5 opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}
              style={{ transition: "max-height 0.5s ease-in-out" }}
            >
              <div className={`mt-2 transition-all  duration-500 ease-in-out overflow-hidden ${hasTyped ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`} style={{ transition: "max-height 0.5s ease-in-out" }}>
                <h1>Password harus mengandung:</h1>
                <div className="flex items-center">
                  <CheckIcon className={`mr-1 transition-all ${passwordRules.minLength ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                  <ClearIcon className={`mr-1 transition-all ${passwordRules.minLength ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                  <h1 className={`${passwordRules.minLength ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Paling tidak 8 karakter</h1>
                </div>
                <h1 className="mt-4">Paling tidak 3 dari syarat berikut:</h1>
                <div className="mt-2">
                  <div className="flex items-center">
                    <CheckIcon className={`mr-1 transition-all ${passwordRules.lowerCase ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                    <ClearIcon className={`mr-1 transition-all ${passwordRules.lowerCase ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                    <h1 className={`${passwordRules.lowerCase ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Huruf kecil (a-z)</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckIcon className={`mr-1 transition-all ${passwordRules.upperCase ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                    <ClearIcon className={`mr-1 transition-all ${passwordRules.upperCase ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                    <h1 className={`${passwordRules.upperCase ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Huruf kapital (A-Z)</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckIcon className={`mr-1 transition-all ${passwordRules.number ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                    <ClearIcon className={`mr-1 transition-all ${passwordRules.number ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                    <h1 className={`${passwordRules.number ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Angka (0-9)</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckIcon className={`mr-1 transition-all ${passwordRules.specialChar ? "text-[#4FBEAB] visible" : "text-[#777C88] hidden"}`} />
                    <ClearIcon className={`mr-1 transition-all ${passwordRules.specialChar ? "text-[#777C88] hidden" : " text-red-500 visible "}`} />
                    <h1 className={`${passwordRules.specialChar ? "text-[#4FBEAB]" : "text-[#777C88]"}`}>Karakter khusus (!@#$%^&amp;*)</h1>
                  </div>
                </div>
              </div>
            </div>
            {message && <p className="text-white p-3 rounded-lg text-sm my-4 bg-biru shadow-lg">{message}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
