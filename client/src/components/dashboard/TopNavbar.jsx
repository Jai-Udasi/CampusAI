import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function TopNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Institution Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back to CampusAI
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <div className="text-right">
          <p className="font-semibold text-slate-800">
            Super Admin
          </p>

          <p className="text-sm text-slate-500">
            Institution Portal
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}

export default TopNavbar;