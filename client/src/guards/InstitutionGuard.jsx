import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";

function InstitutionGuard({ children }) {
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const checkSetup = async () => {
      if (!currentUser) return;

      const adminDoc = await getDoc(
        doc(db, "admins", currentUser.uid)
      );

      if (!adminDoc.exists()) {
        setLoading(false);
        return;
      }

      const institutionId =
        adminDoc.data().institutionId;

      const institutionDoc = await getDoc(
        doc(db, "institutions", institutionId)
      );

      if (
        institutionDoc.exists() &&
        institutionDoc.data().setupCompleted
      ) {
        setCompleted(true);
      }

      setLoading(false);
    };

    checkSetup();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!completed) {
    return <Navigate to="/institution/setup" replace />;
  }

  return children;
}

export default InstitutionGuard;