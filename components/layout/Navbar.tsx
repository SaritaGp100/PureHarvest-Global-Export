"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
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

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-green-700 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-green-700 transition">
              About
            </Link>

            <Link href="/products" className="hover:text-green-700 transition">
              Products
            </Link>

            <Link
              href="/export-process"
              className="hover:text-green-700 transition"
            >
              Export Process
            </Link>

            <Link href="/contact" className="hover:text-green-700 transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/918369759857"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-5 py-3 rounded-xl bg-green-800 text-white font-medium hover:bg-green-700 transition"
            >
              Request Quote
            </a>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden">
              <Menu size={26} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}