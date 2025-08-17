import React, { FC } from "react";
import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import Field from "./field";
import ImagePreview from "./image-preview";
import { createProduct, updateProduct } from "@/utils/service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// action anında kullanılacak fonksiyon
// bu yöntem sayesinde client component yapmadan formu yönetebiliriz
const handleSubmit = async (formData: FormData) => {
  "use server"; // server action yapar

  // form verilerini al
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const brand = formData.get("brand") as string;
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;
  const stock = formData.get("stock") as string;
  const rating = formData.get("rating") as string;
  const review_count = formData.get("review_count") as string;

  // ürünün bilgilerini nesne haline çevir
  const productData = {
    name,
    brand,
    price: Number(price),
    category,
    image_url,
    description,
    stock: Number(stock),
    rating: Number(rating),
    reviews_count: Number(review_count),
  };

  try {
    if (id) {
      // güncelleme moduysa
      await updateProduct(id, productData);
    } else {
      // ekleme moduysa
      await createProduct(productData);
    }

    // kullanıcıyı yönlendir.. try catch içinde kullanılmalı.. 
    redirect("/products");

  } catch (error) {
    // fırlatılan hata redirect kaynaklıysa  hatayı tekrar fırlatıyoruz (redirectin çalışması için)
    if (isRedirectError(error)) {
      throw error;
    }
  throw new Error("Product create error.");
}
};

interface Props {
  product: Product | null;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form action={handleSubmit} className="space-y-6">
      {/* düzenleme moduna özel handleSubmit methoduna id'yi aktarabilmek için gizli input */}
      {product && <input type="hidden" name="id" value={product.id} />}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol Üst */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                type={input.type}
                name={input.name}
                required
                defaultValue={product?.[input.name as keyof Product]}
                className="input"
              />
            </Field>
          ))}
          <Field htmlFor="category" label="Category">
            <select
              name="category"
              id="category"
              className="input"
              required
              defaultValue={product?.category}
            >
              {categories.map((cat, key) => (
                <option key={key} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        {/* Sağ Sütun */}

        <div className="space-y-6">

            {/* resim inputu */}
          <Field htmlFor="image_url" label="Resim URL">

            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              defaultValue={product?.image_url}
            />
          </Field>

          {/* resim önizleme */}
          <ImagePreview imageInputId="image_url" />

          {/* ürün açıklaması */}
          <Field htmlFor="description" label="Description">
            <textarea
              name="description"
              id="description"
              rows={5}
              className="input sm:text-sm md:min-h-[220px]"
              defaultValue={product?.description}
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="px-6 py-2 rounded-md text-white transition bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed">
          {product ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
