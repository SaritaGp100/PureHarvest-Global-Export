import Image from "next/image";

interface ProductCardProps {
  name: string;
  origin: string;
  moq: string;
  image: string;
}

export default function ProductCard({
  name,
  origin,
  moq,
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

        <p className="text-slate-600">
          MOQ: {moq}
        </p>

        <a
          href={`https://wa.me/918369759857?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(
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
          Request Quote
        </a>
      </div>
    </div>
  );
}