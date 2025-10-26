import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const navItems = [
    { href: "/", label: "front matter" },
    { href: "/projects", label: "projects" },
    { href: "/sitemap", label: "sitemap" },
  ];

  return (
    <nav className="w-full border-b border-border bg-card">
      <div className="flex flex-wrap gap-2 p-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="paper"
            asChild
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
