import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { SideBar } from "./SideBar";

export const TopNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setShowNav(!showNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yumm
          <span className="text-orange-700 font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full px-4 py-1 font-bold">
            Free
          </p>
          <p className="px-2 py-1 font-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] focus-within:border-[3px] focus-within:border-solid focus-within:border-orange-500">
        <AiOutlineSearch />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="Search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full px-6 border-solid border-2 border-gray-500">
        <BsFillCartFill size={20} /> <p className="ml-2">Cart</p>
      </button>
      {showNav && (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setShowNav(false)}
        ></div>
      )}
      <SideBar showNav={showNav} closeNav={() => setShowNav(false)} />
    </div>
  );
};
