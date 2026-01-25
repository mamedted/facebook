import { Header } from "../components/Header";
import { Back2Icon } from "../assets/icons/Icons";
import { useNavigate } from "react-router-dom";
import { Menu2 } from "../assets/icons/svgs";
import { SearchBtn } from "../buttons/Search";
export function UserProfile() {
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) return nav("/");
  const { firstname, lastname, DP } = user;

  return (
    <>
      <Header />
      <div className="flex br -mx-[14px] fcy  between">
        <Back2Icon />
        <p className="b text-lg">{firstname + " " + lastname}</p>
        <SearchBtn />
        <button>
          <Menu2 />
        </button>
      </div>
    </>
  );
}
