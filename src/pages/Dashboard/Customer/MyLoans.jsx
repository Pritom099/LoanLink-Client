

const MyLoans = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-2">My Loans</h1>
                <p className="text-lg text-gray-700">View and manage all your loans</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">

                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Total Outstanding</h2>
                    <p className="text-4xl font-bold">$11,500</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Monthly Payment Due</h2>
                    <p className="text-4xl font-bold">$892</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Completed Loans</h2>
                    <p className="text-4xl font-bold ">2</p>
                </div>
            </div>
        </div>
    );
};

export default MyLoans;