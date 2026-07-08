import { ArrowRight } from "lucide-react";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/80
        p-8
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-8 w-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Learn More */}
      <button className="relative z-10 mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default FeatureCard;