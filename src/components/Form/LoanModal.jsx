import useAxiosSecure from "../../hooks/useAxiosSecure";

const LoanModal = ({ loan }) => {

    const axiosSecure = useAxiosSecure();
    if (!loan) return null;
    const remainingAmount = loan.amount - (loan.paidAmount || 0);
    const payableAmount = Math.min(
        loan.monthlyPayment,
        remainingAmount
    );

    const handlePayment = async () => {
        try {
            const res = await axiosSecure.post("/create-checkout-session", {
                amount: payableAmount,
                loanId: loan._id,
            });
            window.location.href = res.data.url;
        }
        catch (error) {
            console.log(error);
        }
    }




    return (
        <dialog id="loan_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-4">Make Payment</h3>

                <div className="space-y-2">
                    <p><strong>Loan Amount:</strong> ${loan.amount}</p>
                    <p><strong>Monthly Payment:</strong> ${loan.monthlyPayment}</p>
                    <p><strong>Paid:</strong> ${loan.paidAmount || 0}</p>
                    <p>
                        <strong>Remaining:</strong>{" "}
                        ${Math.max(0, remainingAmount)}
                    </p>
                </div>

                {/* Payment Button */}
                <div className="mt-6">
                    <button onClick={handlePayment} className="my-btn w-full">
                        Confirm Payment
                    </button>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default LoanModal;