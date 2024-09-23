"use client";

import AdminHeader from "@/components/Admin/Header";
import AdminSideBar from "@/components/Admin/Sidebar";
import Subscribe from "@/components/Admin/Subscribe";

const FavoritesPanel = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0fr 4fr",
      }}
    >
      <AdminSideBar />
      <div className="p-5 ">
        <AdminHeader title="Abunələrim" />
        <div className="py-4 px-4 w-full rounded">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default FavoritesPanel;
