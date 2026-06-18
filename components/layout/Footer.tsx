"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/export-process", label: "Export Process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Pure Harvest Global Exports
            </h3>

            <p className="leading-relaxed">
                Your trusted partner for sourcing quality products
                from India and managing seamless international exports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition ${
                      isActive
                        ? "text-amber-400 font-semibold"
                        : "hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>

           <div className="space-y-4">
            <p className="flex items-center gap-2">
                <MapPin size={18} />
                Nerul, Navi Mumbai, India
            </p>

            <p>
                <a
                href="tel:+918369759857"
                className="hover:text-white flex items-center gap-2"
                >
                <Phone size={18} />
                +91 83697 59857
                </a>
            </p>

            <p>
                <a
                href="mailto:pureharvestglobalexports@gmail.com"
                className="hover:text-white flex items-center gap-2"
                >
                <Mail size={18} />
                pureharvestglobalexports@gmail.com
                </a>
            </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Pure Harvest Global Exports.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}