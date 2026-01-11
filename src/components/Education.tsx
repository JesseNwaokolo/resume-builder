import { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Calendar22 from "./calendar-22";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Education() {
  const [number, setNumber] = useState([1]);
  return (
    <div>
      <div className="mb-6">
        {number.map((item) => (
          <div key={item} className="space-y-2 mb-4">
            <p className="text-gray-400 text-xl">Education {item}</p>
            <div>
              <Label className="text-sm mb-2">School name</Label>
              <Input placeholder="enter school name"/>
            </div>

            <div className="">
              <Label className="text-sm mb-2">Degree Obtained</Label>
              <Select>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Select a degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masters">M.Sc</SelectItem>
                  <SelectItem value="bachelors">B.Sc</SelectItem>
                  <SelectItem value="hnd">HND</SelectItem>
                  <SelectItem value="nd">ND</SelectItem>
                  <SelectItem value="ass">Associates</SelectItem>
                </SelectContent>
              </Select>
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
          <PlusIcon /> <span className="text-xs">Add education</span>
        </Button>
      </div>
    </div>
  );
}

export default Education;
