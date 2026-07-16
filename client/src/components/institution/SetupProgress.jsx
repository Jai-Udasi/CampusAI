function SetupProgress({ currentStep }) {
  const steps = [
    "Institution",
    "Academic",
    "Branding",
    "Review",
  ];

  return (
    <div className="mb-12">

      <div className="flex items-center justify-between">

        {steps.map((step, index) => {
          const active = index + 1 <= currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition
                  ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {index + 1}
                </div>

                <span
                  className={`mt-2 text-sm ${
                    active
                      ? "font-semibold text-blue-600"
                      : "text-slate-500"
                  }`}
                >
                  {step}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-4 h-1 flex-1 rounded
                  ${
                    index + 1 < currentStep
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default SetupProgress;