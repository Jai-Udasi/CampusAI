import { useState } from "react";
import {
  Building2,
  Settings,
  GraduationCap,
  Bot,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Building2,
    title: "Institution Registers",
    description:
      "A college registers on CampusAI and instantly gets its own secure cloud workspace.",

    previewTitle: "Dedicated Cloud Workspace",

    previewDescription:
      "Every institution receives its own isolated workspace. Data remains secure while the platform stays scalable for multiple colleges.",

    mockup: "🏫 Institution Workspace",
  },

  {
    icon: Settings,
    title: "Admin Configures",

    description:
      "Admins manage departments, notices, notes, faculty, events and every campus resource.",

    previewTitle: "Institution Admin Dashboard",

    previewDescription:
      "Administrators configure everything from one dashboard instead of multiple disconnected systems.",

    mockup: "⚙ Admin Dashboard",
  },

  {
    icon: GraduationCap,
    title: "Students & Faculty Join",

    description:
      "Users login using institutional credentials and access all campus services from one place.",

    previewTitle: "Unified Student Portal",

    previewDescription:
      "Students can access notices, notes, AI assistant, events and Lost & Found without switching between apps.",

    mockup: "🎓 Student Dashboard",
  },

  {
    icon: Bot,
    title: "AI Powers Campus",

    description:
      "CampusAI answers questions instantly and helps students navigate their campus experience.",

    previewTitle: "AI Campus Assistant",

    previewDescription:
      "The AI understands institution-specific information and provides instant answers anytime.",

    mockup: "🤖 AI Assistant",
  },
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="bg-gradient-to-b from-slate-50 to-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-slate-900">
          How CampusAI Works
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
          Every institution follows one simple workflow to create a smart,
          cloud-powered campus experience.
        </p>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (

                <div
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`sticky top-28 mb-8 cursor-pointer rounded-3xl border transition-all duration-500

                  ${
                    activeStep === index
                      ? "scale-100 border-blue-500 bg-blue-600 text-white shadow-2xl"
                      : "scale-95 border-slate-200 bg-white/70 text-slate-700 opacity-80 backdrop-blur-md hover:opacity-100"
                  }`}
                >

                  <div className="flex items-start gap-5 p-8">

                    <div
                      className={`rounded-2xl p-4

                      ${
                        activeStep === index
                          ? "bg-white/20"
                          : "bg-blue-100"
                      }`}
                    >

                      <Icon
                        className={`h-8 w-8

                        ${
                          activeStep === index
                            ? "text-white"
                            : "text-blue-600"
                        }`}
                      />

                    </div>

                    <div>

                      <div className="flex items-center gap-3">

                        <h3 className="text-2xl font-bold">
                          {step.title}
                        </h3>

                        {activeStep === index && (
                          <CheckCircle2 size={22} />
                        )}

                      </div>

                      <p className="mt-3 leading-7">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

          {/* RIGHT SIDE */}

          <div className="sticky top-28 h-fit">

            <div className="overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white shadow-2xl">

              <span className="rounded-full bg-blue-500 px-4 py-2 text-xs tracking-widest">
                LIVE PREVIEW
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                {steps[activeStep].previewTitle}
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                {steps[activeStep].previewDescription}
              </p>

              <div className="mt-10 rounded-3xl bg-slate-800 p-6">

                <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600">

                  <h1 className="text-center text-4xl font-bold">
                    {steps[activeStep].mockup}
                  </h1>

                </div>

              </div>

              <div className="mt-8 flex justify-center gap-2">

                {steps.map((_, i) => (

                  <div
                    key={i}
                    className={`h-3 w-3 rounded-full transition-all

                    ${
                      activeStep === i
                        ? "w-10 bg-blue-400"
                        : "bg-slate-600"
                    }`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;