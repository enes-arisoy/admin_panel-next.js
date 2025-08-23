import React, { FC, Suspense } from "react";
import icon1 from "../assets/images/icon-1.webp";
import icon2 from "../assets/images/icon-2.webp";
import icon3 from "../assets/images/icon-3.webp";
import icon4 from "../assets/images/icon-4.png";
import Card from "@/components/home/card";
import SalesChart from "@/components/home/sales-chart";
import CategoryChart from "@/components/home/category-chart";
import Loading from "@/components/loader/loading";

const Home: FC = () => {
  const cards = [
    { icon: icon1, label: "Total Users", value: 1576 },
    { icon: icon2, label: "Total Order", value: 312 },
    { icon: icon3, label: "Total Sales", value: (51475435).toLocaleString() },
    { icon: icon4, label: "Total Products", value: 1716 },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Panel</h1>

      <Suspense fallback={<Loading />}>
        <section className="grid md:grid-cols-2 gap-5 my-10">
          {cards.map((i, key) => (
            <Card key={key} item={i} />
          ))}
        </section>

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

export default Home;
