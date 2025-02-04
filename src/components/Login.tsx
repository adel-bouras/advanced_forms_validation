"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Login } from "@/types/form";
import type { TLogin } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm<TLogin>({
    resolver: zodResolver(Login),
  });
  const OnSubmit = async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    reset();
  };
  return (
    <form
      className="flex w-full flex-col items-start gap-5"
      onSubmit={handleSubmit(OnSubmit)}
    >
      <div className="w-full relative group">
        <label
          className={`cursor-text absolute text-gray-500 top-2 left-2 group-focus-within:text-blue-500 group-focus-within:-top-5 group-focus-within:left-3 transition-all`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          placeholder=" "
          className={`p-4 border-2 w-full h-10 ${
            errors.email
              ? "border-red-500 outline-red-500"
              : "border-slate-500 outline-slate-500"
          } rounded-md shadow-lg`}
          {...register("email")}
          type="text"
          id="email"
        />
        {errors.email && (
          <p className="text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="w-full relative group">
        <label
          className={`cursor-text absolute text-gray-500 top-2 left-2 group-focus-within:text-blue-500 group-focus-within:-top-5 group-focus-within:left-3 transition-all`}
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`border-2 w-full h-10 ${
            errors.password
              ? "border-red-500 outline-red-500"
              : "border-slate-500 outline-slate-500"
          } rounded-md shadow-lg`}
          {...register("password")}
          type="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit">
        Login
      </Button>
    </form>
  );
}
