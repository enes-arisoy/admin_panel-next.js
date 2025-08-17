"use client";
import { ChartData } from "@/types";
import React, { FC } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

interface Props {
  data: ChartData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return <Line data={data} />;
};

export default LineGraph;
