import React, { useState } from "react";
import login from "../../Assets/images/signup.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(true);
  return (
    <div className="shadow-2xl m-12 rounded-2xl p-4 gap-4 bg-gray-100">
      <h2 className="text-3xl text-center font-bold pt-4">
        Welcome back to E-commarce
      </h2>
      <div className="lg:flex">
        <img src={login} alt="loginImage" className="w-full lg:w-1/2" />
        <form action="" className="w-full">
          <div className="mt-20">
            <div className="space-y-4 lg:w-3/4 w-full">
              <input
                type="text"
                className="input w-full appearance-none border p-2 rounded-md border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none"
                autoComplete="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />

              <div className="relative">
                <input
                  type={visible ? 'text' : 'password'}
                  className="input w-full appearance-none border p-2 rounded-md border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-4 top-3 cursor-pointer"
                    size={25}
                    onClick={() => setvisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-4 top-3 cursor-pointer"
                    size={25}
                    onClick={() => setvisible(true)}
                  />
                )}
              </div>
              <p className="text-primary font-bold cursor-pointer">
                Forgot password?
              </p>
              <button className="block btn primary-button w-full">Login</button>

              <div>
                <p className="text-center w-full">
                  New to E-commarce?{" "}
                  <Link to="/signup" className="text-primary font-bold">
                    Create new account
                  </Link>
                </p>
                <div className="divider w-full">OR</div>
                <div>
                  <button className="btn outline-button w-full text-transform: capitalize;">
                    {" "}
                    <FcGoogle /> Continue with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
