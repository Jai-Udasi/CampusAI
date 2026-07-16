import FormInput from "../../forms/FormInput";
import FormTextarea from "../../forms/FormTextarea";

function BasicInfoStep({
  formData,
  errors,
  handleChange,
}) {
  return (
    <div className="space-y-6">

      <FormInput
        label="Website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="https://yourcollege.edu"
        error={errors.website}
      />

      <FormInput
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="9876543210"
        error={errors.phone}
      />

      <FormInput
        label="Principal / Director"
        name="principalName"
        value={formData.principalName}
        onChange={handleChange}
        placeholder="Dr. ABC XYZ"
        error={errors.principalName}
      />

      <FormTextarea
        label="Institution Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter institution address"
        error={errors.address}
      />

    </div>
  );
}

export default BasicInfoStep;