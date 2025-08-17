"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const router = useRouter();

  // butona tıklanınca
  const handleDelete = async () => {
    // kullanıcı onayı alalım
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      setisLoading(true);
      await deleteProduct(id);
      router.refresh();
      toast.success("Product deleted successfully");
    } catch {
      toast.error("Failed to delete product");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="flex-1 bg-red-50 text-red-600 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition text-center border border-red-200 hover:border-red-300 cursor-pointer"
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteButton;
