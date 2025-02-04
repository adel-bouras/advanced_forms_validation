import LoginForm from "@/components/Login";
import React from "react";

export default function page() {
  return (
    <div className="w-screen p-3 h-screen flex items-center justify-center">
      <div className="bg-slate-100 shadow-xl border-2 border-gray-100 rounded-md p-5 min-h-[400px] min-w-[320px] ">
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
      </div>
    </div>
  );
}
