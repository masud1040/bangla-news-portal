"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const SignIn = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-5 text-center text-3xl font-bold">
          অ্যাকাউন্ট লগইন করুন
        </h1>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-5">
            <legend className="fieldset-legend text-lg">
              সাইন ইন
            </legend>

            {/* Email */}
            <label className="label mt-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="আপনার ইমেইল লিখুন"
              required
            />

            {/* Password */}
            <label className="label mt-2">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
            />

            {/* Sign Up */}
            <button
              className="btn btn-neutral mt-5 w-full"
              type="submit"
            >
              সাইন ইন
            </button>

            {/* Login */}
            <p className="mt-4 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-red-700 hover:underline"
              >
               সাইন আপ করুন
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;