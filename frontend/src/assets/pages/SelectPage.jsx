import { useEffect, useState } from "react";
import { BackBtn } from "../components/BackBtn";
import { UNSAFE_getPatchRoutesOnNavigationFunction, useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API;

export function SelectPage() {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

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

  async function handleLogin(email, password) {
    try {
      let res = await fetch(`${api}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      let data = await res.json();
      if (!res.ok) throw new Error(`${data.message}` || "Failed to login");

      sessionStorage.setItem("user", JSON.stringify(data));
      nav("/homepage");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col fcy">
        {loading && (
          <div className="p-abs wm hm inset-0 bg-gray-400/20">
            <div className="loader "></div>
          </div>
        )}

        <div className="mr-auto ">
          <BackBtn />
        </div>
        <p className="b text-lg -mt-5  ">SELECT USER</p>

        <div className="flex flex-col wdp90 h600  mt20 gap-2 of ofy ">
          {users.map((u) => (
            <button
              type="button"
              onClick={(e) => {
                setLoading(true);
                handleLogin(u.email, u.password);
              }}
              key={u._id}
              className="wm br br-lightgray rounded-2xl flex fcy px-3 py-2 gap-2 "
            >
              <div className="wh40  rounded of">
                <img src={u.DP ? api + u.DP : "/avatar.png"} className="hm wm fit" alt="" />
              </div>
              <p>{u.firstname + " " + u.lastname}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
