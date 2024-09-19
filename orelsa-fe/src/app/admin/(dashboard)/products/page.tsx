"use client";

import AdminNewProduct from "@/components/Admin/AdminNewProduct";
import AdminTable from "@/components/Admin/AdminTable";
import AdminHeader from "@/components/Admin/Header";
import { Modal, ModalContent } from "@nextui-org/react";
import { useState } from "react";

const AdminProducts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProductAdded = () => {
    setModalOpen(false);
    // Məhsul əlavə olunduqdan sonra səhifəni yeniləyin
    window.location.reload();
  };

  return (
    <div>
      <AdminHeader
        title="Məhsul paneli"
        button={() => (
          <>
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
              Yeni Məhsul
            </button>
          </>
        )}
      />
      <AdminTable />

      <Modal
        style={{ padding: 40 }}
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <ModalContent
          style={{
            margin: 20,
            overflow: "scroll",
            height: "90vh",
            overflowX: "hidden",
          }}
        >
          <AdminNewProduct
            onProductAdded={handleProductAdded}
            setModalOpen={setModalOpen}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminProducts;
