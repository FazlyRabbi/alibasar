"use client";

import { BiSearchAlt2 } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { GoFileDirectory } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(false);
  };
  return (
    <div className="grid grid-cols-10 xl:grid-cols-6 w-full min-h-screen relative overflow-x-hidden">
      {/* left side */}
      <div
        onClick={() => handleOpen()}
        className={
          open
            ? "absolute lg:hidden bg-[#464545] z-[40] min-h-screen text-white p-10"
            : "col-span-2  xl:col-span-1 bg-[#E9E9E9] ps-10 space-y-4 hidden lg:block"
        }
      >
        <h3 className="pt-5 pb-14 text-lg text-[#FFB320]">Alibasar</h3>
        <div className="text-sm space-y-4">
          <p className="font-bold">Compare List</p>
          <ul className="list-disc  list-inside">
            <li className="list-style">
              Create list
              <span className="text-white bg-[#FFB320] mx-1 px-0.5">+</span>
            </li>
            <li className="list-style">
              My list
              <span className="text-white bg-[#FF9292] px-1.5 mx-1 rounded text-xs">
                New
              </span>
            </li>
            <li className="list-style">Participated list</li>
          </ul>
          <p className="font-semibold">Webshop</p>
          <p className="tracking-widest font-medium ">Explore</p>
        </div>

        {/* user part */}
        <p className="absolute bottom-14 left-10 text-3xl text-[#9D9D9D] z-10">
          <BiUserCircle />
        </p>
      </div>

      {/* right side */}

      <div
        className={
          open
            ? "lg:col-span-10 xl:col-span-6 relative col-span-10"
            : "lg:col-span-8 xl:col-span-5 relative col-span-10"
        }
      >
        <div className="text-[#929292] flex justify-between py-2 border-b">
          <div>
            <span
              onClick={() => handleMenu()}
              className="lg:hidden block text-xl z-50"
            >
              {open == true ? <FaTimes /> : <FaBars />}
            </span>
          </div>
          <p>My list</p>
          <p className="flex gap-2 px-10 justify-center items-center text-xl">
            <BiSearchAlt2 />
            <p className="relative w-5">
              <span className="bell-round top-0"></span>
              <BsBellFill />
            </p>
          </p>
        </div>

        <div className="grid grid-cols-12 px-2 sm:px-10  py-2 border-b text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7]">
          <div className="col-span-5 xl:col-span-6">
            <p>Name</p>
          </div>
          <div className="col-span-1">
            <p>Row(s)</p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center">
              |<AiOutlineDown />
              Suppliers
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-start items-center">
              |<AiOutlineDown />
              Date
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center ">
              |<AiOutlineDown />
              Status
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-2 sm:px-10 py-2 text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7] hover:bg-[#F8F8F8] duration-300">
          <div className="col-span-5 xl:col-span-6 relative table-colum ">
            <div className="popup opacity-0 hidden py-4 text-gray-50/50">
              <div className="flex justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4">
                <p className="text-xs">view</p>
                <p className="text-[0.65rem] text-[#929292]">
                  • One overview of all suppliers
                </p>
              </div>
              <p className="px-4 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem]">
                Edit
              </p>
              <div className="flex justify-between items-center hover:bg-[#A3A2A2]/20 duration-300 px-4 border-b border-[#A3A2A2]/20 pb-1">
                <p className="text-[0.70rem]">Webpage </p>
                <p className="text-[0.55rem] text-[#929292]">
                  • Share this page with your suppliers
                </p>
              </div>
              <Link
                href="/compare-results"
                className="px-4 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem] py-1 border-b border-[#A3A2A2]/20 block"
              >
                Compare Results
              </Link>
              <p className="px-4 hover:bg-[#A3A2A2]/20 duration-300 text-[0.70rem]">
                Close List
              </p>
            </div>

            <p className="flex gap-2 items-center text-black">
              <span className="text-[#E5CB96] text-xl">
                <GoFileDirectory />
              </span>
              24-03 Original New
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45
            </p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center gap-1 sm:gap-3 text-[#A3A2A2]">
              17
              <span className="text-white bg-[#FF9292] px-1.5 rounded text-xs">
                New
              </span>
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45 17 23 Mar 2022 at 12:04
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#6BA557]">
              Active
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-2 sm:px-10  py-2 text-[0.75rem] sm:text-sm gap-5 sm:gap-10 text-[#D7D7D7] bg-[#F8F8F8] ">
          <div className="col-span-5 xl:col-span-6">
            <p className="flex gap-2 items-center text-black">
              <span className="text-[#E5CB96] text-xl">
                <GoFileDirectory />
              </span>
              24-03 Original New
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45
            </p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="flex justify-start items-center gap-3 text-[#A3A2A2]">
              17
            </p>
          </div>
          <div className="col-span-3">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              45 17 23 Mar 2022 at 12:04
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex justify-center items-center text-[#A3A2A2]">
              Closed
            </p>
          </div>
        </div>
        {/* BELL ICON POPUP */}
        <div>
          <div className="absolute top-1/2 right-2 sm:right-10 text-xl text-[#9D9D9D]">
            <p className="relative w-5">
              <span className="bell-round top-0"></span>
              <p className="">
                <BsBellFill />
              </p>
            </p>
          </div>
          <div className="absolute top-1/2 pt-6 right-2 sm:right-10 text-xl text-[#9D9D9D]">
            <div className="w-80 h-auto border border-[#9D9D9D] rounded-md py-3 px-6">
              <div className="text-[0.68rem] leading-4 border-b py-2">
                <p>Main file : 24 - 03 Original New</p>
                <div className="flex justify-between relative text-[#1A1919] gap-2">
                  <p>A new supplier has submitted their information.</p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-4 border-b py-2">
                <p>Main file : 24 - 03 Original New</p>
                <div className="flex justify-between relative text-[#1A1919] gap-2">
                  <p>A new supplier has submitted their information.</p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-4 border-b py-2">
                <p>
                  Main file “24 - 03 Original New with no frame just to check
                  how long it ” has been created 🥳
                </p>
                <div className="flex justify-between relative text-[#1A1919] gap-2 items-center">
                  <p>
                    A “Collecting-Page” has been created. Share this page with
                    your suppliers to collect their information.
                  </p>
                  <span className="bg-[#e13f3f]/50 right-0 rounded-full h-2 w-2 absolute top-1"></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-3 border-b py-2">
                <p>
                  Main file “24 - 03 Original New with no frame just to check
                  how long it ” has been created 🥳
                </p>
                <div className="flex justify-between relative text-[#1A1919]">
                  <p>
                    A “Collecting-Page” has been created. Share this page with
                    your suppliers to collect their information.
                  </p>
                  <span></span>
                </div>
              </div>
              <div className="text-[0.68rem] leading-3 text-[#1A1919] py-2">
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
