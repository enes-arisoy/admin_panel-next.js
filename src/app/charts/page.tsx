import CategoryChart from "@/components/home/category-chart";
import Loading from "@/components/loader/loading";
import React, { FC, Suspense } from "react";
import SalesChart from "./../../components/home/sales-chart";

const Charts: FC = () => {
  return (
    <div className="page space-y-6">
      <h1 className="title">Charts</h1>

      <Suspense fallback={<Loading />}>
        <section className="grid lg:grid-cols-14 gap-5 my-10">
          <div className="lg:col-span-9">
            <SalesChart />
          </div>
          <div className="lg:col-span-5">
            <CategoryChart />
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default Charts;
