import { ArrowRight } from "lucide-react";

function ExperienceCard({
  icon: Icon,
  title,
  description,
  features,
  accent,
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${accent}`}
      >
        <Icon className="text-white" size={30} />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-slate-700"
          >
            ✅ {feature}
          </li>
        ))}
      </ul>

      <button className="group mt-8 flex items-center gap-2 font-semibold text-blue-600">
        Explore

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default ExperienceCard;