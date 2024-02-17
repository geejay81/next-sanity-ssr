import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function NavBar() {

    const pages = await getPages();

    return (
        <nav className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-blue-300 to-fuchsia-400
            bg-clip-text text-transparent text-lg font-bold">Greg</Link>

            <div className="flex items-center gap-5 text-sm text-gray-200">
              {pages.map(page => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline focus:border-yellow-200">
                  {page.title}
                </Link>
              ))}
            </div>
        </nav>
    )
}