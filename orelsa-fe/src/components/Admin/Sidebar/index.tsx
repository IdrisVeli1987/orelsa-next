import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "products",
    title: "Məhsul",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "new-collection",
    title: "Yeni kolleksiya",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "favorites",
    title: "Məhsula aid seçimlər",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "contact",
    title: "Bizimlə əlaqə",
    src: "/AdminPanel-Sidebar/layout.png",
  },
  {
    href: "subscribe",
    title: "Abunələrim",
    src: "/AdminPanel-Sidebar/user.png",
  },
];

const AdminSideBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#34C759",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
        gap: "10px",
        width: "400px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2 className="font-black text-3xl text-white py-14 px-7 text-center">
          Admin Panel
        </h2>
        {links.map(({ href, title, src }, i) => (
          <div key={i} className="flex items-center pl-7 min-h-fit">
            <Image
              style={{
                padding: 10,
                backgroundColor: "orange",
                borderRadius: 16,
                height: 50,
              }}
              width={50}
              height={50}
              src={src}
              alt=""
            />
            <Link
              href={href}
              className="flex justify-start items-center text-2xl font-medium text-white py-4 px-4 text-start"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center font-black text-3xl text-white pb-4 items-end h-full">
        <Link href="/admin/dashboard">ORELSA.AZ</Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
