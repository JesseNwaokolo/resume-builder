import { CloudDownload, FileUser } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 font-mediumm text-gray-700 border-b-2">
      {/* first */}
      <div className="flex items-center w-1/3 gap-28">
        <div className="flex items-center gap-1">
          <FileUser />
          <span className="font-mono underline underline-offset-2">Resumify</span>
        </div>

        <p>BreadCrumbs</p>
      </div>

      {/* second */}
      <div className="w-1/3 flex items-center justify-center gap-2">
        <CloudDownload />
        <p>Saving your resume...</p>
      </div>

      {/* third */}
      <div className="gap-2 flex items-center w-1/3 justify-end">
        <Button variant={"outline"}>Download</Button>
        <Button variant={"default"}>Share</Button>
        <div className="ml-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
