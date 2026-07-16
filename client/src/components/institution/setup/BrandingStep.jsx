function BrandingStep({
  formData,
  handleChange,
}) {
  return (
    <div className="space-y-6">

      <div>

        <label className="block font-medium">
          Primary Color
        </label>

        <input
          type="color"
          name="primaryColor"
          value={formData.primaryColor}
          onChange={handleChange}
          className="mt-2 h-12 w-24"
        />

      </div>

      <div>

        <label className="block font-medium">
          Secondary Color
        </label>

        <input
          type="color"
          name="secondaryColor"
          value={formData.secondaryColor}
          onChange={handleChange}
          className="mt-2 h-12 w-24"
        />

      </div>

    </div>
  );
}

export default BrandingStep;