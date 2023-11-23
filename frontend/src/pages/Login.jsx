import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { URL } from "../url";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await fetch(URL + "/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      });
      console.log("Login Successful");
      navigate('/');
    } catch (error) {
      setError(true);
      console.log(error)
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to={"/"}>Blog Market</Link>
        </h1>
        <h3 className="cursor-pointer text-slate-500">
          <Link to={"/register"}>Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[75vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left ">
            {" "}
            Login to your Account
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your Password"
          />
          <button
            onClick={handleLogin}
            className="w-full p-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 hover:text-slate-300 "
          >
            Login
          </button>
          {error && <h3 className="text-sm text-red-500">Something went Wrong</h3>}
          <div className="flex justify-center items-center space-x-4 ">
            <p>Dont have an Account?</p>
            <p className="text-blue-500 hover:text-blue-700">
              <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
