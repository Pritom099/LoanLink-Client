import { useState } from "react";
import LoanModal from "../../../components/Form/LoanModal";

const LoanTable = ({ loans }) => {
    const [selectedLoan, setSelectedLoan] = useState(null);

    const getNextPaymentDate = (createdAt) => {
        const startDate = new Date(createdAt);
        const today = new Date();
        let nextDate = new Date(startDate);
        while (nextDate <= today) {
            nextDate.setMonth(nextDate.getMonth() + 1);
        }
        return nextDate.toLocaleDateString();
    };

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
                        <th className="px-4 py-3">Payment</th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody>
                    {loans.map((loan, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">

                            <td className="px-4 py-3 font-semibold">${loan.amount}</td>
                            <td className="px-4 py-3">{loan.interestRate}%</td>
                            <td className="px-4 py-3"> ${loan.amount - (loan.paidAmount || 0)}</td>
                            <td className="px-4 py-3">{loan.createdAt ? getNextPaymentDate(loan.createdAt) : "N/A"}</td>
                            <td className="px-4 py-3">${loan.monthlyPayment}</td>

                            {/* Status */}
                            <td className="px-4 py-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${loan.status === "active"
                                        ? "bg-black text-white"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {loan.status}
                                </span>
                            </td>

                            {/* Action */}
                            <td className="px-4 py-2">
                                <button
                                    className="my-btn"
                                    onClick={() => {

                                        setSelectedLoan(loan);
                                        document.getElementById('loan_modal').showModal();
                                    }}
                                >
                                    Pay
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
                <LoanModal loan={selectedLoan}></LoanModal>
            </table>
        </div>
    );
};

export default LoanTable;