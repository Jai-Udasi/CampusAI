import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../../../firebase/firebaseConfig";
import SetupProgress from "../SetupProgress";
import { useNavigate } from "react-router-dom";
import BasicInfoStep from "./BasicInfoStep";
import AcademicStep from "./AcademicStep";
import AIStep from "./AIStep";
import BrandingStep from "./BrandingStep";

function SetupWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      // Step 1
  website:"",
  phone:"",
  principalName:"",
  address:"",

    // Step 2
  academicYear:"",
  departmentCount:"",
  semesterCount:"",

    // Step 3
  aiAssistantName:"",
  enableAI:true,

    // Step 4
  primaryColor:"#2563eb",
  secondaryColor:"#0f172a",
});

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateBasicInfo = () => {
    const newErrors = {};

    if (!formData.website.trim()) {
      newErrors.website = "Website is required.";
    } else {
      try {
        new URL(formData.website);
      } catch {
        newErrors.website = "Enter a valid website URL.";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.principalName.trim()) {
      newErrors.principalName = "Principal / Director name is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Institution address is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const handleNext = async () => {

  if (currentStep === 1 && !validateBasicInfo()) {
    return;
  }

  // Save current step data
  await saveProgress();

  // Last step -> Finish
  if (currentStep === 4) {
    await finishSetup();
    return;
  }

  // Otherwise move ahead
  setCurrentStep((prev) => prev + 1);
};

  const saveProgress = async () => {
    if (!currentUser) return;

    try {
      const adminSnapshot = await getDoc(
        doc(db, "admins", currentUser.uid) // ✅ CHANGED
      );

      if (!adminSnapshot.exists()) return;

      const institutionId = adminSnapshot.data().institutionId;

await updateDoc(
  doc(db, "institutions", institutionId),
  {
    ...formData,

    currentStep,

    updatedAt: serverTimestamp(),
  }
);

      console.log("Progress Saved"); // ✅ CHANGED

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!currentUser) return; // ✅ CHANGED

    const timer = setTimeout(() => {
      saveProgress();
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData, currentStep, currentUser]); // ✅ CHANGED

const finishSetup = async () => {
  if (!currentUser) return;

  try {
    await saveProgress();

    const adminSnapshot = await getDoc(
      doc(db, "admins", currentUser.uid)
    );

    if (!adminSnapshot.exists()) return;

    const institutionId = adminSnapshot.data().institutionId;

    await updateDoc(
      doc(db, "institutions", institutionId),
      {
        setupCompleted: true,
        onboardingCompletedAt: serverTimestamp(),
      }
    );

    navigate("/institution");

  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    const loadProgress = async () => {
      if (!currentUser) return;

      try {
        // ✅ CHANGED
        const adminSnapshot = await getDoc(
          doc(db, "admins", currentUser.uid)
        );

        if (!adminSnapshot.exists()) return;

        const institutionId = adminSnapshot.data().institutionId;

        // ✅ CHANGED
        const docRef = doc(
          db,
          "institutions",
          institutionId
        );

        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) return;

        const data = snapshot.data();

        console.log("Loaded Data:", data); // ✅ CHANGED

        setFormData((prev) => ({
          ...prev,
          ...data,
        }));

        if (data.currentStep) {
          setCurrentStep(data.currentStep);
        }

      } catch (err) {
        console.error(err);
      }
    };

    loadProgress();
  }, [currentUser]);

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-3xl font-bold">
        Institution Setup
      </h1>

      <p className="mt-2 text-slate-600">
        Complete your institution profile.
      </p>

      <div className="mt-8">
        <SetupProgress currentStep={currentStep} />
      </div>

      <div className="mt-10">

        {currentStep === 1 && (
          <BasicInfoStep
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        )}

        {currentStep === 2 && (
          <AcademicStep
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
        )}

        {currentStep === 3 && (
          <AIStep
            formData={formData}
            handleChange={handleChange}
        />
        )}

        {currentStep === 4 && (
          <BrandingStep
            formData={formData}
            handleChange={handleChange}
        />
        )}

      </div>

      <div className="mt-10 flex justify-between">

        <button
          type="button"
          disabled={currentStep === 1}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="rounded-xl border border-slate-300 px-6 py-3 disabled:opacity-50"
        >
          Previous
        </button>

        {currentStep === 4 ? (

<button
    type="button"
    onClick={finishSetup}
    className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
>
    Finish Setup
</button>

) : (

<button
    type="button"
    onClick={handleNext}
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
>
    Next
</button>

)}

      </div>

    </div>
  );
}

export default SetupWizard;