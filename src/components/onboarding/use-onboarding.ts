import {
  aboutSchema,
  fileSchema,
  financesSchema,
} from "@/components/onboarding/schema";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import About from "@/components/onboarding/steps/about/about";
import Finances from "@/components/onboarding/steps/finances/finances";
import { zodResolver } from "@hookform/resolvers/zod";
import Import from "@/components/onboarding/steps/import/import";

// @ts-expect-error "silence error"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schema = aboutSchema.merge(financesSchema).merge(fileSchema);

export type FormFields = z.infer<typeof schema>;

const useOnboarding = () => {
  const [formData, setFormData] = useState<Partial<FormFields>>();

  const [activeStep, setActiveStep] = useState(0);
  const steps = [About, Finances, Import];

  const CurrentStep = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  /* prettier-ignore */
  const validationSchema = 
  activeStep === 0 ? aboutSchema 
   : activeStep === 1 ? financesSchema 
   : fileSchema

  const methods = useForm<FormFields>({
    // @ts-expect-error "validation error"
    resolver: zodResolver(validationSchema),

    defaultValues: {
      in_debt: false,
    },
  });

  const onBack = () => {
    if (activeStep === 0) return;

    setActiveStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const updatedFormData: Partial<FormFields> = { ...formData, ...data };
    setFormData(updatedFormData);

    if (!isLastStep) {
      setActiveStep((prev) => prev + 1);
      return;
    }

    // const {
    //   business_name,
    //   business_type,
    //   industry_sector,
    //   established_date,
    //   location,
    //   number_of_employees,
    //   revenue_range,
    //   in_debt,
    //   debt_range,
    //   files,
    // } = updatedFormData;

    // console.log(updatedFormData);
  };

  return {
    methods,
    activeStep,
    setActiveStep,
    CurrentStep,
    steps,
    onSubmit,
    onBack,
    isLastStep,
  };
};

export default useOnboarding;
