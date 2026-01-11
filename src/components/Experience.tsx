import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Calendar22 from "./calendar-22";

function Experience() {
  const [number, setNumber] = useState([1]);

  return (
    <div>
      <div className="mb-6">
        {number.map((item) => (
          <div key={item} className="space-y-2 mb-4">
            <p className="text-gray-400 text-xl">Work Experience {item}</p>
            <div>
              <Label className="text-sm mb-2">Company name</Label>
              <Input />
            </div>

            <div>
              <Label className="text-sm mb-2">Title</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Calendar22 label="From" />
              <Calendar22 label="To" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <Button
          size={"sm"}
          onClick={() =>
            setNumber((prev) => [...prev, prev[prev.length - 1] + 1])
          }
        >
          {" "}
          <PlusIcon /> <span className="text-xs">Add experience</span>
        </Button>
      </div>
    </div>
  );
}

export default Experience;
