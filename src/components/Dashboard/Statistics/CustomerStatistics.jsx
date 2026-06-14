import { CiViewList } from "react-icons/ci";
import { FaArrowRight, FaCheckCircle, FaDollarSign, FaHandHoldingUsd, FaRegClock } from "react-icons/fa";
import { RiFirefoxBrowserLine } from "react-icons/ri";
import { Link } from "react-router";
import CustomerChart from "./CustomerChart";
import BalanceChart from "./BalanceChart";


const CustomerStatistics = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                <p className="text-lg text-gray-700">Welcome back! Here's an overview of your account</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-5">

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
                                <span className="text-2xl"><FaCheckCircle /></span>
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

            <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-10">
                <div className="col-span-2 space-y-10">
                    <div className="border border-gray-300 rounded-xl p-5">
                        <h1 className="text-xl font-bold mb-7">Loan Activity</h1>
                        <CustomerChart></CustomerChart>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-5">
                        <h1 className="text-xl font-bold mb-7">Account Balance</h1>
                        <BalanceChart></BalanceChart>      
                    </div>
                </div>


                <div className="col-span-1">
                    <div className=" p-5 border border-gray-400 rounded-xl">
                        <h1 className="font-bold">Quick Actions</h1>
                        <div className="flex flex-col py-5 px-4 gap-3">
                            <Link className="my-btn"><RiFirefoxBrowserLine className="text-xl"/>Browse Loans</Link>
                            <Link className="my-btn"><CiViewList  className="text-xl"/>View My Loans</Link>
                        </div>
                    </div>

                    <div className=" p-5 border border-gray-400 rounded-xl mt-8">
                        <h1 className="font-bold mb-10">Recent Loans</h1>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between  border-b pb-3">
                                <div>
                                    <p className="font-bold">$5,000</p>
                                    <p>Jun 15, 2024</p>
                                </div>
                                <div className="border border-gray-400 rounded-xl bg-green-500 py-1 px-3">
                                    <p className="text-sm">Active</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  border-b pb-3">
                                <div>
                                    <p className="font-bold">$10,000</p>
                                    <p>May 20, 2024</p>
                                </div>
                                <div className="border border-gray-400 rounded-xl bg-green-500 py-1 px-3">
                                    <p className="text-sm">Active</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  border-b pb-3">
                                <div>
                                    <p className="font-bold">$3,000</p>
                                    <p>Apr 10, 2024</p>
                                </div>
                                <div className="border border-gray-400 rounded-xl bg-green-100 py-1 px-3">
                                    <p className="text-sm">Completed</p>
                                </div>
                            </div>
                        </div>

                        <Link className="our-btn w-full mt-5">View All <FaArrowRight className="text-xl text-center ml-1"/></Link>
                    </div>

                    <div className=" p-5 border border-gray-400 bg-gray-200 rounded-xl mt-8">
                        <h1 className="font-bold mb-5">Need Help?</h1>
                        <p>Contact our support team for any questions about your loans or account.</p>
                        <button className="our-btn mt-6 w-full">Contact Support</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerStatistics;