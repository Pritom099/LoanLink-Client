import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", balance: 12000 },
  { month: "Feb", balance: 18000 },
  { month: "Mar", balance: 21000 },
  { month: "Apr", balance: 28000 },
  { month: "May", balance: 30000 },
  { month: "Jun", balance: 35000 },
];

const BalanceChart = () => {
  return (
    <div className="w-full h-[350px] bg-white p-4 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

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