import NotFound from "@/app/not-found";
import NewscardOther from "@/components/newscardOther";
import React from "react";

const CatagoryID = async ({ params }) => {
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
      {/* Title */}
      <h1 className="mb-5 border-b-2 border-red-700 pb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        {data.title || id}
      </h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {category.map((news) => (
          <NewscardOther key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CatagoryID;