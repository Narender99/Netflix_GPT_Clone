import React, { useRef, useState } from "react";
import Header from "./Header";
import { validator } from "../utils/validator";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInFormEnabled, setIsSignInFormEnabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignInFormEnabled(!isSignInFormEnabled);
  };

  const handleButtonClicked = () => {
    const message = validator(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);

    if (!isSignInFormEnabled) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          dispatch(addUser( userCredential?.user,
          ));
          console.log("User created successfully:", userCredential);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current?.value,
        password.current?.value)
        .then((userCredential) => {
          console.log("User signed in successfully:", userCredential);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="Netflix Background Image"
        />
      </div>
      <form
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-4xl">
          {isSignInFormEnabled ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFormEnabled && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
        ></input>
        {errorMessage && (
          <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClicked}
        >
          {isSignInFormEnabled ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 cursor-pointer" onClick={handleSignInForm}>
          {isSignInFormEnabled
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
