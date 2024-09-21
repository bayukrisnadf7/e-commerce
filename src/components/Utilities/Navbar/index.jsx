"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons
import InputSearch from "./InputSearch"; // Assuming InputSearch is a separate component
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/auth/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    router.push("/auth/register");
  };

  return (
    <div className="w-full">
      <div className="text-3xl md:mx-20 bg-white h-16 flex items-center md:items-center md:flex-row">
        <Link href="/">
          <h1 className="font-bold text-green-600 md:text-2xl text-xl">
            Martpedia
          </h1>
        </Link>
        <div className="flex justify-between w-full items-center md:mx-0 mx-3">
          <InputSearch />
          {/* Menu toggle for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-green-600 text-3xl">
              {menuOpen ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </button>
          </div>
          {/* Buttons for desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={handleLogin}
              className="border text-green-600 border-green-600 text-sm p-2 rounded-lg font-bold w-24"
            >
              Masuk
            </button>
            <button
              onClick={handleRegister}
              className="bg-green-600 text-sm text-white p-2 rounded-lg font-bold w-24"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
      <hr />
      {/* Mobile menu for Masuk and Daftar */}
      {menuOpen && (
        <div className="flex flex-col items-center md:hidden mt-4 gap-3 mb-3 mx-4">
          <button
            onClick={handleLogin}
            className="border text-green-600 border-green-600 text-sm p-2 rounded-lg font-bold w-full"
          >
            Masuk
          </button>
          <button
            onClick={handleRegister}
            className="bg-green-600 text-sm text-white p-2 rounded-lg font-bold w-full"
          >
            Daftar
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
