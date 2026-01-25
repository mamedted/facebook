import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Back2Icon, SearchIcon } from "../assets/icons/Icons";
import { capitalize } from "../utils/helper";
const api = import.meta.env.VITE_API;

export function SearchPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchUsers() {
      try {
        let res = await fetch(`${api}fetchUsers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        let data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);

        setUsers(data.Users);
        console.log(data.Users);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className=" -mx-[14px] brb br-lightgray flex fcy p-2 between">
        <Back2Icon size={30} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="!py-[6px] focus:outline-none !bg-gray-100 !border-0 !rounded-3xl !w-[290px] !placeholder-gray-500"
          name=""
          id=""
        />
        <SearchIcon bg={"none"} size={30} />
      </div>

      <div className="wh hm  -mx-[14px] flex flex-col of ofy -mb-[16px]">
        {search &&
          users
            .filter((ele) => ele.firstname.includes(capitalize(search)))
            .map((u) => (
              <button
                type="button"
                onClick={(e) => {
                  setLoading(true);
                  handleLogin(u.email, u.password);
                }}
                key={u._id}
                className="wm  rounded-2xl flex fcy px-3 py-2 gap-2 "
              >
                <div className="wh40  rounded of">
                  <img src={u.DP ? api + u.DP : "/avatar.png"} className="hm wm fit" alt="" />
                </div>
                <p>{u.firstname + " " + u.lastname}</p>
              </button>
            ))}
      </div>
    </>
  );
}
