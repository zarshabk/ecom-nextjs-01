import Login from "@/components/Login";
import { Divide } from "lucide-react";

export default async function page() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="w-[80%] min-h-[400px] shadow grid grid-cols-1 lg:grid-cols-2">
        <div
          className="bg-gradient-to-r from-pink-100 to-red-100"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg')",
          }}
        ></div>
        <div className="p-5 w-full flex h-full justify-center items-center">
          <Login />
        </div>
      </div>
    </div>
  );
}
