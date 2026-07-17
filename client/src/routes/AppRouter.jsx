import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterInstitutionPage from "../pages/RegisterInstitutionPage";

import InstitutionDashboard from "../pages/InstitutionDashboard";
import InstitutionSetupPage from "../pages/InstitutionSetupPage";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import FacultyDashboard from "../pages/FacultyDashboard";

import ProtectedRoute from "../guards/ProtectedRoute";
import PublicRoute from "../guards/PublicRoute";
import InstitutionGuard from "../guards/InstitutionGuard";

import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={<RegisterInstitutionPage />}
      />

      <Route
        path="/institution"
        element={
          <ProtectedRoute>
            <InstitutionGuard>
              <InstitutionDashboard />
            </InstitutionGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/institution/setup"
        element={
          <ProtectedRoute>
            <InstitutionSetupPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/faculty"
        element={
          <ProtectedRoute>
            <FacultyDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRouter;