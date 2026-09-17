"use client";

import Link from "next/link";
import {
  X,
  ArrowUpRight,
  Home,
  Building2,
  Package,
  Workflow,
  Mail,
  MessageCircle,
} from "lucide-react";
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
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "About Us",
      href: "/about",
      icon: Building2,
    },
    {
      label: "Products",
      href: "/products",
      icon: Package,
    },
    {
      label: "Export Process",
      href: "/export-process",
      icon: Workflow,
    },
    {
      label: "Contact Us",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* MENU PANEL */}
      <div
        className="absolute right-0 top-0 flex h-full w-[360px] max-w-[88vw] flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                Navigation
              </p>

              <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-950">
                Pure Harvest
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Global Exports
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950"
            >
              <X size={21} />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-7"
          aria-label="Mobile navigation"
        >
          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              const isActive =
                pathname === link.href ||
                (link.href !== "/" &&
                  pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-slate-950"
                      }`}
                    >
                      <Icon size={17} />
                    </div>

                    <span className="text-sm font-semibold">
                      {link.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-950"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* DIVIDER */}
          <div className="my-8 border-t border-slate-200" />

          {/* CONTACT INFO */}
          <div className="px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Contact
            </p>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+918369759857"
                className="block text-sm text-slate-600 transition hover:text-slate-950"
              >
                +91 83697 59857
              </a>

              <a
                href="mailto:pureharvestglobalexports@gmail.com"
                className="block break-all text-sm text-slate-600 transition hover:text-slate-950"
              >
                pureharvestglobalexports@gmail.com
              </a>
            </div>
          </div>
        </nav>

        {/* BOTTOM CTA */}
        <div className="border-t border-slate-200 bg-slate-50 p-5">
          <a
            href="https://wa.me/918369759857"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-4 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:bg-amber-400 hover:shadow-md"
          >
            <MessageCircle size={18} />

            <span>Request Quote on WhatsApp</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
            Connect with our export team for product and sourcing enquiries.
          </p>
        </div>
      </div>
    </div>
  );
}