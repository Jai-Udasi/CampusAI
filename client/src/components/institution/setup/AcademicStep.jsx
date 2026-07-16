import FormInput from "../../forms/FormInput";

function AcademicStep({
  formData,
  errors,
  handleChange,
}) {
  return (
    <div className="space-y-6">

      <FormInput
        label="Academic Year"
        name="academicYear"
        value={formData.academicYear || ""}
        onChange={handleChange}
        placeholder="2026-27"
        error={errors.academicYear}
      />

      <FormInput
        label="Number of Departments"
        name="departmentCount"
        value={formData.departmentCount || ""}
        onChange={handleChange}
        placeholder="10"
        error={errors.departmentCount}
      />

      <FormInput
        label="Number of Semesters"
        name="semesterCount"
        value={formData.semesterCount || ""}
        onChange={handleChange}
        placeholder="8"
        error={errors.semesterCount}
      />

    </div>
  );
}

export default AcademicStep;