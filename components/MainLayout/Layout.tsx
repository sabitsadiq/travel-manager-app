import React from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-gray-200  max-w-[1440px] mx-auto max-h-full">
      <div className="w-full">
        <NavBar />
      </div>
      <div className="flex pt-14 text-black w-full h-full">
        <div className="relative w-56 hidden md:block">
          <SideBar />
        </div>
        <div className="flex flex-1 bg-gray-300/40 h-screen md:p-2  md:pt-6 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
