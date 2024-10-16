"use client";

import AdminSideBar from "@/components/Admin/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
}

const isTokenExpired = (token: string | null) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.exp * 1000 < Date.now();
};

const AdminLayout = ({ children }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isTokenExpired(token)) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="flex justify-between">
      <AdminSideBar />
      <div className="p-5 w-[calc(100%-400px)]">{children}</div>
    </div>
  );
};

export default AdminLayout;
