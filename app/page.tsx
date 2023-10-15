"use client";
import Image from "next/image";
import { useState } from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface formDataType {
  email: string;
  password: string;
}

export default function Home() {
  const [isFormSubmitted, setISFormSubmitted] = useState<Boolean>(false);
  const router = useRouter();
  const schema: ZodType<formDataType> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataType>({
    resolver: zodResolver(schema),
  });
  const successNotify = () => {
    toast("Login Successful", { position: toast.POSITION.TOP_RIGHT });
  };
  const submitData = (data: formDataType) => {
    console.log("it work", data);
    setISFormSubmitted(true);
    successNotify();
    setTimeout(() => {
      router.push("/workSpace");
    }, 200);
  };
  return (
    <div className="relative w-full max-w-[1440px] mx-auto ">
      {/* <div className="w-full h-[640px]">
        <Image src="/images/formBackground.jpg" fill alt="formBackground" />
      </div> */}
      <div className="w-full h-full">
        <form
          className="md:w-3/5 lg:w-1/3  py-8 mx-auto bg-gray-100/40 rounded-md shadow-md px-4 md:p-8 my-10"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex items-center justify-between w-full text-[#000000]">
            <div>
              <h1>Login</h1>
              <h4>Login to Your account</h4>
            </div>
            <div>
              <Image src="/images/logo.png" width={50} height={50} alt="logo" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-7">
            <div className="">
              <label className="mb-8">Email</label>
              <input
                type="text"
                {...register("email")}
                className="outline-none border border-[#000000] rounded-sm px-4 py-2 w-full"
              />
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="mb-8">password</label>
              <input
                type="string"
                {...register("password")}
                className="outline-none border border-[#000000] rounded-sm px-4 py-2 w-full"
              />
              {errors.password && (
                <span className="text-sm text-red-600">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="p-1.5 bg-[#DDAA33] text-white rounded-sm w-4/5 mx-auto mt-5"
            >
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
