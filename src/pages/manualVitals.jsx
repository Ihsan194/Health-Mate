import DashboardLayout from "../layout/dashboardLayout";

export default function ManualVitals() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Add Manual Vitals</h1>

      <form className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <input type="text" placeholder="Blood Pressure" className="w-full mb-3 p-2 border rounded-md" />
        <input type="text" placeholder="Sugar Level" className="w-full mb-3 p-2 border rounded-md" />
        <input type="text" placeholder="Weight" className="w-full mb-3 p-2 border rounded-md" />
        <textarea placeholder="Notes" className="w-full mb-4 p-2 border rounded-md"></textarea>

        <button className="w-full bg-[#0a66c2] text-white py-2 rounded-md hover:bg-blue-700">
          Save
        </button>
      </form>
    </DashboardLayout>
  );
}
