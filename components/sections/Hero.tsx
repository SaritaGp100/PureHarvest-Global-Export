"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  PackageCheck,
  FileCheck2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 md:min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img_spices2.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/45" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-24 top-20 hidden h-96 w-96 rounded-full bg-amber-500/15 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-5 py-20 sm:px-6 md:min-h-screen md:py-24 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-300 backdrop-blur-md sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              India-Based Export & Sourcing
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Indian Spices &
              <span className="block text-amber-400">
                Agricultural Products
              </span>
              <span className="mt-2 block text-white">
                for Global Markets
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              Pure Harvest Global Exports connects international buyers with
              suitable Indian suppliers through organized sourcing,
              competitive procurement, documentation coordination, and export
              support.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/918369759857"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-950/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-xl sm:w-auto"
              >
                <span>Request Export Quotation</span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15 sm:w-auto"
              >
                <span>Explore Products</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust / Capability Strip */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                    <Globe2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Global Sourcing
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Connecting buyers with Indian suppliers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                    <PackageCheck size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Product-Focused
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Specifications and packaging aligned to requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                    <FileCheck2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Export Coordination
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Documentation and shipment support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — BUSINESS POSITIONING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-md">
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-amber-500/10 blur-2xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/65 p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Pure Harvest
                  </span>

                  <h2 className="mt-4 text-2xl font-bold leading-tight text-white">
                    Simplifying Indian sourcing for international buyers.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    From product requirements and supplier coordination to
                    documentation and shipment preparation, we help organize
                    the sourcing journey from India.
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-white">India</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                          Sourcing Base
                        </p>
                      </div>

                      <div className="h-10 w-px bg-white/10" />

                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">
                          Global
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                          Buyer Markets
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/export-process"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    <span>Explore Our Export Process</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Explore
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-amber-400/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}