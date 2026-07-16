import DashboardLayout from "../layouts/DashboardLayout";
import SetupWizard from "../components/institution/setup/SetupWizard";

function InstitutionSetupPage() {
  return (
    <DashboardLayout role="Institution">
      <SetupWizard />
    </DashboardLayout>
  );
}

export default InstitutionSetupPage;