import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UseLogin } from "../../API/AuthAPI";

const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState();
  console.log(status);
  console.log(credential);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setCredential({
      ...credential,
      [input.name]: input.value,
    });
  };

  const handleSubmit = () => {
    const response = UseLogin(credential);
    setStatus(response);
    if (status === 200) {
      navigate("/home");
    } else {
      console.log("error");
    }
  };

  // const login = async () => {
  //   useEffect(() => {
  //     axios.post("http://localhost:3000/api/login", credential)
  //   })
  // }

  return (
    <div className="hero min-h-screen bg-info-content">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {status === 404 ? (
              <div className="container">email atau password salah</div>
            ) : null}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="email"
                onChange={handleChange}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="password"
                onChange={handleChange}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <label className="label">
                <a
                  onClick={() => navigate("/register")}
                  className="label-text-alt font-medium link link-hover"
                >
                  register?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
