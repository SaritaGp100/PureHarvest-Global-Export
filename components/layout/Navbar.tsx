"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Export Process", href: "/export-process" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between">
            {/* LOGO */}
           {/* LOGO */}
<Link
  href="/"
  className="group flex items-center gap-3"
  aria-label="Pure Harvest Global Exports - Home"
>
  <div className="relative h-16 w-16 shrink-0">
    <Image
      src="/images/pureHarvest_logo.png"
      alt="Pure Harvest Global Exports"
      width={80}
      height={80}
      priority
      className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="leading-none">
    <div className="text-[17px] font-bold tracking-tight text-slate-950">
      Pure Harvest
    </div>

    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
      Global Exports
    </div>
  </div>
</Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-full px-4 py-2.5 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-slate-950 font-semibold text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* REQUEST QUOTE */}
              <a
                href="https://wa.me/918369759857"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:bg-amber-400 hover:shadow-md md:inline-flex"
              >
                <span>Request Quote</span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={23} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}