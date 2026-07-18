import FormInput from "../../forms/FormInput";

function AcademicStep({
  formData,
  errors,
  handleChange,
  addDepartment,
  removeDepartment,
  updateDepartment,
}) {
  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold">
        Academic Structure
      </h2>

      <p className="text-slate-600">
        Configure your institution's academic information.
      </p>

      <FormInput
        label="Academic Year"
        name="academicYear"
        value={formData.academicYear}
        onChange={handleChange}
        placeholder="2026-27"
        error={errors.academicYear}
      />

      {/* Auto-generated Department Count */}
      <FormInput
        label="Number of Departments"
        name="departmentCount"
        type="number"
        value={formData.departmentCount}
        readOnly
        placeholder="0"
        error={errors.departmentCount}
      />

      <FormInput
        label="Number of Semesters"
        name="semesterCount"
        type="number"
        value={formData.semesterCount}
        onChange={handleChange}
        placeholder="8"
        error={errors.semesterCount}
      />

      {/* Dynamic Departments */}

      <div>

        <label className="mb-2 block font-medium text-slate-700">
          Department Names
        </label>

        <div className="space-y-3">

          {formData.departments.map((department, index) => (

            <div
              key={index}
              className="flex gap-3"
            >

              <input
                type="text"
                value={department}
                placeholder={`Department ${index + 1}`}
                onChange={(e) =>
                  updateDepartment(index, e.target.value)
                }
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() => removeDepartment(index)}
                className="rounded-xl bg-red-500 px-5 text-white hover:bg-red-600"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <button
          type="button"
          onClick={addDepartment}
          className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Department
        </button>

        {errors.departments && (
          <p className="mt-2 text-sm text-red-600">
            {errors.departments}
          </p>
        )}

      </div>

    </div>
  );
}

export default AcademicStep;