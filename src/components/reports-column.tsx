import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";

export type Reports = {
  id: string;
  date: string;
  description: string;
  category: string;
  type: string;
  amount: number;
};

export const columnsReports: ColumnDef<Reports>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "report_type",
    header: "Report type",
  },
  {
    accessorKey: "id",
    header: () => <div className="mr-3 text-right">Action</div>,
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-2">
          <div className="border border-[#CACDCD] px-3 py-1.5 text-sm font-semibold">
            Download
          </div>
          <Trash color="#343330" onClick={() => console.log(id)} />
        </div>
      );
    },
  },
];
