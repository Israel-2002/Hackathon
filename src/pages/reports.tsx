// @ts-nocheck

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./overview/table/data-table";
import { columnsReports, Reports } from "@/components/reports-column";
import { Input } from "@/components/ui/input";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export default function ReportsPage() {
  // State for filters
  const [reportType, setReportType] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Reports[]>([]);
  const token = localStorage.getItem("token");

  const [reportsData, setReportsData] = useState([]);

  useEffect(() => {
    if (!reportType) return;
    setFilteredData(reportsData);

    async function getReport() {
      const res = await fetch(
        `${apiUrl}/ai_service/generate_report?report_type=${reportType}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();
      console.log(data);
      setReportsData(data.data);
    }

    getReport();
  }, [reportType]);

  useEffect(() => {
    let result = [...reportsData];

    if (reportType) {
      result = result.filter(
        (report) =>
          report.report_type === reportType || report.type === reportType,
      );
    }

    if (dateFilter) {
      const filterDate = new Date(dateFilter);
      result = result.filter((report) => {
        const reportDate = new Date(report.date);
        return reportDate.toDateString() === filterDate.toDateString();
      });
    }

    setFilteredData(result);
  }, [reportType, dateFilter, reportsData]);

  const handleReportTypeChange = (value: string) => {
    setReportType(value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateFilter(e.target.value);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col gap-5 border-b border-[#F5F5F5] px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-[#001213]">Reports</h1>
          <p className="text-sm text-[#4D595A]">
            Generate and download your business financial reports
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
              <Select onValueChange={handleReportTypeChange}>
                <SelectTrigger className="border-y-1.5 border">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profit_loss">Profit & Loss</SelectItem>
                  <SelectItem value="cash_flow">Cash Flow</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="date"
                onChange={handleDateChange}
                value={dateFilter}
              />
            </div>
          </div>
          <DataTable
            showFilter={false}
            showRecent={false}
            columns={columnsReports}
            data={filteredData}
          />
        </div>
      </div>
    </section>
  );
}
