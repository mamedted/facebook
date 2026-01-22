import { Header } from "../components/Header";
import { Nav1 } from "../components/Nav1";
import { MainNav } from "../components/MainNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_API;

export function Homepage() {
  const nav = useNavigate();

  const [user, setUser] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    let userdata = JSON.parse(sessionStorage.getItem("user"));
    if (!userdata) return nav("/");
    setUser(userdata);
  }, []);

  return (
    <>
      <Header></Header>
      <Nav1 handleLogout={handleLogout}></Nav1>
      <MainNav></MainNav>
      <div className="-mx-[14px] flex fcy py-2 px-3 gap-2 ">
        <div className="flex fcx wh40 noshrink rounded ">
          <img src={api + user.DP} className="rounded wm hm fit" alt="" />
        </div>

        <input className="!py-3 !border-0 !rounded-3xl placeholder-black !bg-gray-100 !px-4" placeholder="What's on your mind?" type="text" />

        <div className="flex flex-col fcy gap5">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="forestgreen" className="bi bi-file-image" viewBox="0 0 16 16">
            <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z"></path>
          </svg>
          <p className="text-xs">Photo</p>
        </div>
      </div>
    </>
  );
}
