import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { inputContext } from "./InputProvider";
import { useStore } from "./useStore";
function SignupPage7() {
  const nav = useNavigate();
  const passwordField = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const { password, setPassword } = useStore();
  useEffect(() => {
    passwordField.current.focus();
  }, []);

  function validate(a) {
    if (!a) return "Password cannot be empty";
    if (!/\d/.test(a)) return "It must contain at least one number.";
    if (a.length < 6) return "This password is too short. Create a longer password with at least six letters and numbers.";
    return null;
  }

  function next() {
    const error = validate(password);

    if (error) {
      setErrorMessage(error);
      return;
    }
    nav("/signup8");
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>Create a password</h1>
      <p className="subtitle">
        Create a password with at least 6 letters or <br />
        numbers. It should be something others can't <br />
        guess
      </p>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        ref={passwordField}
        className={`inp !py-5 mt-2 ${errorMessage && "!border-[1.2px] !border-red-500 placeholder-red-500"}`}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMessage("");
        }}
        value={password}
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        id="password"
      />
      {errorMessage && <p className={`text-red-500 text-sm mt-3 ml-1`}>{errorMessage}</p>}

      <button className="blueBtn mt-5" onClick={next}>
        Next
      </button>

      <button className="outlineBtn  !border-0">Find my account</button>
    </>
  );
}

export default SignupPage7;
