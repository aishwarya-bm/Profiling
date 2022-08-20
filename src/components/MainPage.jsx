import { useState } from "react";
import { dummyData } from "../data/DummyData";
import "./../styles/Main.css";
import EnterInput from "./EnterInput";
export default function MainPage() {
  const [selected, setSelected] = useState("");

  const handleDropdownChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select name="item" value={selected} onChange={handleDropdownChange}>
        {dummyData.map((p) => {
          return (
            <option value={p.title} key={p.title}>
              {p.title}
            </option>
          );
        })}
      </select>

      {selected && "You selected - " + selected}
      <EnterInput/>
    </div>
  );
}
