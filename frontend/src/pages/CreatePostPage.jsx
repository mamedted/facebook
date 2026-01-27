import { useEffect, useRef, useState } from "react";
import { BackBtn } from "../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { key } from "../utils/helper";
const api = import.meta.env.VITE_API;
import { sendFile } from "../utils/helper";

export function CreatePost() {
  key("`", () => alert(photos.length));

  const [user, setUser] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [photos, setPhotos] = useState([]);
  const nav = useNavigate();
  const fileInput = useRef();

  let userdata = null;

  async function handlePost() {
    let form = new FormData();
    form.append("postContent", postContent);
    form.append("selectedColor", selectedColor);
    [...photos].forEach((ele) => {
      form.append("files[]", ele);
    });

    let res = await sendFile(`${api}post`, form);

    if (res.success) {
      alert("Posted");
      nav("/homepage");
    } else {
      alert("Something wrong");
    }
  }

  function selectFile() {
    fileInput.current.click();
  }
  useEffect(() => {
    userdata = JSON.parse(sessionStorage.getItem("user"));

    if (!userdata) return nav("/");
    setUser(userdata);
  }, [nav]);

  if (!user) return null;

  return (
    <>
      <div className="flex border-b-[1px] border-gray-200 between fcy -mt-[8px] -mx-[14px] py-1 px-3">
        <div className="flex fcy">
          <BackBtn />
          <p className="b text-lg">Create Post</p>
        </div>

        <p className="b text-blue-600 text-lg">POST</p>
      </div>

      <div className="-mx-[14px] flex fcy gap-2 p-2">
        <div className="wh50">
          <img src={api + user.DP} className="wm hm fit" alt="" />
        </div>
        <div>
          <p className="b text-lg">{user.firstname + " " + user.lastname}</p>
          <button className="bg-gray-300 b text-sm px-3 rounded-lg py-1">Audience</button>
        </div>
      </div>

      <textarea
        name=""
        onChange={(e) => setPostContent(e.target.value)}
        className="bg-gray-100  -mx-[14px] nooutline h210 text-2xl pl10 pt10 placeholder-gray-500"
        placeholder="What's on your mind?"
        id=""
      ></textarea>
      {!photos.length > 0 && (
        <div className="-mx-[14px] noshrink  flex gap5 px-2 no-scrollbar ofx of  bg-gray-100 p-2">
          <div className=" bg-white wh35 noshrink flex fcy fcx rounded-md shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></path>
            </svg>
          </div>
          <div onClick={() => setSelectedColor("white")} className="wh35 shadow-md bg-white noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("violet")} className="wh35 shadow-md bg-violet-300 noshrink rounded-md "></div>
          <div onClick={(e) => setSelectedColor("red")} className="wh35 shadow-md bg-red-600 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("black")} className="wh35 shadow-md bg-black noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("purple")} className="wh35 shadow-md bg-purple-600 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("blue")} className="wh35 shadow-md bg-blue-500 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("yellow")} className="wh35 shadow-md bg-yellow-500 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("green")} className="wh35 shadow-md bg-green-500 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("pink")} className="wh35 shadow-md bg-pink-500 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("orange")} className="wh35 shadow-md bg-orange-500 noshrink rounded-md"></div>
          <div onClick={(e) => setSelectedColor("blue")} className="wh35 shadow-md bg-blue-800 noshrink rounded-md"></div>
        </div>
      )}

      <div className="-mx-[14px] p-1  flex flex-col gap-2">
        <div className="flex wm  gap-1 of ofx  p-1">
          {[...photos].map((pic, index) => {
            return (
              <div key={pic.name + index} className="w150 rounded-xl noshrink h150 brs of flex fcy fcx ">
                <img className="wm hm fit" src={URL.createObjectURL(pic)} alt="" />
              </div>
            );
          })}
        </div>

        <div onClick={() => selectFile()}>
          <p>Photos/videos</p>
        </div>
        <input
          ref={fileInput}
          type="file"
          multiple
          onChange={(e) => setPhotos((prev) => [...prev, ...Array.from(e.target.files)])}
          accept="image/*, video/*"
          capture="environment"
          hidden
          name=""
          id=""
        />
        <div> Tag people</div>
        <div> Add location</div>
        <div> Feeling/activity</div>
        {!photos.length > 0 && <div> Create event</div>}
        {!photos.length > 0 && <div> Go live</div>}
      </div>
      <button className="bg-blue-600 white p-3 mt10 rounded-md b" onClick={handlePost}>
        POST
      </button>
    </>
  );
}
