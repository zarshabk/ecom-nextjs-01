"use client";
import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";

const CartDrawer = () => {
  return (
    <div className="flex flex-row w-full justify-between  p-2">
      <div className="flex flex-row gap-2">
        <div className="w-[70px] m-auto h-[70px] bg-gray-100">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png"
            className="w-[50px] m-auto h-[50px] object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <h4 className="text-sm">$678</h4>
          <div>
            <div className="w-[100px] rounded-[30px] border-[1px] h-[30px] p-1 flex items-center justify-between">
              <button className="h-[23px] w-[23px] flex justify-center items-center rounded-full bg-orange-600 text-white hover:bg-orange-700">
                <AiOutlineArrowLeft size={15} />
              </button>
              <span className="text-sm">34</span>
              <button className="h-[23px] w-[23px] flex justify-center items-center  rounded-full bg-orange-600 text-white hover:bg-orange-700">
                <AiOutlineArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div> </div>
        <button className="p-1 bg-red-500 text-white hover:bg-red-600  rounded-sm">
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
