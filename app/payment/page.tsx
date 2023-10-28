import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import { paymentData, paymentLinkNav } from "@/components/data";
import Link from "next/link";
import React from "react";
import { BiPlus } from "react-icons/bi";

const Page = () => {
  return (
    <Layout>
      <div className="h-full lg:h-screen">
        <div className="w-full flex flex-col">
          <PageTitle main="Payment" sub="Here's the history of payment" />
          <div className="bg-gray-200 px-2">
            <div className="flex flex-col md:flex-row  md:w-full gap-3 xl:gap-6 md:items-center md:flex-1">
              <Input
                placeholder="Search by name,email..."
                styles="p-2 md:my-8 md:w-3/4 xl:w-4/5 bg-gray-300/20"
                // value="search"
                type="text"
                title="search"
              />
              <Link
                href="/createInvoice"
                className=" md:w-1/4 lg:w-1/3 xl:w-1/4"
              >
                <button className="rounded-lg px-4 py-3 flex gap-2 text-white w-full flex-1 items-center justify-center  bg-[#DDAA33] ">
                  <span className="">
                    <BiPlus />
                  </span>
                  Create invoice
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-5 items-center  border border-b border-b-[#000000]/10 bg-gray-200">
          {paymentLinkNav.map(({ path, id, name }) => (
            <Link href={`/${path}`} key={id}>
              <Button
                type="button"
                styles="hover:text-white font-normal px-2 py-2 w-20 hover:bg-[#DDAA33]"
                title={name}
              />
            </Link>
          ))}
        </div>
        <div className="mt-4 w-full overflow-auto pb-10">
          <table className="w-full">
            <thead className="text-sm leading-3 font-bold bg-[#DDAA33]/20">
              <tr className="border border-b-2 border-b-[#DDAA33]">
                <th className="px-6 py-4 text-left  tracking-wider">Name</th>
                <th className="px-6 py-4 text-left  tracking-wider">Item</th>
                <th className="px-6 py-4 text-left tracking-wider">
                  Create Date
                </th>
                <th className="px-6 py-4 text-left tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="text-[#000000]/50 font-medium text-sm leading-5">
              {paymentData.map((obj) => (
                <tr
                  className="border border-b-[#000000]/10 px-6 hover:bg-[#DDAA33]/20 hover:border hover:border-l-2 hover:border-l-[#DDAA33] cursor-pointe  "
                  key={obj.id}
                >
                  <td className="px-6 py-4 whitespace-nowrap tracking-wider">
                    <Link href={`/clientProfile/${obj.id}`}>{obj.name}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap leading-5 tracking-wider">
                    <Link href={`/clientProfile/${obj.id}`}>{obj.item}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap leading-6 tracking-wider">
                    <Link href={`/clientProfile/${obj.id}`}>
                      {obj.createDate}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap tracking-wider">
                    <Link href={`/clientProfile/${obj.amount}`}>
                      {obj.amount}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap tracking-wider">
                    <Link href={`/clientProfile/${obj.status}`}>
                      {obj.status}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
