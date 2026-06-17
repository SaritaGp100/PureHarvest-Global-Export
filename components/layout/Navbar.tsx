"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Export Process", href: "/export-process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/pureHarvest_logo.png"
                alt="Pure Harvest Global Exports"
                width={50}
                height={50}
                priority
              />

              <div>
                <h1 className="font-bold text-lg text-slate-900">
                  Pure Harvest
                </h1>

                <p className="text-xs text-slate-500">
                  Global Exports
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${
                      pathname === link.href
                        ? "bg-green-100 text-green-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}

            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              <a
                href="https://wa.me/918369759857"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden md:inline-flex
                  px-5 py-3
                  rounded-xl
                  bg-green-800
                  text-white
                  font-medium
                  transition
                  hover:bg-green-700
                "
              >
                Request Quote
              </a>

              {/* Mobile Menu Button */}
              <button
                className="
                  lg:hidden
                  h-11
                  w-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  hover:bg-slate-100
                  transition
                "
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}