"use client";
import React, { useState, FormEvent } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminNewProduct: React.FC = ({ setModalOpen }: any) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [model_no, setModel_no] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [active, setActive] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const validFiles = fileArray.filter((file) =>
        file.type.startsWith("image/")
      );

      if (validFiles.length > 0) {
        setPhotos(validFiles);
        setError(null);
      } else {
        setError("Please upload valid image files.");
      }
    } else {
      setError("No files selected.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("discount", discount);
      formData.append("model_no", model_no);
      formData.append("category", category);
      formData.append("new", String(isNew));

      // Append each photo individually to FormData
      photos.forEach((photo) => {
        formData.append("photos", photo);
      });

      formData.append("active", String(active));

      try {
        await axios.post(
          "http://localhost:9089/admin/dashboard/product",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Product added successfully!");
        // Clear form or show success message here
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("An error occurred while submitting the form.");
      }
    } else {
      setError("Category is required.");
    }
    setModalOpen(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h3 className="bg-[#3FBE5B] text-white text-center py-3 text-2xl">
        Yeni məhsul yarat
      </h3>
      <form
        onSubmit={handleSubmit}
        className="bg-[#4A954912] p-6 rounded-md flex flex-col gap-6"
      >
        <Input
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Haqqında"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Qiymət"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Endirim faizi"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          type="number"
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Model"
          value={model_no}
          onChange={(e) => setModel_no(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Kateqoriya"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <div className="flex flex-col gap-4">
          <Checkbox
            isSelected={isNew}
            onChange={(e) => setIsNew(e.target.checked)}
            color="warning"
            style={{ marginBottom: "20px" }}
          >
            Yeni
          </Checkbox>

          <Checkbox
            isSelected={active}
            onChange={(e) => setActive(e.target.checked)}
            color="warning"
            style={{ marginBottom: "20px" }}
          >
            Aktiv
          </Checkbox>
        </div>

        <div className="bg-white w-full h-[195px] flex justify-end items-end border-dashed border-2 border-sky-500 rounded-md">
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
            className="w-full mb-4"
            multiple
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            disabled={photos.length === 0}
            className="flex justify-center items-center bg-[#34C759] rounded-md py-3 px-4 text-white"
          >
            Əlavə et
          </Button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AdminNewProduct;
