"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/report", label: "Report" },
  { href: "/community", label: "Community" },
  { href: "/profile", label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
                active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
