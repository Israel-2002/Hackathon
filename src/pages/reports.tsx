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

// const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export default function ReportsPage() {
  // State for filters
  const [reportType, setReportType] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Reports[]>([]);

  // Dummy data with the correct structure matching your column definitions
  const [reportsData, setReportsData] = useState<Reports[]>([
    {
      id: "1",
      date: "2025-03-10",
      description: "Q1 Financial Review",
      category: "Quarterly",
      report_type: "profit_loss",
      type: "profit_loss", // Added this since your columns definition might use it
      amount: 0,
    },
    {
      id: "2",
      date: "2025-03-15",
      description: "Monthly Cash Flow",
      category: "Monthly",
      report_type: "cash_flow",
      type: "cash_flow",
      amount: 0,
    },
    {
      id: "3",
      date: "2025-03-20",
      description: "Expense Summary",
      category: "Monthly",
      report_type: "expense",
      type: "expense",
      amount: 0,
    },
    {
      id: "4",
      date: "2025-03-25",
      description: "Income Report",
      category: "Monthly",
      report_type: "income",
      type: "income",
      amount: 0,
    },
  ]);

  useEffect(() => {
    setFilteredData(reportsData);
  }, [reportsData]);

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
