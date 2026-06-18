import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-5xl font-bold mb-12">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
  );
}