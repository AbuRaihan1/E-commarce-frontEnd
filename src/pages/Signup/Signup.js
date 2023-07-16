import React, { useState } from "react";
import signup from "../../Assets/images/register.png";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setvisible] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = () => {
    console.log("fff");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="shadow-2xl m-12 rounded-2xl p-4 gap-4 bg-gray-100">
      <h2 className="text-3xl text-center font-bold pt-4">
        Welcome to E-commarce
      </h2>
      <div className="lg:flex">
        <img src={signup} alt="loginImage" className="w-full lg:w-1/2" />
        <form action="" className="w-full">
          <div className="mt-20">
            <div className="space-y-4 lg:w-3/4 w-full">
              <input
                type="text"
                className="input w-full appearance-none border p-2 rounded-md border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none"
                autoComplete="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
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
                  type={visible ? "text" : "password"}
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

              <div className="flex items-center  gap-2 text-primary">
                <span className="inline-block h-12 w-12 rounded-full border overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      className="h-full w-full rounded-full object-cover"
                      alt="avatar"
                    />
                  ) : (
                    <RxAvatar className="h-12 w-12" />
                  )}
                </span>
                <label htmlFor="file-input">
                  <span className="cursor-pointer font-bold ">Upload a photo</span>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    id="file-input"
                    class="custom-file-input"
                    name="avatar"
                    className="sr-only"
                  />
                </label>
              </div>

              <button className="block btn primary-button w-full">
                Sign up
              </button>

              <div>
                <p className="text-center w-full">
                  Already Have an account?{" "}
                  <Link to="/login" className="text-primary font-bold">
                    Login here
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
