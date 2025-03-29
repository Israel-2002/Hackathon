import { cn } from "@/lib/utils";
import { FILTERS } from "@/pages/business-insights/constants";
import { useState } from "react";
import { Link } from "react-router";

const Filter = () => {
  const [state, setState] = useState(FILTERS[0].value);

  return (
    <div className="mt-4 flex items-center gap-5 border-b border-b-[#F5F5F5] px-6">
      {FILTERS.map((filter, i) => (
        <Link
        key={i}
          to={filter.route}
          onClick={() => setState(filter.value)}
          className={cn(
            "cursor-pointer text-sm hover:opacity-80",
            state === filter.value
              ? "border-b-2 border-b-[#420000] font-semibold text-[#1A1A1A]"
              : "",
          )}
        >
          {filter.name}
        </Link>
      ))}
    </div>
  );
};

export default Filter;
