import DashboardLayout from "../layout/dashboardLayout";

export default function ViewReport() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">View Report</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-medium mb-2">Blood Test Report</h2>
        <iframe
          src="/sample-report.pdf"
          title="Report Preview"
          className="w-full h-96 border rounded-md mb-4"
        ></iframe>

        <h3 className="text-lg font-medium mb-2">AI Summary</h3>
        <p className="text-gray-600">
          The report shows normal glucose and cholesterol levels. Slight vitamin D deficiency noted.
        </p>
      </div>
    </DashboardLayout>
  );
}
