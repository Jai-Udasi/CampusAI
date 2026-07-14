import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";

function RegisterInstitutionPage() {
    const [formData, setFormData] = useState({
  institutionName: "",
  institutionEmail: "",
  adminName: "",
  adminEmail: "",
  password: "",
  confirmPassword: "",
  institutionCode: "",
  city: "",
  state: "",
});
const [errors, setErrors] = useState({});
    const validateForm = () => {
      const newErrors = {};

      if (!formData.institutionName.trim()) {
        newErrors.institutionName = "Institution name is required.";
      }

      if (!formData.institutionEmail.trim()) {
        newErrors.institutionEmail = "Institution email is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.institutionEmail)
      ) {
        newErrors.institutionEmail = "Enter a valid institution email.";
      }

      if (!formData.adminName.trim()) {
        newErrors.adminName = "Admin name is required.";
      }

      if (!formData.adminEmail.trim()) {
        newErrors.adminEmail = "Admin email is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.adminEmail)
      ) {
        newErrors.adminEmail = "Enter a valid admin email.";
      }

      if (!formData.password) {
        newErrors.password = "Password is required.";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password.";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }

      if (!formData.institutionCode.trim()) {
        newErrors.institutionCode = "Institution code is required.";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required.";
      }

      if (!formData.state.trim()) {
        newErrors.state = "State is required.";
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Remove the error for this field as the user edits it
  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submit Clicked");

  const isValid = validateForm();

  console.log("Is Valid:", isValid);
  console.log("Errors:", errors);

  if (!isValid) return;

    try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.adminEmail,
      formData.password
    );

    console.log("User Created:", userCredential.user);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white p-10 shadow-2xl">

          <h1 className="text-center text-4xl font-bold text-slate-900">
            Register Your Institution
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Create your CampusAI workspace and provide your students with one
            intelligent platform for notices, AI assistance, events, academics,
            placements and more.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >

            {/* Institution Name */}
            <div className="md:col-span-2">
              <label className="mb-2 block font-medium text-slate-700">
                Institution Name
              </label>

              <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="e.g. Vivekanand Education Society Institute of Technology"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.institutionName
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.institutionName && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.institutionName}
                  </p>
                )}
            </div>

            {/* Institution Email */}
            <div className="md:col-span-2">
              <label className="mb-2 block font-medium text-slate-700">
                Institution Email
              </label>

              <input
                  type="email"
                  name="institutionEmail"
                  value={formData.institutionEmail}
                  onChange={handleChange}
                  placeholder="institution@college.edu"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.institutionEmail
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.institutionEmail && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.institutionEmail}
                  </p>
                )}
            </div>

            {/* Admin Name */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Admin Name
              </label>

              <input
                  type="text"
                  name="adminName"
                  value={formData.adminName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.adminName
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.adminName && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.adminName}
                  </p>
                )}
            </div>

            {/* Admin Email */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Admin Email
              </label>

              <input
                type="email"
                name="adminEmail"
                value={formData.adminEmail}
                onChange={handleChange}
                placeholder="admin@college.edu"
                className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                  errors.adminEmail
                    ? "border border-red-500"
                    : "border border-slate-300 focus:border-blue-600"
                }`}
              />

              {errors.adminEmail && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.adminEmail}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.password
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.confirmPassword
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
            </div>

            {/* College Code */}
            <div className="md:col-span-2">
              <label className="mb-2 block font-medium text-slate-700">
                Institution Code
              </label>

              <input
                  type="text"
                  name="institutionCode"
                  value={formData.institutionCode}
                  onChange={handleChange}
                  placeholder="e.g. VESIT2026"
                  className={`w-full rounded-xl px-5 py-4 uppercase outline-none transition ${
                    errors.institutionCode
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.institutionCode && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.institutionCode}
                  </p>
                )}
            </div>

            {/* City */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                City
              </label>

              <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.city
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.city && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.city}
                  </p>
                )}
            </div>

            {/* State */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                State
              </label>

              <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Maharashtra"
                  className={`w-full rounded-xl px-5 py-4 outline-none transition ${
                    errors.state
                      ? "border border-red-500"
                      : "border border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.state && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.state}
                  </p>
                )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="md:col-span-2 mt-4 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Register Institution
            </button>

            {/* Login Link */}
            <p className="md:col-span-2 text-center text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>
    </div>
  );
}

export default RegisterInstitutionPage;