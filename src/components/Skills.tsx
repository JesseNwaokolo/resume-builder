import { useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusIcon, X } from "lucide-react";
import { toast } from "sonner";

type SkillSetProps = {
  id: number;
  skill: string;
};

function Skills() {
  const [skillSet, setSkillSet] = useState<SkillSetProps[]>([]);
  const [skillName, setSkillName] = useState("");

  const handleAddButton = () => {
    if (!skillName.trim()) {
      return toast.warning("Add a skill");
    }

    setSkillSet((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          skill: skillName,
        },
      ];
    });

    setSkillName("");
  };

  const handleDeleteButton = (id: number) => {
    const newArray = skillSet.filter((item) => item.id !== id);
    setSkillSet(newArray);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddButton()
  };

  return (
    <div>
      <form className="flex items-center gap-4 mb-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Add a skill...."
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />

        <Button size={"icon-sm"} type="submit">
          <PlusIcon />
        </Button>
      </form>

      <div className="flex gap-4 flex-wrap p-1">
        {skillSet?.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 justify-between rounded-lg py-1 px-2 border w-fit"
          >
            <span>{item.skill}</span>
            <Button
              onClick={() => handleDeleteButton(item.id)}
              variant={"ghost"}
              size={"icon-sm"}
              className="h-fit w-fit p-1"
            >
              <X />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
