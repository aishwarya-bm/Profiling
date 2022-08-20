import { useState } from "react";
import MyList from "./MyList";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <>
      <div className="counter">
        <button onClick={decrement}>Decrement</button>
        {count}
        <button onClick={increment}>Increment</button>
      </div>
      <MyList />
    </>
  );
}
