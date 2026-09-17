import {
  Network,
  BadgeIndianRupee,
  ShieldCheck,
  Boxes,
  SlidersHorizontal,
  Globe2,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Network,
      number: "01",
      title: "Supplier Network",
      description:
        "We connect buyers with suitable Indian suppliers based on product requirements, specifications, quantity, and commercial expectations.",
    },
    {
      icon: BadgeIndianRupee,
      number: "02",
      title: "Competitive Procurement",
      description:
        "We explore sourcing options and work with suppliers to develop commercial quotations aligned with buyer requirements.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Quality-Focused Sourcing",
      description:
        "We coordinate product specifications and quality requirements with relevant suppliers before the order and shipment stages.",
    },
    {
      icon: Boxes,
      number: "04",
      title: "Export Coordination",
      description:
        "We help coordinate packaging, documentation, logistics, and shipment requirements with the relevant suppliers and logistics partners.",
    },
    {
      icon: SlidersHorizontal,
      number: "05",
      title: "Customized Requirements",
      description:
        "Product grade, quantity, packaging, specifications, documentation, and destination requirements can be discussed according to each enquiry.",
    },
    {
      icon: Globe2,
      number: "06",
      title: "India-to-Global Sourcing",
      description:
        "We help international buyers explore Indian sourcing opportunities across spices and selected agricultural products.",
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Why Pure Harvest
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            A Practical Approach to
            <span className="block text-slate-700">
              International Sourcing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            We focus on making the sourcing process from India clear and
            organized, helping international buyers coordinate products,
            suppliers, commercial requirements, documentation, and shipment
            needs.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md md:p-8"
              >
                {/* TOP ROW */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold tracking-[0.15em] text-slate-300">
                    {reason.number}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>

                {/* ACCENT */}
                <div className="mt-6 h-px w-10 bg-amber-500 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-12 rounded-3xl bg-slate-950 px-7 py-10 md:mt-14 md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                Our Commitment
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Clear communication. Organized sourcing. Professional
                coordination.
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                Every export enquiry is approached around the buyer&apos;s
                specific product, quantity, specifications, packaging, and
                destination requirements.
              </p>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                <Globe2 size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  India-Based
                </p>
                <p className="text-xs text-slate-400">
                  Global Sourcing Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}