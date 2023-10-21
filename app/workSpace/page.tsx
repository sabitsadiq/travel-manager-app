import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <div className="w-full py-8 md:pt-0 px-2 h-full">
        <PageTitle main="Your Workspace" sub="Welcome,xxx" />
        <h1 className="font-semibold text-base my-2">Overview</h1>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-x-10 xl:gap-x-20 xl:w-10/12">
          <div className="mt-2">
            <span className="p-1 flex flex-1 bg-[#DDAA33]  w-[99.5%] mx-auto"></span>
            <div className="rounded-lg">
              <h1 className="w-full bg-[#DDAA33]/10 font-semibold text-base py-1 px-4">
                Today&apos;s Agenda
              </h1>
              <div className="bg-gray-200 shadow-sm h-32 flex items-center justify-center leading-4 text-sm font-medium text-[#000000]/50">
                <p className="px-2 lg:px-0">
                  You dont have any event schedule for today.
                  <span className="text-yellow-500 cursor-pointer">Add</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="p-1 flex flex-1 bg-[#DDAA33] w-[99.5%] mx-auto"></span>
            <div className="rounded-lg">
              <div className="w-full bg-[#DDAA33]/10 flex justify-between items-center leading-4 text-sm font-medium ">
                <p className="font-semibold text-base py-1 px-4">
                  Activity Report
                </p>
                <span className="text-[#DDAA33] mr-4">
                  View full activity report &rarr;
                </span>
              </div>
              <div className="bg-gray-200 shadow-sm h-44 px-2 leading-4 text-sm font-medium text-[#000000]/50">
                <div className="flex items-center pt-3">
                  <div className="p-[0.5px] w-1/2 bg-black/50"></div>
                  <p>Tuesday (18th of Sept,2019</p>
                </div>
                <p>You added a new client</p>
                <div className="ml-5 leading-5">
                  <h1 className="text-yellow-500 text-md font-semibold mb-3">
                    Odusote mayokun
                  </h1>
                  <span className="bg-[#DDAA33]/30 p-2 border-l-4 border-[#DDAA33] font-semibold text-md">
                    status:pending
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="p-1 flex flex-1 bg-[#DDAA33] w-[99.5%] mx-auto"></span>
            <div className="rounded-lg">
              <div className="w-full bg-[#DDAA33]/10 flex justify-between items-center leading-4 text-sm font-medium ">
                <p className="font-semibold text-base py-1 px-4">
                  Task that are due
                </p>
                <span className="text-[#DDAA33] mr-4 cursor-pointer">
                  Create Task <span className="ml-4">&rarr;</span>
                </span>
              </div>
              <div className="bg-gray-200 shadow-sm pt-4 h-44 px-4 leading-4 text-sm font-medium text-[#000000]/50">
                <div className="px-4 py-2 leading-5 bg-[#DDAA33]/10 rounded-md text-[#000000]">
                  <div className="flex items-center">
                    <h1 className="text-md font-semibold">Follow up with</h1>
                    <span className="text-[#DDAA33] font-semibold text-md ml-1">
                      Odusole
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-normal">
                    <span>Due on:1/21/2021</span>
                    <span>created on:1/15/2021</span>
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
