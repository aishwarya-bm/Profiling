import { useState } from "react";
import { dummyData } from "../data/DummyData";
import "./../styles/Main.css";
import EnterInput from "./EnterInput";
export default function MainPage() {
  const [selected, setSelected] = useState("");

  const handleDropdownChange = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <div className="dropdown-container">
      <EnterInput/>
      {
        dummyData.map(({title})=>{
          return <div key={title} onClick={handleDropdownChange} className={selected === title ? "bg-blue":"bg-transparent"} >{title}</div>
        })
      }
    </div>
  )
}
