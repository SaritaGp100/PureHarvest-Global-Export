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
  const whatsappMessage = `Hello, I am interested in an export quotation for ${name}. Please share the available specifications, packaging options, MOQ, pricing, and export details.`;

  const whatsappUrl = `https://wa.me/918369759857?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* PRODUCT IMAGE */}
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={`${name} - Indian export product`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-70" />

        {/* Product Label */}
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          Indian Origin
        </div>

        {/* Bottom Origin */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
          <MapPin size={15} className="text-amber-400" />
          <span>{origin}</span>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
              Product
            </p>

            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
              {name}
            </h3>
          </div>
        </div>

        {/* Product Information */}
        <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          <div className="flex items-start gap-2.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <p className="text-sm leading-6 text-slate-600">
              Sourced according to product and buyer requirements
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <p className="text-sm leading-6 text-slate-600">
              MOQ and packaging discussed based on product and supplier
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <p className="text-sm leading-6 text-slate-600">
              Pricing prepared according to quantity and destination
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-slate-950"
        >
          <span>Request Export Quote</span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}