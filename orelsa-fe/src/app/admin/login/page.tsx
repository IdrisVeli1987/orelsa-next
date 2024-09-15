"use client";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize the useRouter hook

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const {
        data: { token, message },
      }: any = await axios.post("http://localhost:9089/auth/sign-in", {
        username,
        password,
      });
      localStorage.setItem("token", token);
      toast.success("daxil oldunuz!");
      router.push("/admin/products"); // Redirect to the admin products page
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />

        <Input
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-[#FAFAFA]"
        />
        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            className=" flex justify-center items-center bg-[#34C759] rounded-md py-3 px-4 text-white"
          >
            Daxil ol
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
