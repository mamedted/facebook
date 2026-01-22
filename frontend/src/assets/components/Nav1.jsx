import { useNavigate } from "react-router-dom";
import { PlusIcon, Menu, SearchIcon } from "../icons/Icons";

export function Nav1() {
  return (
    <>
      <div className="flex fcy between -mx-[14px] px8">
        <p className="b text-[28px] text-blue-600">facebook</p>

        <div className="flex fcy gap-2">
          <PlusIcon />
          <SearchIcon />
          <Menu />
        </div>
      </div>
    </>
  );
}
