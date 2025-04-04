import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import "./FLowChart.scss";
const data = [
  { time: "00:00", inflow: 5, outflow: -10, price: 120 },
  { time: "00:50", inflow: 9, outflow: -10, price: 120 },
  { time: "04:00", inflow: 8, outflow: -8, price: 150 },
  { time: "04:48", inflow: 7, outflow: -9, price: 160 },
  { time: "05:36", inflow: 3, outflow: -7, price: 170 },
  { time: "06:36", inflow: 3, outflow: -8, price: 170 },
  { time: "08:00", inflow: 15, outflow: -2, price: 120 },
  { time: "10:42", inflow: 22, outflow: -5, price: 120 },
  { time: "11:12", inflow: 2, outflow: -5, price: 180 },
  { time: "12:00", inflow: 5, outflow: -2, price: 200 },
  { time: "13:00", inflow: 8, outflow: -8, price: 200 },
  { time: "16:00", inflow: 21, outflow: -5, price: 260 },
  { time: "17:36", inflow: 20, outflow: -3, price: 270 },
  { time: "24:00", inflow: 8, outflow: -1, price: 220 },
];

const FlowChart = () => {
  return (
    <div className="exchange-flow-chart">
      <div className="tabs">
        <button className="tab">Price History</button>
        <button className="tab active">On-chain Exchange Flow</button>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="time"
            textAnchor="end"
            height={70}
            tickFormatter={(tick) => {
              const [hour, minute] = tick.split(":").map(Number);
              return minute === 0 && hour % 4 === 0 ? tick : "";
            }}
          />

          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />

          <Bar
            yAxisId="left"
            dataKey="inflow"
            name="Net inflow"
            barSize={50}
            fill="#3fffa0"
          />
          <Bar
            yAxisId="left"
            dataKey="outflow"
            name="Net outflow"
            barSize={50}
            fill="#ff6262"
          />
          <Line
            yAxisId="right"
            type="linear"
            dataKey="price"
            name="Price"
            stroke="#62d7ff"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlowChart;
