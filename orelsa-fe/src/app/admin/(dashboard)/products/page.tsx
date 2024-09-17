import AdminNewProduct from "@/components/Admin/AdminNewProduct";
import AdminTable from "@/components/Admin/AdminTable";
import AdminHeader from "@/components/Admin/Header";

const AdminProducts = ({ searchParams: { add = "0" } }: any) => {
  return (
    <div>
      <AdminHeader
        title="Məhsul  paneli"
        button={() => (
          <>
            <a
              href="./products"
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "#34C759",
                color: "white",
              }}
            >
              Məhsullara qayıt
            </a>
            <a
              href="?add=1"
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "#34C759",
                color: "white",
              }}
            >
              Yeni Məhsul
            </a>
          </>
        )}
      />
      <AdminTable />
      {add === "1" && <AdminNewProduct />}
    </div>
  );
};

export default AdminProducts;
