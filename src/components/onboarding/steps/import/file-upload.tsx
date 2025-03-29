import { ChangeEvent } from "react";

interface FileuploadProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  progress: number;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  files?: File[]
}

const Fileupload = ({

  inputRef,
  progress,
  handleFileChange,
}: FileuploadProps) => {
  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        id="upload"
        className="hidden"
        multiple
        onChange={handleFileChange}
      />
      <label
        htmlFor="upload"
        className="mx-auto grid h-[264px] w-[545px] place-items-center rounded-[16px] border border-dashed border-[#FA9874] bg-[#FFFBFA] px-6"
      >
        {progress > 0 ? (
          <div className="w-full">
            <img src="/pdf.svg" alt="" className="mx-auto w-fit" />

            <div className="mt-5 mb-4">
              <span className="mx-auto block w-fit font-semibold text-[#98A2B3]">
                {Math.ceil(progress)}%
              </span>

              <div className="relative mx-auto mt-2 h-[6px] w-full max-w-[313px] overflow-hidden rounded-full bg-[#FCD2C2] transition-all">
                <div
                  style={{ width: `${progress}%` }}
                  className="absolute inset-0 w-[60%] origin-left bg-[#F56630]"
                ></div>
              </div>
            </div>

            <div className="text-center">
              <div>
                <p className="font-semibold text-[#1D2739]">
                  {progress === 0 && "Upload Document..."}
                  {progress > 0 && progress < 100 && "Uploading Document..."}
                  {progress === 100 && "Uploaded Document..."}
                </p>
              </div>

              <span className="text-xs text-[#98A2B3]">
                {"{Name of document}"}
              </span>
            </div>
          </div>
        ) : (
          <p>Upload your files</p>
        )}
      </label>
    </div>
  );
};

export default Fileupload;
