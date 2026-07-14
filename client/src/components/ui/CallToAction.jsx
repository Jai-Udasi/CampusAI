import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-24">

      {/* Background Blur Effects */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur">
          🚀 Ready to Get Started?
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight">
          Transform Your Campus
          <br />
          with CampusAI
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Bring notices, events, AI assistance, notes, Lost & Found,
          and campus services together in one secure cloud platform.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition hover:scale-105">

            Launch Workspace

            <ArrowRight size={20} />

          </button>

          <button
            onClick={() => {
              console.log("CTA clicked");
              navigate("/register");
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-blue-700"
          >
            <Building2 size={20} />
            Register Institution
          </button>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;