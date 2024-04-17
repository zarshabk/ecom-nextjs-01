import Link from "next/link";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlinePhone,
  AiOutlineRedEnvelope,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="min-h-[340px] bg-black w-full text-gray-400 relative mt-20">
      <div className="container w-[98%] lg:w-[80%] md:w-[90%] m-auto py-5 relative">
        <div className="lg:w-full md:w-full w-[80%] gap-5 m-auto p-5 bg-blue-600 absolute top-[-100px]   lg:top-[-50px] md:top-[-50px] rounded-md lg:h-[100px] md:h-[100px]  flex flex-col lg:flex-row md:flex-row justify-between items-center">
          <h4 className="text-lg text-white">Subscribe to our News</h4>
          <div className="flex gap-1 lg:flex-row md:flex-row flex-col gap-2">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-2 min-w-[350px] rounded-[30px] bg-transparent shadow bg-blue-500 text-white outline-none "
            />
            <button className="bg-white rounded-[30px] p-2 px-4 text-black hover:bg-blue-500 hover:text-white">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-16 mb-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl uppercase">Store-App</h1>
            <p className="text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus vitae magni, eaque minus corrupti et tempora
              reprehenderit ratione modi possimus!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Resources</h3>
            <div className="flex flex-col gap-[5px] text-sm">
              <Link href={"/"}>Popular products</Link>
              <Link href={"/"}>Designs & branding</Link>
              <Link href={"/"}>Special offers</Link>
              <Link href={"/"}>Fashion & commerce</Link>
              <Link href={"/"}>Designs & retailers</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Company</h3>
            <div className="flex flex-col gap-[5px] text-sm">
              <Link href={"/"}>Popular products</Link>
              <Link href={"/"}>Designs & branding</Link>
              <Link href={"/"}>Special offers</Link>
              <Link href={"/"}>Fashion & commerce</Link>
              <Link href={"/"}>Designs & retailers</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Address</h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-[5px]">
                <AiOutlineHome size={20} />
                <p className="text-sm">
                  California street 1/3 E block northhison <br />
                  near downhill stairs
                </p>
              </div>
              <div className="flex gap-[5px]">
                <AiOutlineInbox size={20} />
                <p className="text-sm">shopstore345@us.com</p>
              </div>
              <div className="flex gap-[5px]">
                <AiOutlinePhone size={20} />
                <p className="text-sm">+48 5673459900</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="py-2 border-gray-500 mt-5" />
        <div className="h-full flex justify-between items-center">
          <p className="text-sm">
            © 2023 Miniture All rights reserved. Designed by Novaworks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
