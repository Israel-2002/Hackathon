import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

async function uploadFile(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${apiUrl}/uploads/upload_csv`, formData);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const useUpload = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setPdfFiles(Array.from(files));

      const res = await uploadFile(files[0]);
      const fileData = {
        file_name: pdfFiles[0].name,
        file_url: res.url,
      };

      localStorage.setItem("uploadedFiles", JSON.stringify([fileData]));
    }
  };

  return {
    inputRef,
    handleFileChange,
    pdfFiles,
  };
};

export default useUpload;
