import { useNavigate } from "react-router-dom";
import { PlusIcon, Menu, SearchIcon } from "../assets/icons/Icons";

export function Nav1() {
  const nav = useNavigate();

  function handlePlus() {
    alert("add");
  }

  function handleLogout() {
    sessionStorage.removeItem("user");
    nav("/");
  }

  function handleSearch() {
    nav("/search");
  }
  return (
    <>
      <div className="flex fcy between -mx-[14px] px8">
        <p className="b text-[28px] text-blue-600">facebook</p>

        <div className="flex fcy gap-2">
          <div className="w35 h35 flex fcx rounded bg-gray-200">
            <PlusIcon onClick={handlePlus} />
          </div>

          <div className="w35 h35 flex fcx rounded bg-gray-200">
            <SearchIcon onClick={handleSearch} size={28} />
          </div>

          <div className="w35 h35 flex fcx fcy rounded bg-gray-200">
            <Menu onClick={handleLogout} />
          </div>
        </div>
      </div>
    </>
  );
}
