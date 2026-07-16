import DashboardLayout from "../layouts/DashboardLayout";

function InstitutionDashboard() {

useEffect(() => {

    const checkSetup = async () => {

        const adminSnapshot = await getDoc(
            doc(db,"admins",currentUser.uid)
        );

        const institutionId =
            adminSnapshot.data().institutionId;

        const institutionSnapshot =
            await getDoc(
                doc(db,"institutions",institutionId)
            );

        if (!institutionSnapshot.data().setupCompleted) {

            navigate("/institution/setup");

        }

    };

    checkSetup();

}, []);

  return (
    <DashboardLayout role="Institution">
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Institution Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Welcome to your CampusAI Institution Portal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">Students</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">Faculty</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">Departments</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default InstitutionDashboard;