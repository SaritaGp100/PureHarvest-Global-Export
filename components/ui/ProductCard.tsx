import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

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
  const whatsappMessage = `Hello, I am interested in an export quotation for ${name}. Please share the available forms, specifications, packaging options, MOQ, pricing, and export details.`;

  const whatsappUrl = `https://wa.me/918369759857?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-xl
      "
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-60">
        <Image
          src={image}
          alt={`${name} - Indian spice export product`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

        {/* Origin Badge */}
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-slate-950/75
            px-3.5
            py-1.5
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-white
            backdrop-blur-md
          "
        >
          Indian Origin
        </div>

        {/* Origin */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
          <MapPin size={15} className="shrink-0 text-amber-400" />
          <span>{origin}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Product Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
            Product
          </p>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            {name}
          </h3>
        </div>

        {/* Product Information */}
        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-800">
                Available forms:
              </span>{" "}
              Whole, powdered, or other forms as required.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-800">
                Requirements:
              </span>{" "}
              MOQ, grade, specifications, and packaging discussed based on
              requirements.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-800">
                Pricing:
              </span>{" "}
              Prepared according to quantity, specifications, and destination.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Request an export quote for ${name}`}
          className="
            group/button
            mt-6
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-slate-950
            px-5
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-amber-500
            hover:text-slate-950
          "
        >
          <span>Request Export Quote</span>

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover/button:-translate-y-0.5
              group-hover/button:translate-x-0.5
            "
          />
        </a>
      </div>
    </article>
  );
}