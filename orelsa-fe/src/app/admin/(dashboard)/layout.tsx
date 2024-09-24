import AdminSideBar from "@/components/Admin/Sidebar";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AdminSideBar />
      <div className="p-5 w-[calc(100%-400px)]">{children}</div>
    </div>
  );
};

export default AdminLayout;
