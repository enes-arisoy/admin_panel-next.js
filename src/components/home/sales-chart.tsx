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
    <div className="bg-white  rounded-lg px-3 md:px-5 py-5 shadow-md w-full max-w-full overflow-hidden box-border">
      <h2 className="subtitle mb-5">Sales</h2>
      <div className="relative h-60 md:h-80 lg:h-96 w-full max-w-full box-border">
        <LineGraph data={data} />
      </div>
    </div>
  );
};

export default SalesChart;
