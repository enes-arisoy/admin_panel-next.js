import React, { FC } from "react";
import TableWrapper from "./table-wrapper";
import { getOrders } from "@/utils/service";

const OrderTable: FC = async () => {
  const orders = await getOrders();
  const getColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-500";
      case "Shipped":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Order Date</th>
          <th>Product Count</th>
          <th>Total Price</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{order.id}</td>
            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>
            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>
            <td>{order.total_price}</td>
            <td>{order.shipping_address.country}</td>
            <td>
              <span
                className={`${getColor(
                  order.status
                )} text-white py-1 px-2 rounded-lg shadow w-full text-center`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default OrderTable;
