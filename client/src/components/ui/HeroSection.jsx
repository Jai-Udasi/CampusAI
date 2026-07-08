import { ArrowRight, Building2 } from "lucide-react";
import TechBadge from "./TechBadge";
import HeroDashboard from "./HeroDashboard";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-white pt-36 pb-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 AI-Powered Campus Management Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            One Platform.
            <br />
            <span className="text-blue-600">
              Every Campus Service.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            CampusAI connects students, faculty and institutions through one
            intelligent cloud platform for notices, AI assistance, events,
            notes, placements, Lost & Found and much more.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Launch CampusAI
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
              <Building2 size={20} />
              Register Institution
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <TechBadge text="🤖 AI Ready" />
            <TechBadge text="☁ AWS Cloud" />
            <TechBadge text="🔒 Secure" />
            <TechBadge text="⚡ Fast" />
            <TechBadge text="📱 Responsive" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;