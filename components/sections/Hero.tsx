"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img_spices2.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Ambient Glow */}
      <div className="hidden lg:block absolute top-20 right-20 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-24 w-full">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white mb-6 backdrop-blur-md">
            India-Based Sourcing & Export Facilitation Company
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Premium Indian
            <span className="block text-amber-400">
              Spices & Agro Commodities
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            We connect international buyers with verified Indian suppliers,
            offering end-to-end sourcing, quality inspection, and export logistics
            for spices and agricultural products.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            {/* Primary CTA (Quote) */}
            <a
              href="https://wa.me/918369759857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-full sm:w-auto rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get Export Quotation
            </a>

            {/* Secondary CTA */}
            <a
              href="/products"
              className="inline-flex justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              View Products
            </a>

          </div>

          {/* Stats (more realistic for export business) */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-white">Verified</h3>
              <p className="text-slate-400 text-sm">Supplier Network</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Global</h3>
              <p className="text-slate-400 text-sm">Buyer Reach</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">QC</h3>
              <p className="text-slate-400 text-sm">Inspection Support</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Export</h3>
              <p className="text-slate-400 text-sm">Documentation Support</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}