import React from "react";
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope, HiShoppingBag } from "react-icons/hi2";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import CartDrawer from "./CartDrawer";
import Link from "next/link";
import { useSelector } from "react-redux";

const Cart = ({ isOpen, handleClose }) => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="right"
      className="z-50"
    >
      <Drawer.Header title="Cart" titleIcon={HiShoppingBag} />
      <Drawer.Items>
        <div className="flex flex-col gap-2">
          {cart?.length > 0 ? (
            <>
              {cart?.map((item, i) => {
                return <CartDrawer key={i} item={item} />;
              })}
            </>
          ) : (
            <>
              <div className="h-24 flex justify-center items-center text-center">
                <h4>Cart is Empty</h4>
              </div>
            </>
          )}
        </div>
        {cart?.length > 0 && (
          <>
            <div className="mt-3 w-full">
              <Link
                href={"/cart"}
                className="p-2 px-24 w-full bg-orange-700 text-white rounded-[30px] hover:bg-black"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </Drawer.Items>
    </Drawer>
  );
};

export default Cart;
