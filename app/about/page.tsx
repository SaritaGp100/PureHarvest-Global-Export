export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-4xl">
          <span className="text-green-700 font-semibold">
            About Us
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Your Trusted Export Partner From India
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Pure Harvest Global Exports is a Navi Mumbai based export
            company specializing in premium Indian spices and agricultural
            products for international buyers.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600">
              To deliver high-quality Indian agricultural products
              to global markets with consistency, transparency,
              and reliability.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-slate-600">
              To become a globally trusted sourcing partner
              for premium Indian products.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}