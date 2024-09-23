import { getBrowseRangeList } from "@/api/admin";
import {
  Checkbox,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { columns } from "./data";

interface INewCollection {
  _id: string;
  name: string;
  description: string;
  browseRangePhoto: string;
}

const Favorites = () => {
  const [newCollection, setNewCollection] = useState<INewCollection[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getBrowseRangeList();
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
        {newCollection.map(({ _id, description, browseRangePhoto }) => {
          return (
            <TableRow key={_id}>
              <TableCell>
                <Image
                  className="bg-white"
                  width={100}
                  height={100}
                  alt={"photo"}
                  src={browseRangePhoto}
                />
              </TableCell>
              <TableCell>
                <input className="bg-white" value={description} />
              </TableCell>
              <TableCell>
                <Checkbox className="bg-white" defaultChecked={true} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Favorites;
