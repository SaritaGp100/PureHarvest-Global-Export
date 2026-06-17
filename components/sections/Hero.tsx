"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  className="
  relative
  min-h-[90vh]
  md:min-h-screen
  flex
  items-center
  overflow-hidden
"
>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img_spices2.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gold Glow */}
      <div
  className="
  hidden
  lg:block
  absolute
  top-20
  right-20
  w-72
  h-72
  bg-amber-500/20
  blur-3xl
  rounded-full
  "
/>

      <div className="
relative
z-10
max-w-7xl
mx-auto
px-5
sm:px-6
lg:px-8
py-20
md:py-24
w-full
">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white mb-6 backdrop-blur-md">
            Trusted Export Partner From India
          </div>

          {/* Heading */}

          <h1 className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-bold
leading-tight
text-white
">
            Premium Indian
            <span className="block text-amber-400">
              Spices & Agricultural Products
            </span>
          </h1>

          {/* Description */}

          <p
  className="
  mt-6
  text-base
  sm:text-lg
  md:text-xl
  text-slate-300
  max-w-xl
  leading-relaxed
"
>
            Pure Harvest Global Exports delivers premium-quality Indian
            spices and agricultural products to international buyers
            with reliable sourcing, quality assurance, and global logistics.
          </p>

          {/* CTA Buttons */}

          <div
  className="
  mt-10
  flex
  flex-col
  sm:flex-row
  gap-4
  w-full
  sm:w-auto
"
>

            <a
  href="/products"
  className="
  inline-flex
  justify-center
  items-center
  w-full
  sm:w-auto
  rounded-xl
  bg-amber-500
  px-8
  py-4
  font-semibold
  text-black
  transition
  hover:scale-105
  "
>
  Explore Products
</a>

            <a
              href="https://wa.me/918369759857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Request Quote
            </a>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-slate-400 text-sm">
                Quality Checked
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-slate-400 text-sm">
                Buyer Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Global</h3>
              <p className="text-slate-400 text-sm">
                Shipping
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Export</h3>
              <p className="text-slate-400 text-sm">
                Ready Packaging
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}