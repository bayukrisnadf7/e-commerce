"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Utilities/Navbar";
import { useState } from "react";

const RegisterPage = () => {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    username: "",
    address: "",
    gender: "",
    password: "",
  });

  const handleInput = (event) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleData = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Sending request to the correct API route
    const response = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify(dataRegister),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.status === 200) {
      window.location.href = "./login"; // Redirect on success
    } else {
      alert(result.message); // Show an error message
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
          <form onSubmit={handleData}>
            <input
              type="text"
              placeholder="johndoe@example"
              name="email"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <input
              type="text"
              placeholder="address"
              name="address"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <input
              type="text"
              placeholder="gender"
              name="gender"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <input
              type="password"
              placeholder="********"
              name="password"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-xl p-2"
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
