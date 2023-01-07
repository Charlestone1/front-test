import React from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-800 ">
      <div className=" flex flex-col justify-center">
        <form className="w-full mx-auto bg-gray-900 p-6 px-6 rounded-lg ">
            <h2 className="text-4xl dark: text-white font-bold text-center">
            Sign Up
            </h2>
            <div className='flex justify-between flex-col sm:flex-row sm:mr-2'>
                      
                <div className="flex flex-col text-gray-400 p-2 text-left w-full md:w-11/12">
                    <label htmlFor="first-name">First Name</label>
                    <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    name="firstName"
                    />
                </div>
                <div className="flex flex-col text-gray-400 p-2 text-left w-full md:w-11/12 ">
                    <label htmlFor="first-name">Last Name</label>
                    <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    name="lastName"
                    />
                </div>
            </div>
            
            <div className='flex justify-between flex-col md:flex-row'>
                      
                <div className="flex flex-col text-gray-400 p-2 text-left md:w-11/12 sm: w-full" >
                    <label htmlFor="first-name">Email</label>
                    <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
                    type="email"
                    name="email"
                    />
                </div>
                <div className="flex flex-col text-gray-400 p-2 text-left md:w-11/12 sm: w-full">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
                    type="text"
                    name="phoneNumber"
                    />
                </div>
            </div>
          
            <div className="flex flex-col text-gray-400 py-2 text-left">
                <label htmlFor="password ">Password</label>
                <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
                type="password"
                name="password"
                />
            </div>
            <div className="flex flex-col text-gray-400 py-2 text-left">
                <label htmlFor="confirm-password ">Confirm Password</label>
                <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
                type="password"
                name="password"
                />
            </div>
            <div className="flex flex-col text-gray-400 py-1 text-left">
                <p><input className='mr-3'
                type="checkbox"
                name="checkbox"
                />Terms & condition</p>
                
            </div>
          
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 rounded-lg text-white font-semibold">
                Sign Up
            </button>
            <div className="flex justify-between text-gray-400 p-2 ">
                <p className="font-thin">
                Already have an account?
                </p>
                <Link to="/" className="underline text-teal-500">Login</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp