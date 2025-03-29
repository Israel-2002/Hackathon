import { FormFields } from "@/components/onboarding/use-onboarding";
import { ChangeEvent, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

const useUpload = () => {
  const [progress, setProgress] = useState(0);

  const { setValue } = useFormContext<FormFields>();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const fakeProgressLoader = (complete: () => void) => {
    let progressValue = 0;

    progressIntervalRef.current = setInterval(() => {
      progressValue += Math.random() * 15;
      if (progressValue > 100) progressValue = 100;
      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(progressIntervalRef.current);
        complete();
        sessionStorage.setItem("progress", JSON.stringify(progressValue));
      }
    }, 200);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      fakeProgressLoader(() => {
        setValue("files", Array.from(files))
      });
    }
  };

  return {
    inputRef,
    progress,
    handleFileChange,
  };
};

export default useUpload;
