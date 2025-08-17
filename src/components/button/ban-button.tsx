"use client";
import { deleteUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

interface Props {
  userId: string;
}

const BanButton: FC<Props> = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // butona tıklanınca kullanıcıyı sil
  const handleClick = async () => {
    if (confirm("Are you sure you want to delete this user?")) {
      setIsLoading(true);
      await deleteUser(userId)
        .then(() => {
          toast.success("User deleted successfully.");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Failed to delete user.");
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <div>
      <button
        className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={isLoading}
      >
        <BiTrash />
      </button>
    </div>
  );
};

export default BanButton;
