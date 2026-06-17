const steps = [
  "Buyer Inquiry",
  "Quotation",
  "Order Confirmation",
  "Procurement",
  "Quality Check",
  "Packaging",
  "Shipment",
];

export default function ExportProcessPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-5">

        <h1 className="text-5xl font-bold text-center mb-16">
          Export Process
        </h1>

        <div className="space-y-6">

          {steps.map((step, index) => (
            <div
              key={step}
              className="glass-card p-6 rounded-2xl flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}