interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="mb-3 inline-block font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}