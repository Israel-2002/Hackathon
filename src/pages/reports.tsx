import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./overview/table/data-table";
import { columnsReports } from "@/components/reports-column";

import { Input } from "@/components/ui/input";

// const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export default function Reports() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-5 border-b border-[#F5F5F5] px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-[#001213]">Reports</h1>
          <p className="text-sm text-[#4D595A]">
            Generate and download you business financial reports
          </p>
        </div>
      </div>

      <div className="w-full px-6">
        <div className="mt-10 rounded-[8px] border px-4 pb-3">
          <div className="flex items-center justify-between py-1.5 text-[#404040]">
            <div className="space-y-1">
              <h1 className="font-semibold">Reports history</h1>
              <p className="text-sm">
                Download all the reports you've generated
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="border-y-1.5 border">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profit_loss">Light</SelectItem>
                  <SelectItem value="cash_flow">Cash flow</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" />
            </div>
          </div>
          <DataTable
            showFilter={false}
            showRecent={false}
            columns={columnsReports}
            data={[]}
          />
        </div>
      </div>
    </section>
  );
}
