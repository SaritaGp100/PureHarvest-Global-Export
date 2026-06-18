
export default function AboutPreview() {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-6 text-center">
        <span className="text-green-600 font-semibold uppercase tracking-wider">
          Pure Harvest Global Exports
        </span>

        <h2 className="text-4xl font-bold mt-3 mb-6">
          Your Trusted Export Sourcing Partner
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
          We help international buyers source high-quality products from trusted
          Indian manufacturers and suppliers. From supplier identification and
          quotation management to export documentation and logistics
          coordination, we provide end-to-end support for seamless global trade.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl mb-2">
              Trusted Suppliers
            </h3>
            <p className="text-gray-600">
              Access a reliable network of verified Indian manufacturers and
              producers.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl mb-2">
              Competitive Quotations
            </h3>
            <p className="text-gray-600">
              Receive customized export quotations tailored to your
              specifications and market requirements.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl mb-2">
              Global Export Support
            </h3>
            <p className="text-gray-600">
              We coordinate sourcing, documentation, packaging, and shipment
              delivery for international buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

