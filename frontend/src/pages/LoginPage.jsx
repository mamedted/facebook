import { useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import Icon from "./../assets/images/fb_lite.png";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "../components/LoginModal";

const api = import.meta.env.VITE_API;

function LoginPage() {
  const nav = useNavigate();
  const input1 = useRef();
  const input2 = useRef();
  const [errorType, setErrorType] = useState({
    heading: "",
    body: "",
    button1: "",
    button2: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!email) return input1.current.focus();
    if (!password) return input2.current.focus();

    fetch(`${api}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();
        switch (res.status) {
          case 404:
            setErrorType({
              heading: "No account found. Create a new account?",
              body: `It looks like ${email} isn't connected to an account. You can create a new account or try again.`,
              button1: {
                text: "TRY AGAIN",
                action() {
                  setErrorType({ heading: "" });
                },
              },
              button2: {
                text: "CREATE NEW ACCOUNT",
                action() {
                  nav("/signup2");
                },
              },
            });
            break;

          case 401:
            setErrorType({
              heading: "Incorrect Password",
              body: "The password you entered is incorrect. Please try again or get a code to log in.",
              button1: {
                text: "GET CODE",
                action() {
                  alert("Not available!");
                },
              },
              button2: {
                text: "OK",
                action() {
                  setErrorType({ heading: "" });
                },
              },
            });
            break;

          case 202:
            sessionStorage.setItem("user", JSON.stringify(data));
            nav("/setdp");
            break;

          case 200:
            sessionStorage.setItem("user", JSON.stringify(data));
            nav("/homepage");
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      {errorType.heading && <LoginModal errorType={errorType} setErrorType={setErrorType} />}

      <p className="text-center mt-[8%] text-sm text-gray-500">English (US) </p>
      <img onClick={() => nav("selectuser")} className="self-center border-2  rounded-full mt-[20%] mb-[20%] " src={Icon} width="60" alt="" />
      <input ref={input1} className="inp mb-2" placeholder="Email or mobile number" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input ref={input2} className="inp" placeholder="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="blueBtn mt-5" onClick={login}>
        Log in
      </button>
      <button className="transBtn">Forgot password</button>
      <button onClick={() => nav("/signup")} className="outlineBtn mt-auto ">
        Create new account
      </button>
    </>
  );
}

export default LoginPage;
