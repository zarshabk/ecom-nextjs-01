import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[500px] h-auto w-full flex items-center justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col gap-3 mt-5">
          <h1 className="text-5xl font-bold">
            <span className="text-orange-700">Elevate Your lifestyle</span>
            <br />
            wit our Products
            <br />
            <span className="text-blue-500"> creations</span>
          </h1>
          <div className="mt-3">
            <button className="p-2 px-10 bg-orange-700 text-white rounded-[30px] hover:bg-black">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/06/Furniture-PNG-Image.png"
            className="h-[350px] w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
