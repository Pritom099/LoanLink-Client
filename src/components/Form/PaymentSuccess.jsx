import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const PaymentSuccess = () => {

    const [params] = useSearchParams();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    useEffect(() => {
        const loanId = params.get("loanId");
        const amount = params.get("amount");

        if (loanId && amount) {
            axiosSecure.patch(`/update-payment/${loanId}`, {
                amount: parseFloat(amount),
            })
                .then(() => {
                    queryClient.invalidateQueries(["myLoans"]);
                    setTimeout(() => {
                        navigate("/dashboard/my-loans");
                    }, 1500);
                });
        }
    }, [axiosSecure, params, queryClient, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-green-600">Payment Successful ✅</h1>
            <p className="mt-3">Your payment has been processed.</p>
        </div>
    );
};

export default PaymentSuccess;