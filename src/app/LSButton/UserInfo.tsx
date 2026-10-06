"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const logout = async () => {
    await authClient.signOut();
    toast.success("লগআউট করা হয়েছে");
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          {/* Profile */}
          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-gray-100"
          >
            <div className="avatar avatar-online">
              <div className="w-10 rounded-full">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User"}
                  className="h-10 w-10 object-cover"
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800">
                {user.name}
              </p>

              <p className="text-xs text-gray-500">
                প্রোফাইল
              </p>
            </div>
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={logout}
            className="px-3 py-2 text-sm font-medium text-gray-700 transition hover:text-red-700"
          >
            লগআউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sign In */}
          <Link
            href="/sign-in"
            className="px-3 py-2 text-sm font-medium text-gray-700 transition hover:text-red-700 sm:px-4"
          >
            সাইন ইন
          </Link>

          {/* Sign Up */}
          <Link
            href="/sign-up"
            className="bg-red-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-800 sm:px-4"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;