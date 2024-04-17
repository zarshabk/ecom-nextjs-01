import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

const Login = () => {
  return (
    <form className="flex min-w-full p-5  flex-col gap-4">
      <div className="mb-2 text-center">
        <h2 className="text-2xl leading-6 whitespace-nowrap font-bold">
          Login
        </h2>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" color={"blue"} isProcessing={false}>
        Submit
      </Button>
      <div>
        <p className="text-sm ">
          not have an account{" "}
          <Link className="text-blue-800 underline" href="/register">
            create account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
