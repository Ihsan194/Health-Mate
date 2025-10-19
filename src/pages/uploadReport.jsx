import DashboardLayout from "../layout/dashboardLayout";

export default function UploadReport() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Upload Report</h1>

      <form className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <label className="block mb-3">
          <span className="text-sm text-gray-600">Report Type</span>
          <input
            type="text"
            placeholder="Blood Test, X-ray, etc."
            className="w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm text-gray-600">Date</span>
          <input type="date" className="w-full mt-1 p-2 border rounded-md" />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-gray-600">Upload File</span>
          <input type="file" className="w-full mt-1 p-2 border rounded-md" />
        </label>

        <button className="w-full bg-[#0a66c2] text-white py-2 rounded-md hover:bg-blue-700">
          Upload
        </button>
      </form>
    </DashboardLayout>
  );
}
