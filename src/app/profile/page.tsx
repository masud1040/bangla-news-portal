"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const updateUser = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUser = Object.fromEntries(
      formData.entries()
    ) as {
      name: string;
      image: string;
    };

    const { data, error } = await authClient.updateUser({
      name: newUser.name,
      image: newUser.image,
    });

    if (error) {
      console.log(error);
      toast.error("প্রোফাইল আপডেট করা যায়নি");
      return;
    }

    if (data) {
      toast.success("প্রোফাইল আপডেট হয়েছে");
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>প্রথমে লগইন করুন</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        প্রোফাইল
      </h1>

      {/* Current User Info */}
      <div className="mb-6 rounded-lg border p-5">
        <div className="mb-4 flex justify-center">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        <p>
          <span className="font-semibold">Name:</span>{" "}
          {user.name}
        </p>

        <p className="mt-2">
          <span className="font-semibold">Email:</span>{" "}
          {user.email}
        </p>
        <button className=" items-center mt-2 btn btn-primary">লিখুন</button>
      </div>

      {/* Update Form */}
      <form
        onSubmit={updateUser}
        className="space-y-4 rounded-lg border p-5"
      >
        {/* Name */}
        <div>
          <label className="mb-1 block font-medium">
            নাম
          </label>

          <input
            type="text"
            name="name"
            defaultValue={user.name || ""}
            className="input w-full"
            placeholder="আপনার নাম"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="mb-1 block font-medium">
            ছবির লিংক
          </label>

          <input
            type="url"
            name="image"
            defaultValue={user.image || ""}
            className="input w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-red-700 text-white hover:bg-red-800"
        >
          প্রোফাইল আপডেট করুন
        </button>
      </form>
    </div>
  );
};

export default Profile;