import React, { useRef, useState } from "react";
import Header from "./Header";
import Background from "./Background";
import { checkValidData } from "../utils/FormValidation";

const Login = () => {
  const [formTitleText, setTitleText] = useState<string>("Sign In");
  const [isSignUpEnable, setSignUpEnable] = useState<boolean>(false);
  const [signUpOnBoardingText, setSignUpOnBoardingText] =
    useState<string>("New to Netflix?");
  const [errorMessage, setErrorMessage] = useState<string>("");

  //  ref will eventually reference an HTML input element (i.e., the actual DOM node).
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const onSubmitForm = () => {
    // Perform form validation here
    //...
    const validation = checkValidData(
      email.current?.value ?? "",
      password.current?.value ?? ""
    );
    setErrorMessage(validation ? validation : "");
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          className="w-3/12 bg-black opacity-90 p-12 rounded-lg shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl p-4 text-white font-bold">{formTitleText}</h1>
          {isSignUpEnable && (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="p-2 m-2 w-full border rounded-md bg-gray-700 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-full border rounded-md bg-gray-700 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full border rounded-md bg-gray-700 text-white"
          />
          <button
            onClick={onSubmitForm}
            type="submit"
            className="p-2 m-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75 w-full"
          >
            {formTitleText}
          </button>
          <p className="p-2 text-red-700 font-serif">{errorMessage ?? ""}</p>
          <p className="p-2 text-white">
            {signUpOnBoardingText}{" "}
            {!isSignUpEnable && (
              <span
                className="text-red-700 font-bold hover:cursor-pointer"
                onClick={() => {
                  setTitleText("Sign Up");
                  setSignUpEnable(true);
                  setSignUpOnBoardingText("");
                  setErrorMessage("");
                }}
              >
                Sign Up
              </span>
            )}
          </p>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Login;
