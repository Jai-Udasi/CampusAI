import {
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Student Portal",
    description:
      "Everything a student needs in one intelligent workspace.",
    features: [
      "Campus AI Assistant",
      "Notes Repository",
      "Smart Notices",
      "Events & Clubs",
      "Lost & Found",
      "Placements",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Institution Portal",
    description:
      "Manage your institution from a single cloud dashboard.",
    features: [
      "Departments",
      "Faculty Management",
      "Notice Board",
      "Events",
      "Resources",
      "Analytics",
    ],
    color: "from-indigo-600 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Admin Portal",
    description:
      "Manage institutions and keep the CampusAI ecosystem secure.",
    features: [
      "Institution Verification",
      "Workspace Management",
      "Platform Analytics",
      "Cloud Monitoring",
      "Support",
      "Security",
    ],
    color: "from-cyan-500 to-teal-500",
  },
];

function CampusSnapshot() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            One Platform
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Three Powerful Experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CampusAI provides dedicated intelligent workspaces for
            students, institutions and platform administrators —
            all connected through one secure cloud platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="group mt-10 flex items-center gap-2 font-semibold text-blue-600">
                  Explore Workspace

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default CampusSnapshot;