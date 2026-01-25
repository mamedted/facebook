import { useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";

function SignupPage5() {
  const nav = useNavigate();
  const input = useRef();
  const [error, setError] = useState(false);
  const [number, setNumber] = useState("");

  useEffect(() => {
    input.current.focus();
  }, []);

  function next() {
    alert("Signing up with number is not availabe. Sign up with your email address.");
    // if (!number) {
    //   setError(true);
    // } else {
    //   nav("/signup7");
    // }
  }

  return (
    <>
      <BackBtn></BackBtn>
      <h1>What's your mobile number?</h1>
      <p className="subtitle">
        Enter the mobile number where you can be <br />
        contacted. No one will see this on your profile.
      </p>

      <input
        disabled
        ref={input}
        className={`inp !py-5 mt-2 ${error && "!border !border-red-500 placeholder-red-500"}`}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Mobile number"
        type="text"
        name=""
        id=""
      />
      {error && <p className={`text-red-500 text-sm mt-3 ml-1`}>Mobile number is required.</p>}
      <p className="text-sm text-gray-600 mt-5">
        You may receive WhatsApp and SMS notifications from us. <span className="text-blue-500 font-[500]">Learn more</span>
      </p>

      <button className="blueBtn mt-5" onClick={next}>
        Next
      </button>
      <button onClick={() => nav("/signup6")} className="transBtn mt-5 !text-gray-800 !border !border-gray-350">
        Sign up with email
      </button>
      <button className="outlineBtn  !border-0">Find my account</button>
    </>
  );
}

export default SignupPage5;
