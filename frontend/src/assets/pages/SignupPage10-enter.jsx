import { useContext, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_API;

import { useStore } from "./useStore";
function SignupPage10() {
  const nav = useNavigate();
  const { code, setCode, firstname, lastname, gender, birthday, email, password, reset } = useStore();
  const userdata = { firstname, lastname, gender, birthday, email, password };
  const [error, setError] = useState("");

  function validate(a) {
    if (!a) return "Enter the confirmation code";
    if (a.length < 5) return "Code is too short";
    if (a !== "12345") return "Incorrect confirmation code " + a;
    return null;
  }

  function next() {
    const err = validate(code);
    if (err) {
      setError(err);
      return;
    }

    fetch(`${api}send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data.trim() === "SUCCESS") {
          alert("Account created succesfully");
          // nav("/");
          // reset();
        } else {
          alert("Something is wrong");
        }
      });
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>Enter the confirmation code</h1>
      <p className="subtitle">
        To confirm your account, enter the 5-digit code <br />
        we sent via email to <span>{email}</span>
      </p>
      <label htmlFor="codes" className="sr-only">
        Code
      </label>
      <input
        className={`inp !py-5 mt-2 ${error && "!border-[1.2px] !border-red-500 placeholder-red-500"}`}
        onChange={(e) => {
          setCode(e.target.value);
          setError("");
        }}
        value={code}
        placeholder="Confirmation code"
        type="text"
        inputMode="numeric"
        id="code"
      />
      {error && <p className={`text-red-500 text-sm mt-3 ml-1`}>{error}</p>}

      <button className="blueBtn mt-5" onClick={next}>
        Next
      </button>

      <button className="blueBtn !bg-transparent !border   !text-black mt-3 !border-gray-300">I didn't get the code</button>
    </>
  );
}

export default SignupPage10;
