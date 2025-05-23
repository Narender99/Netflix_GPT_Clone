import React, {useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFormEnabled, setIsSignInFormEnabled] = useState(true);

  const handleSignInForm = () => {
    setIsSignInFormEnabled(!isSignInFormEnabled);
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
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg">
        <h1 className="font-bold text-4xl">
          {isSignInFormEnabled ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFormEnabled && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg border-white"
        ></input>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
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
