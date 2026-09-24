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
      

      {/* CTA */}     
      <section className="border-t border-slate-100 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 md:px-12 md:py-16">
            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                International Buyer Enquiries
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Looking for a specific Indian spice?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                Tell us what you are looking for, including product, quantity,
                specifications, packaging, and destination country.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-md"
              >
                Send an Enquiry
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}