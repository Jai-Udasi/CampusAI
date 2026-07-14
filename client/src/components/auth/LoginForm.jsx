import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleLogin = async () => {
    setError("");

    if (!email || !password) {
        setError("Please enter both email and password.");
        return;
    }

    try {
        setLoading(true);

        await signInWithEmailAndPassword(auth, email, password);

        navigate("/dashboard");

    } catch (err) {
        setError("Invalid email or password.");
    } finally {
        setLoading(false);
    }
    };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        Login
      </h2>

      <p className="mt-2 text-slate-500">
        Sign in to continue to CampusAI
      </p>

        {error && (
        <div className="mt-6 rounded-xl bg-red-100 p-3 text-sm text-red-700">
            {error}
        </div>
        )}

      <div className="mt-8 space-y-5">

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
        <label className="mb-2 block font-medium text-slate-700">
            Password
        </label>

        <div className="relative">

            <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600"
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
            {showPassword ? (
                <EyeOff size={20} />
            ) : (
                <Eye size={20} />
            )}
            </button>

        </div>
        </div>

      </div>

        <button
        onClick={handleLogin}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
        {loading ? "Signing In..." : "Login"}
        </button>

    </div>
  );
}

export default LoginForm;