const applications = [
  {
    id: "#1001",
    loanType: "Emergency Fund",
    amount: "$5,000",
    appliedDate: "Jun 20, 2024",
    status: "Approved",
  },
  {
    id: "#1002",
    loanType: "Business Loan",
    amount: "$10,000",
    appliedDate: "May 15, 2024",
    status: "Approved",
  },
  {
    id: "#1003",
    loanType: "Quick Cash",
    amount: "$3,000",
    appliedDate: "Apr 10, 2024",
    status: "Approved",
  },
  {
    id: "#1004",
    loanType: "Vehicle Loan",
    amount: "$7,500",
    appliedDate: "Jun 25, 2024",
    status: "Pending",
  },
  {
    id: "#1005",
    loanType: "Personal Loan",
    amount: "$4,500",
    appliedDate: "Mar 5, 2024",
    status: "Approved",
  },
];

const ApplicationTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-sm text-left">
        
        {/* Header */}
        <thead className="border-b font-semibold text-gray-700">
          <tr>
            <th className="px-4 py-3">Application ID</th>
            <th className="px-4 py-3">Loan Type</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Applied Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {applications.map((app, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{app.id}</td>
              <td className="px-4 py-3">{app.loanType}</td>
              <td className="px-4 py-3 font-semibold">{app.amount}</td>
              <td className="px-4 py-3">{app.appliedDate}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === "Approved"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {app.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-4">
                  <button className="font-medium hover:underline">
                    👁 View
                  </button>

                  <button className="font-medium hover:underline text-black ml-3">
                    ⬇ Download
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ApplicationTable;