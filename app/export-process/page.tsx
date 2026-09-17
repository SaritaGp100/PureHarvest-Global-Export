const steps = [
  {
    number: "01",
    title: "Buyer Inquiry",
    desc: "The buyer shares the required product, quantity, specifications, packaging preferences, and destination country.",
  },
  {
    number: "02",
    title: "Requirement Analysis",
    desc: "We review the requirement and assess suitable sourcing options, supplier availability, pricing, and export feasibility.",
  },
  {
    number: "03",
    title: "Quotation & Negotiation",
    desc: "We prepare a commercial quotation based on product specifications, quantity, sourcing costs, and applicable logistics.",
  },
  {
    number: "04",
    title: "Order Confirmation",
    desc: "Product specifications, pricing, payment terms, packaging, delivery terms, and documentation requirements are finalized.",
  },
  {
    number: "05",
    title: "Sourcing & Procurement",
    desc: "The required products are sourced from suitable Indian suppliers according to the agreed specifications.",
  },
  {
    number: "06",
    title: "Quality & Documentation",
    desc: "Product quality and required documentation are coordinated according to the buyer's requirements and applicable export standards.",
  },
  {
    number: "07",
    title: "Packaging & Preparation",
    desc: "Goods are prepared and packed according to agreed packaging, labeling, and shipment requirements.",
  },
  {
    number: "08",
    title: "Logistics & Shipment",
    desc: "Shipment coordination is handled with relevant logistics and freight partners, along with the required export documentation.",
  },
];

export default function ExportProcessPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              How We Work
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-950">
              Our Export Process
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl leading-8 text-slate-600">
              A structured sourcing and export workflow designed to make
              international procurement from India clear, organized, and
              efficient.
            </p>

          </div>

        </div>
      </section>


      {/* Process Section */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="space-y-5">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex gap-5 md:gap-7 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                {/* Step Number */}
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm md:text-base font-bold text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                  {step.number}
                </div>


                {/* Step Content */}
                <div className="pt-1">

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Step {index + 1}
                  </span>

                  <h2 className="mt-1 text-xl md:text-2xl font-bold text-slate-950">
                    {step.title}
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm md:text-base leading-7 text-slate-600">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Buyer Information */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2">

            {/* What We Need */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                To Get Started
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-950">
                Share Your Requirement
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                To help us prepare a suitable sourcing proposal, buyers can
                provide the following information:
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="text-amber-600">✓</span>
                  Product name and specifications
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-600">✓</span>
                  Required quantity
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-600">✓</span>
                  Packaging requirements
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-600">✓</span>
                  Destination country and port
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-600">✓</span>
                  Required certifications or documentation
                </li>
              </ul>

            </div>


            {/* Our Approach */}
            <div className="rounded-3xl bg-slate-950 p-8 md:p-10 text-white">

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Clear Communication at Every Stage
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                We coordinate with buyers, suppliers, and logistics partners
                throughout the order process to keep commercial and shipment
                requirements clearly communicated.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-slate-800 p-5">
                  <p className="text-2xl font-bold text-amber-400">
                    01
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Transparent Discussions
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 p-5">
                  <p className="text-2xl font-bold text-amber-400">
                    02
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Organized Coordination
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Start Your Inquiry
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-950">
            Ready to source from India?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Send us your product requirements and let us explore suitable
            sourcing and export options for your business.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            Send an Enquiry
          </a>

        </div>
      </section>

    </main>
  );
}