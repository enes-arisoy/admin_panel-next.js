import { getProducts } from "@/utils/service";
import Link from "next/link";
import { FC, Suspense } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "./../../components/products/card";
import Loading from "@/components/loader/loading";

const Products: FC = async () => {
  const products = await getProducts();

  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
            <p className="text-gray-500">Manage all your products</p>
          </div>

          <Link
            href="/products/create"
            className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 roundex-xl font-semibold hover:from-blue-700 hover:indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FaPlus />
            Add New Product
          </Link>
        </div>
        <Suspense fallback={<Loading />}>
          {/* Product List */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
