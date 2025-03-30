// @ts-nocheck

import { FormFields } from "@/components/onboarding/use-onboarding";
import Select from "@/components/select";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

const Finances = () => {
  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<FormFields>();

  const inDebt = watch("in_debt");
  const revenueValue = watch("revenue_range");
  const debtValue = watch("debt_range");

  return (
    <div className="grid gap-6">
      <Select
        label="Revenue range"
        placeholder="GHS30000 - GHS5000"
        required
        options={[
          { value: "Less than GHS 50,000", label: "Less than GHS 50,000" },
          {
            value: "Between GHS 50,000 and GHS 100,000",
            label: "Between GHS 50,000 and GHS 100,000",
          },
          {
            value: "Between GHS 100,000 and GHS 500,000",
            label: "Between GHS 100,000 and GHS 500,000",
          },
          {
            value: "Between GHS 500,000 and GHS 1,000,000",
            label: "Between GHS 500,000 and GHS 1,000,000",
          },
          {
            value: "More than GHS 1,000,000",
            label: "More than GHS 1,000,000",
          },
        ]}
        value={revenueValue}
        onChange={(value) => {
          setValue("revenue_range", value);
          trigger("revenue_range");
        }}
        error={errors.revenue_range}
      />

      <Label className="mb-0.5 text-[#0A0A0A]">Are you in debt?</Label>

      <div className="flex gap-6">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => {
            setValue("in_debt", true);
            trigger("in_debt");
          }}
        >
          <div
            className={`relative h-5 w-5 rounded-full border ${
              inDebt === true
                ? "border-[#FC6060] bg-[#FC6060]"
                : "border-black bg-transparent"
            }`}
          >
            {inDebt === true && (
              <img
                src="/check.svg"
                alt="Selected"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
          <Label>Yes</Label>
        </div>

        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => {
            setValue("in_debt", false);
            trigger("in_debt");
          }}
        >
          <div
            className={`relative h-5 w-5 rounded-full border ${
              inDebt === false
                ? "border-[#FC6060] bg-[#FC6060]"
                : "border-black bg-transparent"
            }`}
          >
            {inDebt === false && (
              <img
                src="/check.svg"
                alt="Selected"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
          <Label>No</Label>
        </div>
      </div>

      {inDebt === true && (
        <Select
          label="Debt range"
          placeholder="GHS30000 - GHS5000"
          required
          options={[
            { value: "Less than GHS 50,000", label: "Less than GHS 50,000" },
            {
              value: "Between GHS 50,000 and GHS 100,000",
              label: "Between GHS 50,000 and GHS 100,000",
            },
            {
              value: "Between GHS 100,000 and GHS 500,000",
              label: "Between GHS 100,000 and GHS 500,000",
            },
            {
              value: "Between GHS 500,000 and GHS 1,000,000",
              label: "Between GHS 500,000 and GHS 1,000,000",
            },
            {
              value: "More than GHS 1,000,000",
              label: "More than GHS 1,000,000",
            },
          ]}
          value={debtValue}
          onChange={(value) => {
            setValue("debt_range", value);
            trigger("debt_range");
          }}
          error={errors.debt_range}
        />
      )}
    </div>
  );
};

export default Finances;
