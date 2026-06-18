const steps = [
  {
    title: "Buyer Inquiry",
    desc: "Buyer shares product requirement, quantity, and destination country.",
  },
  {
    title: "Requirement Analysis",
    desc: "We analyze sourcing feasibility, pricing range, and supplier availability.",
  },
  {
    title: "Quotation & Negotiation",
    desc: "We provide competitive export quotations based on market and logistics.",
  },
  {
    title: "Order Confirmation",
    desc: "Final terms are confirmed between buyer and supplier with documentation.",
  },
  {
    title: "Sourcing & Procurement",
    desc: "Products are sourced from verified Indian suppliers and manufacturers.",
  },
  {
    title: "Quality Inspection",
    desc: "Quality checks are performed as per buyer specifications and export standards.",
  },
  {
    title: "Packaging & Compliance",
    desc: "Goods are packed as per export requirements with necessary labeling.",
  },
  {
    title: "Logistics & Shipment",
    desc: "Shipment is arranged via sea or air freight with complete documentation support.",
  },
];

export default function ExportProcessPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-5">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Export Process
        </h1>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          A transparent step-by-step sourcing and export workflow designed for international buyers
          to ensure smooth procurement from India.
        </p>

        <div className="space-y-6">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass-card p-6 rounded-2xl flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-slate-600 mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}