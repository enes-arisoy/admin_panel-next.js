import { getOrders } from "../../utils/service";
import React, { FC } from "react";
import LineGraph from "../graphics/line-graph";

const SalesChart: FC = async () => {
  const orders = await getOrders();

  const labels = orders.map((order)=> new Date(order.order_date).toLocaleDateString("en-us", { month: "short", day: "numeric" }));

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: orders.map((order)=>order.total_price),
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle mb-5">Sales</h2>
      <LineGraph data={data} />
    </div>
  );
};

export default SalesChart;
