export default function RequestQuoteCTA() {
  return (
    <section className="py-15 bg-green-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Looking for a Reliable Export Partner?
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Share your product requirements and receive a customized export
          quotation tailored to your needs.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold"
        >
          Request a Quotation
        </a>
      </div>
    </section>
  );
}