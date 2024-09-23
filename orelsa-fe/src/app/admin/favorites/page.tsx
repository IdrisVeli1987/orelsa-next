"use client";

import AdminAddNewFavorites from "@/components/Admin/AdminNewFavorites";
import Favorites from "@/components/Admin/Favorites";
import AdminHeader from "@/components/Admin/Header";
import AdminSideBar from "@/components/Admin/Sidebar";
import { Modal, ModalContent } from "@nextui-org/react";
import { useState } from "react";

const FavoritesPanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProductAdded = () => {
    setModalOpen(false);
    // Məhsul əlavə olunduqdan sonra səhifəni yeniləyin
    window.location.reload();
  };
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
          title="Məhsul kateqoriyasına aid seçilmişlər paneli"
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
              Əlavə et
            </button>
          )}
        />
        <div className="py-4 px-4 w-full rounded">
          <Favorites />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <ModalContent>
          <AdminAddNewFavorites
            onProductAdded={handleProductAdded}
            setModalOpen={setModalOpen}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FavoritesPanel;
