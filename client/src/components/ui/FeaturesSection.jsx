import {
  Bot,
  Bell,
  CalendarDays,
  BookOpen,
  Briefcase,
  Users,
  Cloud,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Bot,
    title: "Campus AI",
    description:
      "Ask questions about your campus, departments, rules and facilities using AI.",
  },
  {
    icon: Bell,
    title: "Smart Notices",
    description:
      "Receive important announcements instantly from your institution.",
  },
  {
    icon: CalendarDays,
    title: "Events",
    description:
      "Never miss workshops, hackathons or placement drives.",
  },
  {
    icon: BookOpen,
    title: "Notes Repository",
    description:
      "Access subject-wise notes, PDFs and study material anytime.",
  },
  {
    icon: Briefcase,
    title: "Lost & Found",
    description:
      "Report and discover lost belongings across campus.",
  },
  {
    icon: Users,
    title: "Faculty Directory",
    description:
      "Search faculty members with department and contact details.",
  },
  {
    icon: Cloud,
    title: "Cloud Powered",
    description:
      "Secure cloud architecture built using AWS services for scalability.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-slate-900">
          Everything Your Campus Needs
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
          CampusAI brings every essential campus service together into one
          modern cloud platform.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;