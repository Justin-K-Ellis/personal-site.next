import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import type { NavLink } from "@/types";

export default function Navbar() {
  const links: NavLink[] = [
    // {
    //   text: "Home",
    //   url: "/",
    // },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Contact",
      url: "/contact",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ];

  return (
    <nav className="p-3 md:p-6 flex justify-between items-center mb-6 shadow">
      <h1 className="md:text-3xl text-2xl font-bold">
        <Link href="/">Justin Klitgaard</Link>
      </h1>
      <div className="flex gap-2 items-center">
        {links.map((link) => {
          return (
            <p className="md:text-xl" key={link.url}>
              <Link href={link.url} className="whitespace-nowrap">
                <Button variant="outline">{link.text}</Button>
              </Link>
            </p>
          );
        })}
      </div>
    </nav>
  );
}
