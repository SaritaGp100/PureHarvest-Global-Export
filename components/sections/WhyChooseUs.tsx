
export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trusted Supplier Network",
      description:
        "We partner with reliable manufacturers and processors across India to source premium-quality products.",
    },
    {
      title: "Competitive Export Pricing",
      description:
        "By sourcing directly from trusted suppliers, we provide competitive quotations tailored to buyer requirements.",
    },
    {
      title: "Quality Assurance",
      description:
        "We coordinate with suppliers to ensure products meet international quality standards and buyer specifications.",
    },
    {
      title: "End-to-End Export Support",
      description:
        "From sourcing and packaging to documentation and shipping, we manage the complete export process.",
    },
    {
      title: "Customized Solutions",
      description:
        "Every buyer has unique requirements. We provide customized sourcing, packaging, and logistics solutions.",
    },
    {
      title: "Global Market Expertise",
      description:
        "We help international buyers connect with trusted Indian suppliers for smooth and reliable trade.",
    },
  ];

  return (
    <section className="py-15 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Pure Harvest Global Exports?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between global buyers and trusted Indian
            manufacturers, providing reliable sourcing, competitive pricing,
            and seamless export solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

