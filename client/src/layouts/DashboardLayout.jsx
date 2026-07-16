import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children, role }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">

        <div className="flex items-center gap-3">
          <img
            src="/brand/campusai-icon.svg"
            alt="CampusAI"
            className="h-12 w-12"
          />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              CampusAI
            </h1>

            <p className="text-sm text-slate-500">
              {role} Portal
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
        >
          Sign Out
        </button>

      </header>

      {/* Page Content */}
      <main className="mx-auto max-w-7xl p-8">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;