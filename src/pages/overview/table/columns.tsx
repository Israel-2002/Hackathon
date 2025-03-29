import { ColumnDef } from "@tanstack/react-table";

export type Transactions = {
  id: string;
  date: string;
  description: string;
  category: string;
  type: string;
  amount: number;
};

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "transaction_category",
    header: "Category",
  },
  {
    accessorKey: "transaction_type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount (GHS)",
  },
];
