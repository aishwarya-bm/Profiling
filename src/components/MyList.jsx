import React, { useState } from "react";
import { dummyData } from "../data/DummyData";

function MyList() {
  const [selected, setSelected] = useState("");

  const handleDropdownChange = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <>
      {dummyData.map(({ title }, idx) => {
        return (
          <div
            onClick={handleDropdownChange}
            className={selected === title ? "bg-blue" : "bg-transparent"}
            key={title}
          >
            {idx + 1}
            {"  " + title}
          </div>
        );
      })}
    </>
  );
}
export default React.memo(MyList);
