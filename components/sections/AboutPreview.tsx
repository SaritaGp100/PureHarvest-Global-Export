import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Handshake,
  FileCheck2,
} from "lucide-react";

export default function AboutPreview() {
  const highlights = [
    {
      icon: Handshake,
      number: "01",
      title: "Strategic Sourcing",
      description:
        "We connect international buyers with suitable Indian suppliers based on product requirements, quantity, specifications, and commercial expectations.",
    },
    {
      icon: Globe2,
      number: "02",
      title: "Competitive Quotations",
      description:
        "We work to develop sourcing options and commercial quotations aligned with your product specifications and destination market.",
    },
    {
      icon: FileCheck2,
      number: "03",
      title: "Export Coordination",
      description:
        "We coordinate sourcing, documentation, packaging, and shipment requirements with relevant suppliers and logistics partners.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* INTRODUCTION */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Pure Harvest Global Exports
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Your Sourcing & Export Partner From India
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Pure Harvest Global Exports connects international buyers with
            suitable Indian suppliers of spices and agricultural products.
            We simplify the sourcing process through clear communication,
            competitive procurement, documentation coordination, and
            organized export support.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md md:p-8"
              >
                {/* ICON + NUMBER */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold tracking-[0.15em] text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-slate-50 p-7 md:mt-14 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
              Our Approach
            </span>

            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Making international sourcing simpler
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              From the initial buyer requirement to sourcing and shipment
              coordination, we focus on keeping each stage of the export
              process clear and organized.
            </p>
          </div>

          <Link
            href="/about"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-slate-950"
          >
            <span>Learn More About Us</span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}