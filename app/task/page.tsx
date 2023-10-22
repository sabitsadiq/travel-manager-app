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
        <PageTitle main="Create Task" sub="Add a new task here" />
        <div className="bg-gray-200 p-4 lg:p-8 mt-4">
          <h1 className="font-semibold text-lg leading-5 text-[#000000]">
            Enter task details
          </h1>
          <form>
            <div className="my-4 flex flex-col md:flex-row gap-20 leading-5 text-sm text-[#000000] font-semibold">
              <div className="md:w-1/2">
                <div className="my-2">
                  <label className="my-4">Title</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <h1 className="text-[#000000]/50">Duration</h1>
                <div className="flex gap-5">
                  <div className="my-2">
                    <label className="my-4">Start Date</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="my-2">
                    <label className="my-4">Time</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="my-2">
                    <label className="my-4">Due Date</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="my-2">
                    <label className="my-4">Time</label>
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
                  <label className="my-4">Assign consultant</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="flex gap-5 mt-7">
                  <div className="my-2">
                    <label className="my-4">Status</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="my-2">
                    <label className="my-4">Priority</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-8">
              <Link href="/clients">
                <Button
                  type="button"
                  styles="w-32 bg-[#DDAA33] px-2 py-2 rounded-md w-1/3  text-white font-semibold"
                  title="Save"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
