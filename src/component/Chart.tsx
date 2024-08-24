"use client";
import * as React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: {
    time: string;
    value: number;
  }[];
}

// Define the component with dynamic data
const Chart: React.FC<ChartProps> = ({ data = [] }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tick={{ fontSize: 14 }} axisLine={{ stroke: "#ccc" }} tickLine={{ stroke: "#ccc" }} />
        <YAxis domain={[0, 1]} tick={{ fontSize: 14 }} axisLine={{ stroke: "#ccc" }} tickLine={{ stroke: "#ccc" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "transparent",
            borderRadius: "8px",
            border: "2px solid #ccc",
          }}
          labelStyle={{ color: "#" }}
          itemStyle={{ color: "#3366FF" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3366FF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <Line type="monotone" dataKey="value" stroke="#3366FF" strokeWidth={2} dot={false} isAnimationActive={true} fill="url(#gradient)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
