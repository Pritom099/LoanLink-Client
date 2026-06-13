import { FaCheckCircle, FaDollarSign, FaHandHoldingUsd, FaRegClock } from "react-icons/fa";


const CustomerStatistics = () => {
    return (
        <div>
            <div className="p-10">
                <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                <p className="text-lg text-gray-700">Welcome back! Here's an overview of your account</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="card bg-base-100  border border-gray-300">
                    <div className="card-body">
                        <div className="flex items-center gap-10">
                            <div className="space-y-3">
                                <h2 className="card-title  ">Total Disbursed</h2>
                                <p className="text-4xl font-bold">$34,500</p>
                                <p>Loan amount received.</p>
                            </div>
                            <div className="bg-gray-200 p-3 rounded-2xl">
                                <span className="text-2xl"><FaDollarSign /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  border border-gray-300">
                    <div className="card-body">
                        <div className="flex items-center gap-10">
                            <div className="space-y-3">
                                <h2 className="card-title  ">Active Loans</h2>
                                <p className="text-4xl font-bold">3</p>
                                <p>Currently active loans.</p>
                            </div>
                            <div className="bg-gray-200 p-3 rounded-2xl">
                                <span className="text-2xl"><FaCheckCircle/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  border border-gray-300">
                    <div className="card-body">
                        <div className="flex items-center gap-10">
                            <div className="space-y-3">
                                <h2 className="card-title  ">Pending Applications</h2>
                                <p className="text-4xl font-bold">1</p>
                                <p>Awaiting approval.</p>
                            </div>
                            <div className="bg-gray-200 p-3 rounded-2xl">
                                <span className="text-2xl"><FaRegClock /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  border border-gray-300">
                    <div className="card-body">
                        <div className="flex items-center gap-10">
                            <div className="space-y-3">
                                <h2 className="card-title  ">Completed Loans</h2>
                                <p className="text-4xl font-bold">5</p>
                                <p>Successfully paid off.</p>
                            </div>
                            <div className="bg-gray-200 p-3 rounded-2xl">
                                <span className="text-2xl"><FaHandHoldingUsd /></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerStatistics;