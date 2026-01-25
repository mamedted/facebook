import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { inputContext } from "./InputProvider";
import { useStore } from "./useStore";
function SignupPage6() {
  const emailField = useRef();
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { email, setEmail } = useStore();

  useEffect(() => {
    emailField.current.focus();
  }, []);

  function validate(a) {
    if (!a) return "Email is required";
    if (!/^[a-zA-Z0-9-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}(\.[a-z]{2,3})?$/.test(email)) return "Invalid email address";
    return null;
  }

  function next() {
    const error = validate(email);
    if (error) {
      setErrorMessage(error);
      return;
    }
    nav("/signup7");
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>What's your email?</h1>
      <p className="subtitle">
        Enter the email where you can be contacted. No <br />
        one will see this on your profile.
      </p>

      <input
        ref={emailField}
        className={`inp !py-5 mt-2 ${errorMessage && "!border-[1.5px] !border-red-500 placeholder-red-500"}`}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorMessage("");
        }}
        placeholder="Email"
        type="email"
        value={email}
      />
      {errorMessage && <p className={`text-red-500 text-sm mt-3 ml-1`}>{errorMessage}</p>}
      <p className="text-sm text-gray-600 mt-5">
        You'll also receive emails from us and can opt out anytime. <span className="text-blue-500 font-[500]">Learn more</span>
      </p>

      <button className="blueBtn mt-5" onClick={next}>
        Next
      </button>
      <button onClick={() => nav("/signup5")} className="transBtn mt-5 !text-gray-800 !border !border-gray-350">
        Sign up with mobile number
      </button>
      <button className="outlineBtn  !border-0">Find my account</button>
    </>
  );
}

export default SignupPage6;
