import Dropdown from "../components/Dropdown";
import { useState } from "react";

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex ">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
