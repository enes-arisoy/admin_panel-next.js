"use client";

import React, { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import NavLink from './navlink';
import { links } from "@/utils/constants";



const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-5 border-r border-zinc-300 transition duration-300 shadow-lg bg-white text-gray-500 ${
        isOpen ? "min-w-[140px]" : "min-w-[60px]"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center p-5 text-2xl cursor-pointer hover:text-blue-400 transition">
        <RxHamburgerMenu className={`transition duration-300 ${isOpen ? "rotate-90" : ""}`} />
      </button>

      <div>
        {links.map((i, key) => (
          <NavLink item={i} key={key} isOpen={isOpen} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
