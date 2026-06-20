import { Percent, CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../shared/LoadingSpinner";

const LoanDetail = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: loan = {}, isLoading } = useQuery({
        queryKey: ['loans', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans/${id}`);
            return res.data;
        },
        enabled: !!id
    })
    if (isLoading) return <LoadingSpinner></LoadingSpinner>;

    return (
        <div className="grid gap-6 lg:grid-cols-3 p-20">
            {/* Left Section */}
            <div className="lg:col-span-2 dark:text-black">
                <div className=" rounded-3xl border border-gray-300 bg-gray-50 p-10">
                    <h1 className="text-5xl font-bold text-black">${loan.amount} {loan.title}</h1>

                    <p className="mt-10 text-2xl text-gray-600">
                        {loan.subtitle}
                    </p>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-3 gap-8">
                        <div>
                            <p className="mb-2 text-lg text-gray-500">Interest Rate</p>
                            <div className="flex items-center gap-2">
                                <Percent size={30} />
                                <span className="text-4xl font-bold">{loan.interestRate}%</span>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-lg text-gray-500">Loan Term</p>
                            <div className="flex items-center gap-2">
                                <CalendarDays size={30} />
                                <span className="text-4xl font-bold">{loan.termMonths} months</span>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-lg text-gray-500">Already Approved</p>
                            <span className="text-4xl font-bold">{loan.approvedCount}+</span>
                        </div>
                    </div>

                    <hr className="my-10 border-gray-300" />

                    <p className="max-w-4xl text-xl leading-relaxed text-black">
                        {loan.description}
                    </p>
                </div>

                <div className="border border-gray-300 rounded-3xl mt-8 p-10 bg-gray-50">
                    <h1 className="text-2xl font-bold mb-6">Key Features</h1>
                    {
                        loan.features?.map((feature, index) => (
                            <p key={index} className="text-lg mb-2 font-semibold">
                                {index + 1}. {feature}
                            </p>
                        ))
                    }
                </div>

                <div className="flex gap-10 mt-8">
                    <div className="bg-gray-50 border border-gray-300 rounded-3xl p-8  w-1/2">
                        <h1 className="mb-4">Monthly Payment</h1>
                        <p className="text-2xl font-bold">${loan.monthlyPayment}</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 rounded-3xl p-8 w-1/2">
                        <h1 className="mb-4">Total Interest</h1>
                        <p className="text-2xl font-bold">${loan.totalInterest}</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="rounded-3xl border border-gray-300 bg-gray-50 p-8 dark:text-black">
                <h2 className="text-4xl font-bold">Apply Now</h2>

                <div className="mt-10">
                    <label className="mb-3 block text-lg font-medium">
                        Requested Amount
                    </label>

                    <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 py-3">
                        <span className="mr-3 text-2xl text-gray-500">$</span>
                        <input
                            type="number"
                            defaultValue={loan.amount}
                            className="w-full bg-transparent text-xl outline-none"
                        />
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Interest Rate</span>
                        <span className="font-semibold">{loan.totalInterest}%</span>
                    </div>

                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Term</span>
                        <span className="font-semibold">{loan.termMonths} months</span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Est. Monthly</span>
                        <span className="font-bold">${loan.monthlyPayment}</span>
                    </div>
                </div>

                <Link
                    to="/apply-loan"
                    state={{loan}}
                    className="mt-20 w-full rounded-xl bg-black py-4 text-xl font-semibold text-white transition hover:bg-gray-900 text-center block"
                >
                    Start Application
                </Link>
            </div>
        </div>
    );
};

export default LoanDetail;