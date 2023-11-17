import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Navbar() {
const user = false;

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to={"/"}>Blog Market</Link>
      </h1>

      <div className="flex justify-center items-center space-x-0">
       <input className="outline-none rounded-lg px-2" type="text" placeholder="Search a post" />
       
        <button >
          <BsSearch />
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? <Link to={'/write'}>Write</Link> :
        <h3 className="cursor-pointer text-slate-500">
          <Link to={"/login"}>Login</Link>
        </h3>}
        {user ?<Link to={'/profile'}>Profile</Link> :
        <h3 className="cursor-pointer text-slate-500">
          <Link to={"/register"}>Register</Link>
        </h3>
}

      </div>
    </div>
  );
}

export default Navbar;
