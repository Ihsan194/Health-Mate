import DashboardLayout from "../layout/dashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your HealthMate dashboard. View your reports, vitals, and more.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-medium mb-2">Blood Pressure</h2>
          <p className="text-3xl font-semibold text-blue-600">120/80</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-medium mb-2">Sugar Level</h2>
          <p className="text-3xl font-semibold text-blue-600">95 mg/dL</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-medium mb-2">Weight</h2>
          <p className="text-3xl font-semibold text-blue-600">68 kg</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
