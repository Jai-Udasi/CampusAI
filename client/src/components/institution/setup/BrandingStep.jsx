function BrandingStep({
  formData,
  errors,
  handleChange,
})  {
  return (
    <div className="space-y-6">

      <div>
  <label className="mb-2 block font-medium text-slate-700">
    Primary Color
  </label>

  <input
    type="color"
    name="primaryColor"
    value={formData.primaryColor}
    onChange={handleChange}
    className={`h-14 w-full rounded-xl border p-2 ${
      errors.primaryColor
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.primaryColor && (
    <p className="mt-2 text-sm text-red-600">
      {errors.primaryColor}
    </p>
  )}
</div>

<div>
  <label className="mb-2 block font-medium text-slate-700">
    Secondary Color
  </label>

  <input
    type="color"
    name="secondaryColor"
    value={formData.secondaryColor}
    onChange={handleChange}
    className={`h-14 w-full rounded-xl border p-2 ${
      errors.secondaryColor
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.secondaryColor && (
    <p className="mt-2 text-sm text-red-600">
      {errors.secondaryColor}
    </p>
  )}
</div>

    </div>
  );
}

export default BrandingStep;