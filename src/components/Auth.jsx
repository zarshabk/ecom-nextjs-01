"use client";
import React, { useState } from "react";
import Login from "@/components/Login";
const Auth = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className="w-[80%] min-h-[400px] shadow grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-green-500"></div>
      <div className="p-5 w-full flex h-full justify-center items-center">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
