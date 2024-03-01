import React from 'react'
import { useNavigate } from "react-router-dom";
import catpic from "../../assets/cat_logo.jpg"

const Navbar = () => {

  const navigate = useNavigate()

  return (

    <div className="navbar bg-base-100 flex items-center">
      <div className="avatar px-8">
        <div className="w-16 rounded-full">
          <img src={catpic} />
        </div>
      </div>
      <div className="button px-3">
        <a onClick={() => navigate("/home")} className="btn btn-ghost text-xl rounded-full">Beranda</a>
      </div>
      <div className="flex-1">
        <button onClick={() => navigate("/album")} className="btn btn-ghost text-xl rounded-full">Album</button>
        <button onClick={() => navigate("/")} className="btn btn-ghost text-xl rounded-full">Buat</button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control place-items-center">
          <input type="text" placeholder="Search" className="input input-bordered w-96 rounded-full" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-10 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80">
            <div className='form-control'>
              <a className="btn btn-outline">Profile</a>
            </div>
            <div className='form-control pt-3'>
              <a className="btn btn-outline">settings</a>
            </div>
            <div className='form-control pt-3'>
              <button onClick={() => navigate("/index")} className="btn btn-outline btn-error">Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar