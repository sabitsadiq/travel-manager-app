import Image from "next/image";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-gray-200 flex flex- items-center md:justify-end md:items-end justify-between pb-1 text-black h-14 px-2 md:px-0 max-w-[1440px] mx-auto">
      <div className="block md:hidden">
        <HiMenuAlt1 size={25} />
      </div>
      <div className="flex gap-5 items-center md:mr-10">
        <IoMdNotificationsOutline size="30" />
        <span className="font-semibold leading-4 text-md">Kelin</span>
        <Image
          src="/images/avatar.jpg"
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
