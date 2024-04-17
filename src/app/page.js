import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Image from "next/image";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineMenu,
} from "react-icons/ai";

const getData = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const result = await resp.json();
  return result;
};
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Hero />
      <section className="py-20 realtive">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-medium">Latest Products</h2>
        </div>
        <div className="lg:h-[80px] md:h-[80px] gap-2 h-auto flex justify-between flex-wrap lg:flex-row md:flex-row flex-col items-center p-2">
          <h2 className="bg-gray-200 p-1 rounded-sm px-5 flex items-center gap-[12px] text-gray-600">
            {" "}
            <AiOutlineMenu size={20} />
            Filters
          </h2>
          <div className="flex gap-5 items-center lg:flex-row md:flex-row flex-col">
            <div>
              <input
                type="text"
                placeholder="Search product"
                className="border-[1px] p-1 text-sm rounded-sm outline-none text-gray-700"
              />
            </div>
            <div>
              <select
                type="text"
                className="border-[1px] p-1 text-sm rounded-sm outline-none text-gray-700"
              >
                <option value={""} selected disabled>
                  Select Sort By
                </option>
                <option>Sort By Asc</option>
                <option>Sort By Desc</option>
                <option>Sort By lowest Price</option>
                <option>Sort By Highest Price</option>
              </select>
            </div>
            <div>
              <div className="w-[80px] rounded-[30px] border-[1px] h-[40px] p-1 flex items-center justify-between">
                <button className="h-[30px] w-[30px] flex justify-center items-center rounded-full bg-orange-600 text-white hover:bg-orange-700">
                  <AiOutlineArrowLeft size={20} />
                </button>
                <button className="h-[30px] w-[30px] flex justify-center items-center  rounded-full bg-orange-600 text-white hover:bg-orange-700">
                  <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row gap-2">
          <div className="border-r-[1px] w-full   lg:w-[240px] md:w-[240px] justify-between flex-wrap shadow h-fit p-2 md:gap-3 lg:gap-3 flex flex-row lg:flex-col md:flex-col">
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-semibold">Color</h4>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <span className="w-[20px] h-[20px] rounded-full bg-pink-600"></span>
                  Pink
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <span className="w-[20px] h-[20px] rounded-full bg-red-600"></span>
                  Red
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <span className="w-[20px] h-[20px] rounded-full bg-yellow-600"></span>
                  Yellow
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-semibold">Brand</h4>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> high power
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Reliance
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Bricks
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-semibold">Categories</h4>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Furniture
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Garments
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Electronics
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Sports
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Phones
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Laptops
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> Books
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-semibold">Price</h4>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> less than $25
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> less than $100
                </div>
                <div className="flex flex-row items-center gap-[5px] text-sm">
                  <input type="checkbox" /> less than $1000
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-2">
              {data &&
                data?.products?.map((item, i) => {
                  return <Product key={item.id} item={item} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
