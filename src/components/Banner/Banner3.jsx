import { Clock, DollarSign, HandFist, LeafyGreen, Shield, Zap } from "lucide-react";
import { Link } from "react-router";


const Banner3 = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-20 bg-base-200">
                <h1 className="text-4xl font-bold">Why Choose LoanLink?</h1>
                <p className="text-lg text-gray-500 mt-5">We're committed to making microloans accessible to everyone</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto max-w-7xl mt-20">
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><Zap /></p>
                            <h2 className="card-title font-bold text-lg">Lightning Fast</h2>
                            <p>Get approved and funded in as little as a few hours</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><Shield /></p>
                            <h2 className="card-title font-bold text-lg">Secure & Safe</h2>
                            <p>Your data is encrypted and protected with military-grade security</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><DollarSign /></p>
                            <h2 className="card-title font-bold text-lg">Transparent Pricing</h2>
                            <p>No hidden fees, no surprises. All costs are upfront and clear</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><HandFist /></p>
                            <h2 className="card-title font-bold text-lg">24/7 Support</h2>
                            <p>Our customer support team is always ready to help</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><LeafyGreen></LeafyGreen></p>
                            <h2 className="card-title font-bold text-lg">Flexible Terms</h2>
                            <p>Choose repayment terms that fit your budget and lifestyle</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-300 p-5">
                        <div className="card-body gap-5">
                            <p><Clock /></p>
                            <h2 className="card-title font-bold text-lg">Early Repayment</h2>
                            <p>Pay off your loan early without any penalties or fees</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold">What Our Customers Say</h1>
                <p className="text-lg text-gray-500 mt-5">Join thousands of satisfied customers who got funded with LoanLink</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto max-w-7xl mt-20">
                    <div className="card bg-base-100 shadow-xl border border-gray-300">
                        <div className="card-body gap-5">
                            <p className="text-2xl font-bold">★ ★ ★ ★ ★</p>
                            <p>LoanLink made it incredibly easy to get the funding I needed for my business. The approval process was fast and transparent.</p>
                            <div>
                                <h2 className="card-title font-bold text-lg">Sarah Johnson</h2>
                                <p>Small Business Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-gray-300">
                        <div className="card-body gap-5">
                            <p className="text-2xl font-bold">★ ★ ★ ★ ★</p>
                            <p>I was impressed by how quickly I received the funds. The customer service team was also very helpful throughout the process.</p>
                            <div>
                                <h2 className="card-title font-bold text-lg">Michael Chen</h2>
                                <p>Freelancer</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-gray-300">
                        <div className="card-body gap-5">
                            <p className="text-2xl font-bold">★ ★ ★ ★ ☆</p>
                            <p>Affordable rates and flexible repayment options. LoanLink is definitely the way to go for anyone needing quick access to funds.</p>
                            <div>
                                <h2 className="card-title font-bold text-lg">Emma Rodriguez</h2>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-500 mt-5">Everything you need to know about LoanLink</p>

                <div className="w-full max-w-4xl mx-auto px-6 space-y-4 mt-20">

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-300  rounded-xl px-10">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-lg mr-10">
                            How long does the approval process take?
                        </div>
                        <div className="collapse-content text-gray-500">
                            Most applications are approved within 24-48 hours. In some cases, we can provide approval as quickly<br /> as a few hours.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-300 rounded-xl px-10">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-lg mr-10">
                            What are the eligibility requirements?
                        </div>
                        <div className="collapse-content text-gray-500">
                            You need to be at least 18 years old, have a valid government ID, and a regular source of income. We<br /> consider applicants with various credit profiles.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-300  rounded-xl px-10">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-lg mr-10">
                            Can I pay off my loan early?
                        </div>
                        <div className="collapse-content text-gray-500">
                            Yes! You can repay your loan at any time without any penalties. Early repayment can help you save on<br /> interest charges.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-300  rounded-xl px-10">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-lg mr-10">
                            Are there any hidden fees?
                        </div>
                        <div className="collapse-content text-gray-500">
                            No, we believe in complete transparency. All fees are clearly stated upfront before you apply. There are<br /> no surprise charges.
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-base-200 py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    {/* Heading Section */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Ready to Get Funded?
                    </h1>

                    <p className="text-lg text-base-content/70 leading-relaxed">
                        Join thousands of customers who have already gotten approved.
                        Start your<br/> application today and get a decision within hours.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 border-b">
                        <button className="my-btn">Apply Now</button>
                        <Link to='/browse-loans' className="our-btn">
                            Browse Loans
                        </Link>
                    </div>

                    {/* Subscribe Section */}
                    <div className="max-w-md mx-auto mt-6">
                        <p className="mb-4 text-base font-medium">
                            Subscribe for updates and special offers
                        </p>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered border border-gray-300 w-full px-5"
                            />
                            <button className="my-btn">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner3;