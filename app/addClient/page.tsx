import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/MainLayout/Layout";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <div className="h-full">
        <PageTitle main="Add client" sub="Add a new client" />
        <div className="bg-gray-200 px-4 lg:px-10   pt-20">
          <div className="bg-gray-300/40 rounded-lg p-4">
            <h1 className="my-4 font-bold text-xl leading-4">
              Client's Picture
            </h1>
            <div className="flex flex-col w-full lg:flex-row gap-8 md:items-center mt-8 mb-4">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-full "
                  src="/images/avatar.jpg"
                  width={100}
                  height={100}
                  alt="passport"
                />
              </div>
              <div className="flex flex-col gap-2 text-base font-medium text-black/50 ">
                <div className="w-full">
                  <Button
                    type="submit"
                    styles="bg-[#DDAA33]/80 w-full rounded-lg px-5 py-3 text-white"
                    title="Upload image"
                  />
                </div>
                <div className="w-full">
                  <Button
                    type="submit"
                    styles="border w-full border-red-700 rounded-lg px-5 py-3 text-red-700"
                    title="Use Webcam"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1>Enter clients details</h1>
            <div className="flex  flex-col lg:flex-row  w-full gap-20 leading-5 text-sm text-[#000000] font-semibold">
              <div className="lg:w-1/2">
                <div className="w-full my-2">
                  <label className="my-4">Full Name</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">
                    Applicant Fullname
                    <span className="text-red-700 ml-2 font-normal">
                      (as shown in the passport)
                    </span>
                  </label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="flex gap-10">
                  <div className="w-full my-2">
                    <label className="my-4">Place of birth</label>
                    <Input
                      type="text"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                  <div className="w-full my-2">
                    <label className="my-4">Date of birth</label>
                    <Input
                      type="date"
                      title="text"
                      styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Marital Status</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Current Occupation</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Residential address</label>
                  <textarea className="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 outline-none h-20 rounded-md"></textarea>
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Country of interest</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="w-full my-2">
                  <label className="my-4">Email</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Gender</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-4">
                  <label className="my-4">Country of citizenship</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">
                    Education
                    <span className="text-red-700 ml-2 font-normal">
                      (client's highest level of education)
                    </span>
                  </label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">phone number</label>
                  <Input
                    type="text"
                    title="text"
                    styles="w-full border font-normal mt-2 bg-gray-200 border-[#000000]/50 px-2 py-3 rounded-md"
                  />
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Emailing address</label>
                  <textarea
                    className="w-full border font-normal mt-2 bg-gray-200
                    border-[#000000]/50 px-2 py-3 rounded-md h-20"
                  ></textarea>
                </div>
                <div className="w-full my-2">
                  <label className="my-4">Purpose of traveling</label>
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
            <div className="flex items-center gap-5">
              <Link href="/clients">
                <Button
                  type="button"
                  styles="w-32 border border-red-700 px-2 py-2 w-1/3 rounded-md  font-semibold"
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
        </div>
      </div>
    </Layout>
  );
};

export default Page;
