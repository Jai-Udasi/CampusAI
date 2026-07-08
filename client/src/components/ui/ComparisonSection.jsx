import { XCircle, CheckCircle2 } from "lucide-react";

const comparisons = [
  {
    old: "Multiple portals for different services",
    modern: "One unified platform for every campus need",
  },
  {
    old: "Paper-based notices",
    modern: "Real-time digital announcements",
  },
  {
    old: "Manual Lost & Found process",
    modern: "Smart searchable Lost & Found",
  },
  {
    old: "Scattered notes across WhatsApp & Drive",
    modern: "Centralized Notes Repository",
  },
  {
    old: "Static FAQs",
    modern: "AI Campus Assistant",
  },
  {
    old: "Limited on-premise systems",
    modern: "AWS Cloud-native architecture",
  },
];

function ComparisonSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold text-slate-900">
          Why Choose CampusAI?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
          Reimagining campus management with AI, cloud, and a unified experience.
        </p>

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

          <div className="grid grid-cols-2 bg-slate-900 text-white">

            <div className="p-6 text-center text-xl font-bold">
              Traditional Campus Systems
            </div>

            <div className="bg-blue-600 p-6 text-center text-xl font-bold">
              CampusAI
            </div>

          </div>

          {comparisons.map((item) => (
            <div
              key={item.old}
              className="grid grid-cols-2 border-t border-slate-200"
            >
              <div className="flex items-center gap-3 p-6">
                <XCircle className="text-red-500" />
                <span>{item.old}</span>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-6">
                <CheckCircle2 className="text-green-600" />
                <span>{item.modern}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ComparisonSection;