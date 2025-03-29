import { Loader } from "lucide-react";
import Addtransaction from "./overview/add-transaction";
import { columns } from "./overview/table/columns";
import { DataTable } from "./overview/table/data-table";
import { useQuery } from "@tanstack/react-query";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export default function Transactionspage() {
  async function getTransactions() {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(`${apiUrl}/transactions/`, { headers });
    const response = await res.json();
    return response;
  }

  const { isLoading, data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  if (isLoading) {
    return (
      <div className="mx-auto mt-20 flex min-h-screen justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between border-b border-[#F5F5F5] px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-[#001213]">Transactions</h1>
          <p className="text-sm text-[#4D595A]">
            Manage and track your business transactions
          </p>
        </div>

        <Addtransaction />
      </div>

      <div className="px-6">
        <DataTable
          columns={columns}
          data={data.data.transactions}
          showRecent={false}
          showFilter={true}
        />
      </div>
    </section>
  );
}
