import { useEffect, useRef, useState } from "react";
import { ExitBtn } from "../buttons/Exit";
import { SettingBtn } from "../buttons/Setting";
import { useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API;

export function CreateStoryPage() {
  const nav = useNavigate();
  const inputSelect = useRef();
  let [photo, setPhoto] = useState(null);
  let [preview, setPreview] = useState(null);
  ("");
  useEffect(() => {
    selectFile();

    if (!photo) return setPreview(null);
    setPreview(URL.createObjectURL(photo));
  }, [photo]);

  function selectFile() {
    inputSelect.current.click();
  }

  async function handleShare() {
    const formdata = new FormData();
    formdata.append("image", photo);

    const res = await fetch(`${api}uploadStory`, {
      method: "POST",
      body: formdata,
      credentials: "include",
    });

    if (!res.ok) {
      alert("Something went wrong");
    }
    alert("Uploaded");
    nav("/homepage");
  }

  return (
    <>
      <div className="flex  -mx-[14px] -mt-[8px] fcy between px-3 py-2">
        <ExitBtn />
        <p className="b text-lg ">New story</p>
        <SettingBtn />
      </div>

      <input ref={inputSelect} onChange={(e) => setPhoto(e.target.files[0])} accept="image/*" type="file" hidden name="" id="" />

      <nav className="flex -mx-[14px] even p-2">
        <button onClick={selectFile} className="h80 w110 br br-lightgray rounded-xl">
          Photos
        </button>
        <div className="h80 w110 br br-lightgray rounded-xl"></div>
        <div className="h80 w110 br br-lightgray rounded-xl"></div>
      </nav>

      <div className="flex flex-col htp85 ">
        <div className=" mh550 of ">
          <img src={preview} className="" alt="" />
        </div>
        {preview && (
          <button onClick={handleShare} className="mt-auto mb-2 b bg-blue-600 white p-2 rounded-lg">
            SHARE NOW
          </button>
        )}
      </div>
    </>
  );
}
