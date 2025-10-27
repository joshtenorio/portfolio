"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "front matter" },
    { href: "/projects", label: "projects" },
    { href: "/sitemap", label: "sitemap" },
  ];

  const isActive = (href: string) => {
    if (!isMounted) return false;
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="border-border bg-card w-full border-b">
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <Link href="/" className="hover:text-primary inline-block font-bold">
          jxorio.dev
        </Link>
        <ThemeToggle />
      </div>
      <div className="px-4 pb-4">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex-wrap gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "bg-card text-foreground hover:bg-foreground hover:text-background relative flex h-9 w-32 items-center justify-center border px-4 py-2 text-sm font-medium shadow-[2px_2px_0_0_rgba(0,0,0,0.1)] transition-none dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.15)]",
                      "focus:bg-card focus:text-foreground data-[active]:bg-card data-[active]:text-foreground data-[active]:hover:bg-foreground data-[active]:hover:text-background data-[active]:focus:bg-card",
                    )}
                  >
                    <span
                      className={`absolute left-2 size-1.5 rounded-full ${
                        isActive(item.href) ? "bg-red-600" : "bg-transparent"
                      }`}
                    />
                    <span>{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
