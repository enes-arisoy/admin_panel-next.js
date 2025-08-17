import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";
import DeleteButton from './delete-button';
interface Props {
  product: Product;
}
const Card: FC<Props> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
      {/* Ürün Resmi */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
              product.stock > 10
                ? "bg-green-500"
                : product.stock > 0
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {product.stock > 0 ? `${product.stock} adet` : "Stok Yok"}
          </span>
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((i, key) => (
              <FaStar
                key={key}
                className={`stroke-0 size-5 ${
                  product.rating > key ? "fill-yellow-500" : "fill-zinc-500"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews_count})
          </span>
        </div>

        {/* Fiyat */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-gray-900">
            {product.price.toFixed(2)}₺
          </span>
        </div>

        {/* Butonlar */}
        <div className="flex gap-3">
          <Link
            href={`/products/edit/${product.id}`}
            className="flex-1 bg-blue-50 text-blue-600 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-100 transition text-center border border-blue-200 hover:border-blue-300"
          >
            Edit
          </Link>

          <DeleteButton id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
