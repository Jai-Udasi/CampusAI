import ErrorMessage from "./ErrorMessage";

function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl px-5 py-4 outline-none transition ${
          error
            ? "border border-red-500"
            : "border border-slate-300 focus:border-blue-600"
        }`}
      />

      <ErrorMessage message={error} />
    </div>
  );
}

export default FormTextarea;