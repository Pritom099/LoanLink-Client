import { RiDeleteBinLine } from "react-icons/ri";

const RequestsTable = ({ loans, handleApprove, handleDelete }) => {

  const getNextPaymentDate = (createdAt) => {
    const startDate = new Date(createdAt);
    const today = new Date();

    let nextDate = new Date(startDate);

    while (nextDate <= today) {
      nextDate.setMonth(nextDate.getMonth() + 1);
    }

    return nextDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-sm text-left">

        {/* Header */}
        <thead className="border-b font-semibold text-gray-700">
          <tr>
            <th className="px-4 py-3">Loan Amount</th>
            <th className="px-4 py-3">Interest Rate</th>
            <th className="px-4 py-3">Outstanding</th>
            <th className="px-4 py-3">Next Payment</th>
            <th className="px-4 py-3">Monthly</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-3 py-3">Delete</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id} className="border-b hover:bg-gray-50">

              {/* Amount */}
              <td className="px-4 py-3 font-semibold">
                ${loan.amount}
              </td>

              {/* Interest */}
              <td className="px-4 py-3">
                {loan.interestRate}%
              </td>

              {/* Outstanding */}
              <td className="px-4 py-3">
                ${Math.max(0, loan.amount - (loan.paidAmount || 0))}
              </td>

              {/* Next Payment */}
              <td className="px-4 py-3">
                {loan.createdAt ? getNextPaymentDate(loan.createdAt) : "N/A"}
              </td>

              {/* Monthly */}
              <td className="px-4 py-3">
                ${loan.monthlyPayment}
              </td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${loan.status === "active"
                    ? "bg-black text-white"
                    : loan.status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-gray-200 text-gray-700"
                    }`}
                >
                  {loan.status}
                </span>
              </td>

              {/* Action */}
              <td className="px-4 py-3">

                {/* Pending → Approve */}
                {loan.status === "pending" && (
                  <button
                    onClick={() => handleApprove(loan._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                )}

                {/* Active */}
                {loan.status === "active" && (
                  <span className="text-blue-500 text-sm">
                    Running
                  </span>
                )}

                {/* Completed */}
                {loan.status === "completed" && (
                  <span className="text-gray-500 text-sm">
                    Done
                  </span>
                )}

              </td>

              <td className="px-4 py-3 text-xl cursor-pointer text-red-500" onClick={() => handleDelete(loan._id)} >
                <RiDeleteBinLine />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;