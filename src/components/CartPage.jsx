"use server";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartPage = () => {
  return (
    <div className="flex w-full flex-col m-auto lg:flex-row gap-5">
      <div className="lg:w-[80%] w-full">
        <table
          className="table text-center w-full"
          cellPadding={5}
          cellSpacing={5}
        >
          <thead>
            <tr className="text-gray-500 bg-gray-50 p-2">
              <th>#</th>
              <th>image</th>
              <th>title</th>
              <th>qty</th>
              <th>price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://www.pngall.com/wp-content/uploads/2016/06/Furniture-PNG-Image.png"
                  height={80}
                  width={80}
                  className="m-auto"
                  alt=""
                />
              </td>
              <td>leather sofa</td>
              <td>
                <div className="w-[100px] m-auto rounded-[30px] border-[1px] h-[30px] p-1 flex items-center justify-between">
                  <button className="h-[23px] w-[23px] flex justify-center items-center rounded-full bg-orange-600 text-white hover:bg-orange-700">
                    <AiOutlineMinus size={15} />
                  </button>
                  <span className="text-sm">34</span>
                  <button className="h-[23px] w-[23px] flex justify-center items-center  rounded-full bg-orange-600 text-white hover:bg-orange-700">
                    <AiOutlinePlus size={15} />
                  </button>
                </div>
              </td>
              <td className="text-sm">$567.56 x 3 = 1234.56</td>
              <td>
                <button className="p-1 bg-red-500 text-white hover:bg-red-600  rounded-sm">
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="lg:w-[20%] w-full h-40 bg-gray-100 p-5">
        <h2 className="text-md font-medium">Order Summary</h2>
        <hr />
        <div className="flex justify-between items-center text-sm py-2">
          <h4 className="font-medium">Total</h4>
          <h4>$567</h4>
        </div>
        <br />
        <div className="mt-3 w-full">
          <Link
            href={"/cart"}
            className="p-2 px-16 w-full bg-orange-700 text-white rounded-[30px] hover:bg-black"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
