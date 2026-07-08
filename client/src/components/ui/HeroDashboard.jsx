import {
  Bot,
  Bell,
  CalendarDays,
  BookOpen,
  Briefcase,
  Search,
} from "lucide-react";

function HeroDashboard() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            CampusAI Dashboard
          </h3>

          <p className="text-sm text-slate-500">
            Welcome back, Student 👋
          </p>

        </div>

        <div className="rounded-xl bg-blue-100 p-3">
          <Bot className="text-blue-600" size={24} />
        </div>

      </div>

      {/* Search */}

      <div className="mb-6 flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">

        <Search
          size={18}
          className="text-slate-500"
        />

        <span className="text-sm text-slate-500">
          Ask CampusAI anything...
        </span>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-4">

        <DashboardCard
          icon={Bell}
          title="Latest Notice"
          value="Exam Schedule"
        />

        <DashboardCard
          icon={CalendarDays}
          title="Next Event"
          value="Hackathon"
        />

        <DashboardCard
          icon={BookOpen}
          title="Study Notes"
          value="42 PDFs"
        />

        <DashboardCard
          icon={Briefcase}
          title="Placements"
          value="18 Drives"
        />

      </div>

    </div>
  );
}

function DashboardCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg">

      <Icon
        className="mb-3 text-blue-600"
        size={22}
      />

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h4 className="mt-1 font-semibold text-slate-900">
        {value}
      </h4>

    </div>
  );
}

export default HeroDashboard;