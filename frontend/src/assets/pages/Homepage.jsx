import { Header } from "../components/Header";
import { Nav1 } from "../components/Nav1";
import { MainNav } from "../components/MainNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../icons/Icons";
import { ExitBtn } from "../buttons/Exit";

const api = import.meta.env.VITE_API;

export function Homepage() {
  const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!userSession) return nav("/");
    setUser(JSON.parse(userSession));
  }, [nav]);

  useEffect(() => {
    async function fetchStories() {
      console.log("fetching stories");

      try {
        const res = await fetch(`${api}fetchStories`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch");

        let data = await res.json();
        setStories(data.stories);
        console.log("Done Feching", data.stories);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStories();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${api}fetchAllPosts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPosts(data.allPosts);
      } catch (err) {
        console.log("Failed to load posts", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header></Header>
      <Nav1></Nav1>
      <MainNav></MainNav>

      <div className=" of ofy -mx-[14px] no-scrollbar">
        <div className=" flex fcy py-2 px-3 gap-2  ">
          <div className="flex fcx wh40 noshrink rounded ">
            <img src={user.DP ? api + user.DP : "/avatar.png"} className="rounded wm hm fit" alt="" />
          </div>

          <input onClick={() => nav("/createpost")} className="!py-3 !border-0 !rounded-3xl placeholder-black !bg-gray-100 !px-4 focus:outline-none" placeholder="What's on your mind?" type="text" />

          <div className="flex flex-col fcy gap5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="forestgreen" className="bi bi-file-image" viewBox="0 0 16 16">
              <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z"></path>
            </svg>
            <p className="text-xs">Photo</p>
          </div>
        </div>

        <div className="flex border-y-4 border-gray-200 p-2  mb-1 gap-2 of ofx no-scrollbar ">
          <div onClick={() => nav("/createstory")} className="w108 h190 flex flex-col fcy br br-lightgray noshrink rounded-xl of">
            <div className="h-1/2 wm">
              <img src={user.DP ? api + user.DP : "/avatar.png"} className="wm hm fit" alt="" />
            </div>
            <div className=" br2 br-white rounded -mt-5 flex fcx fcy">
              <PlusIcon bg={"bg-blue-500"} stroke={"white"} size={35} />
            </div>
            <p className="mt-auto text-sm b">Create Story</p>
          </div>

          {stories.map((s) => (
            <div key={s._id} className="p-rel flex fcx fcy bg-black of w108 h190 br br-lightgray noshrink rounded-xl">
              <img src={api + s.image} alt="" />
              <p className="p-abs white bottom-2 text-sm font-[600]  ml8 mr8 lh-tight">{s.author.firstname + " " + s.author.lastname}</p>
            </div>
          ))}
        </div>

        <div className="ofy flex flex-col gap-2">
          {loading && (
            <div className="p-2 flex fcx ">
              <p className="text-lg b">Loading feed...</p>
            </div>
          )}
          {!loading &&
            posts.map((p) => (
              <div className="br" key={p._id}>
                <div className="br flex fcy gap-2">
                  <div className="wh30 br rounded of ">
                    <img className=" wm hm fit" src={p.author.DP ? api + p.author.DP : "/avatar.png"} alt="" />
                  </div>
                  <p className="b">{p.author.firstname + " " + p.author.lastname}</p>
                </div>

                <p>{p.postContent}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
