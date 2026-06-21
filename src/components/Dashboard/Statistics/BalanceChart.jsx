import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";


const BalanceChart = ({ loans }) => {
    const activeLoans = loans.filter(loan => loan.status === "active");
    const grouped = {};

    activeLoans.forEach((loan) => {
        const month = new Date(loan.createdAt).toLocaleString("default", { month: "short" });
        if (!grouped[month]) {
            grouped[month] = { month, balance: 0 };
        }
        const remaining = loan.amount - (loan.paidAmount || 0);

        grouped[month].balance += remaining;
    });

    const chartData = Object.values(grouped);


    return (
        <div className="w-full h-[350px] bg-white p-4 ">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData }>

                    {/* Grid */}
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* Axis */}
                    <XAxis dataKey="month" />
                    <YAxis />

                    {/* Tooltip */}
                    <Tooltip />

                    {/* Line */}
                    <Line
                        type="monotone"
                        dataKey="balance"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 7 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceChart;