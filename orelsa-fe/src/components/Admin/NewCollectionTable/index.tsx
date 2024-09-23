"use client";
import {
  deleteNewCollection,
  getHomeNewCollection,
  updateNewCollection,
} from "@/api/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosSave } from "react-icons/io";
import { DeleteIcon } from "../AdminTable/DeleteIcon";
import { EditIcon } from "../AdminTable/EditIcon";
import { EyeIcon } from "../AdminTable/EyeIcon";
import { columns } from "./data";

interface INewCollection {
  _id: string;
  description: string;
  newproductPhoto: string;
  active: true;
  title: string;
}

const NewCollectionTable = () => {
  const [newCollection, setNewCollection] = useState<INewCollection[]>([]);
  const [editingId, setEditingId] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getHomeNewCollection();
        setNewCollection(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (id: any, key: any, value: any) => {
    const _newProducts = newCollection.map((product: any) => {
      if (product._id === id) {
        product[key] = value;
      }
      return product;
    });
    setNewCollection(_newProducts);
  };

  const onSubmit = async (index: number) => {
    await updateNewCollection(newCollection[index]).then((data) => {
      toast.success("successfully");
    });
  };

  const handleDelete = async (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteNewCollection(productId);
        setNewCollection((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product.");
      }
    }
  };

  return (
    <Table aria-label="Example table with custom cells" className="w-full">
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

      <TableBody>
        {newCollection.map(
          (
            { _id, active, description, newproductPhoto, title },
            index: number
          ) => {
            return (
              <TableRow key={_id}>
                <TableCell>
                  <Image
                    src={newproductPhoto}
                    width={100}
                    height={100}
                    alt={"photo"}
                    className="shadow-xl"
                  ></Image>
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    className="bg-white"
                    value={title}
                    onChange={(e) => {
                      handleChange(_id, "title", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    disabled={editingId !== _id}
                    className="bg-white"
                    value={description}
                    onChange={(e) => {
                      handleChange(_id, "description", e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input type="checkbox" defaultChecked={active}></input>
                </TableCell>
                <TableCell>
                  <div className="relative flex items-start gap-2 justify-center">
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

export default NewCollectionTable;