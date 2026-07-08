import {
  Building2,
  GraduationCap,
  Bell,
  Bot,
} from "lucide-react";

import AnimatedCounter from "../common/AnimatedCounter";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Building2,
    value: 15,
    suffix: "+",
    title: "Institutions",
  },
  {
    icon: GraduationCap,
    value: 12000,
    suffix: "+",
    title: "Students",
  },
  {
    icon: Bell,
    value: 8500,
    suffix: "+",
    title: "Notices Delivered",
  },
  {
    icon: Bot,
    value: 24,
    suffix: "/7",
    title: "AI Assistant",
  },
];

function StatisticsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Trusted by Growing Campuses
        </h2>

        <p className="mt-5 text-center text-lg text-blue-100">
          Built to scale for institutions of every size.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-5xl font-extrabold">

                <AnimatedCounter
                  end={stat.value}
                  startAnimation={inView}
                />
                
                  {stat.suffix}

                </h3>

                <p className="mt-4 text-blue-100">
                  {stat.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default StatisticsSection;