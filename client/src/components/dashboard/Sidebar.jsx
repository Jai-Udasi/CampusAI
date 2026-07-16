import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Bot,
  Bell,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <img
          src="/brand/campusai-logo.svg"
          alt="CampusAI"
          className="h-10"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">

        <SidebarItem
          to="/institution"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <SidebarItem
          to="/students"
          icon={GraduationCap}
          label="Students"
        />

        <SidebarItem
          to="/faculty"
          icon={Users}
          label="Faculty"
        />

        <SidebarItem
          to="/courses"
          icon={BookOpen}
          label="Courses"
        />

        <SidebarItem
          to="/assistant"
          icon={Bot}
          label="AI Assistant"
        />

        <SidebarItem
          to="/notices"
          icon={Bell}
          label="Notice Board"
        />

        <SidebarItem
          to="/settings"
          icon={Settings}
          label="Settings"
        />

      </nav>

    </aside>
  );
}

export default Sidebar;