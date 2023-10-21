import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import { tableData } from "@/components/data";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <div className="h-full xl:h-screen">
        <div className="w-full flex flex-col">
          <PageTitle main="Clients" sub="Here's is the clients list" />
          <div className="bg-gray-200/50 px-4">
            <div className="flex flex-col md:flex-row  md:w-full gap-3 xl:gap-6 md:items-center md:flex-1">
              <Input
                placeholder="Search by name,email..."
                styles="p-2 md:my-8 md:w-3/4 xl:w-4/5 bg-gray-300/20"
                // value="search"
                type="text"
                title="search"
              />
              <Link href="/addClient" className="w-1/2 md:w-1/3 lg:w-1/5">
                <Button
                  type="submit"
                  styles="px-4 py-3 flex w-full flex-1 items-center justify-center  bg-[#DDAA33] "
                  title="Add new Client"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-2 w-full overflow-auto">
          <table className="">
            <thead className="text-sm leading-3 font-bold bg-[#DDAA33]/20">
              <tr className="border border-b-2 border-b-[#DDAA33]">
                <th className="px-6 py-4 text-left  tracking-wider">Name</th>
                <th className="px-6 py-4 text-left  tracking-wider">Email</th>
                <th className="px-6 py-4 text-left tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left tracking-wider">Address</th>
              </tr>
            </thead>
            <tbody className="text-[#000000]/50 font-medium text-sm leading-5">
              {tableData.map((item) => (
                <tr
                  className="border border-b-[#000000]/10 px-6 hover:bg-[#DDAA33]/20 hover:border hover:border-l-2 hover:border-l-[#DDAA33] cursor-pointe  "
                  key={item.id}
                >
                  <td className="px-6 py-4 whitespace-nowrap tracking-wider">
                    <Link href={`/clientProfile/${item.id}`}>{item.name}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap leading-5 tracking-wider">
                    <Link href={`/clientProfile/${item.id}`}>{item.email}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap leading-6 tracking-wider">
                    <Link href={`/clientProfile/${item.id}`}>{item.phone}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap tracking-wider">
                    <Link href={`/clientProfile/${item.id}`}>
                      {item.address}
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
