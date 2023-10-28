"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineGroups2 } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { HiDocumentReport } from "react-icons/hi";

import { TbReportAnalytics } from "react-icons/tb";
import { usePathname } from "next/navigation";
interface SideBarDataProps {
  id: string;
  icon: string | any;
  title: string;
  path: string;
}

const SideBarData: SideBarDataProps[] = [
  {
    id: "1",
    icon: <TbLayoutDashboard size="20" />,
    title: "Workspace",
    path: "/workSpace",
  },
  {
    id: "2",
    icon: <MdOutlineGroups2 size="20" />,
    title: "Clients",
    path: "/clients",
  },
  {
    id: "3",
    icon: <GrSchedules size="20" />,
    title: "Schedule Appointment",
    path: "/scheduleAppointment",
  },
  {
    id: "4",
    icon: <HiDocumentReport size="20" />,
    title: "Payments",
    path: "/payment",
  },
  { id: "5", icon: <FaTasks size="20" />, title: "Task", path: "/task" },
  {
    id: "6",
    icon: <AiOutlineMessage size="20" />,
    title: "Messages",
    path: "/message",
  },

  {
    id: "7",
    icon: <TbReportAnalytics size="20" />,
    title: "Reports",
    path: "/reports",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 mt-20 h-full">
      <div>
        <Image
          src="/images/logo.png"
          className="rounded-full mx-auto"
          width={70}
          height={70}
          alt="logo"
        />
      </div>
      <div className="px-5">
        {SideBarData.map(({ id, title, icon, path }) => {
          return (
            <Link
              href={path}
              key={id}
              className={`font-medium text-sm leading-5 px-3 h-10 my-4 flex items-center ${
                pathname === path
                  ? "border-[#DDAA33] border-l-4 text-[#DDAA33]"
                  : ""
              }`}
            >
              <ul className={`rela tive transition-colorsfocus:`}>
                <li className="flex gap-2 items-center">
                  <span>{icon}</span>
                  <span>{title}</span>
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
