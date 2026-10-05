import { IMainNews } from '@/types/mainnews';
import Image from 'next/image';
import React from 'react';

const NewscardOther = ({ news }: { news:IMainNews }) => {
    // console.log(news);
    return (
        <div className="p-10">

           

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                      <figure>
                        <Image
                          src={news.imageUrl}
                          alt={news.title}
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
                          {news.title}
                        </h2>
            
                        <p className="text-sm leading-6 text-gray-600">
                          {news.description}    
                        </p>
            
                        <p className="mt-3 text-xs text-gray-500">
                          {news.firstPublished}
                        </p>
                      </div>
                    </div>
            
        </div>
    );
};

export default NewscardOther;