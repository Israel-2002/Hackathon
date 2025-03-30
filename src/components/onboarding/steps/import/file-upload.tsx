import { ChangeEvent } from "react";

interface FileuploadProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  files?: File[];
}

const Fileupload = ({ inputRef, handleFileChange }: FileuploadProps) => {
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
        <p>Upload your files</p>
      </label>
    </div>
  );
};

export default Fileupload;
