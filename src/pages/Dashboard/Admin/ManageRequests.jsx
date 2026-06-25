import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import RequestsTable from "./RequestsTable";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageRequests = () => {
    const axiosSecure = useAxiosSecure();
    const { data: loans = [], refetch } = useQuery({
        queryKey: ["allRequests"],
        queryFn: async () => {
            const res = await axiosSecure.get("/request");
            return res.data;
        }
    })

    const handleApprove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to approve this loan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#22c55e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/approve-loan/${id}`);
                    toast.success("Loan Approved Successfully ✅");
                    refetch();
                } catch (error) {
                    console.log(error);
                    toast.error("Failed to approve loan ❌");
                }
            }
        });
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this loan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/request/${id}`);
                    if (res.data.deletedCount > 0) {
                        toast.success("Loan deleted successfully");
                        refetch();
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("Delete failed");
                }
            }
        });
    };

    const totalRequests = loans.length;
    const approvedLoans = loans.filter(
        loan => loan.status === "active"
    ).length;

    const pendingLoans = loans.filter(
        loan => loan.status === "pending"
    ).length;


    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-2">My Loans</h1>
                <p className="text-lg text-gray-700">View and manage all your loans</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">

                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Total Requests</h2>
                    <p className="text-4xl font-bold">{totalRequests}</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Approved</h2>
                    <p className="text-4xl font-bold">{approvedLoans}</p>
                </div>
                <div className="card bg-base-100  border border-gray-300 rounded-2xl p-6">
                    <h2 className="card-title mb-5 text-lg text-gray-600">Pending</h2>
                    <p className="text-4xl font-bold ">{pendingLoans}</p>
                </div>

            </div>

            <div className="p-5 mt-8">
                <div className="border border-gray-300 rounded-xl ">
                    <RequestsTable loans={loans} handleApprove={handleApprove} handleDelete={handleDelete}></RequestsTable>
                </div>
            </div>

            <div className="p-5 mt-8">
                <div className="space-y-7 border border-gray-300 rounded-xl py-8 text-center bg-gray-100">
                    <h1 className="text-2xl font-bold">Need More Funds?</h1>
                    <p className="text-lg text-gray-500">Browse our loan options and apply for additional financing</p>
                    <Link className="my-btn">Browse Loans <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageRequests;