"use client";
import Navbar from "@/components/Utilities/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const LoginPage = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setDataLogin({
        ...dataLogin,
        [event.target.name]: event.target.value,
    })
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(dataLogin),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        alert("Login successful");
        window.location.href = "/"; // Redirect on success
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      error.message = error.message;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col md:justify-between md:mx-44 items-center md:mt-28">
        <Image
          src={"/img/undraw_shopping_app_flsj.png  "}
          width={500}
          height={500}
          alt="image"
          className="object-cover md:w-1/2 md:h-1/2 w-64 h-64"
        />
        <div className="flex flex-col gap-5 w-80">
          <h1 className="text-xl text-center font-bold text-green-500">
            LOGIN
          </h1>
          <p className="text-sm">Please login to your account</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="johndoe@example"
              name="email"
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <input
              type="password"
              placeholder="********"
              name="password"
              value={dataLogin.password}
              onChange={handleInput}
              className="border-2 border-transparent hover:border-green-600 rounded-xl"
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-xl p-2"
              disabled={loading}
            >
              Login
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>

          <p className="text-sm text-center">
            Don't have an account ?{" "}
            <Link href={"/auth/register"} className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
