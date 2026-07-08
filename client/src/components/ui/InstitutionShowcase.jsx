import InstitutionCard from "./InstitutionCard";

const institutions = [
  {
    name: "VESIT",
    city: "Mumbai",
    students: "3500",
  },
  {
    name: "SPIT",
    city: "Mumbai",
    students: "4200",
  },
  {
    name: "DJ Sanghvi",
    city: "Mumbai",
    students: "5000",
  },
  {
    name: "KJ Somaiya",
    city: "Mumbai",
    students: "7000",
  },
];

function InstitutionShowcase() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-slate-900">
          Choose Your Institution
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
          CampusAI supports multiple institutions through one secure cloud platform.
        </p>

        <input
          type="text"
          placeholder="Search Institution..."
          className="mx-auto mt-12 block w-full max-w-xl rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {institutions.map((institution) => (
            <InstitutionCard
              key={institution.name}
              {...institution}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <button className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            + Register Your Institution
          </button>

        </div>

      </div>

    </section>
  );
}

export default InstitutionShowcase;