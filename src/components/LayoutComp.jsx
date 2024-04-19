"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import { Footer } from "flowbite-react";

const LayoutComp = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main className="container w-[98%] lg:w-[80%] md:w-[90%] m-auto">
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default LayoutComp;
