import { useSelectedStore } from "@/store/useSelectedStore";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

function SideBar() {
  const selected = useSelectedStore((state) => state.selected);
  const setSelected = useSelectedStore((state) => state.setSelected);

  const info = [
    {
      name: "Personal Information",
      id: 1,
    },
    {
      name: "Professional Summary",
      id: 2,
    },
    {
      name: "Experience",
      id: 3,
    },
    {
      name: "Education",
      id: 4,
    },
    {
      name: "Skills",
      id: 5,
    },
    {
      name: "Profile or portfolio URL",
      id: 6,
    },
  ];
  return (
    <div className="flex flex-col w-1/4 border-r-2 ">
      {info.map((item) => (
        <Button
          key={item.id}
          onClick={() => setSelected(item.id)}
          variant={"outline"}
          className="px-2 py-8 rounded-none flex justify-between border-r-0"
          size={"lg"}
        >
          {item.name} {selected === item.id ? <Minus /> : <Plus />}
        </Button>
      ))}

      {/* toggle theme */}
      {/* <div className="mt-4">
        <RadioGroup defaultValue="light" onValueChange={(value : "light" | "dark")=>setTheme(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="option-one" />
            <Label htmlFor="option-one">Light mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="option-two" />
            <Label htmlFor="option-two">Dark mode</Label>
          </div>
        </RadioGroup>
      </div> */}
    </div>
  );
}

export default SideBar;
