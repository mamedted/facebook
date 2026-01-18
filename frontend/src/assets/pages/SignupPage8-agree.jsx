import Community from "./../images/comunity.png";
import { BackBtn } from "./../components/BackBtn";
import { useNavigate } from "react-router-dom";

function SignupPage8() {
  const nav = useNavigate();
  return (
    <>
      <BackBtn></BackBtn>
      <h1>Agree to Facebook's terms and policies</h1>

      <p className="pl-5 text-sm mt-5 text-gray-900 tracking-wider  ">
        People who use our service may have uploaded <br />
        your contact information to Facebook.
        <span className="text-blue-500">
          Learn <br />
          more
        </span>
        <br />
        <br />
        By tapping <span className="font-bold">I agree</span>, you agree to create an <br />
        account and to Facebook's{" "}
        <span className="text-blue-500">
          terms, Privacy Policy <br />
        </span>
        and <span className="text-blue-500">Cookies Policy</span>
        <br />
        <br />
        The <span className="text-blue-500">Privacy Policy</span> describe the ways we can use <br />
        the information we collect when you create an <br />
        account. For example, we use this information to <br />
        provide, personalise and improve our products, <br /> including adds.
      </p>
      <button onClick={() => nav("/signup9")} className="blueBtn mt-5">
        I agree
      </button>
      <button className="outlineBtn  bottom-5">Find my account</button>
    </>
  );
}

export default SignupPage8;
