"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import { deleteProduct, getAllProductsAdmin, updateProduct } from "@/api/admin";
import Image from "next/image";
import toast from "react-hot-toast";
import { IoIosSave } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pagination } from "swiper/modules";

const statusColorMap: any = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discount_price: number;
  model_no: string;
  category: string;
  new: false;
  photos: string[];
  active: true;
  createdAt: string;
  updatedAt: string;
}

const AdminTable = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [editingId, setEditingId] = useState<string>("");

  const router = useRouter();

  const handleChange = (id: any, key: any, value: any) => {
    const _newProducts = products.map((product: any) => {
      if (product._id === id) {
        product[key] = value;
      }
      return product;
    });
    setProducts(_newProducts);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProductsAdmin();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(productId);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product.");
      }
    }
  };

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            // description={user.email}
            name={cellValue}
            className=""
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col ">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip
              color="danger"
              content="Delete user"
              // aria-describedby={null}
            >
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon aria-describedby={null} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsAdmin().then((data) => {
      setProducts(data);
    });
  }, []);

  const onSubmit = async (index: number) => {
    await updateProduct(products[index]).then((data) => {
      toast.success("successfully");
    });
  };

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={users}>
        {products?.map(
          (
            {
              _id,
              photos,
              name,
              description,
              price,
              discount,
              discount_price,
              model_no,
              category,
            },
            index: number
          ) => {
            return (
              <TableRow key={_id}>
                <TableCell>
                  <Image src={photos[0]} alt={name} width={100} height={100} />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={name}
                    onChange={(e) => {
                      handleChange(_id, "name", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={description}
                    onChange={(e) => {
                      handleChange(_id, "description", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={price}
                    onChange={(e) => {
                      handleChange(_id, "price", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={discount_price}
                    onChange={(e) => {
                      handleChange(_id, "discount_pr", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={model_no}
                    onChange={(e) => {
                      handleChange(_id, "model_no", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    value={category}
                    onChange={(e) => {
                      handleChange(_id, "category", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="relative flex items-center gap-2">
                    <Tooltip content="Details">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EyeIcon
                          onClick={() => {
                            router.push("/products/" + _id);
                          }}
                        />
                      </span>
                    </Tooltip>
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        {editingId ? (
                          <IoIosSave
                            onClick={() => {
                              setEditingId("");
                              onSubmit(index);
                            }}
                          />
                        ) : (
                          <EditIcon onClick={() => setEditingId(_id)} />
                        )}
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span
                        className="text-lg text-danger cursor-pointer active:opacity-50 "
                        onClick={() => handleDelete(_id)}
                      >
                        <DeleteIcon />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};

export default AdminTable;
