import React, { FC } from "react";
import Input from "./input";
import Image from "next/image";
import { BiSolidBellRing } from "react-icons/bi";
import avatar from "../../assets/images/user_image.webp";
const Header: FC = () => {
  return (
    <div className="border-b border-zinc-300 bg-white flex justify-between px-5 py-2 md:px-8">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl text-zinc-700 cursor-pointer" />
        <div className="flex gap-3 items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            className="size-14 rounded-full"
          />
          <div>
            <p className="font-semibold text-black">Enes Arısoy</p>
            <p className="text-sm text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
