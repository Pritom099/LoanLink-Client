
const BrowseLoans = () => {
    return (
        <div>
            <div className="p-10 border-b">
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
                        className="w-full outline-none bg-transparent"
                    />
                </label>
            </div>
        </div>
    );
};

export default BrowseLoans;