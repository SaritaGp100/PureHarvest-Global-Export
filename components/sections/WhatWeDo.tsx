import {
  Handshake,
  Search,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function WhatWeDo() {
  const services = [
    {
      icon: Search,
      number: "01",
      title: "Product Sourcing",
      description:
        "We explore suitable Indian suppliers based on your product specifications, quantity, packaging, and destination-market requirements.",
    },
    {
      icon: Handshake,
      number: "02",
      title: "Supplier Coordination",
      description:
        "We coordinate with relevant suppliers to discuss availability, specifications, pricing, packaging, and commercial requirements.",
    },
    {
      icon: FileCheck2,
      number: "03",
      title: "Export Coordination",
      description:
        "We help organize documentation, packaging, logistics, and shipment requirements with the relevant suppliers and logistics partners.",
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Connecting Global Buyers with
            <span className="block text-slate-700">
              Indian Sourcing Opportunities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Pure Harvest Global Exports helps international buyers source
            spices and agricultural products from India through organized
            supplier coordination, competitive procurement, documentation
            support, and export coordination.
          </p>
        </div>

        {/* SERVICES */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold tracking-[0.15em] text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-10 bg-amber-500 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM APPROACH BAR */}
        <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-slate-50 p-7 md:mt-14 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
              Our Approach
            </span>

            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Making Indian sourcing simpler
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              From the initial product requirement to sourcing and shipment
              coordination, we focus on keeping communication clear and the
              export process organized.
            </p>
          </div>

          <Link
            href="/export-process"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-slate-950"
          >
            <span>See How We Work</span>

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