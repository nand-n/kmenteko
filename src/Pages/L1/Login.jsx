import React from "react";
import { BsMicrosoft, BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { auth, loginUrl } from "../constants/urls";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    const data = {
      email,
      password,
    };
    e.preventDefault();

    try {
      const response = await axios.post(data);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        // setLogin();
        //
        const token = localStorage.getItem("token");
        console.log(token, "token");
        const authResponse = await axios.post(
          //   auth,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        // if(authResponse.status(200)){
        console.log(authResponse.status, "authStatus");
        // }
      } else {
        setErrorMessage("Wrong Credentials");
      }
    } catch (error) {
      setErrorMessage("Login Failed");
      console.log(error);
    }
  };
  return (
    <div className="relative bg-blue-50">
      <div className=" login-bg min-h-screen"></div>
      <div className="bg-white shadow-lg rounded-lg h-screen md:h-auto w-[100%] left-0 md:w-[50%] md:left-[25%] lg:w-[40%] lg:left-[30%] py-8 md:px-16 absolute md:top-20 top-0 px-12">
        <img src={""} alt="Menteko" className="h-16 mx-auto" />
        <div className="mt-8 flex flex-col items-start">
          <span className="text-md text-[#0F3A62]">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full focus:outline-none border-b border-[#D1D1D1]   focus:border-[#0f3a62]"
          />
        </div>
        <div className="mt-6 flex flex-col items-start">
          <span className="text-md text-[#0F3A62]">Password</span>
          <div className="flex justify-between w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full focus:outline-none border-b border-[#D1D1D1] focus:border-[#0f3a62]"
            />
            <button
              className="-ml-4 relative"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-center py-2 ">{errorMessage}</p>
        )}
        {/* <button
          onClick={handleLogin}
          className="w-full bg-[#0F3A62] mt-4 py-4 rounded-md text-white hover:bg-[#185792]"
        >
          Login
        </button> */}
        <div className="w-full bg-[#0F3A62] mt-4 py-4 rounded-md text-white hover:bg-[#185792] flex justify-center">
          <Link className="" to={"/mgmt/fishcage"}>
            Login
          </Link>
        </div>

        <button className="w-full mt-1 py-4 text-[#0F3A62] hover:underline">
          forgot password?
        </button>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex flex-1 items-center justify-between space-x-4 border hover:bg-[#d1d1d1] border-[#0F3A62] px-4">
            <span>
              <BsMicrosoft color="#0F3A62" />
            </span>
            <button className="py-2 text-[#0F3A62] font-medium">
              Microsoft
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-4 border hover:bg-[#d1d1d1] border-[#0F3A62] px-4">
            <span>
              <BsGoogle color="#0F3A62" />
            </span>
            <button className="py-2 text-[#0F3A62] font-medium">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
