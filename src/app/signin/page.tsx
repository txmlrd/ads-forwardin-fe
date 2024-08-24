"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      router.push("/dashboard/main");
    }
  }, [session, router]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const result = await signIn("credentials", {
      redirect: false,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });

    setLoading(false);

    if (result?.error) {
      let errorMessage = "An unknown error occurred. Please try again.";

      if (result.error.includes("CredentialsSignin")) {
        errorMessage = "Invalid email or password.";
      } else if (result.error.includes("Timeout")) {
        errorMessage = "The request timed out. Please try again.";
      }

      setError(errorMessage);
    } else if (result?.ok) {
      let successMessage = "Login successful!   Redirecting...";
      setSuccess(successMessage);
      router.push("/dashboard/main");
    }
  };

  return (
    <main className="relative md:bg-[#ECF2FA] bg-white">
      <title>Sign In | Forwardin</title>
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
          <div className="flex w-full flex-col justify-center items-center md:w-[466px] md:h-fit md:bg-white text-black rounded-xl md:shadow-lg px-7 md:p-5">
            <h1 className="font-lexa text-[24px] font-bold">Welcome Back</h1>
            <p className="font-inter text-[14px] font-semibold">We're so excited to see you again!</p>
            {error && <p className="text-white p-3 rounded-lg text-sm my-4 bg-red-500 shadow-lg">{error}</p>}
            {success && <p className="text-white p-3 rounded-lg text-sm my-4 bg-green-500 shadow-lg">{success}</p>}
            <form onSubmit={handleSignIn} className="flex flex-col w-full space-y-3 mt-6">
              <input name="email" type="email" placeholder="Username / Email" className="text-[14px] py-3 px-4 border-2 rounded-md" required />
              <input name="password" type="password" placeholder="Password" className="text-[14px] py-3 px-4 border-2 rounded-md" required />
              <button type="submit" className={`w-full text-[14px] py-3 px-4 mt-7 ${loading ? "bg-gray-400" : "bg-biru"} text-white rounded-md`} disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <a href="/forgot-password" className="w-full text-[14px] font-semibold mt-5 text-biru">
              Lupa Password?
            </a>
            <p className="text-[14px] font-semibold mt-7">
              Butuh buat akun?{" "}
              <a href="/signup" className="text-[14px] font-semibold text-biru">
                Daftar di sini
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
