import EnterInput from "./EnterInput";
import "./../styles/Main.css";
import Counter from "./Counter";

export default function MainPage() {
  return (
    <div className="dropdown-container">
      <EnterInput />
      <Counter />
    </div>
  );
}
