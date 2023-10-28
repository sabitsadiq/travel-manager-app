import Button from "@/components/Button";
import Layout from "@/components/MainLayout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="h-full bg-gray-200 px-4 lg:px-8 py-10">
        <div className="bg-gray-300/40 rounded-lg p-4">
          <h1 className="my-4 font-bold text-xl leading-4">
            Client&apos;s Picture
          </h1>
          <div className="flex flex-col w-full md:flex-row gap-8 md:items-center mt-8 mb-4">
            <div className=" flex justify-center  items-center">
              <Image
                className="rounded-full "
                src="/images/avatar.jpg"
                width={100}
                height={100}
                alt="passport"
              />
            </div>
            <div className="text-base font-medium text-black/50 ">
              <div className="w-full">
                <div>
                  <h1 className="font-semibold text-sm leading-4 text-black">
                    odunsote mayokon
                  </h1>
                  <span className="my-1">adegoketemitope@gmail.com</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span>Female</span>
                  <span>54 years</span>
                  <span>Nigrerian</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-4 lg:flex-row justify-center gap-4 lg:gap-20 mt-20 text-base font-medium text-black/50">
          <div className="lg:w-1/2">
            <div className="">
              <h4>Full name</h4>
              <h2 className=" mt-2 font-semibold text-sm leading-4 text-black">
                odunsote mayokon
              </h2>
            </div>
            <div className="mt-4">
              <h4>
                Applicant Fullname <span>(as shown in the passport)</span>
              </h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Odunsote Mayokon Kemi
              </h2>
            </div>
            <div className="mt-4 flex justify-between w-4/5">
              <div>
                <h4>Place of Birth</h4>
                <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                  Nigeria
                </h2>
              </div>
              <div>
                <h4>Date of Birth</h4>
                <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                  04/11/2012
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <h4>Marital Status</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Married
              </h2>
            </div>
            <div className="mt-4">
              <h4>Current Occupation</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Engineer
              </h2>
            </div>
            <div className="mt-4">
              <h4>Residential Address</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria
              </h2>
            </div>
            <div className="mt-4">
              <h4>Country of interest</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Iceland
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div>
              <h4>Email</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                adegoketemitope@gmail.com
              </h2>
            </div>
            <div className="mt-4">
              <h4>gender</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Female
              </h2>
            </div>
            <div className="mt-4">
              <h4>Country of citizenship</h4>
              <h2 className="font-semibold text-sm leading-4 text-black  mt-2">
                Nigeria, Uganda
              </h2>
            </div>
            <div className="mt-4">
              <h4>
                Education
                <span>(Client&apos;s Highest level of education )</span>
              </h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                Bachelor&apos;s degree
              </h2>
            </div>
            <div className="mt-4">
              <h4>Phone Number</h4>
              <h2 className="mt-2 font-semibold text-sm leading-4 text-black">
                +234(0)8160730668
              </h2>
            </div>
            <div className="mt-4">
              <h4>Mailing Address</h4>
              <h2 className="font-semibold text-sm leading-4 text-black mt-2">
                No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria
              </h2>
            </div>
            <div className="mt-4">
              <h4>Purpose of training</h4>
              <h2 className="font-semibold text-sm mt-2 leading-4 text-black">
                Trading
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end mt-8">
          <Link href="/clients">
            <Button
              type="button"
              styles="w-32 bg-[#DDAA33] px-2 py-3 rounded-lg  text-white font-semibold"
              title="Back"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default page;
