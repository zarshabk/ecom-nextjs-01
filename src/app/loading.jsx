import { Spinner } from "flowbite-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <Spinner size={"xl"} />
    </div>
  );
};

export default loading;
