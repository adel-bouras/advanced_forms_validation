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
      className="flex flex-col items-start gap-5"
      onSubmit={handleSubmit(OnSubmit)}
    >
      <label htmlFor="email">Email</label>
      <input
        className={`border-2 ${
          errors.email
            ? "border-red-500 outline-red-500"
            : "border-slate-500 outline-slate-500"
        } rounded-md shadow-2xl`}
        {...register("email", {
          required: "Email adress is required.",
        })}
        placeholder="Email"
        type="text"
        id="email"
      />
      {errors.email && (
        <p className="text-red-500">
          {errors.email.message}
        </p>
      )}
      <label htmlFor="password">Password</label>
      <input
        className={`border-2 ${
          errors.password
            ? "border-red-500 outline-red-500"
            : "border-slate-500 outline-slate-500"
        } rounded-md shadow-2xl`}
        {...register("password", {
          required: "Password is required.",
        })}
        placeholder="Password"
        type="password"
        id="password"
      />
      {errors.password && (
        <p className="text-red-500">
          {errors.password.message}
        </p>
      )}
      <Button disabled={isSubmitting} type="submit">
        Login
      </Button>
    </form>
  );
}
