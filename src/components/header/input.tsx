"use client";

import { FC } from "react";
import { GoSearch } from "react-icons/go";

const Input: FC = () => {
  return (
    <form className="flex items-center gap-2 text-gray-500">
      <button className="text-zinc-700">
        <GoSearch />
      </button>

      <input type="text" placeholder="ara" className="p-2 border border-blue-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-500" />
    </form>
  );
};

export default Input;