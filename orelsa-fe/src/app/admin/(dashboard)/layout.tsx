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
        gridTemplateColumns: "1fr 5fr",
      }}
    >
      <AdminSideBar />
      <div style={{ padding: 20 }}>{children}</div>
    </div>
  );
};

export default AdminLayout;
