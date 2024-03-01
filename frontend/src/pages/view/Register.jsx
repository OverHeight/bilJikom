import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

  return (
    
    <div className="hero min-h-screen bg-info-content">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
          <button onClick={() => navigate("/index")} className="btn btn-outline btn-info">Confirm</button>
        </div>
      </form>
    </div>
  </div>
</div>


  )
}

export default Register