import GlassCard from "./GlassCard";

interface ProductCardProps {
  name: string;
  origin: string;
  moq: string;
}

export default function ProductCard({
  name,
  origin,
  moq,
}: ProductCardProps) {
  return (
    <GlassCard
      className="
      p-5
      sm:p-6
      hover:-translate-y-2
      transition
      duration-300
      "
    >
      <div className="h-48 bg-slate-100 rounded-2xl mb-5" />

      <h3 className="text-xl font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-slate-600">
        Origin: {origin}
      </p>

      <p className="text-slate-600">
        MOQ: {moq}
      </p>

      <button
        className="
        w-full
        mt-6
        bg-green-800
        text-white
        py-3
        rounded-xl
        hover:bg-green-700
        transition
        "
      >
        Request Quote
      </button>
    </GlassCard>
  );
}