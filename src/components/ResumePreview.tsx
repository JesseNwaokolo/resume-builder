import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

function ResumePreview() {
  return (
    <div className="flex-1 min-h-full  px-32 py-10 flex flex-col gap-4 h-full overflow-y-auto ">
      <div className="bg-white min-h-192"></div>

      <div className="flex items-center justify-center gap-4">
        <Button className="rounded-full">
          <ArrowLeft />
        </Button>
        <Button className="rounded-full">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default ResumePreview;
