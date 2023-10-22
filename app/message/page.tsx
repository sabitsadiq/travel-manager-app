import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import { paymentData, paymentLinkNav } from "@/components/data";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <div className="h-full lg:h-screen">
        <div className="w-full flex flex-col">
          <PageTitle main="Messages" sub="Send messages to Clients" />
          <div className="bg-gray-200 px-4 py-6">
            <div className="flex gap-5 items-center border border-b border-b-[#000000]/10 bg-gray-200">
              <Link href="/message">
                <Button
                  type="button"
                  styles="hover:text-white font-normal px-2 py-2 w-20 hover:bg-[#DDAA33]"
                  title="Email"
                />
              </Link>
              <Link href="/message">
                <Button
                  type="button"
                  styles="hover:text-white font-normal px-2 py-2 w-20 hover:bg-[#DDAA33]"
                  title="SMS"
                />
              </Link>
            </div>
            <form>
              <div className="my-4 flex flex-col md:flex-row gap-20 leading-5 text-sm text-[#000000] font-semibold">
                <div className="md:w-1/2">
                  <div className="my-2">
                    <label className="my-4">Reciever(s)</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full my-2">
                    <label className="my-4">Subject</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="w-full my-8">
                    <div className="my-2">
                      <label>Description</label>
                      <textarea className="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 h-44 rounded-md"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end mt-8">
                <div className="flex items-center gap-5">
                  <Link href="/clients">
                    <Button
                      type="button"
                      styles="w-32 bg-[#DDAA33] px-2 py-2 rounded-md w-1/3  text-white font-semibold"
                      title="Send"
                    />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
