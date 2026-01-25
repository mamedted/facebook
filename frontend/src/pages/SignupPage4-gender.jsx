import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { useStore } from "./useStore";

export default function SignupPage4() {
  const nav = useNavigate();
  const { gender, setGender } = useStore();
  const [error, showError] = useState(false);
  const [otherGender, showOtherGender] = useState(false);

  function selectGender(e) {
    setGender(e.target.value);
    showOtherGender(false);
    showError(false);
  }

  function next() {
    if (!gender) {
      showError(true);
    } else {
      nav("/signup5");
    }
  }
  return (
    <>
      <BackBtn></BackBtn>
      <h1>What's your gender?</h1>
      <p className="subtitle">You can choose who sees your gender on your profile later.</p>

      {error === true && <p className="border p-2 mb-2 rounded-md pl-5"> ⚠️ Please choose a gender option.</p>}

      <div className=" flex flex-col p-5 gap-6 border rounded-2xl">
        <div className="flex w-full justify-between">
          <p>Female</p>
          <input type="radio" onChange={(e) => selectGender(e)} value="female" className="w-500" name="gender" id="" />
        </div>

        <div className="flex w-full justify-between">
          <p>Male</p>
          <input type="radio" onChange={(e) => selectGender(e)} value="male" name="gender" id="" />
        </div>

        <div className="flex w-full justify-between ">
          <div>
            <p>More options</p>
            <p className="text-gray-400 text-[16px]">
              Select more options to choose another <br />
              gender or if you'd rather not say.
            </p>
          </div>
          <input type="radio" onChange={(e) => showOtherGender(true)} value="other" name="gender" id="" />
        </div>
      </div>

      {otherGender === true && (
        <div className="flex flex-colgap-6  rounded-2xl my-5">
          <input type="text" onChange={(e) => setGender(e.target.value)} className="inp w-full" placeholder="Gender (optional)" name="" id="" />
        </div>
      )}

      <button className="blueBtn mt-5" onClick={next}>
        Next
      </button>
      <button className="outlineBtn  !border-0">Find my account</button>
    </>
  );
}
