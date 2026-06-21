import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import ErrorPage from "../../pages/ErrorPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const ApplyLoan = () => {
    const location = useLocation();
    const loan = location.state?.loan;
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {
        isPending,
        isError,
        mutateAsync,
        reset: mutationReset,
    } = useMutation({
        mutationFn: async (payload) =>
            await axiosSecure.post("/request", payload),
        onSuccess: () => {
            mutationReset();
        },
        onError: (err) => {
            console.log(err);
            toast.error("Failed to apply loan");
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data) => {
        const loanData = {
            loanId: data.loanId,
            email: data.email,
            title: data.title,
            subtitle: data.subtitle,
            amount: Number(data.amount),
            interestRate: Number(data.interestRate),
            termMonths: Number(data.termMonths),
            approvedCount: Number(data.approvedCount),
            description: data.description,
            monthlyPayment: Number(data.monthlyPayment),
            status: data.status,
            createdAt: new Date().toISOString(),
        };

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to apply for this loan?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#84cc16",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, Apply!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await mutateAsync(loanData);
                    reset();

                    Swal.fire({
                        title: "Success!",
                        text: "Loan Applied Successfully",
                        icon: "success",
                    });

                } catch (err) {
                    console.log(err);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to apply loan",
                        icon: "error",
                    });
                }
            }
        });
    };

    if (isPending) return <LoadingSpinner />;
    if (isError) return <ErrorPage />;

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Reusable Input Style */}
                    {/** NOTE: h-12 + flex items-center = perfect vertical centering */}

                    {/* Loan ID */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Loan ID</label>
                        <input
                            defaultValue={loan?.loanId}
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none"
                            placeholder="LN-1001"
                            {...register("loanId", { required: "Loan ID required" })}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={user?.email}
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
                        )}
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Title</label>
                        <input
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            id='title'
                            type='text'
                            defaultValue={loan?.title}
                            {...register("title", { required: true })}

                        />
                        {errors.title && (
                            <p className='text-red-500 text-xs mt-1'>{errors.title.message}</p>
                        )}
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Subtitle</label>
                        <input
                            id='subtitle'
                            type='text'
                            defaultValue={loan?.subtitle}
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            {...register("subtitle", { required: true })}
                        />
                        {errors.subtitle && (
                            <p className='text-red-500 text-xs mt-1'>{errors.subtitle.message}</p>
                        )}
                    </div>

                    {/* Amount */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Amount</label>
                        <input
                            id='amount'
                            name='amount'
                            type="number"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.amount}
                            {...register("amount", { required: true })}
                        />
                        {errors.amount && (
                            <p className='text-red-500 text-xs mt-1'>{errors.amount.message}</p>
                        )}
                    </div>

                    {/* Interest */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Interest Rate (%)</label>
                        <input
                            id='interestRate'
                            name='interestRate'
                            type="number"
                            step="0.1"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.interestRate}
                            {...register("interestRate", { required: true })}
                        />
                        {errors.interestRate && (
                            <p className='text-red-500 text-xs mt-1'>{errors.interestRate.message}</p>
                        )}
                    </div>

                    {/* Term */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Term (Months)</label>
                        <input
                            id="termMonths"
                            name="termMonths"
                            type="number"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.termMonths}
                            {...register("termMonths", { required: true })}
                        />
                        {errors.termMonths && (
                            <p className='text-red-500 text-xs mt-1'>{errors.termMonths.message}</p>
                        )}
                    </div>

                    {/* Approved Count */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Approved Count</label>
                        <input
                            id="approvedCount"
                            name="approvedCount"
                            type="number"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.approvedCount}
                            {...register("approvedCount")}
                        />
                        {errors.approvedCount && (
                            <p className='text-red-500 text-xs mt-1'>{errors.approvedCount.message}</p>
                        )}
                    </div>

                    {/* Monthly Payment */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Monthly Payment</label>
                        <input
                            id="monthlyPayment"
                            name="monthlyPayment"
                            type="number"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.monthlyPayment}
                            {...register("monthlyPayment", { required: true })}
                        />
                        {errors.monthlyPayment && (
                            <p className='text-red-500 text-xs mt-1'>{errors.monthlyPayment.message}</p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Status</label>
                        <select
                            id="status"
                            name="status"
                            className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
                            {...register("status", { required: true })}
                        >
                            <option value="pending">Pending</option>

                        </select>
                        {errors.status && (
                            <p className='text-red-500 text-xs mt-1'>{errors.status.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 space-y-1">
                        <label className="text-sm text-gray-600">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg h-28 focus:ring-2 focus:ring-lime-400 outline-none"
                            defaultValue={loan?.description}
                            {...register("description", { required: true })}
                        />
                        {errors.description && (
                            <p className='text-red-500 text-xs mt-1'>{errors.description.message}</p>
                        )}
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full mt-6 my-btn"
                >
                    {isPending ? (
                        <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                        "Apply Loan"
                    )}
                </button>
            </form>
        </div>
    );
};

export default ApplyLoan;