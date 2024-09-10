"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Utilities/Navbar";
import { useState } from "react";

const RegisterPage = () => {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInput = (event) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleData = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify(dataRegister),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        alert("Registration successful");
        window.location.href = "./login"; // Redirect on success
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col md:justify-between md:mx-44 items-center md:mt-28">
        <Image
          src={"/img/undraw_shopping_app_flsj.png"}
          width={500}
          height={500}
          alt="image"
          className="object-cover md:w-1/2 md:h-1/2 w-64 h-64"
        />
        <div className="flex flex-col gap-5 w-80">
          <h1 className="text-xl text-center font-bold text-green-500">
            REGISTER
          </h1>
          <p className="text-sm">Please enter your details</p>
          <form onSubmit={handleData} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="johndoe@example"
              name="email"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
              required
            />
            <input
              type="password"
              placeholder="********"
              name="password"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-xl p-2"
              disabled={loading}
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center">
            Have an account?{" "}
            <Link href={"/auth/login"} className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
