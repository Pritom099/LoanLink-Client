import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoanCard from "./LoanCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import { useState } from "react";

const BrowseLoans = () => {
    const [search, setSearch] = useState("");
    const axiosSecure = useAxiosSecure();

    const { data: loans = [], isLoading, isError } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get('/loans');
            return res.data;
        }
    })

    const filteredLoans = loans.filter(loan =>
        loan.title?.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (isLoading) return <LoadingSpinner></LoadingSpinner>;
    if (isError) return <ErrorPage></ErrorPage>;

    return (
        <div>
            <div className="py-10 px-20 border-b">
                <h1 className="text-4xl font-bold mb-5">Browse All Loans</h1>
                <p className="text-lg text-gray-500">Find the perfect microloan option for your needs</p>
            </div>

            <div className="py-10 px-20">
                <label className="flex items-center gap-2 border border-gray-300 focus-within:border-blue-800 rounded-lg px-3 py-2 w-full max-w-sm">
                    <svg
                        className="h-5 w-5 opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>

                    <input
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none bg-transparent"
                    />
                </label>
                <p className="mt-8 text-lg text-gray-500">Showing {filteredLoans.length} loans:</p>
            </div>

            <div className="py-5 px-10 md:px-20">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 dark:text-black">
                    {
                        filteredLoans.map(loan => (
                            <LoanCard key={loan._id} loan={loan}></LoanCard>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default BrowseLoans;