"use client";

import { ChartData } from "@/types";
import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: ChartData;
}

const DoughnutGraph: FC<Props> = ({ data }) => {
  return (
    <Doughnut
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default DoughnutGraph;
