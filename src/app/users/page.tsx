
import React, { FC, Suspense } from "react";
import UserTable from "./../../components/table/user-table";
import Loading from "@/components/loader/loading";
import UserModal from './../../components/model/user-modal';

interface Props {
  searchParams: Promise<{ show?: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { show } = await searchParams;
  return (
    <div className="page ">
      <h1 className="title">Users</h1>

      {/* Loader'ı sayfanın istediğimiz noktasında gösterebiliyoruz:
         Loading.jsx yöntemindeki gibi bütün sayfa içieriğini ekrandan gitmesini önlüyoruz
      */}
      <Suspense fallback={<Loading />}>
        <UserTable />
      </Suspense>
      {/* 
      * show parametresi varsa modalı göster
      * bu yöntem sayesinde modal açık mı kapalı mı statei tutmamıza gerek yok ve server componentler üzerinden modalı aç kapa yapabiliriz */}
      {show && <UserModal userId={show} />}
    </div>
  );
};

export default Users;
