import AdminSideBar from "@/components/Admin/Sidebar";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
      }}
    >
      <AdminSideBar />

      <div className="p-5 ">{children}</div>
    </div>
  );
};

export default AdminLayout;
