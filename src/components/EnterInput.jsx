import { useState } from "react";

export default function EnterInput() {
  const [sometext, setSometext] = useState("");

  const handleTextChange = (e) => {
    setSometext(e.target.value);
  };
  return (
    <>
      <input type="text" value={sometext} onChange={handleTextChange} placeholder="Search..." />
      {sometext && "You typed - " + sometext}
    </>
  );
}
