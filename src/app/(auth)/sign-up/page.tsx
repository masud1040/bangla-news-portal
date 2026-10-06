"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUP = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image || undefined,
      callbackURL: "/",
    });

    if (error) {
      console.log("Signup error:", error);
      toast.error("সাইন আপ করতে সমস্যা হয়েছে");
      return;
    }

    if (data) {
      toast.success("সাইন আপ করা হয়েছে");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log("Google login:", data);
    console.log("Google error:", error);

    if (error) {
      toast.error("Google দিয়ে সাইন ইন করা যায়নি");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-5 text-center text-3xl font-bold">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-5">
            <legend className="fieldset-legend text-lg">
              সাইন আপ
            </legend>

            {/* Name */}
            <label className="label">নাম</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="আপনার নাম লিখুন"
              required
            />

            {/* Image */}
            <label className="label mt-2">ছবির লিংক</label>
            <input
              type="url"
              name="image"
              className="input w-full"
              placeholder="আপনার ছবি লিংক লিখুন"
            />

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
              type="submit"
              className="btn btn-neutral mt-5 w-full"
            >
              সাইন আপ
            </button>

            {/* Login */}
            <p className="mt-4 text-center text-sm text-gray-600">
              আগে থেকেই অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/login"
                className="font-medium text-red-700 hover:underline"
              >
                লগইন করুন
              </Link>
            </p>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn mt-3 w-full border-[#e5e5e5] bg-white text-black"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff" />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </g>
              </svg>

              Google দিয়ে সাইন ইন
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUP;