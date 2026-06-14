

const LoanApply = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-2">Loan Applications</h1>
                <p className="text-lg text-gray-700">Track the status of all your loan applications</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">

                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Total Applications</h2>
                    <p className="text-4xl font-bold">5</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Approved</h2>
                    <p className="text-4xl font-bold text-green-600">4</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Pending Review</h2>
                    <p className="text-4xl font-bold text-red-500">1</p>
                </div>



            </div>

            <div>
                
            </div>
        </div>
    );
};

export default LoanApply;