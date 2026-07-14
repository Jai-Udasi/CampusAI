function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Side */}

       <div className="hidden lg:flex relative w-1/2 bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100 items-center justify-center overflow-hidden p-16">
        <div className="absolute h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
        <div className="max-w-md text-slate-900">

          <img
            src="/brand/campusai-logo.svg"
            alt="CampusAI"
            className="h-16 mb-8"
          />

          <h1 className="text-5xl font-bold leading-tight">
            Welcome to CampusAI
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            AI-powered campus management platform for students,
            faculty and institutions.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex flex-1 items-center justify-center p-8">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;