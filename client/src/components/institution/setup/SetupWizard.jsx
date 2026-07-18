import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../../firebase/firebaseConfig";
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
  const [loading, setLoading] = useState(false);
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
  departments: [],

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

const addDepartment = () => {
  setFormData((prev) => ({
    ...prev,
    departments: [...prev.departments, ""],
    departmentCount: String(prev.departments.length + 1),
  }));
  setErrors((prev) => ({
  ...prev,
  departments: "",
  departmentCount: "",
}));
};

const removeDepartment = (index) => {
  const updatedDepartments = formData.departments.filter(
    (_, i) => i !== index
  );

  setFormData((prev) => ({
    ...prev,
    departments: updatedDepartments,
    departmentCount: String(updatedDepartments.length),
  }));
  setErrors((prev) => ({
  ...prev,
  departments: "",
  departmentCount: "",
}));
};

const updateDepartment = (index, value) => {
  const updatedDepartments = [...formData.departments];
  updatedDepartments[index] = value;

  setFormData((prev) => ({
    ...prev,
    departments: updatedDepartments,
  }));

  setErrors((prev) => ({
    ...prev,
    departments: "",
    departmentCount: "",
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

const validateAcademicStep = () => {
  const newErrors = {};

  if (!formData.academicYear.trim()) {
    newErrors.academicYear = "Academic year is required.";
  }

 if (formData.departments.length === 0) {
  newErrors.departments =
    "Add at least one department.";
  }  

  if (
    formData.departments.some(
      (department) => !department.trim()
    )
  ) {
    newErrors.departments =
      "Please fill all department names.";
  }

  if (!formData.semesterCount) {
    newErrors.semesterCount =
      "Number of semesters is required.";
  }

setErrors((prev) => ({
  ...prev,
  ...newErrors,
}));

return Object.keys(newErrors).length === 0;
  
};

const validateAIStep = () => {
  const newErrors = {};

  if (!formData.aiAssistantName.trim()) {
    newErrors.aiAssistantName =
      "AI Assistant Name is required.";
  }

  setErrors((prev) => ({
    ...prev,
    ...newErrors,
  }));

  return Object.keys(newErrors).length === 0;
};

const validateBrandingStep = () => {
  const newErrors = {};

  if (!formData.primaryColor) {
    newErrors.primaryColor =
      "Primary color is required.";
  }

  if (!formData.secondaryColor) {
    newErrors.secondaryColor =
      "Secondary color is required.";
  }

  setErrors((prev) => ({
    ...prev,
    ...newErrors,
  }));

  return Object.keys(newErrors).length === 0;
};

const handleNext = async () => {

  switch (currentStep) {

    case 1:
      if (!validateBasicInfo()) return;
      break;

    case 2:
      if (!validateAcademicStep()) return;
      break;

    case 3:
      if (!validateAIStep()) return;
      break;

    default:
      break;
  }

  const nextStep = currentStep + 1;
  setCurrentStep(nextStep);
  await saveProgress(nextStep);
};

const handleFinish = async () => {

  if (!validateBrandingStep()) return;

  setLoading(true);

  try {

    await finishSetup();
    navigate("/institution");

  } finally {

    setLoading(false);

  }
};

const saveProgress = async (step = currentStep) => {  

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

    currentStep: step,

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

        setCurrentStep((prev) =>
          data.currentStep > prev ? data.currentStep : prev
        );

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
            addDepartment={addDepartment}
            removeDepartment={removeDepartment}
            updateDepartment={updateDepartment}
          />
        )}

          {currentStep === 3 && (
            <AIStep
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}

        {currentStep === 4 && (
          <BrandingStep
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        )}

      </div>

      <div className="mt-10 flex justify-between">

        <button
          type="button"
          disabled={currentStep === 1}
          onClick={async () => {
          const previous = currentStep - 1;

          setCurrentStep(previous);

          await saveProgress(previous);
          }}
          className="rounded-xl border border-slate-300 px-6 py-3 disabled:opacity-50"
        >
          Previous
        </button>

        {currentStep === 4 ? (

<button
  type="button"
  onClick={
    currentStep === 4
      ? handleFinish
      : handleNext
  }
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
>
{loading
  ? "Saving..."
  : currentStep === 4
      ? "Finish Setup"
      : "Next"}
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