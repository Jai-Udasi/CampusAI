import { Building2, MapPin, Users } from "lucide-react";

function InstitutionCard({
  name,
  city,
  students,
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4">
        <Building2 className="h-8 w-8 text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-slate-600">
        <MapPin size={18} />
        {city}
      </div>

      <div className="mt-2 flex items-center gap-2 text-slate-600">
        <Users size={18} />
        {students} Students
      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Explore Campus
      </button>

    </div>
  );
}

export default InstitutionCard;