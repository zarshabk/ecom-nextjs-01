"use client";
import {
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_FROM_CART,
} from "@/redux/cartSlice";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const MainCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotal = cart.reduce((a, b) => {
    return a + b.product.price * b.qty;
  }, 0);
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
            {cart.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={item.product.thumbnail}
                      height={80}
                      width={80}
                      className="m-auto"
                      alt=""
                    />
                  </td>
                  <td>{item.product.title}</td>
                  <td>
                    <div className="w-[100px] m-auto rounded-[30px] border-[1px] h-[30px] p-1 flex items-center justify-between">
                      <button
                        onClick={() =>
                          dispatch(DECREASE_QTY(item?.product?.id))
                        }
                        className="h-[23px] w-[23px] flex justify-center items-center rounded-full bg-orange-600 text-white hover:bg-orange-700"
                      >
                        <AiOutlineMinus size={15} />
                      </button>
                      <span className="text-sm">{item.qty}</span>
                      <button
                        onClick={() =>
                          dispatch(INCREASE_QTY(item?.product?.id))
                        }
                        className="h-[23px] w-[23px] flex justify-center items-center  rounded-full bg-orange-600 text-white hover:bg-orange-700"
                      >
                        <AiOutlinePlus size={15} />
                      </button>
                    </div>
                  </td>
                  <td className="text-sm">
                    ${item.product.price} x {item.qty} ={" "}
                    {item.product.price * item.qty}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch(REMOVE_FROM_CART(item?.product?.id))
                      }
                      className="p-1 bg-red-500 text-white hover:bg-red-600  rounded-sm"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="lg:w-[20%] w-full h-40 bg-gray-100 p-5">
        <h2 className="text-md font-medium">Order Summary</h2>
        <hr />
        <div className="flex justify-between items-center text-sm py-2">
          <h4 className="font-medium">Total</h4>
          <h4>${cartTotal}</h4>
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

export default MainCart;
