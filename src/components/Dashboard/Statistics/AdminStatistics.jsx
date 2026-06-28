import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../shared/LoadingSpinner";
import { FaCheckCircle, FaCheckDouble, FaFileInvoiceDollar, FaHandHoldingUsd, FaMoneyBillWave, FaRegClock, FaWallet } from "react-icons/fa";
//import useAuth from "../../../hooks/useAuth";

const AdminStatistics = () => {
    //const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: requests = [], isLoading } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/request');
            return data;
        }
    });
    const totalDisbursed = requests
        .filter(item => item.status === "active" || item.status === "completed")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalCollected = requests.reduce(
        (sum, item) => sum + Number(item.paidAmount || 0),
        0
    );
    const outstanding = requests
        .filter(item => item.status === "active")
        .reduce(
            (sum, item) => sum + (Number(item.amount) - Number(item.paidAmount || 0)),
            0
        );

    const pendingLoans = requests.filter(
        item => item.status === "pending"
    ).length;

    const activeLoans = requests.filter(
        item => item.status === "active"
    ).length;

    const completedLoans = requests.filter(
        item => item.status === "completed"
    ).length;

    const totalRequests = requests.length;
    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

            {/* Total Loan Requests */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Total Requests</h2>
                            <p className="text-4xl font-bold">{totalRequests}</p>
                            <p>All loan applications</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-xl">
                            <FaFileInvoiceDollar className="text-3xl text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Total Disbursed */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Total Disbursed</h2>
                            <p className="text-4xl font-bold">${totalDisbursed}</p>
                            <p>Total amount approved</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-xl">
                            <FaMoneyBillWave className="text-3xl text-green-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Total Collected */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Total Collected</h2>
                            <p className="text-4xl font-bold">${totalCollected}</p>
                            <p>Repayments received</p>
                        </div>
                        <div className="bg-emerald-100 p-4 rounded-xl">
                            <FaWallet className="text-3xl text-emerald-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Outstanding */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Outstanding</h2>
                            <p className="text-4xl font-bold">${outstanding}</p>
                            <p>Remaining balance</p>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-xl">
                            <FaHandHoldingUsd className="text-3xl text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Loans */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Active Loans</h2>
                            <p className="text-4xl font-bold">{activeLoans}</p>
                            <p>Currently running</p>
                        </div>
                        <div className="bg-cyan-100 p-4 rounded-xl">
                            <FaCheckCircle className="text-3xl text-cyan-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pending Loans */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Pending Loans</h2>
                            <p className="text-4xl font-bold">{pendingLoans}</p>
                            <p>Awaiting approval</p>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-xl">
                            <FaRegClock className="text-3xl text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Completed Loans */}
            <div className="card bg-base-100 border border-gray-300">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">Completed Loans</h2>
                            <p className="text-4xl font-bold">{completedLoans}</p>
                            <p>Fully repaid loans</p>
                        </div>
                        <div className="bg-lime-100 p-4 rounded-xl">
                            <FaCheckDouble className="text-3xl text-lime-600" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminStatistics;