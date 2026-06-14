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

const data = [
  { month: "Jan", approved: 52000, disbursed: 45000 },
  { month: "Feb", approved: 58000, disbursed: 52000 },
  { month: "Mar", approved: 61000, disbursed: 48000 },
  { month: "Apr", approved: 72000, disbursed: 55000 },
  { month: "May", approved: 78000, disbursed: 65000 },
  { month: "Jun", approved: 92000, disbursed: 78000 },
];

const  CustomerChart = () => {
  return (
    <div className="w-full h-[350px] bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          
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
          <Bar dataKey="approved" fill="#3B82F6" name="Approved" />
          <Bar dataKey="disbursed" fill="#10B981" name="Disbursed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default  CustomerChart;