"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardPieChart() {
  return (
    <PieChart
      className="font-lexa"
      series={[
        {
          data: [
            { id: 0, value: 45, color: "#3366FF" },
            { id: 1, value: 23, color: "#4FBEAB" },
            { id: 2, value: 8, color: "#F3F5F8" },
          ],
          cx: 120,
          cy: 95,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      width={400}
      height={200}
    />
  );
}
