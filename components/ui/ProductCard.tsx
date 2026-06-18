import Image from "next/image";

interface ProductCardProps {
  name: string;
  origin: string;
  image: string;
}

export default function ProductCard({
  name,
  origin,
  image,
}: ProductCardProps) {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      bg-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      border border-slate-100
      "
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-slate-600">
          Origin: {origin}
        </p>

        {/* Correct Export Business Positioning */}
        <p className="mt-3 text-xs text-slate-500">
          ✔ Sourced from verified manufacturers & suppliers <br />
          ✔ MOQ: Flexible (depends on product & supplier) <br />
          ✔ Pricing shared based on requirement & destination
        </p>

        {/* CTA */}
        <a
          href={`https://wa.me/918369759857?text=Hello,%20I%20am%20interested%20in%20export%20quotation%20for%20${encodeURIComponent(
            name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            inline-flex
            w-full
            justify-center
            rounded-xl
            bg-green-800
            px-4
            py-3
            text-white
            font-medium
            hover:bg-green-700
            transition
          "
        >
          Get Best Export Quote
        </a>
      </div>
    </div>
  );
}