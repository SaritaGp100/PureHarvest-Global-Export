export default function FeaturedProducts() {
  return (
    <section className="py-15 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Products We Source & Export
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          We connect international buyers with trusted Indian manufacturers and
          suppliers across a wide range of agricultural commodities, spices,
          food ingredients, and customized sourcing requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Premium Spices</h3>
            <p className="text-gray-600">
              Turmeric, Black Pepper, Cardamom, Cumin Seeds, Coriander Seeds,
              Red Chilli Powder and more.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Agricultural Products</h3>
            <p className="text-gray-600">
              Quality agricultural commodities sourced according to buyer
              specifications and export standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Custom Sourcing</h3>
            <p className="text-gray-600">
              Looking for a specific product? We help buyers source products
              from reliable manufacturers across India.
            </p>
          </div>
        </div>

        <a
          href="/products"
          className="inline-block mt-10 px-6 py-3 rounded-lg bg-black text-white"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}