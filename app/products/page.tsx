import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-5xl font-bold mb-12">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.name}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition"
            >
              <div className="h-52 bg-slate-100 rounded-2xl mb-6" />

              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-slate-600">
                Origin: {product.origin}
              </p>

              <p className="text-slate-600">
                MOQ: {product.moq}
              </p>

              <button className="mt-6 btn-primary px-6 py-3 rounded-xl">
                Request Quote
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}