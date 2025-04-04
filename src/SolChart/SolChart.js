import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SolChart.scss";

const data = [];
const months = [
  "01.2024",
  "02.2024",
  "03.2024",
  "04.2024",
  "05.2024",
  "06.2024",
  "07.2024",
  "08.2024",
  "09.2024",
  "10.2024",
  "11.2024",
  "12.2024",
];

months.forEach((month, mIdx) => {
  for (let i = 0; i < 15; i++) {
    const forceBuy = Math.random() > 0.5;
    const buy = forceBuy ? Math.floor(Math.random() * 3000) : 0;
    const sell = !forceBuy ? -Math.floor(Math.random() * 2000) : 0;

    data.push({
      id: mIdx * 15 + i,
      month,
      buy,
      sell,
      price: Math.floor(50 + (Math.sin(i / 3 + mIdx) + 1) * 150),
    });
  }
});

const SOLChart = () => {
  return (
    <div className="chart-container">
      <h2>$SOL</h2>
      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          barCategoryGap="0%" // KHÍT hẳn
        >
          <CartesianGrid
            stroke="#dadada"
            vertical={false}
            horizontal={true}
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="id"
            tickFormatter={(value, index) =>
              index % 15 === 0 ? data[index].month : ""
            }
            interval={0}
          />

          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />

          <Tooltip />

          {/* Cột dày đẹp */}
          <Bar yAxisId="left" dataKey="buy" fill="#00FF91" barSize={10} />
          <Bar yAxisId="left" dataKey="sell" fill="#FF4F4F" barSize={10} />

          {/* Line giá */}
          {/* <Line
            yAxisId="right"
            type="monotone"
            dataKey="price"
            stroke="#00d5ff"
            dot={false}
            strokeWidth={2}
          /> */}
        </ComposedChart>
      </ResponsiveContainer>

      <div className="stats">
        <div>
          <p>First bought dates:</p>
          <strong>13.02.2017</strong>
        </div>
        <div>
          <p>Average buying price:</p>
          <strong>$18</strong>
        </div>
        <div>
          <p>Average selling price:</p>
          <strong>$22</strong>
        </div>
        <div>
          <p>Last sold date:</p>
          <strong>16.09.2024</strong>
        </div>
        <div>
          <p>Realized PNL:</p>
          <strong>$2500</strong>
        </div>
        <div>
          <p>Unrealized PNL:</p>
          <strong>$7000</strong>
        </div>
      </div>
    </div>
  );
};

export default SOLChart;
