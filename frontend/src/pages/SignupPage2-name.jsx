import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { inputContext } from "./InputProvider";
import { useStore } from "./useStore";

function SignupPage2() {
  const nav = useNavigate();
  const { firstname, setFirstname, lastname, setLastname } = useStore();

  const fn = useRef(null);
  const ln = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState({ firstname: false, lastname: false });

  function validate(a, b = "Name") {
    if (!a) return b + " cannot be empty.";
    if (/^\d{3,}$/.test(a)) return "It looks like you entered a mobile number or email.";
    if (/\d/.test(a)) return "Your name cannot have numbers.";
    if (!/[a-zA-Z]{2}/.test(a)) return "Names on facebook can't be too short. Enter a first and last name with at least 2 letters";
    if (!/^[a-zA-Z-' .?]+$/.test(a)) return "This name has certain characters that aren't allowed";
    return null;
  }

  useEffect(() => {
    fn.current.focus();
  }, []);

  function nextBtn() {
    setError({ firstname: false, lastname: false });
    if (!firstname && !lastname) {
      setErrorMessage("Please enter your first name and last name.");
      setError({ firstname: true, lastname: true });
      return;
    }
    const err = validate(firstname, "First name");
    const err2 = validate(lastname, "Last name");
    if (err) {
      fn.current.focus();
      setError((prev) => ({ ...prev, firstname: true }));
      setErrorMessage(err);
      return;
    }
    if (err2) {
      ln.current.focus();
      setError((prev) => ({ ...prev, lastname: true }));
      setErrorMessage(err2);
      return;
    }
    nav("/signup3");
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>What's your name</h1>
      <p className="subtitle">Enter your name you use in real life</p>

      <div className="flex  gap-5">
        <label htmlFor="firstname" className="sr-only">
          First name
        </label>

        <input
          ref={fn}
          onChange={(e) => {
            setFirstname(e.target.value);
            setErrorMessage("");
            setError((prev) => ({ ...prev, firstname: false }));
          }}
          className={`inp w-[50%] ${error.firstname && " !border-[1.2px] !border-red-500 placeholder-red-500"}`}
          placeholder="First name"
          type="text"
          id="firstname"
          value={firstname}
        />
        <label htmlFor="lastname" className="sr-only">
          Last name
        </label>
        <input
          ref={ln}
          onChange={(e) => {
            setLastname(e.target.value);
            setErrorMessage("");
            setError((prev) => ({ ...prev, lastname: false }));
          }}
          className={`inp w-[50%] ${error.lastname && "!border-[1.2px] !border-red-500 placeholder-red-500"}`}
          placeholder="Last name"
          type="text"
          id="lastname"
          value={lastname}
        />
      </div>

      {errorMessage && <p className="text-red-500 text-sm mt-1 ml-1">{errorMessage}</p>}

      <button className="blueBtn mt-5" onClick={nextBtn}>
        Next
      </button>
      <button className="outlineBtn  !border-0">Find my account</button>
    </>
  );
}

export default SignupPage2;
