import Community from "./../assets/images/comunity.png";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";

function SignupPage1() {
  const nav = useNavigate();
  return (
    <>
      <BackBtn></BackBtn>
      <h1>Join Facebook</h1>
      <img src={Community} alt="" />

      <p className="ml5">
        Create an account to connect with friends, family <br />
        and communities of people who share your <br />
        interests.
      </p>
      <button onClick={() => nav("/signup2")} className="blueBtn mt-5">
        Create new account
      </button>
      <button className="outlineBtn  ">Find my account</button>
    </>
  );
}

export default SignupPage1;
