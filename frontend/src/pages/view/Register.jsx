import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseRegister } from "../../API/AuthAPI";

const Register = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setPayload({ ...payload, [input.name]: input.value });
  };

  const handleSubmit = () => {
    const response = UseRegister();
    console.log(response.data);
  };

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
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Ketik Namamu"
                name="nama"
                onChange={handleChange}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
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
                type="password"
                placeholder="Type here"
                name="password"
                onChange={handleChange}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
