import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center p-3 mx-10">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex gap-5 flex-wrap">
            <span className="text-slate-500">Gar-Dera</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-8 justify-between">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline font-bold text-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline font-bold text-lg">
              About
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline font-bold text-lg">
              Contact
            </li>
          </Link>
        </ul>
        <Link to="/signin">
          <p className="text-slate-700 hover:underline font-bold text-lg">
            Sign-In
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
