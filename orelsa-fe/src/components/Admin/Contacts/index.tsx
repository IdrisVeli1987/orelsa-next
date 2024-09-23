import { getContactList } from "@/api/admin";
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

interface IContact {
  _id: string;
  name: string;
  email: string;
  message: string;
  subject: string;
}

const Contacts = () => {
  const [newCollection, setNewCollection] = useState<IContact[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getContactList();
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
        {newCollection.map(({ _id, email, subject, message, name }) => {
          return (
            <TableRow key={_id}>
              <TableCell>
                <input className="bg-white" value={name} />
              </TableCell>
              <TableCell>
                <input className="bg-white" value={email} />
              </TableCell>
              <TableCell>
                <input className="bg-white" value={subject} />
              </TableCell>
              <TableCell>
                <input className="bg-white" value={message} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Contacts;
