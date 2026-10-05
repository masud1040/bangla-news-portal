import MainNews from "@/components/mainNews";
import MostRead from "@/components/most_read";
import NewscardOther from "@/components/newscardOther";
import { IMainNews } from "@/types/mainnews";
import React from "react";

const HomePage = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();

  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews: IMainNews[] = sections.slice(1);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
      {/* News Section */}
      <div className="col-span-1 p-4 md:col-span-2 md:p-10">
        <MainNews news={mainNews} />

        {/* Other News Section */}
        {otherNews.map((section) => (
          <div key={section.curationId}>
            <h2 className="border-b-2 border-red-800 py-2 text-xl font-bold leading-snug text-red-700 sm:text-2xl">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {section.articles.map((news) => (
                <NewscardOther
                  key={news.id}
                  news={news}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Most Read Section */}
      <div className="col-span-1 p-4 md:p-10">
        <MostRead />
      </div>
    </div>
  );
};

export default HomePage;