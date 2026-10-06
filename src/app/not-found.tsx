import Image from "next/image";
import Link from "next/link";


const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        
        {/* Image */}
        <div className="flex justify-center">
          {/* <Image
            src={notFoundImage}
            alt="News not found"
            width={600}
            height={600}
            className="w-full max-w-md object-contain"
          /> */}
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            সংবাদ খুঁজে পাওয়া যায়নি
          </p>

          <h1 className="mt-3 text-7xl font-black text-gray-900">
            404
          </h1>

          <h2 className="mt-2 text-2xl font-bold uppercase text-gray-900">
            PAGE NOT FOUND
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 md:mx-0">
            দুঃখিত, আপনি যে সংবাদ বা পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
            সংবাদটি হয়তো সরিয়ে নেওয়া হয়েছে অথবা লিংকটি সঠিক নয়।
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-red-600 px-6 text-white hover:bg-red-700"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;