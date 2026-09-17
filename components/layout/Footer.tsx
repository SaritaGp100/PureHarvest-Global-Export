"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/export-process", label: "Export Process" },
    { href: "/contact", label: "Contact Us" },
  ];

  const address =
    "Innov8 Q Parc, Plot No. GEN-4/1, Floor 13, Building Q2, GA Thane, Thane, Mumbai – 400701, Maharashtra, India";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Innov8+Q+Parc+Plot+No+GEN-4%2F1+Floor+13+Building+Q2+GA+Thane+Mumbai+400701";

  return (
    <footer className="overflow-hidden bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-16">

          {/* Company */}
          <div className="min-w-0">
            <Link href="/" className="group inline-block">
              <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-amber-400 sm:text-2xl">
                Pure Harvest
                <span className="text-amber-400"> Global Exports</span>
              </h3>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:mt-5 sm:leading-7">
              Connecting international buyers with trusted Indian suppliers
              through reliable sourcing, quality-focused products, and
              professional export solutions.
            </p>

            {/* Company Highlights */}
            <div className="mt-5 max-w-sm text-[10px] uppercase leading-6 tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.15em]">
              Global Sourcing
              <span className="mx-2">•</span>
              Export Solutions
              <span className="mx-2">•</span>
              India
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left md:text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3 md:items-center">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center gap-2 text-sm transition ${
                      isActive
                        ? "font-medium text-amber-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Office Address */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-start gap-3 text-sm leading-6 transition hover:text-white"
              >
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <span className="min-w-0 break-words">
                  <span className="mb-1 block font-medium text-slate-300">
                    Office Address
                  </span>

                  <span className="block text-slate-400 group-hover:text-slate-300">
                    {address}
                  </span>

                  <span className="mt-1 block text-xs text-amber-400 transition sm:opacity-0 sm:group-hover:opacity-100">
                    View on Google Maps →
                  </span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918369759857"
                className="group flex items-center gap-3 text-sm transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-amber-400"
                />

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">
                    Phone
                  </span>

                  <span className="block text-slate-300 group-hover:text-white">
                    +91 83697 59857
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:pureharvestglobalexports@gmail.com"
                className="group flex min-w-0 items-start gap-3 text-sm transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">
                    Email
                  </span>

                  <span className="block break-all text-slate-300 group-hover:text-white sm:break-words">
                    pureharvestglobalexports@gmail.com
                  </span>
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-slate-800 py-5 text-center text-xs text-slate-500 sm:py-6 md:flex-row md:items-center md:justify-between md:text-left">

          <p className="leading-5">
            © {new Date().getFullYear()} Pure Harvest Global Exports.
            <span className="sm:inline"> All Rights Reserved.</span>
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-5 md:justify-end">
            <span>India</span>

            <span className="text-slate-700">|</span>

            <span>Global Trade</span>
          </div>

        </div>
      </div>
    </footer>
  );
}