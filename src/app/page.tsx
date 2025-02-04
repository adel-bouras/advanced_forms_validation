import LoginForm from "@/components/Login";
import { Button } from "@/components/ui/button";
import React from "react";
import google from "@/../public/google.svg";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function page() {
  return (
    <div className="bg-lime-200 w-screen p-3 h-screen flex items-center justify-center">
      <div className="bg-orange-100 shadow-xl flex flex-col items-start border-2 border-gray-600 rounded-md p-5 min-h-[400px] min-w-[320px] ">
        <h1 className="font-extrabold text-3xl">
          Login to your account
        </h1>
        <p className="text-gray-600">
          Please login to your account so that you can
          continue the process.
        </p>
        <br />
        <br />
        <LoginForm />
        <br />
        <div className="w-full text-center text-gray-600 relative before:absolute before:z-10 before:bg-slate-400 before:h-[2px] before:w-[40%] before:left-3 before:top-1/2 after:absolute after:z-10 after:bg-slate-400 after:h-[2px] after:w-[40%] after:right-3 after:top-1/2 ">
          Or
        </div>
        <br />
        <Button
          variant={"outline"}
          className="w-[80%] self-center"
        >
          <Avatar>
            <AvatarImage
              width={60}
              height={60}
              src={google.src}
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          Login with google
        </Button>
      </div>
    </div>
  );
}
