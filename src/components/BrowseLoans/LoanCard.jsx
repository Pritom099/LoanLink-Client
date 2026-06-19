import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router";

const LoanCard = ({ loan }) => {
    return (

        <div className="max-w-md rounded-2xl border border-gray-400 bg-gray-50 p-8">

            {/* Amount */}
            <h2 className="text-4xl font-bold text-black">${loan?.amount}</h2>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-lg">
                {loan?.subtitle}
            </p>

            {/* Loan Info */}
            <div className="mt-8 flex justify-between">
                <div>
                    <p className="text-gray-500">Interest Rate</p>
                    <p className="text-3xl font-bold">{loan?.interestRate}%</p>
                </div>

                <div>
                    <p className="text-gray-500">Term</p>
                    <p className="text-3xl font-bold">{loan?.termMonths} months</p>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-300" />

            {/* Approved Count */}
            <div className="flex items-center gap-3 text-black">
                <FiTrendingUp size={22} />
                <span className="text-2xl font-medium">{loan?.approvedCount} approved</span>
            </div>

            {/* Button */}
            <Link to={`/loan-details/${loan._id}`}
                className="mt-8 block w-full rounded-xl bg-black py-4 text-lg font-semibold text-white text-center transition hover:bg-gray-900"
            >
                View Details
            </Link>

        </div>



    );
};

export default LoanCard;