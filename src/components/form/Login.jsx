import React from "react";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-800 ">
      <div className=" flex flex-col justify-center">
        <form className="max-w-[400px] min-w-[360px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg ">
          <h2 className="text-4xl dark: text-white font-bold text-center">
            Login
          </h2>
          <div className="flex flex-col text-gray-400 py-2 text-left">
            <label htmlFor="Username">User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="text"
              name="username"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2 text-left">
            <label htmlFor="password ">Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="password"
              name="password"
            />
          </div>
          
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 rounded-lg text-white font-semibold">
            Login
          </button>
          <div className="flex justify-between text-gray-400 py-2 ">
            <p>Forgot Password?</p> 
            <Link to="/recover_password" className="text-teal-500">Recover Now</Link>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="font-thin">
              Don't have an account?
            </p>
            <Link to="/signup" className="underline text-teal-500">Create Account</Link>
          </div>
        </form>
      </div> 
    </div>
  );
};

export default Login;
