import Header from "./Header";
import { useRef, useState } from "react";
import Background from "./Background";
import { checkValidData } from "../utils/FormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

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
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onSubmitForm = () => {
    // Perform form validation here
    //...
    const validation = checkValidData(
      email.current?.value ?? "",
      password.current?.value ?? ""
    );
    setErrorMessage(validation ? validation : "");

    if (!validation == null) return;
    // If validation passes, handle the form submission here
    if (isSignUpEnable) {
      // Perform validation for Sign Up Page

      createUserWithEmailAndPassword(
        auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: name.current?.value ?? "",
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Perform validation for Sign In Page
      signInWithEmailAndPassword(
        auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          className="w-full md:w-3/12 bg-black opacity-90 p-12 rounded-lg shadow-lg"
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
