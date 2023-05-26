import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tooltip, Button } from "@material-tailwind/react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const CompareResultPage = () => {
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <div className="min-h-screen bg-[#dddddd] relative">
      <div className="h-12 bg-[#FFFFFF]/90 flex items-center justify-between px-10 text-[#939393]">
        <div className="flex items-center gap-2">
          <p className="text-xl">
            <HiArrowNarrowLeft
              onClick={() => handleBack()}
              className=" cursor-pointer"
            />
          </p>
          <p className="text-xl">
            <BiSearch />
          </p>
          <p className="text-[0.65rem]">Overview Page</p>
        </div>
        <p className="text-[0.75rem]">
          <span className="text-black">24-03 Original New /</span> Coompare
          Results
        </p>
        <p className="text-xl">
          <BsBellFill />
        </p>
      </div>

      <Tabs value="low-high">
        <div className="lg:mx-12 xl:mx-20 lg:mt-10 bg-white/90 h-[calc(100vh-5.6rem)]">
          <div className="flex px-10 py-8 justify-between text-[0.75rem] gap-10">
            <TabsHeader className=" space-x-4">
              <Tooltip
                className="bg-[#fff2d8] max-w-[24rem] py-4 text-black text-[.7rem]"
                content={`if you pick "Low/High", we'll rank the suppliers with the lowest values. For example" The supplier with lowest price in each row"`}
                placement="bottom-start"
              >
                <Tab value={"low-high"}>Low/High</Tab>
              </Tooltip>
              <Tooltip
                className="bg-[#fff2d8] max-w-[24rem] py-4 text-black text-[.7rem]"
                content={`if you pick "Low/High", we'll rank the suppliers with the lowest values. For example" The supplier with lowest price in each row"`}
                placement="bottom-start"
              >
                <Tab value={"high-low"}>High/Low</Tab>
              </Tooltip>
              <Tooltip
                className="bg-[#fff2d8] max-w-[24rem] py-4 text-black text-[.7rem]"
                content={`if you pick "Low/High", we'll rank the suppliers with the lowest values. For example" The supplier with lowest price in each row"`}
                placement="bottom-start"
              >
                <Tab value={"unfilled"}>Unfilled/Row(s)</Tab>
              </Tooltip>
            </TabsHeader>

            <div className="w-[28rem] relative">
              <p className="absolute top-1.5 right-2 text-[#939393] text-[0.95rem]">
                <BiSearch />
              </p>
              <input
                type="text"
                className="w-full bg-[#dddddd]  focus:border-none py-1  outline-none border-none px-2"
              />
            </div>
          </div>

          <TabsBody className="w-full h-full">
            <TabPanel value={"low-high"} className="w-full h-full">
              <div className="grid grid-cols-9 mt-[4.5rem] md:mx-12 bg-[#4D4D4D] px-5 items-center text-white/90 text-[0.75rem] ">
                <div className="col-span-2 flex gap-6 py-2 hover:bg-[#363636] duration-300">
                  <p>#</p>
                  <p> Name</p>
                </div>
                <div className="col-span-2 py-2 hover:bg-[#363636] duration-300">
                  Submission info
                </div>
                <div className="col-span-3 py-2 hover:bg-[#363636] duration-300">
                  Selected Row(s)
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Price” Column{" "}
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Stock” Column
                </div>
              </div>

              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>1</p>
                  <p>Seller1</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>

              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>2</p>
                  <p>Unfilled Row(s)</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>
            </TabPanel>
            <TabPanel value={"high-low"}>
              <div className="grid grid-cols-9 mt-[4.5rem] md:mx-12 bg-[#4D4D4D] px-5 items-center text-white/90 text-[0.75rem] ">
                <div className="col-span-2 flex gap-6 py-2 hover:bg-[#363636] duration-300">
                  <p>#</p>
                  <p> Name</p>
                </div>
                <div className="col-span-2 py-2 hover:bg-[#363636] duration-300">
                  Submission info
                </div>
                <div className="col-span-3 py-2 hover:bg-[#363636] duration-300">
                  Selected Row(s)
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Price” Column{" "}
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Stock” Column
                </div>
              </div>

              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>1</p>
                  <p>Seller1</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>

              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>2</p>
                  <p>Unfilled Row(s)</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>
            </TabPanel>
            <TabPanel value={"unfilled"}>
              {" "}
              <div className="grid grid-cols-9 mt-[4.5rem] md:mx-12 bg-[#4D4D4D] px-5 items-center text-white/90 text-[0.75rem] ">
                <div className="col-span-2 flex gap-6 py-2 hover:bg-[#363636] duration-300">
                  <p>#</p>
                  <p> Name</p>
                </div>
                <div className="col-span-2 py-2 hover:bg-[#363636] duration-300">
                  Submission info
                </div>
                <div className="col-span-3 py-2 hover:bg-[#363636] duration-300">
                  Selected Row(s)
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Price” Column{" "}
                </div>
                <div className="col-span-1 py-2 hover:bg-[#363636] duration-300">
                  “Stock” Column
                </div>
              </div>
              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>1</p>
                  <p>Seller1</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>
              <div className="grid grid-cols-9 md:mx-12 px-5 text-[0.75rem] border-b items-center">
                <div className="col-span-2 flex gap-6 py-2 ">
                  <p>2</p>
                  <p>Unfilled Row(s)</p>
                </div>
                <div className="col-span-2 py-2">23 March 2023 at 12:04</div>
                <div className="col-span-3 py-2">16 /54</div>
                <div className="col-span-1 py-2">
                  <Link href={`/exel`}>
                    <p className=" bg-[#389F7A] inline-block px-5 rounded-md text-white/90 py-1.5">
                      Excel
                    </p>
                  </Link>
                </div>
                <div className="col-span-1 py-2"></div>
              </div>
            </TabPanel>
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default CompareResultPage;
