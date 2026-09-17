
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Flame,
  CircleDot,
} from "lucide-react";

export default function FeaturedProducts() {
  const productCategories = [
    {
      icon: Leaf,
      number: "01",
      title: "Turmeric & Cumin",
      description:
        "Indian turmeric and cumin sourced according to buyer requirements, including product form, grade, quantity, packaging, and quality specifications.",
    },
    {
      icon: Flame,
      number: "02",
      title: "Red Chilli & Coriander",
      description:
        "Red chilli and coriander sourced from suitable Indian suppliers based on required specifications, quantity, packaging, and destination-market requirements.",
    },
    {
      icon: CircleDot,
      number: "03",
      title: "Black Pepper & Cardamom",
      description:
        "Black pepper and cardamom sourced for international buyers with requirements discussed around grade, quality, quantity, packaging, and documentation.",
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our Product Range
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Indian Spices We Source & Export
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            We source a range of Indian spices through suitable suppliers and
            coordinate export orders according to buyer requirements,
            specifications, quantities, packaging, and destination markets.
          </p>

        </div>


        {/* PRODUCT CATEGORIES */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">

          {productCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md md:p-8"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold tracking-[0.15em] text-slate-300">
                    {category.number}
                  </span>

                </div>


                {/* CONTENT */}
                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>


                {/* SMALL ACCENT */}
                <div className="mt-6 h-px w-10 bg-amber-500 transition-all duration-300 group-hover:w-16" />

              </div>
            );
          })}

        </div>


        {/* PRODUCT LIST */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">

          {[
            "Turmeric",
            "Red Chilli",
            "Coriander",
            "Cumin",
            "Black Pepper",
            "Cardamom",
          ].map((spice) => (
            <span
              key={spice}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm"
            >
              {spice}
            </span>
          ))}

        </div>


        {/* BOTTOM CTA */}
        <div className="mt-12 text-center md:mt-14">

          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-slate-950"
          >
            <span>Explore Our Spices</span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-4 text-xs text-slate-400">
            Product availability, specifications, packaging, quantities, and
            documentation are discussed according to buyer requirements.
          </p>

        </div>

      </div>
    </section>
  );
}

