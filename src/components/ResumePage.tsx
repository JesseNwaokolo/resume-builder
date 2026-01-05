import { useSelectedStore } from "@/store/useSelectedStore";
import ResumeInput from "./ResumeInput";
import ResumePreview from "./ResumePreview";
import { Textarea } from "./ui/textarea";
import Experience from "./Experience";

function ResumePage() {
  const selected = useSelectedStore((state) => state.selected);

  function getView(number: number | null) {
    switch (number) {
      case 1:
        return <ResumeInput />;

      case 2:
        return (
          <div className="w-1/4 bg-white border-r-2 p-4 h-full overflow-y-auto">
            <p className="text-sm font-medium mb-4 underline underline-offset-2">Professional Summary</p>
            <Textarea placeholder="Write a professional summary"/>
          </div>
        );

         case 3:
        return (
          <div className="w-1/4 bg-white border-r-2 p-4 h-full overflow-y-auto">
            <Experience />
          </div>
        );

      default:
        return null;
    }
  }

 

  return (
    <div className="bg-gray-100 w-3/4 flex flex-1 overflow-y-auto">
      {/* <ResumeInput /> */}
      {getView(selected)}
      <ResumePreview />
    </div>
  );
}

export default ResumePage;
