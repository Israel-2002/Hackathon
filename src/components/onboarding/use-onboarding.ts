import {
  aboutSchema,
  // fileSchema,
  financesSchema,
} from "@/components/onboarding/schema";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import About from "@/components/onboarding/steps/about/about";
import Finances from "@/components/onboarding/steps/finances/finances";
import { zodResolver } from "@hookform/resolvers/zod";
import Import from "@/components/onboarding/steps/import/import";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

// @ts-expect-error "silence error"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schema = aboutSchema.merge(financesSchema);
// .merge(fileSchema);

export type FormFields = z.infer<typeof schema>;

const useOnboarding = () => {
  const [formData, setFormData] = useState<Partial<FormFields>>();

  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const steps = [About, Finances, Import];

  const CurrentStep = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  /* prettier-ignore */
  const validationSchema = 
  activeStep === 0 ? aboutSchema 
   :  financesSchema

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

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const updatedFormData: Partial<FormFields> = { ...formData, ...data };
    setFormData(updatedFormData);

    if (!isLastStep) {
      setActiveStep((prev) => prev + 1);
      return;
    }

    const storedFiles = localStorage.getItem("uploadedFiles");
    const token = localStorage.getItem("token");
    const files = storedFiles ? JSON.parse(storedFiles) : null;
    const reqbody = {
      ...updatedFormData,
      files,
    };

    try {
      setIsLoading(true);
      const res = await axios.patch(`${apiUrl}/auth/`, reqbody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("user", JSON.stringify(res.data.data));
      window.location.href = "/";
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    activeStep,
    setActiveStep,
    CurrentStep,
    steps,
    onSubmit,
    onBack,
    isLoading,
    isLastStep,
  };
};

export default useOnboarding;
