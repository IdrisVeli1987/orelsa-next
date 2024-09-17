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
import { deleteProduct, getAllProductsAdmin } from "@/api/admin";
import Image from "next/image";
import toast from "react-hot-toast";

const statusColorMap: any = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface IProduct {
  _id: string;
  name: "Fulica";
  description: "Saç qidalandırıcı və saç hüceyrələrinin inkişafı üçün şampun";
  price: 15;
  discount: 20;
  discount_price: 12;
  model_no: "F0001";
  category: "Şampun";
  new: false;
  photos: string[];
  active: true;
  createdAt: "2024-08-28T12:29:11.287Z";
  updatedAt: "2024-08-28T12:29:11.287Z";
}

const AdminTable = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
    alert(productId);
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
          ({
            _id,
            photos,
            name,
            description,
            price,
            discount,
            discount_price,
            model_no,
            category,
          }) => {
            return (
              <TableRow key={_id}>
                <TableCell>
                  <Image src={photos[0]} alt={name} width={100} height={100} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{discount_price}</TableCell>
                <TableCell>{model_no}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>
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
