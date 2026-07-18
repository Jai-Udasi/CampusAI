import ErrorMessage from "./ErrorMessage";

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  readOnly = false,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full rounded-xl px-5 py-4 outline-none transition ${
          readOnly
            ? "cursor-not-allowed bg-slate-100"
            : ""
        } ${
          error
            ? "border border-red-500"
            : "border border-slate-300 focus:border-blue-600"
        }`}
      />

      <ErrorMessage message={error} />
    </div>
  );
}

export default FormInput;