import React from "react";
import { BsBellFill, BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

import Image from "next/image";
import bell from "../../img/bell.jpeg"


function index() {
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <div className="header">
      <div className=" py-6 border-b   px-[8rem]  font-semibold flex justify-between text-[#888686]">
        <div className=" flex space-x-3 items-center ">
          <BsArrowLeft
            className=" cursor-pointer"
            onClick={() => handleBack()}
          />

          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.625 3.125H14.625C15.5915 3.125 16.375 3.9085 16.375 4.875H0.625V3.125Z"
              fill="#E6CB96"
            />
            <path
              d="M0.625 5.75H16.375V8.825C16.375 10.5052 16.375 11.3452 16.048 11.987C15.7604 12.5515 15.3015 13.0104 14.737 13.298C14.0952 13.625 13.2552 13.625 11.575 13.625H5.425C3.74484 13.625 2.90476 13.625 2.26303 13.298C1.69854 13.0104 1.2396 12.5515 0.95198 11.987C0.625 11.3452 0.625 10.5052 0.625 8.825V5.75Z"
              fill="#767676"
            />
            <path
              d="M0.625 3.125C0.625 2.54388 0.625 2.25332 0.684937 2.01404C0.864249 1.29819 1.42319 0.739249 2.13904 0.559937C2.37832 0.5 2.66888 0.5 3.25 0.5H5.09315C5.91065 0.5 6.3194 0.5 6.68694 0.652241C7.05448 0.804482 7.34351 1.09351 7.92157 1.67157L9.375 3.125H0.625Z"
              fill="#E6CB96"
            />
          </svg>

          <p>Compare Function Page</p>
        </div>
        <div>
          <p>
            {" "}
            <span className="text-black">24-03 Original New </span>/ Seller1
          </p>
        </div>
        <div>
        <Image  src={bell}  height={35} width={35} alt="bell" />
        </div>
      </div>

      <div className=" p-3 flex justify-between px-[8rem]  flex-wrap sub__header">
        <div className=" flex  space-x-4 text-[.9rem]">
          <p className="px-4 rounded-md py-2">Preview</p>
          <p className="px-4 rounded-md py-2">Hide Column</p>
        </div>
        <div>
          <ul className=" flex space-x-5 text-[.9rem]">
            <li className="px-4 rounded-md py-2">Edit Data-request</li>
            <li className="px-4 rounded-md py-2">Import File </li>
            <li className="px-4 rounded-md py-2">Update </li>
            <li className="px-4 rounded-md py-2">Close list </li>
            <li
              className="px-4 rounded-md py-2 bg-[#F3F3F3]
]"
            >
              Publish
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
