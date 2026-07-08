function TechBadge({ text }) {
  return (
    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-md">
      <span className="text-sm font-medium text-slate-700">
        {text}
      </span>
    </div>
  );
}

export default TechBadge;