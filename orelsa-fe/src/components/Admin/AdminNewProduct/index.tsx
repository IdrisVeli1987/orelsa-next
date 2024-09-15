"use client";
import React, { useState, FormEvent } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import axios from "axios";

const MAX_FILE_SIZE_MB = 2;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];

const AdminNewProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [model_no, setModel_no] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [photos, setPhotos] = useState<File | null>(null);
  const [active, setActive] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= MAX_FILE_SIZE_MB * 1024 * 1024) {
          setPhotos(file);
          setError(null);
        } else {
          setError(`File size exceeds ${MAX_FILE_SIZE_MB} MB`);
          setPhotos(null);
        }
      } else {
        setError("Invalid file type. Please select a JPEG or PNG image.");
        setPhotos(null);
      }
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
      formData.append("isNew", String(isNew));
      if (photos) formData.append("photos", photos);
      formData.append("active", String(active));

      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard/product`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9yZWxzYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNjM2NDc1MywiZXhwIjoxNzI2MzY4MzUzfQ.o7aHmEQxbDVzL5SB0P9n8M3H7Kio50-kTHXN8OvUWDQ'"
            },
          }
        );
        // Clear form or show success message
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("An error occurred while submitting the form.");
      }
    }
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
          //   label="Product Name"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Product Description"
          placeholder="Haqqında"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Product Price"
          placeholder="Qiymət"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Discount Percentage"
          placeholder="Endirim faizi %"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Discount Amount"
          placeholder="Endirim qiyməti"
          value={model_no}
          onChange={(e) => setModel_no(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Model Number"
          placeholder="Model"
          value={model_no}
          onChange={(e) => setModel_no(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          //   label="Category"
          placeholder="Kateqoriya"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <div className="flex flex-col gap-4">
          <Checkbox defaultSelected color="warning">
            Yeni
          </Checkbox>

          <Checkbox defaultSelected color="warning">
            Aktiv
          </Checkbox>
        </div>

        <div className="bg-white w-[455px] h-[195px] flex justify-end items-end  border-dashed  border-2 border-sky-500 rounded-md">
          <input
            type="file"
            placeholder="Kateqoriya"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
            className="w-full mb-4 "
          />
        </div>

        {/* {error && (
          <Text color="error" className="mb-4">
            {error}
          </Text>
        )}
        {photos && <Text>Selected Image: {photos.name}</Text>} */}

        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            disabled={!photos}
            className=" flex justify-center items-center bg-[#34C759] rounded-md py-3 px-4 text-white"
          >
            Əlavə et
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminNewProduct;
