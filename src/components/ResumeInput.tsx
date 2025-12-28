import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import profile from "../assets/profile.png";

function ResumeInput() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    console.log(file);
  };
  return (
    <div className="w-1/4 bg-white border-r-2 p-4 h-full overflow-y-auto">
      <p className="text-sm font-medium mb-4">Upload your photos</p>
      <img
        src={previewUrl ?? profile}
        alt="photo"
        className="size-40 rounded-full border mb-4"
      />
      <Button
        className="outline font-medium text-sm border-2 border-gray-700 mb-6"
        variant={"outline"}
        onClick={handleButtonClick}
      >
        Browse Photos
      </Button>

      {/* hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {/* hidden file input ends */}

      <div className="mb-4">
        <p className=" text-sm mb-1">Full name</p>
        <Input className="font-semibold" />
      </div>

      <div className="mb-4">
        <p className=" text-sm mb-1">Job title</p>
        <Input className="font-semibold" />
      </div>

      <div className="mb-4">
        <p className=" text-sm mb-1">Email address</p>
        <Input className="font-semibold" type="email" />
      </div>

      <div className="mb-4">
        <p className=" text-sm mb-1">Mobile number</p>
        <Input className="font-semibold" type="number" />
      </div>

      <div className="mb-4">
        <p className=" text-sm mb-1">Address</p>
        <Textarea />
      </div>
    </div>
  );
}

export default ResumeInput;
