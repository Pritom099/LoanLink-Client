import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import ErrorPage from "../../pages/ErrorPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ApplyLoan = () => {
  const axiosSecure = useAxiosSecure();

  // mutation
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.post("/loans", payload),
    onSuccess: () => {
      toast.success("Loan Added Successfully");
      mutationReset();
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to add loan");
    },
  });

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const loanData = {
        loanId: data.loanId,
        title: data.title,
        subtitle: data.subtitle,
        amount: Number(data.amount),
        interestRate: Number(data.interestRate),
        termMonths: Number(data.termMonths),
        approvedCount: Number(data.approvedCount),
        description: data.description,
        features: data.features.split(","), // comma separated
        monthlyPayment: Number(data.monthlyPayment),
        status: data.status,
        createdAt: new Date().toISOString(),
      };

      await mutateAsync(loanData);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Loan ID */}
          <div>
            <label>Loan ID</label>
            <input
              className="input"
              placeholder="LN-1001"
              {...register("loanId", { required: "Loan ID required" })}
            />
            {errors.loanId && <p className="text-red-500">{errors.loanId.message}</p>}
          </div>

          {/* Title */}
          <div>
            <label>Title</label>
            <input
              className="input"
              placeholder="Microloan"
              {...register("title", { required: "Title required" })}
            />
          </div>

          {/* Subtitle */}
          <div>
            <label>Subtitle</label>
            <input
              className="input"
              placeholder="Short description"
              {...register("subtitle", { required: "Subtitle required" })}
            />
          </div>

          {/* Amount */}
          <div>
            <label>Amount</label>
            <input
              type="number"
              className="input"
              {...register("amount", { required: true })}
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label>Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              className="input"
              {...register("interestRate", { required: true })}
            />
          </div>

          {/* Term */}
          <div>
            <label>Term (Months)</label>
            <input
              type="number"
              className="input"
              {...register("termMonths", { required: true })}
            />
          </div>

          {/* Approved Count */}
          <div>
            <label>Approved Count</label>
            <input
              type="number"
              className="input"
              {...register("approvedCount")}
            />
          </div>

          {/* Monthly Payment */}
          <div>
            <label>Monthly Payment</label>
            <input
              type="number"
              className="input"
              {...register("monthlyPayment", { required: true })}
            />
          </div>

          {/* Status */}
          <div>
            <label>Status</label>
            <select
              className="input"
              {...register("status", { required: true })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Features */}
          <div className="lg:col-span-2">
            <label>Features (comma separated)</label>
            <input
              className="input"
              placeholder="Fast approval, Low interest, Flexible repayment"
              {...register("features")}
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label>Description</label>
            <textarea
              className="input h-28"
              {...register("description", { required: true })}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 bg-lime-500 text-white py-3 rounded"
        >
          {isPending ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            "Add Loan"
          )}
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;