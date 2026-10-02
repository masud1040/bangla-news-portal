import MainNews from "@/components/mainNews";
import NewscardOther from "@/components/newscardOther";
import React from "react";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews = sections.slice(1);
  console.log(otherNews);

  return (
    <div className=" container mx-auto grid grid-cols-3">
      {/*news section<*/}

      <div className="  col-span-2 p-10">
        <MainNews news={mainNews}></MainNews>

        {/*Other news section<*/}
        {otherNews.map((section) => (
          <div key={section.curationId}>
            <h2 className="py-2 text-xl font-bold leading-snug text-red-700 sm:text-2xl border-b-2 border-red-800">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                 {
                section.articles.map((news) => (
                  <NewscardOther key={news.id} news={news}></NewscardOther>
                ))

            }
            </div>
           
            
          </div>
        ))}

      </div>

      {/*Most Read section<*/}
      <div className="bg-red-500 col-span-1 p-10"></div>
    </div>
  );
};

export default HomePage;
