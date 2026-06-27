import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import LoanTable from "./LoanTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyLoans = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: loans = [] } = useQuery({
        queryKey: ["myLoans", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-loans/${user.email}`);
            return res.data;
        }
    })

    const totalOutstanding = loans
        .filter(loan => loan.status === "active")
        .reduce((sum, loan) => {
            return sum + (loan.amount - (loan.paidAmount || 0));
        }, 0);

    const monthlyDue = loans
        .filter(loan => loan.status === "active")
        .reduce((sum, loan) => {
            return sum + loan.monthlyPayment;
        }, 0);

    const completedLoans = loans.filter(
        loan => loan.status === "completed"
    ).length;


    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-2">My Loans</h1>
                <p className="text-lg text-gray-700">View and manage all your loans</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">

                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Total Outstanding</h2>
                    <p className="text-4xl font-bold">${totalOutstanding}</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Monthly Payment Due</h2>
                    <p className="text-4xl font-bold">${monthlyDue}</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Completed Loans</h2>
                    <p className="text-4xl font-bold ">{completedLoans}</p>
                </div>

            </div>

            <div className="p-5 mt-8">
                <div className="border border-gray-300 rounded-xl ">
                    <LoanTable loans={loans}></LoanTable>
                </div>
            </div>

            <div className="p-5 mt-8">
                <div className="space-y-7 border border-gray-300 rounded-xl py-8 text-center bg-gray-100">
                    <h1 className="text-2xl font-bold">Need More Funds?</h1>
                    <p className="text-lg text-gray-500">Browse our loan options and apply for additional financing</p>
                    <Link to={'/browse-loans'} className="my-btn">Browse Loans <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default MyLoans;