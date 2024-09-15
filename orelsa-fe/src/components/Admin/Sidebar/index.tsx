import Image from "next/image";
import React from "react";

const links = [
  {
    href: "/",
    title: "Məhsul",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "/",
    title: "Yeni kolleksiya",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "/",
    title: "Məhsula aid seçimlər",
    src: "/AdminPanel-Sidebar/home.png",
  },
  {
    href: "/",
    title: "Bizimlə əlaqə",
    src: "/AdminPanel-Sidebar/layout.png",
  },
  {
    href: "/",
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
        gap: "10px",
      }}
    >
      <h2 className="font-black text-3xl text-white py-14 px-7">Admin Panel</h2>
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
          <a
            href={href}
            className="flex justify-start items-center text-2xl font-medium text-white py-4 px-4 text-start"
          >
            {title}
          </a>
        </div>
      ))}
      <div className="flex justify-center font-black text-3xl text-white pb-4 items-end h-full">
        <h3>ORELSA.AZ</h3>
      </div>
    </div>
  );
};

export default AdminSideBar;
