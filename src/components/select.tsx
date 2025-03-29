import {
  Select as SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { FieldError } from "react-hook-form";

interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: { value: string; label: string }[];
  className?: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: FieldError;
}

const Select = ({
  label,
  placeholder,
  value = "",
  options,
  className,
  onChange,
  required,
  error,
}: SelectProps) => {
  return (
    <div>
      {label && (
        <Label className="mb-0.5 text-[##0A0A0A]">
          {label} {required && <span className="text-[#DC2626]">*</span>}
        </Label>
      )}

      <SelectContainer onValueChange={(value) => onChange(value)} value={value}>
        <SelectTrigger
          className={cn(
            "h-12 w-full shadow-none focus:ring-transparent",
            className,
            error ? "border-[#DC2626]" : "border-[#F0F0F0]",
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="z-[999]">
          {options.map((option, i) => (
            <SelectItem key={i} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectContainer>

      {error && (
        <p className="mt-0.5 text-sm text-[#DC2626]">{error.message}</p>
      )}
    </div>
  );
};

export default Select;
