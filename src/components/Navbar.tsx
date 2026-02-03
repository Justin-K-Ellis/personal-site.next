"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

import type { NavLink } from "@/types";
import useGetWidthUpdate from "@/hooks/getWidth/useGetWidthUpdate";

export default function Navbar() {
  const width = useGetWidthUpdate();

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

  if (width < 600)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          {links.map((link) => (
            <DropdownMenuItem key={link.url}>
              <Link href={link.url}>{link.text}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );

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
