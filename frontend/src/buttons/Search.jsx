import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets/icons/Icons";
export function SearchBtn() {
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/search")}>
        <SearchIcon />
      </button>
    </>
  );
}
