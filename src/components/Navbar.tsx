"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import type { NavLink } from "@/types";
import useGetWidthUpdate from "@/hooks/getWidth/useGetWidthUpdate";

export default function Navbar() {
  const w = useGetWidthUpdate();
  console.log(w);

  const links: NavLink[] = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About Me",
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

  if (w < 600) return <div>hamburger</div>;

  return (
    <nav className="flex gap-2 items-center">
      {links.map((link) => {
        return (
          <p className="md:text-xl" key={link.url}>
            <Link href={link.url} className="whitespace-nowrap">
              <Button variant="outline" className="text-blue-700">
                {link.text}
              </Button>
            </Link>
          </p>
        );
      })}
    </nav>
  );
}
