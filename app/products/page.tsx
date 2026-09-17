import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Our Products
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Indian Spices for International Buyers
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              We source Indian spices according to buyer requirements,
              working with suitable suppliers to meet product specifications,
              quantity, packaging, and export requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Product Range
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
                Explore Our Spices
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 md:text-right">
              Specifications, availability, packaging, MOQ, and pricing can
              be discussed according to your product and destination
              requirements.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                origin={product.origin}
                image={product.image || "/images/img_spices1.jpg"}
              />
            ))}
          </div>

        </div>
      </section>

      {/* How We Source */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              How We Work
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Sourcing Based on Your Requirements
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              As a merchant exporter, we work with suitable Indian suppliers
              based on the product, quantity, specifications, packaging, and
              destination requirements shared by the buyer.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Buyer Requirements */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">01</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Buyer Requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share your required product, quantity, specifications,
                packaging, and destination country with us.
              </p>
            </div>

            {/* Supplier Sourcing */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">02</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Supplier Sourcing
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We identify suitable Indian suppliers and discuss product
                specifications, packaging, availability, and pricing.
              </p>
            </div>

            {/* Export Coordination */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">03</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Export Coordination
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We coordinate with suppliers and logistics partners to help
                organize the order and shipment according to agreed terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            International Buyer Enquiries
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Looking for a specific Indian spice?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what you are looking for, including product, quantity,
            specifications, packaging, and destination country.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Send an Enquiry
          </Link>

        </div>
      </section>

    </main>
  );
}