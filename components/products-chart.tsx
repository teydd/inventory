"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface ChartData {
  week: string;
  products: number;
}

export default function ProductsChart({ data }: { data: ChartData[] }) {
  return (
    <>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#bd7171"
            ></CartesianGrid>
            <XAxis
              dataKey="week"
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            >
              
            </XAxis>
            <YAxis
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            ></YAxis>
            <Area
              type="monotone"
              dataKey="products"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              activeDot={{ fill: "#8b5cf6", r: 4 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "wheat",
                border: "1px solid #60dd6bff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: "500" }}
            ></Tooltip>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
