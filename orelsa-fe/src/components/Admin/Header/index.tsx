import React from "react";
interface IProps {
  title: string;
  button: () => React.ReactElement;
}
const AdminHeader = ({ title, button }: IProps) => {
  return (
    <div
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
        <a
          style={{
            color: "#34C759",
          }}
          href=""
        >
          Orelsa.az
        </a>{" "}
        / {title}
      </span>
      {button()}
    </div>
  );
};

export default AdminHeader;
