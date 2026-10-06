import Link from "next/link";
import React from "react";
import Navlink from "./navlinks";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-xl font-bold text-red-700">
              Bangla News 24
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-600">
              দেশ ও বিশ্বের সর্বশেষ খবর, রাজনীতি, অর্থনীতি, খেলা,
              প্রযুক্তি ও অন্যান্য গুরুত্বপূর্ণ সংবাদ একসাথে।
            </p>
          </div>

          {/* Quick Links */}
          {
            <div className="grid gap-8 md:grid-cols-3">
              <Navlink></Navlink>
              </div>
          }

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-800">
              যোগাযোগ
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <p>ইমেইল: info@banglanews24.com</p>
              <p>ফোন: +880 1234-567890</p>
              <p>ঢাকা, বাংলাদেশ</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;