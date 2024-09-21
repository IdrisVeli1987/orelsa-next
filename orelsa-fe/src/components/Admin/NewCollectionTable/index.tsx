"use client";
import { getHomeNewCollection } from "@/api/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { columns } from "./data";

const statusColorMap: any = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface INewCollection {
  _id: string;
  description: string;
  newproductPhoto: string;
  active: true;
  title: string;
}

const NewCollectionTable = () => {
  const [newCol, setNewCol] = useState<INewCollection[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getHomeNewCollection();
        setNewCol(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

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
        {newCol.map(({ _id, active, description, newproductPhoto, title }) => {
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
                <h1>{title}</h1>
              </TableCell>
              <TableCell>
                <p className="w-16 text-wrap">{description}</p>
              </TableCell>
              <TableCell>
                <input type="checkbox" checked={active}></input>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default NewCollectionTable;
