// @ts-nocheck

import { DatePicker } from "@/components/date";
import { FormFields } from "@/components/onboarding/use-onboarding";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

const Self = () => {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<FormFields>();

  const businessType = watch("business_type");
  const industrySector = watch("industry");

  return (
    <div className="grid gap-6">
      <div>
        <Label className="mb-0.5 text-[#0A0A0A]">
          Business name <span className="text-[#DC2626]">*</span>
        </Label>
        <Input
          {...register("business_name", { required: true })}
          placeholder="Business name"
          className={cn(
            "h-[48px]",
            errors.business_name
              ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
              : "",
          )}
        />

        {errors.business_name && (
          <p className="mt-0.5 text-sm text-[#DC2626]">
            {errors.business_name.message}
          </p>
        )}
      </div>

      <Select
        label="Business type"
        placeholder="Business type"
        required
        options={[
          { value: "Sole Proprietorship", label: "Sole Proprietorship" },
          { value: "Partnership", label: "Partnership" },
          { value: "Corporation", label: "Corporation" },
          {
            value: "Limited Liability Company (LLC)",
            label: "Limited Liability Company (LLC)",
          },
          {
            value: "Non-Profit Organization",
            label: "Non-Profit Organization",
          },
        ]}
        value={businessType}
        onChange={(value) => {
          setValue("business_type", value);
          trigger("business_type");
        }}
        error={errors.business_type}
      />

      <Select
        label="Industry Sector"
        placeholder="Select industry sector"
        required
        options={[
          { value: "Technology", label: "Technology" },
          { value: "Healthcare", label: "Healthcare" },
          { value: "Finance", label: "Finance" },
          { value: "Retail", label: "Retail" },
          { value: "Manufacturing", label: "Manufacturing" },
          { value: "Education", label: "Education" },
          { value: "Real Estate", label: "Real Estate" },
          { value: "Entertainment", label: "Entertainment" },
          { value: "Food and Beverage", label: "Food and Beverage" },
          { value: "Transportation", label: "Transportation" },
        ]}
        value={industrySector}
        onChange={(value) => {
          setValue("industry", value);
          trigger("industry");
        }}
        error={errors.industry}
      />

      <DatePicker
        label="Established date"
        required
        onChange={(value) => {
          setValue("registration_date", value);
          trigger("registration_date");
        }}
        error={errors.registration_date}
      />

      <div>
        <Label className="mb-0.5 text-[##0A0A0A]">
          Location <span className="text-[#DC2626]">*</span>
        </Label>
        <Input
          {...register("location", { required: true })}
          placeholder="Enter location"
          className={cn(
            "h-[48px]",
            errors.location
              ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
              : "",
          )}
        />

        {errors.location && (
          <p className="mt-0.5 text-sm text-[#DC2626]">
            {errors.location.message}
          </p>
        )}
      </div>

      <div>
        <Label className="mb-0.5 text-[##0A0A0A]">
          Number of Employees <span className="text-[#DC2626]">*</span>
        </Label>
        <Input
          {...register("no_of_employees", { required: true })}
          type="number"
          placeholder="0"
          className={cn(
            "h-[48px]",
            errors.location
              ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
              : "",
          )}
        />

        {errors.location && (
          <p className="mt-0.5 text-sm text-[#DC2626]">
            {errors.location.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Self;
