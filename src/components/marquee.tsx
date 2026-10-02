
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/index.css";
import React from "react";


const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();
  const hedline = data.data;

  console.log(data);

  return (
    <div>
      {hedline.map((item, index) => (
        <span key={index}>
          <span>
            {item.title} <span className="mx-5">•</span>
          </span>
        </span>
      ))}
    </div>
  );
};

export default Marquee;