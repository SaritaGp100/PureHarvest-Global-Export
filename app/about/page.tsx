export default function AboutPage() {
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl">
          <span className="text-amber-600 font-semibold">
            About Us
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Your Reliable Sourcing & Export Partner From India
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Pure Harvest Global Exports is a Navi Mumbai based sourcing and export facilitation company.
            We connect international buyers with verified Indian suppliers of spices and agricultural commodities,
            ensuring reliable procurement, quality inspection, and smooth export coordination.
          </p>
        </div>

        {/* Core Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To simplify global sourcing of Indian agricultural products by connecting buyers with trusted suppliers,
              ensuring transparency, quality control, and efficient trade execution.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To become a globally trusted sourcing bridge between Indian producers and international markets,
              known for reliability, integrity, and efficient export coordination.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Global Buyers Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">Verified Supplier Network</h4>
              <p className="text-slate-600 text-sm">
                We source only from trusted and quality-verified Indian suppliers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">End-to-End Coordination</h4>
              <p className="text-slate-600 text-sm">
                From inquiry to shipment, we assist across the entire sourcing process.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">Transparent Communication</h4>
              <p className="text-slate-600 text-sm">
                Clear pricing discussions, documentation support, and timely updates.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}