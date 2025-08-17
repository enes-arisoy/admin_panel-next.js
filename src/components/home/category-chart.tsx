import { getProducts } from "@/utils/service";
import React, { FC } from "react";

import DoughnutGraph from "./../graphics/doughnut-graph";

const CategoryChart: FC = async () => {
  // api den ürünleri al
  const Products = await getProducts();
  // kategorileri diziye çevir
  const labels = [...new Set(Products.map((product) => product.category))];
  // ürünlerin kategori başına kaç adet olduğunu hesaplayalım
  const object: Record<string, number> = {};
  Products.forEach((product) => {
    object[product.category] = (object[product.category] || 0) + 1;
  });

  // grafik için gerekli olan veriyi hazırla
  const data = {
    labels,
    datasets: [
      {
        label: "Product Amounts",
        data: Object.values(object),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle mb-5">Category</h2>
      <DoughnutGraph data={data} />
    </div>
  );
};

export default CategoryChart;
