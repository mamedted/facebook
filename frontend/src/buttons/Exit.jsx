import { useNavigate } from "react-router-dom";
import { Exit } from "../assets/icons/Icons";

export function ExitBtn() {
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/homepage")}>
        <Exit />
      </button>
    </>
  );
}
