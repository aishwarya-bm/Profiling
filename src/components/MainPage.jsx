import { useState } from "react";
import { dummyData } from "../data/DummyData";
import { FixedSizeList as List } from "react-window";
import EnterInput from "./EnterInput";
import "./../styles/Main.css";

export default function MainPage() {
  const [selected, setSelected] = useState("");

  const handleDropdownChange = (e) => {
    setSelected(e.target.innerText);
  };

  const Row = ({ index, style }) => {
    const { id, title } = dummyData[index] || {};

    return (
      <div style={style} key={title + id}>
        <div
          onClick={handleDropdownChange}
          className={selected === title ? "bg-blue" : "bg-transparent"}
        >
          {title}
        </div>
      </div>
    );
  };

  return (
    <div className="dropdown-container">
      <EnterInput />

      <List
        className="List"
        height={800}
        itemCount={dummyData.length}
        itemSize={20}
        width={800}
      >
        {Row}
      </List>
    </div>
  );
}
