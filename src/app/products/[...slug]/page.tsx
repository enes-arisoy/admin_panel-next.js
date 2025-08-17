import { Product } from "@/types";
import React, { FC } from "react";
import { getProduct } from "@/utils/service";
import { notFound } from "next/navigation";
import ProductForm from "./../../../components/products/product-form";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

const page: FC<Props> = async ({ params }) => {
  // url deki parametreleri al
  const { slug } = await params;

  // düzenlenecek ürünün bilgilerinin tutulacağı değişken
  let product: Product | null = null;

  // düzenleme modundaysak düzenlenicek elemanın bilgilerini al
  if (slug[0] === "edit" && slug[1]) {
    try {
      // api isteği at
      product = await getProduct(slug[1]);
      
      // ürün bulunmadıysa: 404
      if (!product) return notFound();
    } catch (error) {
      // ürün bulunmadıysa: 404
      notFound();
    }
  }

  // sayfa başlığı
  const pageTitle = product ? "Edit Product" : "Create Product";

  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{pageTitle}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default page;
