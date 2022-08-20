import { useState } from "react";
import { dummyData } from "../data/DummyData";
import "./../styles/Main.css"
export default function ShowDropdown() {
  const [selected, setSelected] = useState("");
  const [sometext, setSometext] = useState("");
  const handleDropdownChange = (e) => {
    setSelected(e.target.value);
  };

  const handleTextChange = (e) =>{
      setSometext(e.target.value)
  }
  return (
    <div className="dropdown-container" >
      <select
        name="item"
        value={selected}
        onChange={handleDropdownChange}
      >
        {dummyData.map((p) => {
          return (
            <option value={p.title} key={p.title}>
              {p.title}
            </option>
          );
        })}
      </select>

    { selected &&  "You selected - "+ selected}
      <input type="text" value={sometext} onChange={handleTextChange} />
     { sometext && "You typed - " +sometext}
    </div>
  );
}
