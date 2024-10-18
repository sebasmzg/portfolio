"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  path: string;
  title: string;
}

export const NavLink = ({ path, title }: NavLinkProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`hover:text-green-700 ${
        currentPath === path ? "text-green-700" : "text-white"
      }`}
    >
      {title}
    </Link>
  );
};
