export function LoginModal({ errorType }) {
  return (
    <>
      <div className="absolute  inset-0 w-full h-full bg-gray-800/60 z-10 flex flex-row items-center justify-center">
        <div className="w-[90%] bg-white p-4 flex flex-col items-center  ">
          <p className="font-[700] text-xl text-center mx-4 leading-tight">
            {errorType.heading}
          </p>
          <p className="mt-5 ml-4 max-w-xs ">{errorType.body}</p>
          <nav className="flex flew-row  mt-8 gap-5  right-4 relative self-end font-[400]   ">
            <button
              className="text-red-500 font-[500]"
              onClick={() => errorType.button1.action()}
            >
              {errorType.button1.text}
            </button>
            <button
              className="text-blue-500 font-[500] "
              onClick={() => errorType.button2.action()}
            >
              {errorType.button2.text}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
