import ResumeInput from "./ResumeInput";
import ResumePreview from "./ResumePreview";

function ResumePage() {
  return (
    <div className="bg-gray-100 w-3/4 flex flex-1 overflow-y-auto">
      <ResumeInput />
      <ResumePreview />
    </div>
  );
}

export default ResumePage;
