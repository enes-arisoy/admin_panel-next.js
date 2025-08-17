import React, { FC, Suspense } from "react";
import OrderTable from "./../../components/table/order-table";
import Loading from "@/components/loader/loading";

interface Props {}

const Orders: FC<Props> = () => {
  return (
    <div className="page space-y-6">
      <h1 className="title">Orders</h1>
      <Suspense fallback={<Loading />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Orders;
