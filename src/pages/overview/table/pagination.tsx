import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ table }) {
  const { getState, setPageIndex, getPageCount } = table;
  const { pagination } = getState();
  const currentPage = pagination.pageIndex + 1;
  const totalPages = getPageCount();

  // Calculate total records and current page records
  const totalRecords = table.getPrePaginationRowModel().rows.length;
  const recordsPerPage = pagination.pageSize;
  const startRecord = pagination.pageIndex * recordsPerPage + 1;
  const endRecord = Math.min(startRecord + recordsPerPage - 1, totalRecords);

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages > 5) {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="border-t py-4">
      <div className="flex items-center justify-end gap-4 px-4">
        {/* Records info */}
        <div className="text-sm text-gray-700">
          {startRecord}-{endRecord} of {totalRecords} records
        </div>

        {/* Pagination controls */}
        <div className="flex items-center space-x-2">
          {/* Previous button */}
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-md border p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Page numbers */}
          <div className="flex items-center space-x-1">
            {generatePageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof page === "number" && setPageIndex(page - 1)
                }
                className={`h-8 w-8 rounded-md ${
                  page === currentPage
                    ? "text-Primary border border-[#8D9595] bg-[#F1F2F2]"
                    : page === "..."
                      ? "cursor-default"
                      : "hover:bg-gray-100"
                } ${typeof page === "number" ? "cursor-pointer" : ""} `}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded-md border p-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
