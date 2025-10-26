"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "front matter" },
    { href: "/projects", label: "projects" },
    { href: "/sitemap", label: "sitemap" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="border-border bg-card w-full border-b">
      <div className="px-4 pt-4 pb-2">
        <Link href="/" className="inline-block font-bold hover:text-blue-600">
          jxorio.dev
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {navItems.map((item) => (
          <Button key={item.href} variant="paper" asChild className="w-32">
            <Link
              href={item.href}
              className="relative flex items-center justify-center"
            >
              <span
                className={`absolute left-2 size-1.5 rounded-full ${
                  isActive(item.href) ? "bg-red-600" : "bg-transparent"
                }`}
              />
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
