"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">

      <div
        className="
        absolute
        right-0
        top-0
        h-full
        w-72
        bg-white
        p-6
        "
      >
        <button
          onClick={onClose}
          className="mb-8 text-lg"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6">

          <Link href="/" onClick={onClose}>
            Home
          </Link>

          <Link href="/about" onClick={onClose}>
            About
          </Link>

          <Link href="/products" onClick={onClose}>
            Products
          </Link>

          <Link href="/export-process" onClick={onClose}>
            Export Process
          </Link>

          <Link href="/contact" onClick={onClose}>
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
}