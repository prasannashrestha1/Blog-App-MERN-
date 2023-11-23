import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import Menu from './Menu.jsx';

function Navbar() {
  const user = true;
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!Menu);
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-slate-300">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to={"/"}>Blog Market</Link>
      </h1>

      <div className="flex justify-center items-center space-x-0">
        <input
          className="outline-none rounded-lg px-2"
          type="text"
          placeholder="Search a post"
        />

        <button>
          <BsSearch />
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <Link to={"/write"}>Write</Link>
        ) : (
          <h3 className="cursor-pointer text-slate-500">
            <Link to={"/login"}>Login</Link>
          </h3>
        )}
        {user ? 
        <div onClick={showMenu}>
            <p className="cursor-pointer relative">
         <FaBars />
       </p>
       {menu && <Menu />}
        </div>
       
         : (
          <h3 className="cursor-pointer text-slate-500">
            <Link to={"/register"}>Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg ">
        <p className="cursor-pointer relative">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
}

export default Navbar;
