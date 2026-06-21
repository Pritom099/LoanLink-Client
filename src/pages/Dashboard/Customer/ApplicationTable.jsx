

const ApplicationTable = ({loans}) => {
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
          {loans.map((loan, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{loan.loanId}</td>
              <td className="px-4 py-3">{loan.title}</td>
              <td className="px-4 py-3 font-semibold">${loan.amount}</td>
              <td className="px-4 py-3">{loan.createdAt}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    loan.status === "Approved"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {loan.status}
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