"use client";
import { ADD_TO_CART } from "@/redux/cartSlice";
import { Spinner } from "flowbite-react";
import { useAmp } from "next/amp";
import React, { Suspense } from "react";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";
import { useDispatch } from "react-redux";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Suspense fallback={<Spinner size={"xl"} />}>
      <div className="flex flex-col p-2 relative ">
        <div className="w-full h-[150px] lg:h-[250px] md:h-[250px] bg-gray-100 m-auto relative  ">
          <div className="absolute right-1 top-1 bottom-1 flex flex-col  justify-between h-full">
            <div className=" flex flex-col gap-2">
              <button className="w-[35px] h-[35px] bg-white rounded-full hover:bg-orange-500 hover:text-white   flex items-center justify-center">
                <AiOutlineHeart size={20} />
              </button>
              <button className="w-[35px] h-[35px] bg-white rounded-full hover:bg-orange-500 hover:text-white  flex items-center justify-center">
                <AiOutlineEye size={20} />
              </button>
            </div>
            <button
              onClick={() => dispatch(ADD_TO_CART(item))}
              className="w-[35px] h-[35px] bg-black text-white hover:bg-orange-500 hover:text-white  rounded-full  flex items-center justify-center"
            >
              <AiOutlineShopping size={20} />
            </button>
          </div>
          <img
            className="lg:w-[200px] md:w-[200px] w-full m-auto h-[140px] lg:h-[200px] md:h-[200px] "
            src={item?.thumbnail}
            alt=""
          />
          {/**     {item?.images?.map((d, i) => {
              return (
                <img
                  src={d[1]}
                  alt=""
                  className="w-[200px] m-auto h-[200px] object-cover"
                />
              );
            })} */}
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-md font-medium">{item?.title}</h3>
          <h4 className="text-sm">${item?.price}</h4>
        </div>
      </div>
    </Suspense>
  );
};

export default Product;
