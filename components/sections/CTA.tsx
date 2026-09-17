import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function RequestQuoteCTA() {
  return (
    <section className="bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-12 text-center md:px-12 md:py-16">
          {/* Subtle Decorative Element */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            {/* LABEL */}
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Start Your Export Enquiry
            </span>

            {/* HEADING */}
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Looking for Indian Products?
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Share your product requirements, quantity, specifications, and
              destination market with us. We&apos;ll explore suitable sourcing
              and export options for your business.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* PRIMARY */}
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-lg sm:w-auto"
              >
                <span>Request a Quotation</span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918369759857"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-700 sm:w-auto"
              >
                <MessageCircle
                  size={17}
                  className="text-amber-400"
                />

                <span>Chat on WhatsApp</span>

                <ArrowRight
                  size={16}
                  className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </div>

            {/* SMALL TRUST LINE */}
            <p className="mt-6 text-xs tracking-wide text-slate-500">
              Spices • Agricultural Products • Global Export Coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}