import Onboarding from "@/components/onboarding/onboarding";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Cards from "./cards";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

const OverviewPage = () => {
  return (
    <>
      <Onboarding />
      <div className="w-full">
        {/* component header */}
        <div className="flex items-center justify-between border-b border-[#D4D4D4] px-6 pb-2 pt-4">
          <div>
            <h2 className="text-[20px] font-bold text-[#001213]">overview</h2>
            <p className="text-sm text-[#4D595A]">
              Overview of your business performance and metrics.
            </p>
          </div>

          <div className="flex gap-2">
            <Button className="rounded-full bg-[#F7F7F7] px-4 py-2.5 text-[#0A0A0A] hover:bg-[#F7F7F7]/90">
              Upload business data
            </Button>
            <Button className="rounded-full bg-[#FC6060] px-4 py-2.5 text-white hover:bg-[#FC6060]/90">
              <PlusCircle className="h-4 w-4" />
              Add transaction
            </Button>
          </div>
        </div>

        <Cards />

        <div className="px-6">
          <DataTable
            columns={columns}
            data={[
              {
                id: "0",
                date: "2025-03-28",
                description: "Office Rent Payment",
                category: "Rent",
                type: "Expense",
                amount: 28000,
              },
              {
                id: "1",
                date: "2025-03-28",
                description: "Software Development Services",
                category: "Sales",
                type: "Income",
                amount: 1000000,
              },
              {
                id: "2",
                date: "2025-03-28",
                description: "Staff Salaries",
                category: "Payroll",
                type: "Expense",
                amount: 160000,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
