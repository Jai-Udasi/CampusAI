function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />

    </div>
  );
}

export default AuthInput;