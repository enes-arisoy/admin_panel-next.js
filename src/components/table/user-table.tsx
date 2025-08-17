import React from "react";
import TableWrapper from "./table-wrapper";
import { getUsers } from "@/utils/service";
import BanButton from "./../button/ban-button";
import { FaEye } from "react-icons/fa";
import  Link  from "next/link";

const UserTable = async () => {
  const users = await getUsers();

  return (
    <TableWrapper>
      <thead>
        <tr className="border-b border-zinc-300 shadow">
          <th className="py-4">No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>City</th>
          <th>Ordered</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user.id}
            className="border-b border-zinc-200 hover:bg-zinc-100"
          >
            <td className="py-4">{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>{user.orders.length}</td>
            <td className="flex items-center gap-3">
              <Link
                href={`?show=${user.id}`}
                className=" button hover: bg-gray-200 cursor-pointer"
              >
                <FaEye className="size-4" />
              </Link>
              <BanButton userId={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default UserTable;
