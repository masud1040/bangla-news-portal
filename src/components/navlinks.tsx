import { ICategory } from "@/types/catagory";
import Link from "next/link";

const Navlink = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navs: ICategory[] = data.data;

  const filterNavs = navs.filter((nav) => nav.scrapable);

  return (
    <nav className="overflow-x-auto">
      <ul className="flex min-w-max items-center justify-center gap-1">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="block border-b-2 border-red-700 px-3 py-3 text-sm font-semibold text-red-700"
          >
            হোম
          </Link>
        </li>

        {/* Dynamic Categories */}
        {filterNavs.map((nav) => (
          <li key={nav.slug}>
            <Link
              href={nav.slug}
              className="block border-b-2 border-transparent px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-red-700 hover:text-red-700"
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlink;