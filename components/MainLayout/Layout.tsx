import React from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-gray-300/40 h-full  max-w-[1440px] mx-auto max-h-full">
      <div className="w-full bg-gray-200">
        <NavBar />
      </div>
      <div className="flex pt-14 text-black w-full h-full">
        <div className="relative bg-gray-200 w-1/4 xl:w-1/5  hidden lg:block">
          <SideBar />
        </div>
        <div className="bg-gray-300/40 w-full lg:w-3/4 xl:w-4/5 h-full   md:pt-6 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
