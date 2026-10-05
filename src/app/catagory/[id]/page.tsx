import NewscardOther from '@/components/newscardOther';
import { IMainNews } from '@/types/mainnews';
import React from 'react';

const CatagoryID =async({params}) => {

    const { id } =await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);

    const data= await res.json();
    const category = data.data;
  





    console.log(id);

  return (
    <div>
      <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
        {data.title}
      </h1>

      <div className="grid grid-cols-3 gap-10">
        {category.map((news) => (
          <NewscardOther key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CatagoryID;