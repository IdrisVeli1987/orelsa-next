import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  button?: () => React.ReactElement;
}

const AdminHeader = ({ title, button }: IProps) => {
  return (
    <div
      className="w-full px-4"
      style={{
        height: 70,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        <Link
          style={{
            color: "#34C759",
          }}
          href="/"
        >
          Orelsa.az
        </Link>
        / {title}
      </span>
      {button ? button() : null}
    </div>
  );
};

export default AdminHeader;
