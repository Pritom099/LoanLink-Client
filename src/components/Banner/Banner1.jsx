import { Link } from "react-router";

const Banner1 = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-4  bg-base-200 py-20 px-10">
                <p className="btn border bg-white rounded-full p-5">Now processing 10,000+ microloans</p>
                <h1 className="text-5xl font-bold">Get Approved in Hours, Not Days</h1>
                <p className="text-lg text-gray-600">
                    Fast, transparent microloans with competitive rates. No hidden fees, no <br />
                    complicated processes. Just straightforward funding when you need it most.
                </p>
                <div>
                    <Link to='/browse-loans' className="my-btn mr-5">Browse Loans</Link>
                    <button className="our-btn">
                        Get Started Free
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 p-20 gap-10 text-center border-t mx-auto max-w-7xl">
                <div>
                    <p className="font-bold text-3xl">10K+</p>
                    <p className="text-gray-500">Loans Funded</p>
                </div>
                <div>
                    <p className="font-bold text-3xl">$50M</p>
                    <p className="text-gray-500">Total Funded</p>
                </div>
                <div>
                    <p className="font-bold text-3xl">4.8★</p>
                    <p className="text-gray-500">Customer Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Banner1;