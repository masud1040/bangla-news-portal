import Image from "next/image";
import React from "react";
import Navlink from "./navlinks";
import Link from "next/link";
import UserInfo from "@/app/LSButton/UserInfo";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Top Header */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex min-h-[78px] items-center justify-between gap-4">
          {/* Logo & Brand */}
         <Link href="/">
          <div
           
           className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={48}
              height={48}
              priority
              className="h-12 w-12 shrink-0 object-contain"
            />

            <div className="min-w-0">
              <h1 className="font-serif text-xl font-bold tracking-tight text-red-700 sm:text-2xl">
                Bangla News 24
              </h1>

              <p className="mt-0.5 truncate text-[11px] text-gray-500 sm:text-xs">
                {date}
              </p>
            </div>
          </div>
         </Link>

          {/* Auth */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <UserInfo />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <Navlink />
        </div>
      </div>
    </header>
  );
};

export default Navbar;