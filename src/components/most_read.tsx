import { IMainNews } from "@/types/mainnews";
import Link from "next/link";
import React from "react";

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();

  const most:IMainNews[] = data.data;

  // console.log("most read", most);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-3 border-b border-gray-200 pb-3 text-lg font-bold text-gray-800">
        সর্বাধিক পঠিত
      </h2>

      <div>
        {most.map((item: IMainNews, index: number) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="flex gap-3 border-b border-gray-100 py-3 last:border-b-0"
          >
            {/* Number */}
            <span className="w-5 shrink-0 text-xl font-normal text-red-600">
              {index + 1}
            </span>

            {/* Title */}
            <p className="text-sm font-medium leading-6 text-gray-800 transition-colors hover:text-red-700">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;