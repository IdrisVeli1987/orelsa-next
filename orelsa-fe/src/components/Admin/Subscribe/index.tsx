import { getSubscribersList } from "@/api/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { columns } from "./data";

interface ISubscribe {
  _id: string;
  name: string;
  email: string;
  message: string;
  subject: string;
}

const Subscribe = () => {
  const [newCollection, setNewCollection] = useState<ISubscribe[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getSubscribersList();
        setNewCollection(data);
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
        {newCollection.map(({ _id, email }, index) => {
          return (
            <TableRow key={_id}>
              <TableCell>
                <input className="bg-white" value={index + 1} />
              </TableCell>
              <TableCell>
                <input className="bg-white" value={email} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Subscribe;
