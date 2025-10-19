import DashboardLayout from "../layout/dashboardLayout";

export default function Timeline() {
  const items = [
    { date: "2025-10-10", type: "BP Reading", detail: "120/80" },
    { date: "2025-10-11", type: "Sugar Level", detail: "98 mg/dL" },
    { date: "2025-10-12", type: "Report Upload", detail: "Blood Test" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Timeline View</h1>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="text-blue-600 font-semibold w-32">{item.date}</div>
            <div>
              <div className="font-medium">{item.type}</div>
              <div className="text-gray-600">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
