import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { useStore } from "./useStore";

function SignupPage3() {
  const nav = useNavigate();
  const bd = useRef();
  const { birthday, setBirthday } = useStore();
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function computeAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  useEffect(() => {
    bd.current.click();
  }, []);

  function nextBtn() {
    if (computeAge(birthday) < 1) {
      setError("101");
      setErrorMessage("Invalid Age");
    } else {
      nav("/signup4");
    }
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>What's your birthday</h1>
      <p className="subtitle">
        Choose your date of birth. You can always make this private later. <span className="text-blue-500">Why do I need to provide my birthday?</span>
      </p>

      <div className="flex justify-center">
        <input
          ref={bd}
          onChange={(e) => setBirthday(e.target.value)}
          className={`inp w-[95%] ${error && "!border-red-500 placeholder-red-500"}`}
          placeholder="First name"
          value={birthday}
          type="date"
          name=""
          id=""
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1 ml-1">{errorMessage}</p>}

      <button className="blueBtn mt-5" onClick={nextBtn}>
        Next
      </button>
      <button className="outlineBtn !border-0">Find my account</button>
    </>
  );
}

export default SignupPage3;
