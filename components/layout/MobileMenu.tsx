"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Export Process", href: "/export-process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl p-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">

          <div>
            <h2 className="font-bold text-lg text-slate-900">
              Menu
            </h2>

            <p className="text-sm text-slate-500">
              Pure Harvest Global Exports
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col gap-3">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`
                px-4 py-3 rounded-xl transition-all
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

        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8">

          <a
            href="https://wa.me/918369759857"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              w-full
              rounded-xl
              bg-green-800
              px-5
              py-4
              text-white
              font-semibold
              transition
              hover:bg-green-700
            "
          >
            Request Quote
          </a>

        </div>

      </div>
    </div>
  );
}