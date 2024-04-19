import MainCart from "@/components/MainCart";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const page = () => {
  return (
    <div className="w-full my-5">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="border-[1px] bg-transparent hover:bg-black hover:text-white p-2 px-10"
        >
          Continue Shopping
        </Link>
      </div>
      <br />
      <br />
      <MainCart />
    </div>
  );
};

export default page;
