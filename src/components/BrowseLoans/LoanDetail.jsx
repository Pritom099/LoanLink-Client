import { Percent, CalendarDays } from "lucide-react";

const LoanDetail = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-3 p-20">
            {/* Left Section */}
            <div className="lg:col-span-2 dark:text-black">
                <div className=" rounded-3xl border border-gray-300 bg-gray-50 p-10">
                    <h1 className="text-5xl font-bold text-black">$5,000 Microloan</h1>

                    <p className="mt-10 text-2xl text-gray-600">
                        Emergency funds for unexpected expenses
                    </p>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-3 gap-8">
                        <div>
                            <p className="mb-2 text-lg text-gray-500">Interest Rate</p>
                            <div className="flex items-center gap-2">
                                <Percent size={24} />
                                <span className="text-5xl font-bold">12.5%</span>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-lg text-gray-500">Loan Term</p>
                            <div className="flex items-center gap-2">
                                <CalendarDays size={24} />
                                <span className="text-5xl font-bold">24 mo</span>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-lg text-gray-500">Already Approved</p>
                            <span className="text-5xl font-bold">342+</span>
                        </div>
                    </div>

                    <hr className="my-10 border-gray-300" />

                    <p className="max-w-4xl text-xl leading-relaxed text-black">
                        Our 5,000 microloan is designed for those who need quick access to
                        funds for emergencies. Whether it's an unexpected medical bill, home
                        repair, or other urgent expenses, we can have you approved and funded
                        within hours.
                    </p>
                </div>

                <div className="border border-gray-300 rounded-3xl mt-8 p-10 bg-gray-50">
                    <h1 className="text-2xl font-bold mb-6">Key Features</h1>
                    <p className="text-lg mb-2 font-semibold">1. Approval in as little as 2 hours</p>
                    <p className="text-lg mb-2 font-semibold">2. Flexible 24-month repayment term</p>
                    <p className="text-lg mb-2 font-semibold">3. No hidden fees or prepayment penalties</p>
                    <p className="text-lg mb-2 font-semibold">4. 12.5% fixed interest rate</p>
                    <p className="text-lg font-semibold">5. Available to borrowers with various credit profiles</p>
                </div>

                <div className="flex gap-10 mt-8">
                    <div className="bg-gray-50 border border-gray-300 rounded-3xl p-8  w-1/2">
                        <h1 className="mb-4">Monthly Payment</h1>
                        <p className="text-2xl font-bold">$228</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 rounded-3xl p-8 w-1/2">
                        <h1 className="mb-4">Monthly Payment</h1>
                        <p className="text-2xl font-bold">$228</p>
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
                            defaultValue="5000"
                            className="w-full bg-transparent text-xl outline-none"
                        />
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Interest Rate</span>
                        <span className="font-semibold">12.5%</span>
                    </div>

                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Term</span>
                        <span className="font-semibold">24 months</span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-xl">
                        <span className="text-gray-500">Est. Monthly</span>
                        <span className="font-bold">$240</span>
                    </div>
                </div>

                <button className="mt-16 w-full rounded-xl bg-black py-4 text-xl font-semibold text-white transition hover:bg-gray-900">
                    Start Application
                </button>
            </div>
        </div>
    );
};

export default LoanDetail;