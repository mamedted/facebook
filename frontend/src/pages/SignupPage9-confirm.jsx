import { useContext, useEffect, useRef, useState } from "react";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { useStore } from "./useStore";
function SignupPage9() {
  const nav = useNavigate();
  const { email } = useStore();

  return (
    <>
      <BackBtn></BackBtn>
      <h1>Confirm your email address</h1>
      <p className="subtitle">
        We will send an email a code to your email address <span className="font-bold">{email}</span>
      </p>

      <button className="blueBtn mt-5" onClick={() => nav("/signup10")}>
        Next
      </button>

      <button className="outlineBtn !border-0">Find my account</button>
    </>
  );
}

export default SignupPage9;
