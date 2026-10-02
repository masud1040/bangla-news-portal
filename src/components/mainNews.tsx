import { IMainNews } from "@/types/mainnews";
import Image from "next/image";
import React from "react";

const MainNews = ({ news }: { news:IMainNews[] }) => {
  const firstNews:IMainNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div className="mx-auto mt-6 max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Main News */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <figure>
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.title}
              width={640}
              height={480}
              className="h-56 w-full object-cover sm:h-64"
            />
          </figure>

          <div className="p-4">
            <p className="mb-2 text-sm font-medium text-red-600">
              প্রধান খবর
            </p>

            <h2 className="mb-2 text-xl font-bold leading-snug text-red-700 sm:text-2xl">
              {firstNews.title}
            </h2>

            <p className="text-sm leading-6 text-gray-600">
              {firstNews.description}
            </p>

            <p className="mt-3 text-xs text-gray-500">
              {firstNews.firstPublished}
            </p>
          </div>
        </div>

        {/* Other News */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          {otherNews.map((news) => (
            <div
              key={news.id}
              className="border-b border-gray-200 p-4 last:border-b-0"
            >
              <p className="mb-2 text-xs font-medium text-red-600">
                প্রধান খবর
              </p>

              <h3 className="text-base font-semibold leading-6 text-gray-800">
                {news.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;