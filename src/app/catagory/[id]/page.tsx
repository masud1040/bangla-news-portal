import NotFound from "@/app/not-found";
import NewscardOther from "@/components/newscardOther";
import { IMainNews } from "@/types/mainnews";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CatagoryID = async ({ params }: Props) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`
  );

  const data = await res.json();
  const category = data.data;

  if (!category || category.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
      <h1 className="mb-5 border-b-2 border-red-700 pb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        {data.title || id}
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {category.map((news: IMainNews) => (
          <NewscardOther key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CatagoryID;