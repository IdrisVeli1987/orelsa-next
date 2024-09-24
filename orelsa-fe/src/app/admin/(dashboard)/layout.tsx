import AdminSideBar from "@/components/Admin/Sidebar";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "1fr 3fr",
      // }}
      className="flex"
    >
      <div className="w-1/5">
        <AdminSideBar />
      </div>

      <div className="p-5 w-4/5">{children}</div>
    </div>
  );
};

export default AdminLayout;
