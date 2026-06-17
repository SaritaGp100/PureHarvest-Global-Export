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
    <div className="text-center max-w-3xl mx-auto mb-16">

      {badge && (
        <span className="inline-block text-green-700 font-semibold mb-3">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}

    </div>
  );
}