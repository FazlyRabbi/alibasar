import React from "react";
import { BsBellFill, BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
function index() {

  const route = useRouter();

  const handleBack = () => {
    route.back();
  };


  return (
    <div className="header">
      <div className=" py-6 px-[8rem] border-b    font-semibold flex justify-between text-[#888686]">
        <div className=" flex space-x-5 items-center ">
          <BsArrowLeft className=" cursor-pointer"  onClick={()=> handleBack()}/>
          <p>Compare Function Page</p>
        </div>
        <div>
          <p>
            {" "}
            <span className="text-black">24-03 Original New </span>/ Seller1
          </p>
        </div>
        <div>
          <BsBellFill className="text-[1.3rem] cursor-pointer" />
        </div>
      </div>

      <div>
         <h1 className=" text-center   uppercase  mt-[10rem]">Exel Sheet here</h1>
      </div>
    </div>
  );
}

export default index;
