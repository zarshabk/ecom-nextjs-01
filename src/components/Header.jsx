"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Cart from "./Cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scroll);
  return (
    <>
      <header
        className={`h-[80px] w-full ${
          scroll ? "fixed bg-white shadow z-50 top-0 w-full" : ""
        }`}
      >
        <div className="container w-[98%] lg:w-[80%] md:w-[90%] m-auto h-full flex justify-between items-center">
          <h1 className="font-bold text-xl uppercase">Store-App</h1>
          <div className="flex gap-3 hidden lg:block md:block">
            <Link className="p-2 hover:bg-gray-200 px-3 rounded-sm" href={"/"}>
              Home
            </Link>
            <Link className="p-2 hover:bg-gray-200 px-3 rounded-sm" href={"/"}>
              Products
            </Link>
            <Link className="p-2 hover:bg-gray-200 px-3 rounded-sm" href={"/"}>
              Services
            </Link>
            <Link className="p-2 hover:bg-gray-200 px-3 rounded-sm" href={"/"}>
              About Us
            </Link>
            <Link className="p-2 hover:bg-gray-200 px-3 rounded-sm" href={"/"}>
              Contact Us
            </Link>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="relative hover:bg-gray-200 p-2 rounded-sm"
            >
              <AiOutlineShoppingCart size={25} />
              <span className="absolute w-[20px] h-[20px] text-[12px] p-[4px] bg-black text-white flex justify-center items-center rounded-full">
                2
              </span>
            </button>

            <button className="relative hover:bg-gray-200 p-2 rounded-sm">
              <AiOutlineHeart size={25} />
              <span className="absolute w-[20px] h-[20px] text-[12px] p-[4px] bg-black text-white flex justify-center items-center rounded-full">
                2
              </span>
            </button>
            <Link href={"/login"} className="hover:bg-gray-200 p-2 rounded-sm">
              <AiOutlineUser size={25} />
            </Link>
          </div>
        </div>
      </header>
      <Cart isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default Header;
