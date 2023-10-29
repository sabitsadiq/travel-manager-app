import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import React from "react";
import { BsFilter, BsPerson } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";
import { RiArrowDownSFill } from "react-icons/ri";

const Page = () => {
  return (
    <Layout>
      <div className="h-full xl:h-screen">
        <PageTitle main="Activity Report" sub="view all activity reports" />
        <div className="px-4 mt-5 ">
          <div className="bg-gray-200 px-2 md:px-8 pt-4  rounded-lg">
            <div className="pb-20">
              <div className="flex justify-end">
                <div className="flex justify-end items-center gap-4 text-[#DDAA33] border border-[#DDAA33] rounded-md w-fit p-2">
                  <BsFilter size="20" />
                  <span>Filter</span>
                  <RiArrowDownSFill size="20" />
                </div>
              </div>
              <div className="mt-8 text-gray-500/90 font-medium text-base">
                <div className="flex flex-col lg:flex-row gap-1 flex-1 lg:items-center ">
                  <h2 className="lg:w-1/4">Thursday,January 14th</h2>
                  <div className="w-full">
                    <hr className="h-[1.5px] bg-gray-500/90" />
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex flex-col md:flex-row  justify-between md:items-center">
                    <div className="flex gap-2  items-center">
                      <BsPerson size="20" />
                      <span>You added a new client</span>
                    </div>
                    <div className="flex justify-end">8:25am</div>
                  </div>
                  <div className="px-10 mt-2">
                    <h2 className="text-[#DDAA33]">Odusote Mayokun</h2>
                    <p>status:Paid in full</p>
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex gap-2  items-center">
                      <GrSchedules size="20" />
                      <span>You create a new appointment</span>
                    </div>
                    <div className="flex justify-end">8:25am</div>
                  </div>
                  <div className="px-10 mt-2">
                    <h2>
                      Assigned:
                      <span className="text-[#DDAA33] text-base">
                        Oki julie
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 flex-1 lg:items-center ">
                  <h2 className="lg:w-1/4">Thursday,January 11th</h2>
                  <div className="w-full">
                    <hr className="h-[1.5px] bg-gray-500/90" />
                  </div>
                </div>
                <div>
                  <div className="my-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div className="flex gap-2  items-center">
                        <BsPerson size="20" />
                        <span>You created a new invoice</span>
                      </div>
                      <div className="flex justify-end ">8:25am</div>
                    </div>
                    <div className="px-10 mt-2">
                      <h2>
                        Client:
                        <span className="text-[#DDAA33]">Odusote Mayokun</span>
                      </h2>
                      <p>Purpose:lorem ispum do isit amit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
