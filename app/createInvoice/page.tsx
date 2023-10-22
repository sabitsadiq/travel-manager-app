import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <div className="h-screen">
        <PageTitle main="Create Invoice" sub="Create a new invoice here" />
        <div className="bg-gray-200 p-4 lg:p-8 mt-4">
          <h1 className="font-semibold text-lg leading-5 text-[#000000]">
            Enter invoice details
          </h1>
          <form>
            <div className="my-4 flex flex-col md:flex-row gap-20 leading-5 text-sm text-[#000000] font-semibold">
              <div className="md:w-1/2">
                <div className="my-2">
                  <label className="my-4">Client&apos;s name</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="flex gap-5">
                  <div className="my-2">
                    <label className="my-4">Amount</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="my-2">
                    <label className="my-4">Date</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label>Description</label>
                  <textarea className="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 h-20 rounded-md"></textarea>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="w-full my-2">
                  <label className="my-4">Status</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-8">
                  <label className="my-4">Purpose</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-8">
              <div className="flex items-center gap-5">
                <Link href="/payment">
                  <Button
                    type="button"
                    styles="w-32 border border-red-700 px-2 py-2 w-1/3 rounded-md text-red-700  font-semibold"
                    title="Cancel"
                  />
                </Link>
                <Link href="/clients">
                  <Button
                    type="button"
                    styles="w-32 bg-[#DDAA33] px-2 py-2 rounded-md w-1/3  text-white font-semibold"
                    title="Save"
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
