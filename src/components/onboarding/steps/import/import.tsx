import Fileupload from "@/components/onboarding/steps/import/file-upload";
import useUpload from "@/components/onboarding/steps/import/use-upload";
import { FormFields } from "@/components/onboarding/use-onboarding";
import { Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

const Import = () => {
  const { inputRef, progress, handleFileChange } = useUpload();
  const { watch, setValue } = useFormContext<FormFields>();

  const files = watch("files") as File[] | undefined;

  const handleFileRemove = (index: number) => {
    if (files) {
      const updatedFiles = files.filter((_, i) => i !== index);
      setValue("files", updatedFiles);
    }
  };

  return (
    <>
      <Fileupload
        files={files}
        inputRef={inputRef}
        progress={progress}
        handleFileChange={handleFileChange}
      />

      {files && files.length > 0 && (
        <div className="mt-7">
          <p className="font-semibold text-[#667185]">Uploaded files</p>
          <ul className="mt-6 grid gap-6">
            {files &&
              files.map((file: File, index: number) => (
                <li
                  key={index}
                  className="mt-2 flex items-center justify-between gap-4 border-b pb-6 last:border-b-transparent"
                >
                  <div className="flex items-center gap-2">
                    <img src="/pdf.svg" alt="" />
                    {file.name}
                  </div>

                  <Trash2
                    color="red"
                    className="cursor-pointer hover:opacity-90"
                    width={28}
                    height={28}
                    onClick={() => handleFileRemove(index)}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Import;
