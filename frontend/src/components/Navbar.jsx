import React from "react";

import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <Link to="/"></Link>
      <Link to="/login" className="bg-red-500 text-center w-35 h-8 rounded-2xl"> Login </Link>
      <Link to="/registration" className="bg-red-500 text-center w-35 h-8 rounded-2xl"> Registration</Link>
    </>
  );
}

export default Navbar;
