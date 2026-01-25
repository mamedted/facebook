import { useNavigate } from "react-router-dom";
import { Setting } from "../assets/icons/Icons";
export function SettingBtn() {
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => alert("Setting")}>
        <Setting />
      </button>
    </>
  );
}
