"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";
import { FieldError } from "react-hook-form";
import moment from "moment";

interface DatePickerProps {
  label?: string;
  required?: boolean;
  error?: FieldError;
  onChange: (value: string) => void;
}

export function DatePicker({
  label,
  required,
  error,
  onChange,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (date) {
      const formattedDate = moment(date).format("YYYY-MM-DD");
      onChange(formattedDate);
    }
  }, [date]);

  return (
    <div>
      {label && (
        <Label className="mb-0.5 text-[##0A0A0A]">
          {label} {required && <span className="text-[#DC2626]">*</span>}
        </Label>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "h-12 w-full justify-start text-left font-normal hover:bg-transparent",
              !date && "text-muted-foreground",
              error ? "border-[#DC2626]" : "border-[#F0F0F0]",
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-[1000000] w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {error && (
        <p className="mt-0.5 text-sm text-[#DC2626]">{error.message}</p>
      )}
    </div>
  );
}
