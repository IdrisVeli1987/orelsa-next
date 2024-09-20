"use client";

import AdminHeader from "@/components/Admin/Header";
import NewCollectionTable from "@/components/Admin/NewCollectionTable";
import AdminSideBar from "@/components/Admin/Sidebar";
import { useState } from "react";

const AdminNewCollection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0fr 4fr",
      }}
    >
      <AdminSideBar />
      <div className="p-5 ">
        <AdminHeader
          title="Yeni kolleksiya paneli"
          button={() => (
            <button
              onClick={() => setModalOpen(true)}
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "#34C759",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Yeni kolleksiya
            </button>
          )}
        />
        <div className="py-4 px-4 w-full rounded">
          <NewCollectionTable />
        </div>
      </div>
    </div>
  );
};

export default AdminNewCollection;
