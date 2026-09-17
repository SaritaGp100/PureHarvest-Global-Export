import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Our Products
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-950">
              Indian Spices & Agricultural Products
            </h1>

            <p className="mt-7 max-w-3xl text-lg md:text-xl leading-8 text-slate-600">
              We source quality Indian spices and agricultural products for
              international buyers, working with suitable suppliers to meet
              product specifications, quantity, packaging, and export
              requirements.
            </p>

          </div>

        </div>
      </section>


      {/* Product Catalogue */}
      <section className="bg-slate-50 border-y border-slate-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Product Range
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-950">
                Explore Our Products
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 md:text-right">
              Product specifications, availability, packaging, and pricing
              can be discussed according to your specific requirements.
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


      {/* Sourcing Information */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Product Quality */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">01</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Quality-Focused Sourcing
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We work with suppliers according to the required product
                specifications and buyer expectations.
              </p>
            </div>


            {/* Flexible Quantities */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">02</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Flexible Requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share your required quantity, packaging, grade, specifications,
                and destination market with us.
              </p>
            </div>


            {/* Export Support */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <span className="text-lg font-bold">03</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                Export Coordination
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We coordinate with suppliers and logistics partners to help
                organize the export process from order to shipment.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-950 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            International Buyer Enquiries
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Looking for a specific Indian product?
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