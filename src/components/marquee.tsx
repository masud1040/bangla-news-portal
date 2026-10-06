import { IMainNews } from "@/types/mainnews";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();
  const headlines: IMainNews[] = data.data;

  return (
    <div className="bg-red-600 text-white">
      <div className="container mx-auto flex">
        <div className="bg-red-800 px-3 py-1 font-bold">
          সর্বশেষ
        </div>

        <MarqueeText
          className="py-1"
          direction="right"
          duration={10}
          pauseOnHover
        >
          {headlines.map((item) => (
            <span key={item.id}>
              {item.title}
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;