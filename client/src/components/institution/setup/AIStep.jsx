import FormInput from "../../forms/FormInput";

function AIStep({
  formData,
  handleChange,
}) {
  return (
    <div className="space-y-6">

      <FormInput
        label="Campus AI Name"
        name="aiAssistantName"
        value={formData.aiAssistantName}
        onChange={handleChange}
        placeholder="CampusAI"
      />

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          name="enableAI"
          checked={formData.enableAI}
          onChange={(e) =>
            handleChange({
              target:{
                name:"enableAI",
                value:e.target.checked,
              },
            })
          }
        />

        Enable AI Assistant

      </label>

    </div>
  );
}

export default AIStep;