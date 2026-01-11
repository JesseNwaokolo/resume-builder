import { CloudDownload, FileUser, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Logout } from "@/helpers/Logout";
import { useAuthstore } from "@/store/useAuthStore";
import { info } from "../helpers/info";
import { useSelectedStore } from "@/store/useSelectedStore";
import { toast } from "sonner";

function Topbar() {
  const user = useAuthstore((state) => state.user);
  const selected = useSelectedStore((state) => state.selected);
  return (
    <div className="flex items-center justify-between p-4 font-mediumm text-gray-700 border-b-2">
      {/* first */}
      <div className="flex items-center w-1/3 gap-28">
        <div className="flex items-center gap-1">
          <FileUser />
          <span className="font-mono underline underline-offset-2">
            Resumify
          </span>
        </div>

        {selected && (
          <p className="font-medium text-sm text-gray-700 capitalize">
            Home {" / " + info.find((item) => item.id === selected)?.crumbs}
          </p>
        )}
      </div>

      {/* second */}
      <Button
        className="w-1/3 flex items-center justify-center gap-2"
        variant={"link"}
        onClick={() => toast.info("fill your resume")}
      >
        <CloudDownload />
        <p>Generate your resume</p>
      </Button>

      {/* third */}
      <div className="gap-2 flex items-center w-1/3 justify-end">
        <Button variant={"outline"}>Download</Button>
        <Button variant={"default"}>Share</Button>
        <div className="ml-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem>{user?.email}</DropdownMenuItem>
              <DropdownMenuItem>
                <Button onClick={() => Logout()} variant={"destructive"}>
                  <LogOut className="text-white" /> Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
