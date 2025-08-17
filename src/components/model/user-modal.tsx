import { getUser } from "@/utils/service";

import Link from "next/link";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  userId: string;
}

const UserModal: FC<Props> = async ({ userId }) => {
  const user = await getUser(userId);

  // ekrana basılacak değeleri belirle
  const fields = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Phone",
      value: user.phone,
    },
    {
      label: "Country",
      value: user.address.country,
    },
    {
      label: "City",
      value: user.address.city,
    },
    {
      label: "Address",
      value: user.address.street,
    },
    {
      label: "Postal Code",
      value: user.address.postal_code,
    },
    {
      label: "Order Count",
      value: user.orders.length,
    },
  ];

  return (
    <div className="absolute bg-black/10 backdrop-blur-[2px] inset-0 grid place-items-center">
      <div className="bg-white rounded-lg shadow py-6 px-10 pb-14 w-full max-w-md">
        {/* Modalı Kapatma */}
        <div className="flex justify-end items-center">
          <Link href={"/users"} className="button hover:bg-zinc-200">
            <IoMdClose className="size-5" />
          </Link>
        </div>

        {/* Kullanıcı Bilgileri */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">
            {user.name}
          </h1>

          <div className="flex flex-col gap-3">
            {fields.map((field, key) => (
              <div key={key} className="flex justify-between">
                <span>{field.label}</span>
                <span className="font-semibold">{field.value}</span>
              </div>
            ))}
          </div>

          <hr />

          {/* Önceki sipariş detayları */}
          <div>
            <div className="grid grid-cols-3">
              <span className="text-center">Product ID</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Toplam Fiyat</span>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {user.orders.map((order, key) => (
                <div
                  key={key}
                  className="bg-gray-100 p-2 rounded-lg grid grid-cols-3 font-semibold"
                >
                  <span className="text-center">{order.product_id}</span>
                  <span className="text-center">{order.quantity}</span>
                  <span className="text-center">{order.total_price} TL</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
