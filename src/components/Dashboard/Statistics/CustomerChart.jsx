import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";


const CustomerChart = ({ loans }) => {

    const grouped = {};

    loans.forEach((loan) => {
        const month = new Date(loan.createdAt).toLocaleString("default", { month: "short" });

        if (!grouped[month]) {
            grouped[month] = { month, approved: 0, disbursed: 0 };
        }

        grouped[month].approved += loan.amount;
        grouped[month].disbursed += loan.paidAmount || 0;
    });

    const chartData = Object.values(grouped);

    return (
        <div className="w-full h-[350px] bg-white p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>

                    {/* Grid */}
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* Axis */}
                    <XAxis dataKey="month" />
                    <YAxis />

                    {/* Tooltip */}
                    <Tooltip />

                    {/* Legend */}
                    <Legend />

                    {/* Bars */}
                    <Bar dataKey="approved" fill="#3B82F6"  />
                    <Bar dataKey="disbursed" fill="#10B981" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerChart;