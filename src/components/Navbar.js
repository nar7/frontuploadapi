import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <div>
      <div className=" flex justify-between  py-4 px-4  md:px-0 items-center ">
        <Link to={"/"} className=" font-bold brand text-4xl">
          Galerie
        </Link>
        <ul className="flex space-x-6 text-blue-500">
          <Link to={"/"}>Acceuil</Link>
          <Link to={"/upload"}>Ajouter</Link>
        </ul>
      </div>
      <div className=" border-b shadow bg-red-800 w-full"></div>
    </div>
  );
}

export default Navbar;
