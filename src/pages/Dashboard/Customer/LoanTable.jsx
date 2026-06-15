const loans = [
  {
    amount: "$5,000",
    rate: "12.5%",
    balance: "$2,500",
    next: "Jul 15, 2024",
    monthly: "$228",
    status: "Active",
  },
  {
    amount: "$10,000",
    rate: "11%",
    balance: "$5,250",
    next: "Jul 20, 2024",
    monthly: "$317",
    status: "Active",
  },
  {
    amount: "$3,000",
    rate: "13.5%",
    balance: "$0",
    next: "N/A",
    monthly: "$0",
    status: "Completed",
  },
  {
    amount: "$7,500",
    rate: "11.2%",
    balance: "$3,750",
    next: "Jul 10, 2024",
    monthly: "$347",
    status: "Active",
  },
  {
    amount: "$4,500",
    rate: "12%",
    balance: "$0",
    next: "N/A",
    monthly: "$0",
    status: "Completed",
  },
];

const LoanTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-sm text-left">
        
        {/* Header */}
        <thead className="border-b font-semibold text-gray-700">
          <tr>
            <th className="px-4 py-3">Loan Amount</th>
            <th className="px-4 py-3">Interest Rate</th>
            <th className="px-4 py-3">Outstanding Balance</th>
            <th className="px-4 py-3">Next Payment</th>
            <th className="px-4 py-3">Monthly Payment</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {loans.map((loan, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              
              <td className="px-4 py-3 font-semibold">{loan.amount}</td>
              <td className="px-4 py-3">{loan.rate}</td>
              <td className="px-4 py-3">{loan.balance}</td>
              <td className="px-4 py-3">{loan.next}</td>
              <td className="px-4 py-3">{loan.monthly}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    loan.status === "Active"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {loan.status}
                </span>
              </td>

              {/* Action */}
              <td className="px-4 py-3">
                <button className="flex items-center gap-1 text-sm font-medium hover:underline">
                  Details →
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;