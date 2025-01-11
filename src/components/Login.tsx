import React from "react";
import Header from "./Header";
import Background from "./Background";

const Login = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-3/12 bg-black opacity-90 p-12 rounded-lg shadow-lg">
          <h1 className="text-3xl p-4 text-white font-bold">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-full border rounded-md bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full border rounded-md bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="p-2 m-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75 w-full"
          >
            Sign In
          </button>
          <p className="p-2 text-white">
            New to Netflix?{" "}
            <span
              className="text-red-700 font-bold hover:cursor-pointer"
              onClick={() => {}}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Login;
