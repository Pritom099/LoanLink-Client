import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const loanId = params.get("loanId");
        const amount = params.get("amount");

        if (loanId && amount) {
            axiosSecure.patch(`/update-payment/${loanId}`, {
                amount: Number(amount)
            })
            .then(() => {
                toast.success("Payment updated ✅");
                queryClient.invalidateQueries(["myLoans"]);
                queryClient.invalidateQueries(["allRequests"]);

                setTimeout(() => {
                    navigate("/dashboard/my-loans");
                }, 1500);
            })
            .catch(() => {
                toast.error("Update failed ❌");
            });
        }
    }, [axiosSecure, params, navigate, queryClient]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-green-600">
                Payment Successful ✅
            </h1>
        </div>
    );
};

export default PaymentSuccess;