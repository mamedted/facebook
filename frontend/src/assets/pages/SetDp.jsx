import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav1 } from "../components/Nav1";
export function SetDp() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) return <Navigate to="/" />;
  const { firstname, lastname } = user;

  //
  const file = useRef();
  let [photo, setPhoto] = useState(null);
  let [preview, setPreview] = useState(null);

  function chooseFile() {
    file.current.click();
  }

  useEffect(() => {
    if (!photo) return setPreview(null);
    const dp = URL.createObjectURL(photo);
    setPreview(dp);
  }, [photo]);

  function send() {
    if (!photo) return alert("Choose a picture first");
    let formdata = new FormData();
    formdata.append("dp", photo);

    fetch("https://192.168.1.186:4000/uploadDp", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
  }

  return (
    <>
      <Header />
      <Nav1 />
      <h1 className="tc mt20">Add your profile picture</h1>
      <p className="tc">{`Welcome ${firstname}, set up your profile picture so that your friend can easily recognize you.`}</p>
      <div onClick={chooseFile} className="w250 h250 br rounded self-center flex fcx of mt100">
        {preview && <img className="wm hm fit" src={preview}></img>}
        {!photo && (
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="gray" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
          </svg>
        )}
        <input hidden ref={file} onChange={(e) => setPhoto(e.target.files[0])} type="file" accept="image/*" name="" id="" />
      </div>

      <nav className="flex bt50 between">
        <button className="blutBtn">Skip</button>
        <button className="blueBtn" onClick={send}>
          Next
        </button>
      </nav>
    </>
  );
}
