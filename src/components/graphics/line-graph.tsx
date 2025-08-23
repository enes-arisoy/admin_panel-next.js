"use client";
import { ChartData } from "@/types";
import React, { FC } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

interface Props {
  data: ChartData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return (
    <Line
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default LineGraph;
